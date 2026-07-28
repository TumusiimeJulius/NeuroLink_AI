// AI Tutor Engine - Dynamic Socratic Tutorials & Live Gemini API
import { state } from '../state.js';
import { CONCEPT_LABELS, getActiveSubjectName } from './ml-engine.js';
import { getSubjectConfig } from '../data/subjects.js';

export let tutorChatHistory = [
  {
    sender: "tutor",
    text: "Hello! I am your NeuroLink AI Socratic Tutor. I have analyzed your Learning Twin and I'm here to help you master your studies! Ask me any questions, or click on a suggested question below.",
    timestamp: Date.now()
  }
];

export function clearChatHistory() {
  const subjectName = getActiveSubjectName();
  const nextConcept = state.learningTwin.recommendedNextStep?.concept || "variables";
  tutorChatHistory = [
    {
      sender: "tutor",
      text: `Hello ${state.user ? state.user.name : "there"}! I'm here to help you study **${subjectName}**. I see we are currently working on mastering **${CONCEPT_LABELS[nextConcept] || "foundations"}**. Ask me to explain a concept, show you an example, or guide you through a practice problem!`,
      timestamp: Date.now()
    }
  ];
}

/**
 * Handles sending a message to the AI Tutor and returning the response.
 */
export async function sendChatMessage(userMessage) {
  // Add user message to history
  tutorChatHistory.push({
    sender: "user",
    text: userMessage,
    timestamp: Date.now()
  });

  const apiKey = state.settings.geminiApiKey;
  
  if (apiKey && apiKey.trim() !== "") {
    try {
      return await getGeminiResponse(userMessage, apiKey);
    } catch (e) {
      console.error("Gemini API error, falling back to offline tutor", e);
      const fallbackResponse = getOfflineResponse(userMessage);
      tutorChatHistory.push({
        sender: "tutor",
        text: `*(API Connection Error - Offline Tutor fallback)*\n\n${fallbackResponse}`,
        timestamp: Date.now()
      });
      return fallbackResponse;
    }
  } else {
    // Simulate thinking delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const response = getOfflineResponse(userMessage);
        tutorChatHistory.push({
          sender: "tutor",
          text: response,
          timestamp: Date.now()
        });
        resolve(response);
      }, 700);
    });
  }
}

/**
 * Sends request to Gemini 2.5 Flash API client-side with full Learning Twin context
 */
async function getGeminiResponse(userMessage, apiKey) {
  const twin = state.learningTwin;
  const user = state.user;
  const config = getSubjectConfig(twin.subjectId);
  const subjectName = config.name;
  
  // Format learning twin stats for context
  const masterySummary = Object.entries(twin.topicsMastery)
    .map(([c, val]) => `- ${config.conceptLabels[c] || c}: ${Math.round(val * 100)}%`)
    .join("\n");
    
  const gapsList = twin.gaps.map(g => `- [${g.type}] ${g.message}`).join("\n") || "None detected yet.";

  // Build a strong Socratic system prompt
  const systemPrompt = `You are NeuroLink AI Socratic Tutor, an adaptive learning coach.
The student you are teaching is named "${user.name}".
Their learning goal is: "${user.learningGoal}".
Subject they are studying: "${subjectName}".
Their current overall mastery of "${subjectName}": ${twin.overallMastery}%.
Their preferred learning style: "${user.learningStyle}" (examples_first, short_explanations, detailed_explanations, practice_first).
Current topic: "${config.conceptLabels[twin.recommendedNextStep?.concept] || "foundations"}".

Student Learning Twin State for "${subjectName}":
${masterySummary}

Detected Knowledge Gaps / Misconceptions:
${gapsList}

INSTRUCTIONS FOR TUTORING:
1. Be encouraging, warm, and highly analytical.
2. Use SOCRATIC METHOD: Do NOT just give direct answers or write out complete solutions immediately. Ask guiding questions, break problems down, and point out logical errors.
3. Tailor explanations to their learning style:
   - 'examples_first': Provide concrete examples (code blocks for coding, case studies for humanities, equations for math) immediately, then explain how they work line by line.
   - 'short_explanations': Keep paragraphs under 3 sentences, use clear bullet points.
   - 'detailed_explanations': Walk through concepts deeply, explaining 'why' and core theory.
   - 'practice_first': Challenge them with a quick practice question first.
4. Render code snippets in Markdown using standard language tags (e.g., \`\`\`python, \`\`\`javascript, \`\`\`sql, \`\`\`html) or LaTeX for mathematical equations.
5. If the student asks you to solve their practice question, guide them step-by-step rather than copying the answer.
6. Keep replies concise and easy to read.`;

  // Build message history with strictly alternating roles starting with "user"
  const contents = [];
  let expectedRole = "user";
  
  // Find first user message to base alternating history from
  const startIndex = tutorChatHistory.findIndex(chat => chat.sender === "user");
  if (startIndex !== -1) {
    for (let i = startIndex; i < tutorChatHistory.length; i++) {
      const chat = tutorChatHistory[i];
      const role = chat.sender === "user" ? "user" : "model";
      if (role === expectedRole) {
        contents.push({
          role: role,
          parts: [{ text: chat.text }]
        });
        expectedRole = expectedRole === "user" ? "model" : "user";
      }
    }
  }

  // Keep last 6 alternating messages for context
  let slicedContents = contents.slice(-6);
  if (slicedContents.length > 0 && slicedContents[0].role === "model") {
    slicedContents.shift();
  }

  // Fallback to the current user message if no alternating history was built
  if (slicedContents.length === 0) {
    slicedContents = [{
      role: "user",
      parts: [{ text: userMessage }]
    }];
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contents: slicedContents,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 800
      }
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}`);
  }

  const data = await response.json();
  const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!replyText) {
    throw new Error("Empty response from Gemini API");
  }

  return replyText;
}

/**
 * Local offline rule-based responder that yields dynamic, procedural learning responses
 */
function getOfflineResponse(message) {
  const msg = message.toLowerCase();
  const twin = state.learningTwin;
  const config = getSubjectConfig(twin.subjectId);
  const style = state.user?.learningStyle || "examples_first";

  // Identify if they mentioned one of the active subject's concepts
  let matchedConcept = null;
  config.concepts.forEach(c => {
    const label = config.conceptLabels[c].toLowerCase();
    if (msg.includes(c) || msg.includes(label.split(" ")[0]) || msg.includes(label.split("&")[0].trim())) {
      matchedConcept = c;
    }
  });

  // If a concept is matched, generate a dynamic response based on the subject configuration!
  if (matchedConcept) {
    return generateDynamicOfflineResponse(twin.subjectId, matchedConcept, style);
  }

  // Greeting
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return `Hello! How can I assist you with **${config.name}** today?
We can discuss any concept in your path (such as ${config.concepts.map(c => config.conceptLabels[c]).slice(0, 3).join(', ')}) or check out a quick practice problem. What sounds best?`;
  }
  
  if (msg.includes("help") || msg.includes("what is my path") || msg.includes("next step")) {
    const nextTopic = twin.recommendedNextStep?.concept || config.concepts[0];
    return `Looking at your Learning Twin, your next recommendation is to focus on **${config.conceptLabels[nextTopic]}**. 
