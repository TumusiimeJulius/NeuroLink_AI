// Subjects Catalog and Procedural Question Generators for 20 Subjects
// STEM, Humanities, Social Sciences, Tech & Coding.

export const SUBJECTS = {
  // --- TECH & CODING ---
  python: {
    name: "Python Programming",
    icon: "🐍",
    isCoding: true,
    concepts: ["variables", "data_types", "conditions", "loops", "functions", "dictionaries", "oop"],
    dependencies: {
      variables: [],
      data_types: ["variables"],
      conditions: ["variables"],
      loops: ["conditions"],
      functions: ["loops", "variables"],
      dictionaries: ["data_types"],
      oop: ["functions", "dictionaries"]
    },
    conceptLabels: {
      variables: "Variables & Naming",
      data_types: "Data Types & Tuples",
      conditions: "Conditions & Branching",
      loops: "Loops & Iterations",
      functions: "Functions & Scope",
      dictionaries: "Dictionaries & Collections",
      oop: "Object-Oriented Programming"
    },
    conceptDescriptions: {
      variables: "Store data references using identifiers and the assignment operator '='.",
      data_types: "Work with numbers, strings, lists (mutable sequences), and tuples (immutable sequences).",
      conditions: "Control logical program execution branches with if, elif, and else.",
      loops: "Repeat executions using for (for ranges or lists) and while loops.",
      functions: "Encapsulate reusable instruction blocks with scopes and parameters.",
      dictionaries: "Use key-value mappings to index data objects with high-speed hashing.",
      oop: "Construct object templates using classes, initializers, methods, and inheritances."
    }
  },
  javascript: {
    name: "JavaScript Web Development",
    icon: "🌐",
    isCoding: true,
    concepts: ["scopes", "types_objects", "control_flow", "closures", "dom_manipulation", "async_js"],
    dependencies: {
      scopes: [],
      types_objects: ["scopes"],
      control_flow: ["scopes"],
      closures: ["scopes", "types_objects"],
      dom_manipulation: ["control_flow"],
      async_js: ["closures", "dom_manipulation"]
    },
    conceptLabels: {
      scopes: "Variables & Scopes",
      types_objects: "Data Types & Objects",
      control_flow: "Control Flow & Branches",
      closures: "Functions & Closures",
      dom_manipulation: "DOM Manipulation",
      async_js: "Promises & Async JS"
    },
    conceptDescriptions: {
      scopes: "Understand variable declarations (var, let, const) and block scopes.",
      types_objects: "Differentiate primitives from reference object lists and prototypes.",
      control_flow: "Implement logical branches, comparisons, loops, and switches.",
      closures: "Construct nested functions retaining references to outer variable scopes.",
      dom_manipulation: "Access, modify, and listen to elements inside the HTML DOM tree.",
      async_js: "Coordinate async tasks using callbacks, Promises, and async/await syntax."
    }
  },
  html_css: {
    name: "HTML & CSS Layouts",
    icon: "🎨",
    isCoding: true,
    concepts: ["dom_structure", "css_selectors", "box_model", "flexbox_grid", "responsive_design", "transitions"],
    dependencies: {
      dom_structure: [],
      css_selectors: ["dom_structure"],
      box_model: ["css_selectors"],
      flexbox_grid: ["box_model"],
      responsive_design: ["flexbox_grid"],
      transitions: ["box_model"]
    },
    conceptLabels: {
      dom_structure: "HTML DOM Structure",
      css_selectors: "CSS Selectors & Cascade",
      box_model: "CSS Box Model",
      flexbox_grid: "Flexbox & Grid Layouts",
      responsive_design: "Responsive Web Design",
      transitions: "CSS Transitions & Anim"
    },
    conceptDescriptions: {
      dom_structure: "Design page structures using semantic HTML tags and parent-child relations.",
      css_selectors: "Style elements applying tags, classes, IDs, pseudo-selectors, and specificity rules.",
      box_model: "Control padding, margins, borders, widths, and structural sizing calculations.",
      flexbox_grid: "Distribute elements dynamically using CSS Flexbox rows and Grid cells.",
      responsive_design: "Build mobile-friendly screens using media queries and viewport scaling.",
      transitions: "Animate interface changes with CSS duration variables and custom keyframes."
    }
  },
  sql: {
    name: "SQL Databases",
    icon: "📊",
    isCoding: true,
    concepts: ["db_basics", "select_queries", "where_filters", "aggregates", "joins", "grouping"],
    dependencies: {
      db_basics: [],
      select_queries: ["db_basics"],
      where_filters: ["select_queries"],
      aggregates: ["select_queries"],
      joins: ["where_filters"],
      grouping: ["aggregates"]
    },
    conceptLabels: {
      db_basics: "Database Basics & Tables",
      select_queries: "SELECT & Projection",
      where_filters: "WHERE Filtering & Logic",
      aggregates: "Aggregate Functions",
      joins: "JOIN Tables & Relations",
      grouping: "GROUP BY & HAVING"
    },
    conceptDescriptions: {
      db_basics: "Understand relational models, schemas, keys (primary, foreign), and rows.",
      select_queries: "Extract specific columns from table entities using SELECT queries.",
      where_filters: "Narrow down records using comparative operators and boolean conditions.",
      aggregates: "Calculate averages, sums, counts, minimums, and maximums across datasets.",
      joins: "Merge datasets from multiple tables using INNER, LEFT, and RIGHT joins.",
      grouping: "Summarize records in groups and apply post-filters using HAVING."
    }
  },
  dsa: {
    name: "Data Structures & Algorithms",
    icon: "🧩",
    isCoding: true,
    concepts: ["complexity", "lists_arrays", "stacks_queues", "trees_graphs", "sorting", "dynamic_prog"],
    dependencies: {
      complexity: [],
      lists_arrays: ["complexity"],
      stacks_queues: ["lists_arrays"],
      trees_graphs: ["lists_arrays"],
      sorting: ["complexity"],
      dynamic_prog: ["trees_graphs", "sorting"]
    },
    conceptLabels: {
      complexity: "Big O Time Complexity",
      lists_arrays: "Arrays & Linked Lists",
      stacks_queues: "Stacks & Queues",
      trees_graphs: "Trees & Graphs",
      sorting: "Sorting Algorithms",
      dynamic_prog: "Dynamic Programming"
    },
    conceptDescriptions: {
      complexity: "Analyze time and space scalability of algorithm scripts using Big O notation.",
      lists_arrays: "Contrast static arrays with dynamic references in singly-linked lists.",
      stacks_queues: "Implement LIFO (Last-In-First-Out) stacks and FIFO (First-In-First-Out) queues.",
      trees_graphs: "Traverse hierarchical tree nodes and graph edges using DFS and BFS.",
      sorting: "Contrast O(N^2) bubble/selection sorts with O(N log N) quick/merge sorts.",
      dynamic_prog: "Optimize recursion using memoization and tabular bottom-up solutions."
    }
  },

  // --- STEM ---
  linear_algebra: {
    name: "Linear Algebra",
    icon: "📐",
    isCoding: false,
    concepts: ["vectors", "matrices", "systems_eq", "determinants", "eigenvalues", "decompositions"],
    dependencies: {
      vectors: [],
      matrices: ["vectors"],
      systems_eq: ["matrices"],
      determinants: ["matrices"],
      eigenvalues: ["systems_eq", "determinants"],
      decompositions: ["eigenvalues"]
    },
    conceptLabels: {
      vectors: "Vectors & Linear Spaces",
      matrices: "Matrices & Operations",
      systems_eq: "Systems of Linear Equations",
      determinants: "Determinants & Inverses",
      eigenvalues: "Eigenvalues & Eigenvectors",
      decompositions: "Matrix Decompositions"
    },
    conceptDescriptions: {
      vectors: "Understand vector operations, spans, linear independence, and basis vectors.",
      matrices: "Perform matrix multiplications, transposes, and coordinate transformations.",
      systems_eq: "Solve linear equations using Gaussian elimination and row-reduction.",
      determinants: "Calculate matrix determinants, evaluate invertibility, and apply Cramer's rule.",
      eigenvalues: "Determine characteristic equations, eigenvalues, and scaling eigen-directions.",
      decompositions: "Factorize matrices using LU decomposition, QR decomposition, and SVD."
    }
  },
  calculus: {
    name: "Calculus",
    icon: "📈",
    isCoding: false,
    concepts: ["limits", "derivatives", "diff_rules", "integrals", "fundamental_thm", "differential_eq"],
    dependencies: {
      limits: [],
      derivatives: ["limits"],
      diff_rules: ["derivatives"],
      integrals: ["limits"],
      fundamental_thm: ["derivatives", "integrals"],
      differential_eq: ["fundamental_thm"]
    },
    conceptLabels: {
      limits: "Limits & Continuity",
      derivatives: "The Concept of Derivative",
      diff_rules: "Rules of Differentiation",
      integrals: "Integrals & Area",
      fundamental_thm: "Fundamental Theorem of Calc",
      differential_eq: "Differential Equations"
    },
    conceptDescriptions: {
      limits: "Determine numerical approximations, one-sided limits, and continuity boundaries.",
      derivatives: "Calculate instantaneous rates of change and find slopes of tangent lines.",
      diff_rules: "Apply power, product, quotient, and chain rules to algebraic functions.",
      integrals: "Evaluate Riemann sums, areas under curves, and definite/indefinite integrations.",
      fundamental_thm: "Link differentiation and integration via the Fundamental Theorem of Calculus.",
      differential_eq: "Solve separable first-order differential equations and model rates of change."
    }
  },
  physics: {
    name: "Classical Physics",
    icon: "⚛️",
    isCoding: false,
    concepts: ["kinematics", "newton_laws", "work_energy", "momentum", "rotational", "gravitation"],
    dependencies: {
      kinematics: [],
      newton_laws: ["kinematics"],
      work_energy: ["newton_laws"],
      momentum: ["newton_laws"],
      rotational: ["kinematics", "newton_laws"],
      gravitation: ["work_energy"]
    },
    conceptLabels: {
      kinematics: "Kinematics in 1D & 2D",
      newton_laws: "Newton's Laws of Motion",
      work_energy: "Work, Energy & Power",
      momentum: "Linear Momentum & Collisions",
      rotational: "Rotational Dynamics",
      gravitation: "Universal Gravitation"
    },
    conceptDescriptions: {
      kinematics: "Model displacements, velocities, and constant acceleration vectors.",
      newton_laws: "Analyze force interactions, friction boundaries, and free-body diagrams.",
      work_energy: "Apply kinetic and potential energy conversions and check work theorems.",
      momentum: "Model impulses, conservation of momentum, and elastic/inelastic collisions.",
      rotational: "Evaluate torques, angular accelerations, and moments of inertia.",
      gravitation: "Verify Kepler's laws and calculate gravitational potentials between bodies."
    }
  },
  chemistry: {
    name: "General Chemistry",
    icon: "🧪",
    isCoding: false,
    concepts: ["atomic_structure", "chemical_bonding", "stoichiometry", "gases", "thermo", "equilibrium"],
    dependencies: {
      atomic_structure: [],
      chemical_bonding: ["atomic_structure"],
      stoichiometry: ["atomic_structure"],
      gases: ["stoichiometry"],
      thermo: ["chemical_bonding"],
      equilibrium: ["stoichiometry", "thermo"]
    },
    conceptLabels: {
      atomic_structure: "Atomic Structure & Orbitals",
      chemical_bonding: "Chemical Bonding & VSEPR",
      stoichiometry: "Stoichiometry & Mole Calc",
      gases: "Gases & Gas Laws",
      thermo: "Chemical Thermodynamics",
      equilibrium: "Chemical Equilibrium"
    },
    conceptDescriptions: {
      atomic_structure: "Analyze subatomic particles, quantum numbers, and electron configurations.",
      chemical_bonding: "Contrast ionic, covalent, and metallic bonds and identify molecular shapes.",
      stoichiometry: "Balance reactions and calculate yields using mole conversion factors.",
      gases: "Determine gas behaviors using the Ideal Gas Law and Dalton's partial pressures.",
      thermo: "Evaluate chemical reactions using enthalpies, entropies, and Gibbs free energies.",
      equilibrium: "Apply Le Chatelier's principle and calculate equilibrium constants (Kc, Kp)."
    }
  },
  biology: {
    name: "Molecular Biology",
    icon: "🧬",
    isCoding: false,
    concepts: ["cells", "dna_replication", "protein_synthesis", "cell_division", "genetics", "evolution"],
    dependencies: {
      cells: [],
      dna_replication: ["cells"],
      protein_synthesis: ["dna_replication"],
      cell_division: ["cells"],
      genetics: ["cell_division", "protein_synthesis"],
      evolution: ["genetics"]
    },
    conceptLabels: {
      cells: "Cell Structure & Organelles",
      dna_replication: "DNA Structure & Replication",
      protein_synthesis: "Transcription & Translation",
      cell_division: "Mitosis & Meiosis",
      genetics: "Mendelian Genetics",
      evolution: "Natural Selection & Evolution"
    },
    conceptDescriptions: {
      cells: "Contrast prokaryotic structures and identify eukaryotic organelle functions.",
      dna_replication: "Trace double-helix designs and enzymatic replication steps (helicase, polymerase).",
      protein_synthesis: "Transcribe DNA into mRNA and translate codons into peptide sequences.",
      cell_division: "Map somatic mitosis phases and analyze chromosome splits in haploid meiosis.",
      genetics: "Predict allele distributions using Punnett squares and check dominance laws.",
      evolution: "Evaluate genetic mutations, gene pools, fitness profiles, and natural selections."
    }
  },
  organic_chemistry: {
    name: "Organic Chemistry",
    icon: "🧪",
    isCoding: false,
    concepts: ["hybridization", "stereochemistry", "nucleophilic", "eliminations", "alcohols", "aromatics"],
    dependencies: {
      hybridization: [],
      stereochemistry: ["hybridization"],
      nucleophilic: ["stereochemistry"],
      eliminations: ["nucleophilic"],
      alcohols: ["nucleophilic"],
      aromatics: ["hybridization"]
    },
    conceptLabels: {
      hybridization: "Structure & Hybridization",
      stereochemistry: "Stereochemistry & Isomers",
      nucleophilic: "Nucleophilic Substitutions",
      eliminations: "Elimination Reactions",
      alcohols: "Alcohols & Ethers",
      aromatics: "Aromatic Compounds"
    },
    conceptDescriptions: {
      hybridization: "Analyze carbon hybridizations (sp3, sp2, sp) and sigma/pi bonds.",
      stereochemistry: "Identify chiral centers, enantiomers, diastereomers, and R/S designations.",
      nucleophilic: "Contrast SN1 and SN2 reaction mechanisms, kinetics, and stereochemical outcomes.",
      eliminations: "Contrast E1 and E2 mechanisms and predict Zaitsev/Hofmann products.",
      alcohols: "Evaluate syntheses, acidities, oxidations, and substitutions of alcohol groups.",
      aromatics: "Verify Huckel's rule and analyze electrophilic aromatic substitutions."
    }
  },
  environmental_science: {
    name: "Environmental Science",
    icon: "🌱",
    isCoding: false,
    concepts: ["ecosystems", "biodiversity", "populations", "energy_resources", "climate", "conservation"],
    dependencies: {
      ecosystems: [],
      biodiversity: ["ecosystems"],
      populations: ["ecosystems"],
      energy_resources: ["populations"],
      climate: ["energy_resources"],
      conservation: ["biodiversity", "climate"]
    },
    conceptLabels: {
      ecosystems: "Ecosystem Dynamics",
      biodiversity: "Biodiversity & Species",
      populations: "Population Ecology",
      energy_resources: "Energy Resources & Use",
      climate: "Global Climate Change",
      conservation: "Conservation Biology"
    },
    conceptDescriptions: {
      ecosystems: "Analyze food webs, trophic levels, biogeochemical cycles, and primary productivity.",
      biodiversity: "Evaluate genetic, species, and ecosystem diversities and ecological niches.",
      populations: "Evaluate carrying capacities, growth models (logistic/exponential), and r/K selection.",
      energy_resources: "Contrast fossil fuels with renewable alternatives and analyze power efficiencies.",
      climate: "Trace greenhouse effects, global warming impacts, and carbon output levels.",
      conservation: "Implement ecosystem restorations, habitat protections, and policy controls."
    }
  },

  // --- HUMANITIES & SOCIAL SCIENCES ---
  history: {
    name: "World History",
    icon: "📖",
    isCoding: false,
    concepts: ["french_rev", "industrialization", "ww1", "ww2", "cold_war", "globalization"],
    dependencies: {
      french_rev: [],
      industrialization: ["french_rev"],
      ww1: ["industrialization"],
      ww2: ["ww1"],
      cold_war: ["ww2"],
      globalization: ["cold_war"]
    },
    conceptLabels: {
      french_rev: "French Revolution & Napoleonic Era",
      industrialization: "Industrial Revolution & Marxism",
      ww1: "Imperialism & World War I",
      ww2: "Rise of Fascism & World War II",
      cold_war: "Bipolar World & the Cold War",
      globalization: "Globalization & Digital Age"
    },
    conceptDescriptions: {
      french_rev: "Analyze causes of 1789 revolts, Reign of Terror, and Napoleonic expansions.",
      industrialization: "Trace mechanical developments, urbanization spikes, and Marx's labor theories.",
      ww1: "Analyze colonizations, alliance systems, assassination sparks, and trench warfare.",
      ww2: "Analyze Treaty of Versailles failures, Axis expansions, and postwar block divisions.",
      cold_war: "Model containment policies, proxy wars (Korea, Vietnam), and space races.",
      globalization: "Analyze corporate integrations, free trade pacts, and modern web connectivity."
    }
  },
  english: {
    name: "English Grammar & Writing",
    icon: "✍️",
    isCoding: false,
    concepts: ["parts_of_speech", "clauses", "punctuation", "agreement", "voice", "rhetoric"],
    dependencies: {
      parts_of_speech: [],
      clauses: ["parts_of_speech"],
      punctuation: ["clauses"],
      agreement: ["parts_of_speech"],
      voice: ["clauses"],
      rhetoric: ["agreement", "voice"]
    },
    conceptLabels: {
      parts_of_speech: "Parts of Speech & Functions",
      clauses: "Sentence Clauses & Structure",
      punctuation: "Punctuation Rules",
      agreement: "Subject-Verb Agreement",
      voice: "Active vs Passive Voice",
      rhetoric: "Rhetorical Devices & Style"
    },
    conceptDescriptions: {
      parts_of_speech: "Differentiate nouns, verbs, adjectives, adverbs, prepositions, and conjunctions.",
      clauses: "Differentiate independent, dependent, relative, and adverbial clauses in sentences.",
      punctuation: "Master commas, semicolons, colons, dashes, and parenthetical interruptions.",
      agreement: "Align complex subjects, singular indefinites, and collective nouns with verbs.",
      voice: "Convert passive constructions to active ones to improve clarity and vigor.",
      rhetoric: "Apply ethos, logos, pathos, metaphors, parallelism, and concise styles."
    }
  },
  macroeconomics: {
    name: "Macroeconomics",
    icon: "📉",
    isCoding: false,
    concepts: ["gdp", "aggregate_flow", "fiscal", "monetary", "unemployment", "trade"],
    dependencies: {
      gdp: [],
      aggregate_flow: ["gdp"],
      fiscal: ["aggregate_flow"],
      monetary: ["aggregate_flow"],
      unemployment: ["gdp"],
      trade: ["fiscal", "monetary"]
    },
    conceptLabels: {
      gdp: "GDP & Inflation Indicators",
      aggregate_flow: "Aggregate Supply & Demand",
      fiscal: "Fiscal Policy & Budget",
      monetary: "Monetary Policy & Banking",
      unemployment: "Unemployment & Phillips Curve",
      trade: "International Trade & Forex"
    },
    conceptDescriptions: {
      gdp: "Calculate nominal/real GDP and analyze CPI inflation indexes.",
      aggregate_flow: "Model long-run/short-run equilibrium graphs and identify output gaps.",
      fiscal: "Apply tax multiplier scales and coordinate government budget expansions.",
      monetary: "Utilize central bank reserves, discount rates, and open-market bond trades.",
      unemployment: "Contrast frictional, structural, and cyclical unemployment rates.",
      trade: "Trace trade balances, currency exchange values, and tariff protections."
    }
  },
  microeconomics: {
    name: "Microeconomics",
    icon: "📈",
    isCoding: false,
    concepts: ["scarcity", "supply_demand", "elasticity", "consumer_choice", "production", "market_structures"],
    dependencies: {
      scarcity: [],
      supply_demand: ["scarcity"],
      elasticity: ["supply_demand"],
      consumer_choice: ["scarcity"],
      production: ["supply_demand"],
      market_structures: ["elasticity", "production"]
    },
    conceptLabels: {
      scarcity: "Scarcity & Opportunity Cost",
      supply_demand: "Supply, Demand & Equilibrium",
      elasticity: "Elasticity of Demand & Supply",
      consumer_choice: "Consumer Choice & Utility",
      production: "Production & Cost Curves",
      market_structures: "Market Structures & Power"
    },
    conceptDescriptions: {
      scarcity: "Analyze resource choices, opportunity costs, and production possibilities.",
      supply_demand: "Model shifts in market curves, price ceilings, floors, and consumer/producer surpluses.",
      elasticity: "Calculate price elasticities, cross-elasticities, and check tax incidence bounds.",
      consumer_choice: "Evaluate budget constraints, marginal utilities, and indifference curves.",
      production: "Model short-run and long-run costs, checks dimishing returns, and scale efficiencies.",
      market_structures: "Analyze perfect competition, monopolies, oligopolies, and monopolistic dynamics."
    }
  },
  psychology: {
    name: "Introduction to Psychology",
    icon: "🧠",
    isCoding: false,
    concepts: ["history", "neurobiology", "perception", "learning", "cognitive", "personality"],
    dependencies: {
      history: [],
      neurobiology: ["history"],
      perception: ["neurobiology"],
      learning: ["history"],
      cognitive: ["perception", "learning"],
      personality: ["cognitive"]
    },
    conceptLabels: {
      history: "History & Research Methods",
      neurobiology: "Neurobiology & Brain Functions",
      perception: "Sensation & Perception",
      learning: "Learning Theories",
      cognitive: "Memory & Cognitive Processes",
      personality: "Personality Theories"
    },
    conceptDescriptions: {
      history: "Contrast behaviorism, psychoanalysis, and cognitive paradigms, and analyze experiments.",
      neurobiology: "Trace neuron transmissions, neurotransmitter bindings, and brain lobe specializations.",
      perception: "Evaluate sensory receptors, signal transductions, and Gestalt grouping principles.",
      learning: "Contrast classical conditioning, operant schedules, and social observational learning.",
      cognitive: "Trace encoding, storage partitions (sensory, short, long), and retrieval cues.",
      personality: "Analyze psychodynamic, humanistic, trait-based, and social-cognitive profiles."
    }
  },
  art_history: {
    name: "Art History",
    icon: "🖼️",
    isCoding: false,
    concepts: ["antiquity", "renaissance", "baroque", "impressionism", "modernism", "contemporary"],
    dependencies: {
      antiquity: [],
      renaissance: ["antiquity"],
      baroque: ["renaissance"],
      impressionism: ["baroque"],
      modernism: ["impressionism"],
      contemporary: ["modernism"]
    },
    conceptLabels: {
      antiquity: "Classical Antiquity Art",
      renaissance: "Renaissance Art & Humanism",
      baroque: "Baroque & Rococo Styles",
      impressionism: "Impressionism & Realism",
      modernism: "Modernism & Avant-Garde",
      contemporary: "Contemporary Art Currents"
    },
    conceptDescriptions: {
      antiquity: "Analyze Greek sculpture ideals, Roman structural arches, and symbolic paintings.",
      renaissance: "Analyze linear perspectives, humanism details, and masters (da Vinci, Michelangelo).",
      baroque: "Analyze chiaroscuro light contrasts, dramatic movement details, and Rococo light styles.",
      impressionism: "Analyze plein-air brushstrokes, atmospheric lighting, and everyday scenes.",
      modernism: "Analyze Cubism abstractions, Surrealist dreams, and abstract expressionist canvases.",
      contemporary: "Analyze conceptual installations, performance art formats, and digital assets."
    }
  },
  geography: {
    name: "World Geography",
    icon: "🗺️",
    isCoding: false,
    concepts: ["landscapes", "climate", "demographics", "urbanization", "borders", "resources"],
    dependencies: {
      landscapes: [],
      climate: ["landscapes"],
      demographics: ["climate"],
      urbanization: ["demographics"],
      borders: ["urbanization"],
      resources: ["landscapes", "borders"]
    },
    conceptLabels: {
      landscapes: "Physical Landscapes & Plate Tectonics",
      climate: "Climate Zones & Ecosystems",
      demographics: "Human Demographics & Migration",
      urbanization: "Urbanization & Infrastructure",
      borders: "Geopolitical Borders & Conflict",
      resources: "Resource Distribution & Global Trade"
    },
    conceptDescriptions: {
      landscapes: "Analyze plate boundaries, seismic zones, erosion patterns, and landform developments.",
      climate: "Analyze atmospheric circulation, rain shadow zones, and global biomes.",
      demographics: "Evaluate demographic transition stages, population pyramids, and push-pull migrations.",
      urbanization: "Analyze concentric zone models, infrastructure layouts, and megacity expansions.",
      borders: "Evaluate nation-state sovereignty, physical boundaries, and border disputes.",
      resources: "Map resource zones, analyze water/energy demands, and track supply chains."
    }
  },
  marketing: {
    name: "Digital Marketing",
    icon: "📈",
    isCoding: false,
    concepts: ["segmentation", "marketing_mix", "digital_ads", "content_strategy", "brand_equity", "analytics"],
    dependencies: {
      segmentation: [],
      marketing_mix: ["segmentation"],
      digital_ads: ["marketing_mix"],
      content_strategy: ["marketing_mix"],
      brand_equity: ["content_strategy"],
      analytics: ["digital_ads"]
    },
    conceptLabels: {
      segmentation: "Market Segmentation & Targeting",
      marketing_mix: "The 4 Ps & Marketing Mix",
      digital_ads: "Digital Advertising Channels",
      content_strategy: "Content Strategy & SEO",
      brand_equity: "Brand Equity & Positioning",
      analytics: "Marketing Analytics & KPIs"
    },
    conceptDescriptions: {
      segmentation: "Divide consumer audiences by demographics, behaviors, and psychographics.",
      marketing_mix: "Coordinate Product, Price, Place, and Promotion variables for target markets.",
      digital_ads: "Manage Search Engine Marketing (SEM), PPC bids, social ads, and retargetings.",
      content_strategy: "Optimize web search rankings (SEO) and coordinate content marketing campaigns.",
      brand_equity: "Manage brand associations, perceived qualities, positioning, and loyalties.",
      analytics: "Track click-through rates (CTR), conversion costs (CAC), lifespans (LTV), and ROIs."
    }
  }
};

