// Python Programming Questions Database
// Maps questions to concepts: variables, data_types, conditions, loops, functions, dictionaries, oop.
// Contains both assessment and practice questions across easy, medium, and hard difficulties.

export const questions = [
  // --- VARIABLES ---
  {
    id: "var_e1",
    concept: "variables",
    difficulty: "easy",
    text: "Which of the following is a valid variable name in Python?",
    options: [
      "2_learner_twin",
      "learner-twin",
      "learner_twin_2",
      "learner twin"
    ],
    correctIndex: 2,
    explanation: "Python variable names must start with a letter or an underscore, and can only contain letters, numbers, and underscores (no hyphens, spaces, or leading numbers)."
  },
  {
    id: "var_m1",
    concept: "variables",
    difficulty: "medium",
    text: "What will be the output of this Python code snippet?\n\n```python\na = 5\nb = a\na = 10\nprint(b)\n```",
    options: [
      "5",
      "10",
      "NameError",
      "None"
    ],
    correctIndex: 0,
    explanation: "Integers are immutable. When `b = a` is executed, `b` refers to the integer object `5`. Reassigning `a = 10` changes the reference of `a` but does not affect the object `5` or variable `b`."
  },
  {
    id: "var_h1",
    concept: "variables",
    difficulty: "hard",
    text: "What occurs in memory when you execute the statement `x = [1, 2]` followed by `y = x`?",
    options: [
      "Python creates a full duplicate copy of the list in a new memory address and assigns it to y.",
      "Both x and y point to the exact same list object in memory; changes to y will affect x.",
      "x and y become linked constants and cannot be modified.",
      "Python raises a SyntaxError because list assignment must use the copy() method."
    ],
    correctIndex: 1,
    explanation: "Lists are mutable objects. The assignment `y = x` copies the *reference* to the list, not the list itself. Therefore, both variables refer to the same object in memory, and altering one alters the other."
  },

  // --- DATA TYPES ---
  {
    id: "dtype_e1",
    concept: "data_types",
    difficulty: "easy",
    text: "What is the data type of the expression `x = 5.0` in Python?",
    options: [
      "int",
      "float",
      "double",
      "str"
    ],
    correctIndex: 1,
    explanation: "In Python, any numeric value containing a decimal point is represented by the `float` (floating-point number) data type."
  },
  {
    id: "dtype_m1",
    concept: "data_types",
    difficulty: "medium",
    text: "What is the primary difference between a list and a tuple in Python?",
    options: [
      "Lists can only contain integers, while tuples can contain any data type.",
      "Lists are mutable (can be changed after creation), whereas tuples are immutable (cannot be changed).",
      "Tuples use brackets `[]` and lists use parentheses `()`.",
      "Tuples are faster to index but take up twice as much RAM."
    ],
    correctIndex: 1,
    explanation: "Lists (created with `[]`) are mutable, allowing additions, removals, and replacements. Tuples (created with `()`) are immutable, meaning their elements cannot be changed once defined."
  },
  {
    id: "dtype_h1",
    concept: "data_types",
    difficulty: "hard",
    text: "What will be the output of `type({1, 2, 2})`?",
    options: [
      "<class 'list'>",
      "<class 'dict'>",
      "<class 'set'>",
      "<class 'tuple'>"
    ],
    correctIndex: 2,
    explanation: "The curly braces `{}` containing values separated by commas without key-value colons denote a `set`. Sets automatically remove duplicates, so `{1, 2, 2}` evaluates to the set `{1, 2}` of class `set`."
  },

  // --- CONDITIONS ---
  {
    id: "cond_e1",
    concept: "conditions",
    difficulty: "easy",
    text: "Which keyword is used in Python to check a secondary condition if the initial 'if' condition is false?",
    options: [
      "else if",
      "elseif",
      "elif",
      "otherwise"
    ],
    correctIndex: 2,
    explanation: "Python uses `elif` (short for else if) to chain multiple conditional statements."
  },
  {
    id: "cond_m1",
    concept: "conditions",
    difficulty: "medium",
    text: "What will be printed by this code?\n\n```python\nx = []\nif x:\n    print(\"Full\")\nelse:\n    print(\"Empty\")\n```",
    options: [
      "Full",
      "Empty",
      "SyntaxError",
      "Nothing prints"
    ],
    correctIndex: 1,
    explanation: "In Python, empty collections (like the empty list `[]`), empty strings, `0`, and `None` evaluate to `False` in conditional contexts. This is known as being 'falsy'."
  },
  {
    id: "cond_h1",
    concept: "conditions",
    difficulty: "hard",
    text: "Evaluate the output of the following boolean logic expression:\n\n```python\na = True\nb = False\nc = True\nresult = a or b and not c\nprint(result)\n```",
    options: [
      "True",
      "False",
      "None",
      "SyntaxError"
    ],
    correctIndex: 0,
    explanation: "In Python, operator precedence dictates that `not` is evaluated first, then `and`, and finally `or`. So, `not c` is `False`. Then `b and False` is `False`. Finally, `a or False` is `True`."
  },

  // --- LOOPS ---
  {
    id: "loop_e1",
    concept: "loops",
    difficulty: "easy",
    text: "What is the output of `list(range(2, 6))`?",
    options: [
      "[2, 3, 4, 5, 6]",
      "[2, 3, 4, 5]",
      "[3, 4, 5, 6]",
      "[2, 4, 6]"
    ],
    correctIndex: 1,
    explanation: "The `range(start, stop)` function generates integers from `start` up to, but not including, `stop`. Thus, `range(2, 6)` yields 2, 3, 4, and 5."
  },
  {
    id: "loop_m1",
    concept: "loops",
    difficulty: "medium",
    text: "Which statement immediately exits the current loop, skipping any remaining iterations?",
    options: [
      "continue",
      "pass",
      "break",
      "return"
    ],
    correctIndex: 2,
    explanation: "The `break` statement terminates the loop entirely. The `continue` statement skips only the current iteration and moves to the next one."
  },
  {
    id: "loop_h1",
    concept: "loops",
    difficulty: "hard",
    text: "What is the output of this nested loop structure?\n\n```python\ncount = 0\nfor i in range(2):\n    for j in range(3):\n        if i == j:\n            continue\n        count += 1\nprint(count)\n```",
    options: [
      "6",
      "4",
      "2",
      "5"
    ],
    correctIndex: 1,
    explanation: "Outer loop runs `i = 0, 1`. Inner loop runs `j = 0, 1, 2` for each `i`.\nWhen `i=0`:\n- `j=0`: `i==j` matches, skips (`count=0`)\n- `j=1`: count incremented (`count=1`)\n- `j=2`: count incremented (`count=2`)\nWhen `i=1`:\n- `j=0`: count incremented (`count=3`)\n- `j=1`: `i==j` matches, skips (`count=3`)\n- `j=2`: count incremented (`count=4`). Total count is 4."
  },

  // --- FUNCTIONS ---
  {
    id: "func_e1",
    concept: "functions",
    difficulty: "easy",
    text: "How do you define a function in Python?",
    options: [
      "function my_func():",
      "def my_func():",
      "func my_func():",
      "void my_func():"
    ],
    correctIndex: 1,
    explanation: "Python uses the `def` keyword, followed by the function name, parentheses for arguments, and a colon."
  },
  {
    id: "func_m1",
    concept: "functions",
    difficulty: "medium",
    text: "What will print from executing this code?\n\n```python\ndef add_item(val, items=[]):\n    items.append(val)\n    return items\n\nadd_item(1)\nprint(add_item(2))\n```",
    options: [
      "[2]",
      "[1, 2]",
      "TypeError",
      "[1], [2]"
    ],
    correctIndex: 1,
    explanation: "Default arguments in Python are evaluated once when the function is defined, not each time it is called. The mutable empty list `items=[]` is shared across calls. Thus, the second call appends `2` to the list that already contains `1`."
  },
  {
    id: "func_h1",
    concept: "functions",
    difficulty: "hard",
    text: "What is the output of this scoping demonstration?\n\n```python\nx = 10\ndef modifier():\n    global x\n    x = 20\n    y = 30\n\nmodifier()\nprint(x, 'y' in locals() or 'y' in globals())\n```",
    options: [
      "10 True",
      "20 False",
      "20 True",
      "10 False"
    ],
    correctIndex: 1,
    explanation: "The `global x` keyword binds the local variable `x` to the global scope, so `x = 20` alters the global variable. Variable `y` is local to the function scope and does not exist in either the global or local workspace after the function terminates, returning False."
  },

  // --- DICTIONARIES ---
  {
    id: "dict_e1",
    concept: "dictionaries",
    difficulty: "easy",
    text: "How do you access the value associated with the key 'model' in the dictionary `car = {'brand': 'Ford', 'model': 'Mustang'}`?",
    options: [
      "car.model",
      "car['model']",
      "car(model)",
      "car.get(Mustang)"
    ],
    correctIndex: 1,
    explanation: "Dictionary values are accessed by putting their corresponding key in square brackets: `dictionary_name[key]`."
  },
  {
    id: "dict_m1",
    concept: "dictionaries",
    difficulty: "medium",
    text: "What happens if you try to retrieve a key that does not exist in a dictionary using square brackets (e.g. `my_dict['missing_key']`)?",
    options: [
      "It returns None.",
      "It returns a blank string \"\".",
      "It throws a KeyError.",
      "It automatically creates the key with value 0."
    ],
    correctIndex: 2,
    explanation: "Attempting to access a non-existent key in a dictionary using brackets `[]` raises a `KeyError`. To avoid this, you can use the `.get('key', default_val)` method."
  },
  {
    id: "dict_h1",
    concept: "dictionaries",
    difficulty: "hard",
    text: "Which of the following data types CANNOT be used as a key in a Python dictionary?",
    options: [
      "float (e.g., 3.14)",
      "tuple (e.g., (1, 2))",
      "list (e.g., [1, 2])",
      "frozenset (e.g., frozenset({1, 2}))"
    ],
    correctIndex: 2,
    explanation: "Dictionary keys must be of an immutable, hashable type. Since lists are mutable (their contents can be updated), they are not hashable and cannot be used as dictionary keys, throwing a `TypeError`."
  },

  // --- OOP (OBJECT-ORIENTED PROGRAMMING) ---
  {
    id: "oop_e1",
    concept: "oop",
    difficulty: "easy",
    text: "What is the standard name of the method used to initialize an object's state in a Python class?",
    options: [
      "__new__",
      "__init__",
      "construct",
      "main"
    ],
    correctIndex: 1,
    explanation: "The `__init__` method serves as the class constructor in Python. It is called automatically when a new instance is instantiated."
  },
  {
    id: "oop_m1",
    concept: "oop",
    difficulty: "medium",
    text: "How does a subclass call the constructor of its parent class in Python?",
    options: [
      "parent.__init__(self)",
      "super().__init__()",
      "self.parent.__init__()",
      "base().__init__()"
    ],
    correctIndex: 1,
    explanation: "The `super()` function returns a proxy object that delegates method calls to a parent or sibling class, allowing you to invoke the parent constructor via `super().__init__()`."
  },
  {
    id: "oop_h1",
    concept: "oop",
    difficulty: "hard",
    text: "What is the term and behavior for when a child class implements a method with the exact same name and parameters as a method in its parent class?",
    options: [
      "Method Overloading - both methods exist and are chosen depending on the argument data types.",
      "Method Overriding - the child class's method replaces the parent class's behavior for child instances.",
      "Polymorphism Error - Python compiler throws a SyntaxError warning.",
      "Encapsulation - the child hides parent scopes."
    ],
    correctIndex: 1,
    explanation: "This is known as Method Overriding. When a method in a child class overrides a parent class method, calls to that method name on a child instance invoke the child's implementation."
  }
];

// Returns assessment questions (one easy for each concept to evaluate baseline knowledge)
export function getAssessmentQuestions() {
  const selected = [];
  const concepts = ["variables", "data_types", "conditions", "loops", "functions", "dictionaries", "oop"];
  
  concepts.forEach(concept => {
    // Pick the easy question for the initial assessment
    const q = questions.find(item => item.concept === concept && item.difficulty === "easy");
    if (q) selected.push(q);
  });
  
  return selected;
}

// Selects a practice question based on concept and target difficulty
export function getPracticeQuestion(concept, difficulty) {
  const filtered = questions.filter(item => item.concept === concept && item.difficulty === difficulty);
  if (filtered.length === 0) {
    // Fallback: pick any question for this concept
    const any = questions.filter(item => item.concept === concept);
    return any[Math.floor(Math.random() * any.length)];
  }
  return filtered[Math.floor(Math.random() * filtered.length)];
}