Would you like me to explain this concept, show you an example, or quiz you?`;
  }

  // General fallback Socratic
  const targetConcept = twin.recommendedNextStep?.concept || config.concepts[0];
  const targetLabel = config.conceptLabels[targetConcept];
  return `That's an interesting question! To help you think about this within **${config.name}**, let's look at **${targetLabel}**. 
What is your current understanding of how this concept functions, or are you trying to solve a specific exercise? Share your thoughts and we can break it down step-by-step!`;
}

/**
 * Generates an offline Socratic tutor explanation on-the-fly for any subject and concept.
 */
function generateDynamicOfflineResponse(subjectId, concept, style) {
  const config = getSubjectConfig(subjectId);
  const label = config.conceptLabels[concept];
  const desc = config.conceptDescriptions[concept];
  const isCoding = config.isCoding;

  const conceptCodeSnippet = getDynamicSnippet(subjectId, concept);
  const question = `Socratic Question: Based on this description, how would you apply **${label}** to solve a real-world problem or structure? Try describing it in a sentence, or type code!`;

  let explanation = `Let's discuss **${label}** in **${config.name}**.\n\n`;
  explanation += `**Core Concept**: ${desc}\n\n`;

  if (style === "examples_first") {
    explanation = `Here is an example illustrating **${label}**:\n\n${conceptCodeSnippet}\n\n`;
    explanation += `**How it works**:\n- In ${config.name}, ${label} is used to manage structural relationships.\n- ${desc}\n\n`;
  } else if (style === "short_explanations") {
    explanation = `**${label} Key Takeaways**:\n- **Purpose**: ${desc}\n- **Implementation**: Utilizes standard syntax and structures in ${config.name}.\n\n${conceptCodeSnippet}\n\n`;
  } else if (style === "practice_first") {
    explanation = `Before I explain, let's test your intuition. How would you solve this basic concept of **${label}**?\n\n*Recall:* ${desc}\n\n`;
  }

  if (style !== "practice_first") {
    explanation += `${question}`;
  } else {
    explanation += `What do you think is the main outcome of running this? \n\n${conceptCodeSnippet}`;
  }

  return explanation;
}

/**
 * Yields a dynamic code/text example for any subject & concept
 */
function getDynamicSnippet(subjectId, concept) {
  // Pre-compiled snippet lookups
  if (subjectId === "python" && concept === "variables") {
    return "```python\nx = 10\ny = \"Sarah\"\nprint(x * 2)  # Prints 20\n```";
  }
  if (subjectId === "python" && concept === "loops") {
    return "```python\nfor i in range(3):\n    print(f\"Twin active: {i}\")\n```";
  }
  if (subjectId === "javascript" && concept === "async_js") {
    return "```javascript\n// Promise timeout\nconst wait = ms => new Promise(res => setTimeout(res, ms));\nawait wait(1000);\nconsole.log(\"Synced!\");\n```";
  }
  if (subjectId === "calculus" && concept === "derivatives") {
    return "Equation of instantaneous slope:\n$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$\nExample: If $f(x) = x^2$, then $f'(x) = 2x$.";
  }
  if (subjectId === "history" && concept === "french_rev") {
    return "Key Historic Timeline Element:\n- 1789: Storming of the Bastille (marks beginnings of the popular revolt)\n- 1793: Execution of Louis XVI and Marie Antoinette\n- 1799: Napoleon Bonaparte takes power in a coup d'état.";
  }

  // Generic fallback format
  const conf = getSubjectConfig(subjectId);
  const label = conf.conceptLabels[concept];
  if (conf.isCoding) {
    return `\`\`\`${subjectId}\n// Demonstration of ${label}\n// Concept: ${conf.conceptDescriptions[concept]}\ninitialize_${concept}();\n\`\`\``;
  } else {
    return `[${label} Demonstration Framework]\n- Principle: ${conf.conceptDescriptions[concept]}\n- Core Application: Utilized to resolve dependencies in ${conf.name}.`;
  }
}