// Add categories to existing subjects
SUBJECTS.python.category = "coding";
SUBJECTS.javascript.category = "coding";
SUBJECTS.html_css.category = "coding";
SUBJECTS.sql.category = "coding";
SUBJECTS.dsa.category = "coding";

SUBJECTS.linear_algebra.category = "stem";
SUBJECTS.calculus.category = "stem";
SUBJECTS.physics.category = "stem";
SUBJECTS.chemistry.category = "stem";
SUBJECTS.biology.category = "stem";
SUBJECTS.organic_chemistry.category = "stem";
SUBJECTS.environmental_science.category = "stem";

SUBJECTS.history.category = "humanities";
SUBJECTS.english.category = "humanities";
SUBJECTS.psychology.category = "humanities";
SUBJECTS.art_history.category = "humanities";
SUBJECTS.geography.category = "humanities";

SUBJECTS.macroeconomics.category = "business";
SUBJECTS.microeconomics.category = "business";
SUBJECTS.marketing.category = "business";

// Additional 70+ subjects catalog list
export const ADDITIONAL_SUBJECTS_LIST = [
  { id: "computer_science", name: "Computer Science", icon: "💻", category: "coding", isCoding: true, concepts: ["programming_fundamentals", "data_structures", "computer_architecture", "operating_systems", "software_engineering", "databases"] },
  { id: "it", name: "Information Technology (IT)", icon: "🔌", category: "coding", isCoding: true, concepts: ["computer_hardware", "network_routing", "operating_systems_admin", "cloud_infrastructure", "cybersecurity_basics", "it_service_management"] },
  { id: "software_engineering", name: "Software Engineering", icon: "⚙️", category: "coding", isCoding: true, concepts: ["software_requirements", "software_design", "testing_quality_assurance", "devops_pipelines", "agile_methodology", "software_maintenance"] },
  { id: "information_systems", name: "Information Systems", icon: "🗄️", category: "coding", isCoding: true, concepts: ["systems_analysis", "database_management", "enterprise_systems_erp", "it_strategy", "business_intelligence", "e_business"] },
  { id: "data_science", name: "Data Science", icon: "📊", category: "coding", isCoding: true, concepts: ["exploratory_data_analysis", "statistical_inference", "machine_learning", "data_visualization", "big_data_processing", "model_deployment"] },
  { id: "ai", name: "Artificial Intelligence (AI)", icon: "🤖", category: "coding", isCoding: true, concepts: ["search_algorithms", "machine_learning", "deep_neural_networks", "natural_language_processing", "computer_vision", "ai_ethics"] },
  { id: "cybersecurity", name: "Cybersecurity", icon: "🛡️", category: "coding", isCoding: true, concepts: ["cryptography_basics", "network_security", "system_hardening", "penetration_testing", "incident_response", "governance_compliance"] },
  { id: "business_administration", name: "Business Administration", icon: "💼", category: "business", isCoding: false, concepts: ["organizational_behavior", "operations_management", "strategic_management", "business_ethics", "marketing_principles", "corporate_finance"] },
  { id: "accounting", name: "Accounting", icon: "🧾", category: "business", isCoding: false, concepts: ["financial_accounting", "managerial_accounting", "auditing_principles", "taxation_laws", "accounting_information_systems", "cost_accounting"] },
  { id: "finance", name: "Finance", icon: "💵", category: "business", isCoding: false, concepts: ["time_value_of_money", "financial_markets", "investment_portfolio", "corporate_finance", "derivatives_risk", "international_finance"] },
  { id: "economics", name: "Economics", icon: "📈", category: "business", isCoding: false, concepts: ["microeconomics_principles", "macroeconomics_principles", "econometrics", "monetary_economics", "development_economics", "international_trade"] },
  { id: "law", name: "Law", icon: "⚖️", category: "humanities", isCoding: false, concepts: ["constitutional_law", "contract_law", "tort_law", "criminal_law", "property_law", "international_jurisprudence"] },
  { id: "medicine", name: "Medicine", icon: "🩺", category: "health", isCoding: false, concepts: ["pathophysiology", "pharmacology_basics", "clinical_diagnostics", "internal_medicine", "surgical_principles", "medical_ethics"] },
  { id: "nursing", name: "Nursing", icon: "👩‍⚕️", category: "health", isCoding: false, concepts: ["fundamentals_of_nursing", "patient_care_assessment", "pharmacology_in_nursing", "medical_surgical_nursing", "pediatric_maternity_nursing", "nursing_ethics"] },
  { id: "pharmacy", name: "Pharmacy", icon: "💊", category: "health", isCoding: false, concepts: ["pharmaceutics", "pharmacology", "medicinal_chemistry", "pharmacotherapy", "pharmacy_practice", "biopharmaceutics"] },
  { id: "public_health", name: "Public Health", icon: "🏥", category: "health", isCoding: false, concepts: ["epidemiology_basics", "biostatistics_public_health", "environmental_health", "health_policy", "social_behavioral_health", "global_health"] },
  { id: "civil_engineering", name: "Civil Engineering", icon: "🏗️", category: "stem", isCoding: false, concepts: ["structural_analysis", "geotechnical_engineering", "fluid_mechanics", "transportation_engineering", "environmental_civil", "construction_management"] },
  { id: "mechanical_engineering", name: "Mechanical Engineering", icon: "⚙️", category: "stem", isCoding: false, concepts: ["thermodynamics", "fluid_dynamics", "kinematics_of_machinery", "materials_science", "machine_design", "control_systems"] },
  { id: "electrical_engineering", name: "Electrical Engineering", icon: "⚡", category: "stem", isCoding: false, concepts: ["circuit_analysis", "electromagnetics", "signals_systems", "power_systems", "control_engineering", "microelectronics"] },
  { id: "electronics_engineering", name: "Electronics Engineering", icon: "📟", category: "stem", isCoding: false, concepts: ["semiconductor_devices", "analog_circuits", "digital_logic_design", "microprocessors", "embedded_systems", "communication_systems"] },
  { id: "architecture", name: "Architecture", icon: "🏛️", category: "humanities", isCoding: false, concepts: ["architectural_history", "design_theory", "building_materials", "structural_systems", "sustainable_design", "urban_design"] },
  { id: "education", name: "Education", icon: "🎓", category: "humanities", isCoding: false, concepts: ["educational_psychology", "curriculum_design", "instructional_strategies", "classroom_management", "educational_assessment", "special_education"] },
  { id: "sociology", name: "Sociology", icon: "👥", category: "humanities", isCoding: false, concepts: ["sociological_theory", "research_methods_sociology", "social_stratification", "sociology_of_family", "deviance_social_control", "globalization_society"] },
  { id: "political_science", name: "Political Science", icon: "🏛️", category: "humanities", isCoding: false, concepts: ["political_theory", "comparative_politics", "international_relations", "public_policy", "political_institutions", "political_behavior"] },
  { id: "international_relations", name: "International Relations", icon: "🌍", category: "humanities", isCoding: false, concepts: ["ir_theories", "foreign_policy_analysis", "international_security", "international_political_economy", "global_governance", "diplomatic_history"] },
  { id: "agriculture", name: "Agriculture", icon: "🚜", category: "stem", isCoding: false, concepts: ["crop_science", "soil_science", "agricultural_economics", "plant_pathology", "animal_husbandry", "sustainable_agriculture"] },
  { id: "mathematics_statistics", name: "Mathematics Statistics", icon: "🔢", category: "stem", isCoding: false, concepts: ["probability_theory", "mathematical_statistics", "regression_analysis", "hypothesis_testing", "statistical_computation", "multivariate_analysis"] },
  { id: "biochemistry", name: "Biochemistry", icon: "🧬", category: "stem", isCoding: false, concepts: ["protein_structure", "enzymology", "metabolic_pathways", "molecular_genetics", "signal_transduction", "biochemical_techniques"] },
  { id: "microbiology", name: "Microbiology", icon: "🦠", category: "stem", isCoding: false, concepts: ["bacteriology", "virology", "mycology_parasitology", "microbial_genetics", "immunology_basics", "industrial_microbiology"] },
  { id: "biotechnology", name: "Biotechnology", icon: "🧬", category: "stem", isCoding: false, concepts: ["recombinant_dna", "cell_culture", "bioprocess_engineering", "agricultural_biotech", "medical_biotech", "bioinformatics"] },
  { id: "geology", name: "Geology", icon: "🪨", category: "stem", isCoding: false, concepts: ["physical_geology", "historical_geology", "mineralogy", "petrology", "structural_geology", "plate_tectonics_geology"] },
  { id: "environmental_management", name: "Environmental Management", icon: "🏞️", category: "stem", isCoding: false, concepts: ["environmental_policy", "waste_management", "resource_conservation", "environmental_impact", "sustainable_development", "gis_applications"] },
  { id: "forestry", name: "Forestry", icon: "🌲", category: "stem", isCoding: false, concepts: ["dendrology", "forest_ecology", "silviculture", "forest_management", "wood_science", "forest_conservation"] },
  { id: "wildlife_management", name: "Wildlife Management", icon: "🦁", category: "stem", isCoding: false, concepts: ["wildlife_ecology", "habitat_management", "population_dynamics", "conservation_biology", "wildlife_policy", "human_wildlife_conflict"] },
  { id: "veterinary_medicine", name: "Veterinary Medicine", icon: "🐕", category: "health", isCoding: false, concepts: ["veterinary_anatomy", "animal_physiology", "veterinary_pathology", "veterinary_pharmacology", "clinical_veterinary", "veterinary_ethics"] },
  { id: "food_science_technology", name: "Food Science and Technology", icon: "🍞", category: "stem", isCoding: false, concepts: ["food_chemistry", "food_microbiology", "food_engineering", "food_processing", "food_quality_safety", "sensory_evaluation"] },
  { id: "nutrition_dietetics", name: "Nutrition and Dietetics", icon: "🍎", category: "health", isCoding: false, concepts: ["macronutrients_micronutrients", "human_nutrition", "clinical_nutrition", "community_nutrition", "dietetic_practice", "foodservice_management"] },
  { id: "public_administration", name: "Public Administration", icon: "🏛️", category: "humanities", isCoding: false, concepts: ["public_org_theory", "public_policy_process", "public_budgeting_finance", "administrative_law", "intergovernmental_relations", "public_sector_ethics"] },
  { id: "human_resource_management", name: "Human Resource Management", icon: "👥", category: "business", isCoding: false, concepts: ["recruitment_selection", "training_development", "performance_management", "compensation_benefits", "employee_relations", "hr_analytics"] },
  { id: "entrepreneurship", name: "Entrepreneurship", icon: "🚀", category: "business", isCoding: false, concepts: ["opportunity_recognition", "business_model_canvas", "entrepreneurial_finance", "new_venture_creation", "growth_scaling", "social_entrepreneurship"] },
  { id: "procurement_logistics", name: "Procurement and Logistics Management", icon: "📦", category: "business", isCoding: false, concepts: ["procurement_principles", "inventory_management", "warehousing_distribution", "logistics_infrastructure", "contract_negotiation", "global_sourcing"] },
  { id: "supply_chain_management", name: "Supply Chain Management", icon: "🚚", category: "business", isCoding: false, concepts: ["supply_chain_strategy", "demand_forecasting", "operations_planning", "supplier_relationship", "logistics_integration", "supply_chain_analytics"] },
  { id: "tourism_management", name: "Tourism Management", icon: "✈️", category: "business", isCoding: false, concepts: ["tourism_principles", "destination_marketing", "sustainable_tourism", "tourism_policy", "visitor_services", "cultural_heritage_tourism"] },
  { id: "hotel_hospitality_management", name: "Hotel and Hospitality Management", icon: "🏨", category: "business", isCoding: false, concepts: ["front_office_operations", "housekeeping_management", "food_beverage_service", "hospitality_marketing", "revenue_management", "hospitality_law"] },
  { id: "journalism_mass_comm", name: "Journalism and Mass Communication", icon: "📰", category: "humanities", isCoding: false, concepts: ["news_writing_reporting", "media_law_ethics", "mass_communication_theory", "digital_media_production", "investigative_journalism", "multimedia_storytelling"] },
  { id: "public_relations", name: "Public Relations", icon: "📢", category: "humanities", isCoding: false, concepts: ["pr_principles", "media_relations", "crisis_communication", "strategic_pr_campaigns", "pr_writing", "corporate_communication"] },
  { id: "library_info_science", name: "Library and Information Science", icon: "📚", category: "humanities", isCoding: false, concepts: ["information_organization", "reference_services", "collection_development", "digital_libraries", "information_retrieval", "library_management"] },
  { id: "social_work", name: "Social Work", icon: "🤝", category: "humanities", isCoding: false, concepts: ["social_work_principles", "human_behavior_social", "social_welfare_policy", "social_work_practice", "community_organizing", "social_work_ethics"] },
  { id: "development_studies", name: "Development Studies", icon: "🌍", category: "humanities", isCoding: false, concepts: ["theories_of_development", "poverty_inequality", "sustainable_dev_goals", "gender_and_development", "development_policy", "community_dev"] },
  { id: "philosophy", name: "Philosophy", icon: "💭", category: "humanities", isCoding: false, concepts: ["epistemology", "metaphysics", "ethics", "logic_argumentation", "political_philosophy", "history_of_philosophy"] },
  { id: "languages_linguistics", name: "Languages and Linguistics", icon: "🗣️", category: "humanities", isCoding: false, concepts: ["phonetics_phonology", "morphology_syntax", "semantics_pragmatics", "sociolinguistics", "historical_linguistics", "applied_linguistics"] },
  { id: "biomedical_engineering", name: "Biomedical Engineering", icon: "🧬", category: "health", isCoding: false, concepts: ["biomechanics", "biomaterials", "biomedical_instrumentation", "medical_imaging", "physiological_modeling", "rehabilitation_engineering"] },
  { id: "chemical_engineering", name: "Chemical Engineering", icon: "🧪", category: "stem", isCoding: false, concepts: ["transport_phenomena", "chemical_thermodynamics", "reaction_engineering", "process_control", "chemical_plant_design", "mass_transfer"] },
  { id: "environmental_engineering", name: "Environmental Engineering", icon: "🌱", category: "stem", isCoding: false, concepts: ["water_wastewater_treatment", "air_pollution_control", "hazardous_waste_remediation", "environmental_hydrology", "solid_waste_eng", "environmental_impact_eng"] },
  { id: "telecommunications_engineering", name: "Telecommunications Engineering", icon: "📡", category: "coding", isCoding: false, concepts: ["signal_modulation", "transmission_lines", "wireless_communications", "fiber_optics", "network_protocols", "telecom_switching"] },
  { id: "mechatronics_engineering", name: "Mechatronics Engineering", icon: "🤖", category: "coding", isCoding: false, concepts: ["sensors_actuators", "microcontroller_programming", "robotic_kinematics", "system_integration", "control_systems_eng", "plc_programming"] },
  { id: "petroleum_engineering", name: "Petroleum Engineering", icon: "🛢️", category: "stem", isCoding: false, concepts: ["reservoir_engineering", "drilling_engineering", "production_engineering", "formation_evaluation", "enhanced_oil_recovery", "petroleum_economics"] },
  { id: "mining_engineering", name: "Mining Engineering", icon: "⛏️", category: "stem", isCoding: false, concepts: ["rock_mechanics", "surface_mining", "underground_mining", "mineral_processing", "mine_ventilation", "mine_safety_environmental"] },
  { id: "agricultural_engineering", name: "Agricultural Engineering", icon: "🌾", category: "stem", isCoding: false, concepts: ["soil_water_conservation", "farm_machinery_power", "agricultural_processing", "irrigation_drainage", "precision_agriculture", "agricultural_structures"] },
  { id: "biomedical_sciences", name: "Biomedical Sciences", icon: "🔬", category: "health", isCoding: false, concepts: ["medical_genetics", "clinical_biochemistry", "hematology_transfusion", "medical_microbiology", "immunopathology", "molecular_diagnostics"] },
  { id: "medical_lab_science", name: "Medical Laboratory Science", icon: "🥼", category: "health", isCoding: false, concepts: ["laboratory_safety_quality", "clinical_chemistry", "hematology", "medical_microbiology_lab", "urinalysis_body_fluids", "blood_banking"] },
  { id: "radiography", name: "Radiography", icon: "🩻", category: "health", isCoding: false, concepts: ["radiation_physics", "radiographic_positioning", "image_production_evaluation", "radiation_protection", "computed_tomography_ct", "magnetic_resonance_imaging_mri"] },
  { id: "physiotherapy", name: "Physiotherapy", icon: "🦽", category: "health", isCoding: false, concepts: ["kinesiology", "exercise_therapy", "electrotherapy", "orthopedic_physiotherapy", "neurological_physiotherapy", "cardiopulmonary_physiotherapy"] },
  { id: "dentistry", name: "Dentistry", icon: "🦷", category: "health", isCoding: false, concepts: ["dental_anatomy", "oral_pathology", "periodontology", "operative_dentistry", "prosthodontics", "oral_maxillofacial_surgery"] },
  { id: "occupational_therapy", name: "Occupational Therapy", icon: "♿", category: "health", isCoding: false, concepts: ["ot_foundations", "occupational_performance", "pediatric_ot", "geriatric_ot", "physical_rehabilitation_ot", "mental_health_ot"] },
  { id: "midwifery", name: "Midwifery", icon: "👶", category: "health", isCoding: false, concepts: ["antenatal_care", "intranatal_care", "postnatal_care", "neonatal_assessment", "obstetric_emergencies", "midwifery_ethics"] },
  { id: "epidemiology", name: "Epidemiology", icon: "📊", category: "health", isCoding: false, concepts: ["infectious_disease_epidemiology", "chronic_disease_epidemiology", "outbreak_investigation", "epidemiologic_methods", "public_health_surveillance", "clinical_trials"] },
  { id: "community_health", name: "Community Health", icon: "🏘️", category: "health", isCoding: false, concepts: ["community_health_assessment", "health_promotion_education", "preventive_medicine", "maternal_child_health", "healthcare_delivery_systems", "disaster_preparedness"] },
  { id: "human_anatomy", name: "Human Anatomy", icon: "💀", category: "health", isCoding: false, concepts: ["musculoskeletal_system", "nervous_system_anatomy", "cardiovascular_respiratory_anatomy", "digestive_urinary_anatomy", "reproductive_endocrine_anatomy", "histology"] },
  { id: "human_physiology", name: "Human Physiology", icon: "🫁", category: "health", isCoding: false, concepts: ["neurophysiology", "cardiovascular_physiology", "respiratory_physiology", "renal_fluid_physiology", "endocrine_reproductive_physiology", "gastrointestinal_physiology"] },
  { id: "genetics", name: "Genetics", icon: "🧬", category: "stem", isCoding: false, concepts: ["transmission_genetics", "molecular_genetics_details", "population_genetics", "cytogenetics", "genomics_proteomics", "gene_regulation"] },
  { id: "marine_biology", name: "Marine Biology", icon: "🐬", category: "stem", isCoding: false, concepts: ["marine_ecosystems", "oceanography_basics", "marine_invertebrates", "marine_vertebrates", "plankton_ecology", "marine_conservation"] },
  { id: "zoology", name: "Zoology", icon: "🐼", category: "stem", isCoding: false, concepts: ["animal_diversity", "vertebrate_zoology", "invertebrate_zoology", "animal_physiology_comparative", "animal_behavior_ethology", "evolutionary_zoology"] },
  { id: "botany", name: "Botany", icon: "🌿", category: "stem", isCoding: false, concepts: ["plant_anatomy", "plant_physiology", "plant_systematics", "plant_ecology", "cryptogamic_botany", "economic_botany"] },
  { id: "applied_mathematics", name: "Applied Mathematics", icon: "🧮", category: "stem", isCoding: false, concepts: ["numerical_analysis", "mathematical_modeling", "optimization_theory", "partial_differential_equations", "dynamical_systems", "scientific_computing"] },
  { id: "actuarial_science", name: "Actuarial Science", icon: "📊", category: "business", isCoding: false, concepts: ["financial_mathematics", "life_contingencies", "loss_models", "actuarial_risk_theory", "survival_analysis", "pension_valuation"] },
  { id: "banking_finance", name: "Banking and Finance", icon: "🏦", category: "business", isCoding: false, concepts: ["commercial_banking", "central_banking_systems", "credit_risk_analysis", "investment_banking", "retail_banking_operations", "financial_risk_management"] },
  { id: "insurance_risk_management", name: "Insurance and Risk Management", icon: "🛡️", category: "business", isCoding: false, concepts: ["principles_of_insurance", "enterprise_risk_management", "property_liability_insurance", "life_health_insurance", "reinsurance", "underwriting_claims"] },
  { id: "real_estate_management", name: "Real Estate Management", icon: "🏢", category: "business", isCoding: false, concepts: ["real_estate_principles", "property_valuation", "real_estate_finance", "property_management", "real_estate_development", "real_estate_law"] },
  { id: "urban_regional_planning", name: "Urban and Regional Planning", icon: "🗺️", category: "humanities", isCoding: false, concepts: ["planning_theory", "land_use_planning", "transportation_planning", "environmental_planning_urban", "housing_community_dev", "geographic_information_systems_gis"] },
  { id: "quantity_surveying", name: "Quantity Surveying", icon: "📏", category: "business", isCoding: false, concepts: ["measurement_construction", "cost_estimating", "contract_administration", "construction_technology", "procurement_quantity_surveying", "value_management"] }
];

// Dynamically populate SUBJECTS map with the additional subjects
ADDITIONAL_SUBJECTS_LIST.forEach(sub => {
  const concepts = sub.concepts;

  // Build linear/tree-like dependencies dynamically
  const dependencies = {};
  concepts.forEach((concept, index) => {
    if (index === 0) {
      dependencies[concept] = [];
    } else if (index === 1 || index === 2) {
      dependencies[concept] = [concepts[0]];
    } else if (index === 3) {
      dependencies[concept] = [concepts[1], concepts[2]];
    } else {
      dependencies[concept] = [concepts[index - 1]];
    }
  });

  // Build concept labels automatically
  const conceptLabels = {};
  concepts.forEach(concept => {
    conceptLabels[concept] = concept
      .split("_")
      .map(word => {
        // Special abbreviations mapping
        const upper = word.toUpperCase();
        if (["IT", "AI", "ERP", "GIS", "SDLC", "CT", "MRI", "PLC", "CAC", "LTV", "ROI", "PPC", "SEM", "SEO", "DFS", "BFS", "LIFO", "FIFO", "OOP", "DSA", "BKT", "LU", "QR", "SVD", "VSEPR", "SOMATIC", "MITOSIS", "MITOTIC", "MRNA", "DNA", "SN1", "SN2", "E1", "E2", "GDP", "CPI"].includes(upper)) {
          return upper;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });

  // Build concept descriptions automatically
  const conceptDescriptions = {};
  concepts.forEach(concept => {
    const label = conceptLabels[concept];
    conceptDescriptions[concept] = `Analyze the core theories, processes, and applications of ${label} within the field of ${sub.name}.`;
  });

  // Merge into SUBJECTS
  SUBJECTS[sub.id] = {
    name: sub.name,
    icon: sub.icon,
    isCoding: sub.isCoding,
    category: sub.category,
    concepts: concepts,
    dependencies: dependencies,
    conceptLabels: conceptLabels,
    conceptDescriptions: conceptDescriptions
  };
});

/**
 * Returns the subject configuration by ID
 */
export function getSubjectConfig(subjectId) {
  return SUBJECTS[subjectId] || SUBJECTS.python;
}

/**
 * Generates an offline question based on the subject and concept using structural templates.
 * This ensures full offline usability across all 20 subjects.
 */
export function generateOfflineQuestion(subjectId, concept, difficulty) {
  const conf = getSubjectConfig(subjectId);
  const label = conf.conceptLabels[concept] || concept;
  const desc = conf.conceptDescriptions[concept] || "";

  // 1. Check if we have hardcoded Python questions to keep Python extremely high fidelity
  if (subjectId === "python") {
    // Import questions list dynamically or use a subset
    const pythonQuestions = [
      {
        concept: "variables",
        difficulty: "easy",
        text: "Which of the following is a valid variable name in Python?",
        options: ["2_my_var", "my-var", "my_var_2", "my var"],
        correctIndex: 2,
        explanation: "Python variables must start with a letter/underscore and contain alphanumeric characters/underscores."
      },
      {
        concept: "variables",
        difficulty: "medium",
        text: "What is the output of:\n```python\nx = 5\ny = x\nx = 10\nprint(y)\n```",
        options: ["5", "10", "NameError", "None"],
        correctIndex: 0,
        explanation: "Integers are immutable. `y` points to the object `5`. Modifying `x` doesn't change `y`."
      },
      {
        concept: "data_types",
        difficulty: "easy",
        text: "What is the data type of the expression `x = 5.0` in Python?",
        options: ["int", "float", "double", "str"],
        correctIndex: 1,
        explanation: "Python assigns decimal numbers to the float class."
      },
      {
        concept: "data_types",
        difficulty: "medium",
        text: "What is the main difference between lists and tuples in Python?",
        options: ["Lists can only contain ints.", "Lists are mutable, while tuples are immutable.", "Tuples use square brackets.", "Tuples take twice as much memory."],
        correctIndex: 1,
        explanation: "Lists are mutable and can be modified. Tuples are immutable."
      },
      {
        concept: "conditions",
        difficulty: "easy",
        text: "Which keyword is used in Python to check a secondary condition?",
        options: ["else if", "elseif", "elif", "otherwise"],
        correctIndex: 2,
        explanation: "Python uses 'elif' for chained branches."
      },
      {
        concept: "conditions",
        difficulty: "medium",
        text: "What evaluates from `bool([])`?",
        options: ["True", "False", "None", "TypeError"],
        correctIndex: 1,
        explanation: "Empty lists evaluate to False."
      },
      {
        concept: "loops",
        difficulty: "easy",
        text: "What is the output of `list(range(2, 5))`?",
        options: ["[2, 3, 4, 5]", "[2, 3, 4]", "[3, 4]", "[2, 4]"],
        correctIndex: 1,
        explanation: "Range counts up to, but not including, the stop value."
      },
      {
        concept: "loops",
        difficulty: "medium",
        text: "Which statement immediately exits a loop?",
        options: ["continue", "pass", "break", "exit"],
        correctIndex: 2,
        explanation: "The 'break' statement terminates the current loop."
      },
      {
        concept: "functions",
        difficulty: "easy",
        text: "Which keyword defines a function?",
        options: ["function", "def", "func", "define"],
        correctIndex: 1,
        explanation: "Python uses 'def' for function declarations."
      },
      {
        concept: "functions",
        difficulty: "medium",
        text: "What prints from: `def f(a, b=[]): b.append(a); return b` called twice as `f(1)` then `f(2)`?",
        options: ["[2]", "[1, 2]", "[1], [2]", "TypeError"],
        correctIndex: 1,
        explanation: "Mutable default parameters are evaluated once and shared across calls."
      },
      {
        concept: "dictionaries",
        difficulty: "easy",
        text: "How do you access key 'k' in `d = {'k': 'v'}`?",
        options: ["d.k", "d['k']", "d(k)", "d.get(v)"],
        correctIndex: 1,
        explanation: "Brackets '[]' pull key values from dictionaries."
      },
      {
        concept: "dictionaries",
        difficulty: "medium",
        text: "What exception occurs when looking up a missing key with `[]`?",
        options: ["LookupError", "KeyError", "ValueError", "None"],
        correctIndex: 1,
        explanation: "Brackets throw a KeyError when the key is missing."
      },
      {
        concept: "oop",
        difficulty: "easy",
        text: "What is the standard constructor method name in Python?",
        options: ["__init__", "__new__", "construct", "init"],
        correctIndex: 0,
        explanation: "__init__ is called when instantiating new class structures."
      },
      {
        concept: "oop",
        difficulty: "medium",
        text: "How does a subclass call parent init?",
        options: ["parent.__init__()", "super().__init__()", "self.super()", "base()"],
        correctIndex: 1,
        explanation: "super() accesses parent instance methods."
      }
    ];

    const match = pythonQuestions.find(q => q.concept === concept && q.difficulty === difficulty) || 
                  pythonQuestions.find(q => q.concept === concept);
    if (match) return { id: `q_offline_${concept}_${difficulty}`, ...match };
  }

  // 2. Procedural template generation for all other subjects/topics
  // Easy template
  if (difficulty === "easy") {
    return {
      id: `q_offline_${subjectId}_${concept}_easy`,
      concept,
      difficulty,
      text: `In **${conf.name}**, what is the primary role or definition of **${label}**?`,
      options: [
        `${desc}`,
        `It represents an advanced optimization algorithm used in parallel processing.`,
        `It is a deprecated mechanism replaced by legacy interfaces in newer revisions.`,
        `It is a security framework restricting user permissions to data access.`
      ],
      correctIndex: 0,
      explanation: `Correct! ${label} is fundamentally defined as: ${desc}`
    };
  }
  // Medium template
  if (difficulty === "medium") {
    return {
      id: `q_offline_${subjectId}_${concept}_medium`,
      concept,
      difficulty,
      text: `Consider the application of **${label}** in ${conf.name}. Which of the following statements represents a common mistake or misconception regarding this topic?`,
      options: [
        `Confusing it with concepts that share similar terminology, though their structural implementation and constraints are entirely different.`,
        `Assuming that it cannot be modified once initialized, when in fact it is fully dynamic and mutable.`,
        `Believing that it operates in constant time O(1) in all scenarios, ignoring scale overheads.`,
        `Thinking it requires specialized hardware configurations to execute basic operations.`
      ],
      correctIndex: 0,
      explanation: `Correct! A key misconception for ${label} involves confusing its theoretical behavior with related concepts without checking its core limitations: ${desc}`
    };
  }
  // Hard template
  return {
    id: `q_offline_${subjectId}_${concept}_hard`,
    concept,
    difficulty,
    text: `Analyze the architectural constraints of **${label}** in ${conf.name}. Which of the following options represents the most significant trade-off when implementing this topic at scale?`,
    options: [
      `Increased structural complexity and debugging overhead in exchange for highly optimized runtime performance and data modularity.`,
      `Complete loss of compatibility with legacy databases.`,
      `Extreme memory consumption scaling exponentially O(2^N) under ordinary iterations.`,
      `Frequent type conversion errors requiring mandatory runtime assertions.`
    ],
    correctIndex: 0,
    explanation: `Correct! Working with ${label} at scale requires balancing implementation complexity against efficiency: ${desc}`
  };
}

/**
 * Returns procedural practice questions for the sandbox.
 */
export function getOfflinePracticeExercise(subjectId, concept) {
  const conf = getSubjectConfig(subjectId);
  const label = conf.conceptLabels[concept] || concept;
  const desc = conf.conceptDescriptions[concept] || "";

  // 1. If subject requires coding, return editor requirements
  if (conf.isCoding) {
    if (subjectId === "python") {
      // Fallback coding instructions
      return {
        title: `Python ${label} Challenge`,
        description: `Write a short python statement to demonstrate **${label}**. Details: ${desc}`,
        startingCode: `# Write code here\n\n`,
        solutionCheck: (code) => code.trim().length > 10,
        hint: `Read the concept description: ${desc}`
      };
    }
    
    // JS, SQL, HTML
    return {
      title: `${conf.name} - ${label}`,
      description: `Implement a basic script or statement showcasing **${label}**. Task description: ${desc}`,
      startingCode: `// Enter syntax solution\n\n`,
      solutionCheck: (code) => code.trim().length > 8,
      hint: `Recall that ${label} deals with: ${desc}`
    };
  }

  // 2. If subject is conceptual (Humanities / STEM) - returns short answer criteria
  return {
    title: `${conf.name} - ${label} Conceptual Check`,
    description: `Explain the core principles of **${label}** in your own words. Give a specific example or explain its role in **${conf.name}**.`,
    startingCode: "Type your conceptual explanation here (minimum 15 characters)...",
    solutionCheck: (text) => {
      // Simple regex check: must be at least 15 characters and contain key topic terms
      const clean = text.toLowerCase().trim();
      const minimumLength = clean.length >= 15;
      
      // Look for topic keywords (e.g. for vectors: 'vector', 'space', 'magnitude', 'direction')
      const keywords = label.toLowerCase().split(/[ &\-_]+/);
      const matchesKeyword = keywords.some(kw => kw.length > 3 && clean.includes(kw)) || clean.length > 30;
      
      return minimumLength && matchesKeyword;
    },
    hint: `Be sure to reference how this links to the definition: "${desc}"`
  };
}
