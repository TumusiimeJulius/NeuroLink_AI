(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const q={python:{name:"Python Programming",icon:"🐍",isCoding:!0,concepts:["variables","data_types","conditions","loops","functions","dictionaries","oop"],dependencies:{variables:[],data_types:["variables"],conditions:["variables"],loops:["conditions"],functions:["loops","variables"],dictionaries:["data_types"],oop:["functions","dictionaries"]},conceptLabels:{variables:"Variables & Naming",data_types:"Data Types & Tuples",conditions:"Conditions & Branching",loops:"Loops & Iterations",functions:"Functions & Scope",dictionaries:"Dictionaries & Collections",oop:"Object-Oriented Programming"},conceptDescriptions:{variables:"Store data references using identifiers and the assignment operator '='.",data_types:"Work with numbers, strings, lists (mutable sequences), and tuples (immutable sequences).",conditions:"Control logical program execution branches with if, elif, and else.",loops:"Repeat executions using for (for ranges or lists) and while loops.",functions:"Encapsulate reusable instruction blocks with scopes and parameters.",dictionaries:"Use key-value mappings to index data objects with high-speed hashing.",oop:"Construct object templates using classes, initializers, methods, and inheritances."}},javascript:{name:"JavaScript Web Development",icon:"🌐",isCoding:!0,concepts:["scopes","types_objects","control_flow","closures","dom_manipulation","async_js"],dependencies:{scopes:[],types_objects:["scopes"],control_flow:["scopes"],closures:["scopes","types_objects"],dom_manipulation:["control_flow"],async_js:["closures","dom_manipulation"]},conceptLabels:{scopes:"Variables & Scopes",types_objects:"Data Types & Objects",control_flow:"Control Flow & Branches",closures:"Functions & Closures",dom_manipulation:"DOM Manipulation",async_js:"Promises & Async JS"},conceptDescriptions:{scopes:"Understand variable declarations (var, let, const) and block scopes.",types_objects:"Differentiate primitives from reference object lists and prototypes.",control_flow:"Implement logical branches, comparisons, loops, and switches.",closures:"Construct nested functions retaining references to outer variable scopes.",dom_manipulation:"Access, modify, and listen to elements inside the HTML DOM tree.",async_js:"Coordinate async tasks using callbacks, Promises, and async/await syntax."}},html_css:{name:"HTML & CSS Layouts",icon:"🎨",isCoding:!0,concepts:["dom_structure","css_selectors","box_model","flexbox_grid","responsive_design","transitions"],dependencies:{dom_structure:[],css_selectors:["dom_structure"],box_model:["css_selectors"],flexbox_grid:["box_model"],responsive_design:["flexbox_grid"],transitions:["box_model"]},conceptLabels:{dom_structure:"HTML DOM Structure",css_selectors:"CSS Selectors & Cascade",box_model:"CSS Box Model",flexbox_grid:"Flexbox & Grid Layouts",responsive_design:"Responsive Web Design",transitions:"CSS Transitions & Anim"},conceptDescriptions:{dom_structure:"Design page structures using semantic HTML tags and parent-child relations.",css_selectors:"Style elements applying tags, classes, IDs, pseudo-selectors, and specificity rules.",box_model:"Control padding, margins, borders, widths, and structural sizing calculations.",flexbox_grid:"Distribute elements dynamically using CSS Flexbox rows and Grid cells.",responsive_design:"Build mobile-friendly screens using media queries and viewport scaling.",transitions:"Animate interface changes with CSS duration variables and custom keyframes."}},sql:{name:"SQL Databases",icon:"📊",isCoding:!0,concepts:["db_basics","select_queries","where_filters","aggregates","joins","grouping"],dependencies:{db_basics:[],select_queries:["db_basics"],where_filters:["select_queries"],aggregates:["select_queries"],joins:["where_filters"],grouping:["aggregates"]},conceptLabels:{db_basics:"Database Basics & Tables",select_queries:"SELECT & Projection",where_filters:"WHERE Filtering & Logic",aggregates:"Aggregate Functions",joins:"JOIN Tables & Relations",grouping:"GROUP BY & HAVING"},conceptDescriptions:{db_basics:"Understand relational models, schemas, keys (primary, foreign), and rows.",select_queries:"Extract specific columns from table entities using SELECT queries.",where_filters:"Narrow down records using comparative operators and boolean conditions.",aggregates:"Calculate averages, sums, counts, minimums, and maximums across datasets.",joins:"Merge datasets from multiple tables using INNER, LEFT, and RIGHT joins.",grouping:"Summarize records in groups and apply post-filters using HAVING."}},dsa:{name:"Data Structures & Algorithms",icon:"🧩",isCoding:!0,concepts:["complexity","lists_arrays","stacks_queues","trees_graphs","sorting","dynamic_prog"],dependencies:{complexity:[],lists_arrays:["complexity"],stacks_queues:["lists_arrays"],trees_graphs:["lists_arrays"],sorting:["complexity"],dynamic_prog:["trees_graphs","sorting"]},conceptLabels:{complexity:"Big O Time Complexity",lists_arrays:"Arrays & Linked Lists",stacks_queues:"Stacks & Queues",trees_graphs:"Trees & Graphs",sorting:"Sorting Algorithms",dynamic_prog:"Dynamic Programming"},conceptDescriptions:{complexity:"Analyze time and space scalability of algorithm scripts using Big O notation.",lists_arrays:"Contrast static arrays with dynamic references in singly-linked lists.",stacks_queues:"Implement LIFO (Last-In-First-Out) stacks and FIFO (First-In-First-Out) queues.",trees_graphs:"Traverse hierarchical tree nodes and graph edges using DFS and BFS.",sorting:"Contrast O(N^2) bubble/selection sorts with O(N log N) quick/merge sorts.",dynamic_prog:"Optimize recursion using memoization and tabular bottom-up solutions."}},linear_algebra:{name:"Linear Algebra",icon:"📐",isCoding:!1,concepts:["vectors","matrices","systems_eq","determinants","eigenvalues","decompositions"],dependencies:{vectors:[],matrices:["vectors"],systems_eq:["matrices"],determinants:["matrices"],eigenvalues:["systems_eq","determinants"],decompositions:["eigenvalues"]},conceptLabels:{vectors:"Vectors & Linear Spaces",matrices:"Matrices & Operations",systems_eq:"Systems of Linear Equations",determinants:"Determinants & Inverses",eigenvalues:"Eigenvalues & Eigenvectors",decompositions:"Matrix Decompositions"},conceptDescriptions:{vectors:"Understand vector operations, spans, linear independence, and basis vectors.",matrices:"Perform matrix multiplications, transposes, and coordinate transformations.",systems_eq:"Solve linear equations using Gaussian elimination and row-reduction.",determinants:"Calculate matrix determinants, evaluate invertibility, and apply Cramer's rule.",eigenvalues:"Determine characteristic equations, eigenvalues, and scaling eigen-directions.",decompositions:"Factorize matrices using LU decomposition, QR decomposition, and SVD."}},calculus:{name:"Calculus",icon:"📈",isCoding:!1,concepts:["limits","derivatives","diff_rules","integrals","fundamental_thm","differential_eq"],dependencies:{limits:[],derivatives:["limits"],diff_rules:["derivatives"],integrals:["limits"],fundamental_thm:["derivatives","integrals"],differential_eq:["fundamental_thm"]},conceptLabels:{limits:"Limits & Continuity",derivatives:"The Concept of Derivative",diff_rules:"Rules of Differentiation",integrals:"Integrals & Area",fundamental_thm:"Fundamental Theorem of Calc",differential_eq:"Differential Equations"},conceptDescriptions:{limits:"Determine numerical approximations, one-sided limits, and continuity boundaries.",derivatives:"Calculate instantaneous rates of change and find slopes of tangent lines.",diff_rules:"Apply power, product, quotient, and chain rules to algebraic functions.",integrals:"Evaluate Riemann sums, areas under curves, and definite/indefinite integrations.",fundamental_thm:"Link differentiation and integration via the Fundamental Theorem of Calculus.",differential_eq:"Solve separable first-order differential equations and model rates of change."}},physics:{name:"Classical Physics",icon:"⚛️",isCoding:!1,concepts:["kinematics","newton_laws","work_energy","momentum","rotational","gravitation"],dependencies:{kinematics:[],newton_laws:["kinematics"],work_energy:["newton_laws"],momentum:["newton_laws"],rotational:["kinematics","newton_laws"],gravitation:["work_energy"]},conceptLabels:{kinematics:"Kinematics in 1D & 2D",newton_laws:"Newton's Laws of Motion",work_energy:"Work, Energy & Power",momentum:"Linear Momentum & Collisions",rotational:"Rotational Dynamics",gravitation:"Universal Gravitation"},conceptDescriptions:{kinematics:"Model displacements, velocities, and constant acceleration vectors.",newton_laws:"Analyze force interactions, friction boundaries, and free-body diagrams.",work_energy:"Apply kinetic and potential energy conversions and check work theorems.",momentum:"Model impulses, conservation of momentum, and elastic/inelastic collisions.",rotational:"Evaluate torques, angular accelerations, and moments of inertia.",gravitation:"Verify Kepler's laws and calculate gravitational potentials between bodies."}},chemistry:{name:"General Chemistry",icon:"🧪",isCoding:!1,concepts:["atomic_structure","chemical_bonding","stoichiometry","gases","thermo","equilibrium"],dependencies:{atomic_structure:[],chemical_bonding:["atomic_structure"],stoichiometry:["atomic_structure"],gases:["stoichiometry"],thermo:["chemical_bonding"],equilibrium:["stoichiometry","thermo"]},conceptLabels:{atomic_structure:"Atomic Structure & Orbitals",chemical_bonding:"Chemical Bonding & VSEPR",stoichiometry:"Stoichiometry & Mole Calc",gases:"Gases & Gas Laws",thermo:"Chemical Thermodynamics",equilibrium:"Chemical Equilibrium"},conceptDescriptions:{atomic_structure:"Analyze subatomic particles, quantum numbers, and electron configurations.",chemical_bonding:"Contrast ionic, covalent, and metallic bonds and identify molecular shapes.",stoichiometry:"Balance reactions and calculate yields using mole conversion factors.",gases:"Determine gas behaviors using the Ideal Gas Law and Dalton's partial pressures.",thermo:"Evaluate chemical reactions using enthalpies, entropies, and Gibbs free energies.",equilibrium:"Apply Le Chatelier's principle and calculate equilibrium constants (Kc, Kp)."}},biology:{name:"Molecular Biology",icon:"🧬",isCoding:!1,concepts:["cells","dna_replication","protein_synthesis","cell_division","genetics","evolution"],dependencies:{cells:[],dna_replication:["cells"],protein_synthesis:["dna_replication"],cell_division:["cells"],genetics:["cell_division","protein_synthesis"],evolution:["genetics"]},conceptLabels:{cells:"Cell Structure & Organelles",dna_replication:"DNA Structure & Replication",protein_synthesis:"Transcription & Translation",cell_division:"Mitosis & Meiosis",genetics:"Mendelian Genetics",evolution:"Natural Selection & Evolution"},conceptDescriptions:{cells:"Contrast prokaryotic structures and identify eukaryotic organelle functions.",dna_replication:"Trace double-helix designs and enzymatic replication steps (helicase, polymerase).",protein_synthesis:"Transcribe DNA into mRNA and translate codons into peptide sequences.",cell_division:"Map somatic mitosis phases and analyze chromosome splits in haploid meiosis.",genetics:"Predict allele distributions using Punnett squares and check dominance laws.",evolution:"Evaluate genetic mutations, gene pools, fitness profiles, and natural selections."}},organic_chemistry:{name:"Organic Chemistry",icon:"🧪",isCoding:!1,concepts:["hybridization","stereochemistry","nucleophilic","eliminations","alcohols","aromatics"],dependencies:{hybridization:[],stereochemistry:["hybridization"],nucleophilic:["stereochemistry"],eliminations:["nucleophilic"],alcohols:["nucleophilic"],aromatics:["hybridization"]},conceptLabels:{hybridization:"Structure & Hybridization",stereochemistry:"Stereochemistry & Isomers",nucleophilic:"Nucleophilic Substitutions",eliminations:"Elimination Reactions",alcohols:"Alcohols & Ethers",aromatics:"Aromatic Compounds"},conceptDescriptions:{hybridization:"Analyze carbon hybridizations (sp3, sp2, sp) and sigma/pi bonds.",stereochemistry:"Identify chiral centers, enantiomers, diastereomers, and R/S designations.",nucleophilic:"Contrast SN1 and SN2 reaction mechanisms, kinetics, and stereochemical outcomes.",eliminations:"Contrast E1 and E2 mechanisms and predict Zaitsev/Hofmann products.",alcohols:"Evaluate syntheses, acidities, oxidations, and substitutions of alcohol groups.",aromatics:"Verify Huckel's rule and analyze electrophilic aromatic substitutions."}},environmental_science:{name:"Environmental Science",icon:"🌱",isCoding:!1,concepts:["ecosystems","biodiversity","populations","energy_resources","climate","conservation"],dependencies:{ecosystems:[],biodiversity:["ecosystems"],populations:["ecosystems"],energy_resources:["populations"],climate:["energy_resources"],conservation:["biodiversity","climate"]},conceptLabels:{ecosystems:"Ecosystem Dynamics",biodiversity:"Biodiversity & Species",populations:"Population Ecology",energy_resources:"Energy Resources & Use",climate:"Global Climate Change",conservation:"Conservation Biology"},conceptDescriptions:{ecosystems:"Analyze food webs, trophic levels, biogeochemical cycles, and primary productivity.",biodiversity:"Evaluate genetic, species, and ecosystem diversities and ecological niches.",populations:"Evaluate carrying capacities, growth models (logistic/exponential), and r/K selection.",energy_resources:"Contrast fossil fuels with renewable alternatives and analyze power efficiencies.",climate:"Trace greenhouse effects, global warming impacts, and carbon output levels.",conservation:"Implement ecosystem restorations, habitat protections, and policy controls."}},history:{name:"World History",icon:"📖",isCoding:!1,concepts:["french_rev","industrialization","ww1","ww2","cold_war","globalization"],dependencies:{french_rev:[],industrialization:["french_rev"],ww1:["industrialization"],ww2:["ww1"],cold_war:["ww2"],globalization:["cold_war"]},conceptLabels:{french_rev:"French Revolution & Napoleonic Era",industrialization:"Industrial Revolution & Marxism",ww1:"Imperialism & World War I",ww2:"Rise of Fascism & World War II",cold_war:"Bipolar World & the Cold War",globalization:"Globalization & Digital Age"},conceptDescriptions:{french_rev:"Analyze causes of 1789 revolts, Reign of Terror, and Napoleonic expansions.",industrialization:"Trace mechanical developments, urbanization spikes, and Marx's labor theories.",ww1:"Analyze colonizations, alliance systems, assassination sparks, and trench warfare.",ww2:"Analyze Treaty of Versailles failures, Axis expansions, and postwar block divisions.",cold_war:"Model containment policies, proxy wars (Korea, Vietnam), and space races.",globalization:"Analyze corporate integrations, free trade pacts, and modern web connectivity."}},english:{name:"English Grammar & Writing",icon:"✍️",isCoding:!1,concepts:["parts_of_speech","clauses","punctuation","agreement","voice","rhetoric"],dependencies:{parts_of_speech:[],clauses:["parts_of_speech"],punctuation:["clauses"],agreement:["parts_of_speech"],voice:["clauses"],rhetoric:["agreement","voice"]},conceptLabels:{parts_of_speech:"Parts of Speech & Functions",clauses:"Sentence Clauses & Structure",punctuation:"Punctuation Rules",agreement:"Subject-Verb Agreement",voice:"Active vs Passive Voice",rhetoric:"Rhetorical Devices & Style"},conceptDescriptions:{parts_of_speech:"Differentiate nouns, verbs, adjectives, adverbs, prepositions, and conjunctions.",clauses:"Differentiate independent, dependent, relative, and adverbial clauses in sentences.",punctuation:"Master commas, semicolons, colons, dashes, and parenthetical interruptions.",agreement:"Align complex subjects, singular indefinites, and collective nouns with verbs.",voice:"Convert passive constructions to active ones to improve clarity and vigor.",rhetoric:"Apply ethos, logos, pathos, metaphors, parallelism, and concise styles."}},macroeconomics:{name:"Macroeconomics",icon:"📉",isCoding:!1,concepts:["gdp","aggregate_flow","fiscal","monetary","unemployment","trade"],dependencies:{gdp:[],aggregate_flow:["gdp"],fiscal:["aggregate_flow"],monetary:["aggregate_flow"],unemployment:["gdp"],trade:["fiscal","monetary"]},conceptLabels:{gdp:"GDP & Inflation Indicators",aggregate_flow:"Aggregate Supply & Demand",fiscal:"Fiscal Policy & Budget",monetary:"Monetary Policy & Banking",unemployment:"Unemployment & Phillips Curve",trade:"International Trade & Forex"},conceptDescriptions:{gdp:"Calculate nominal/real GDP and analyze CPI inflation indexes.",aggregate_flow:"Model long-run/short-run equilibrium graphs and identify output gaps.",fiscal:"Apply tax multiplier scales and coordinate government budget expansions.",monetary:"Utilize central bank reserves, discount rates, and open-market bond trades.",unemployment:"Contrast frictional, structural, and cyclical unemployment rates.",trade:"Trace trade balances, currency exchange values, and tariff protections."}},microeconomics:{name:"Microeconomics",icon:"📈",isCoding:!1,concepts:["scarcity","supply_demand","elasticity","consumer_choice","production","market_structures"],dependencies:{scarcity:[],supply_demand:["scarcity"],elasticity:["supply_demand"],consumer_choice:["scarcity"],production:["supply_demand"],market_structures:["elasticity","production"]},conceptLabels:{scarcity:"Scarcity & Opportunity Cost",supply_demand:"Supply, Demand & Equilibrium",elasticity:"Elasticity of Demand & Supply",consumer_choice:"Consumer Choice & Utility",production:"Production & Cost Curves",market_structures:"Market Structures & Power"},conceptDescriptions:{scarcity:"Analyze resource choices, opportunity costs, and production possibilities.",supply_demand:"Model shifts in market curves, price ceilings, floors, and consumer/producer surpluses.",elasticity:"Calculate price elasticities, cross-elasticities, and check tax incidence bounds.",consumer_choice:"Evaluate budget constraints, marginal utilities, and indifference curves.",production:"Model short-run and long-run costs, checks dimishing returns, and scale efficiencies.",market_structures:"Analyze perfect competition, monopolies, oligopolies, and monopolistic dynamics."}},psychology:{name:"Introduction to Psychology",icon:"🧠",isCoding:!1,concepts:["history","neurobiology","perception","learning","cognitive","personality"],dependencies:{history:[],neurobiology:["history"],perception:["neurobiology"],learning:["history"],cognitive:["perception","learning"],personality:["cognitive"]},conceptLabels:{history:"History & Research Methods",neurobiology:"Neurobiology & Brain Functions",perception:"Sensation & Perception",learning:"Learning Theories",cognitive:"Memory & Cognitive Processes",personality:"Personality Theories"},conceptDescriptions:{history:"Contrast behaviorism, psychoanalysis, and cognitive paradigms, and analyze experiments.",neurobiology:"Trace neuron transmissions, neurotransmitter bindings, and brain lobe specializations.",perception:"Evaluate sensory receptors, signal transductions, and Gestalt grouping principles.",learning:"Contrast classical conditioning, operant schedules, and social observational learning.",cognitive:"Trace encoding, storage partitions (sensory, short, long), and retrieval cues.",personality:"Analyze psychodynamic, humanistic, trait-based, and social-cognitive profiles."}},art_history:{name:"Art History",icon:"🖼️",isCoding:!1,concepts:["antiquity","renaissance","baroque","impressionism","modernism","contemporary"],dependencies:{antiquity:[],renaissance:["antiquity"],baroque:["renaissance"],impressionism:["baroque"],modernism:["impressionism"],contemporary:["modernism"]},conceptLabels:{antiquity:"Classical Antiquity Art",renaissance:"Renaissance Art & Humanism",baroque:"Baroque & Rococo Styles",impressionism:"Impressionism & Realism",modernism:"Modernism & Avant-Garde",contemporary:"Contemporary Art Currents"},conceptDescriptions:{antiquity:"Analyze Greek sculpture ideals, Roman structural arches, and symbolic paintings.",renaissance:"Analyze linear perspectives, humanism details, and masters (da Vinci, Michelangelo).",baroque:"Analyze chiaroscuro light contrasts, dramatic movement details, and Rococo light styles.",impressionism:"Analyze plein-air brushstrokes, atmospheric lighting, and everyday scenes.",modernism:"Analyze Cubism abstractions, Surrealist dreams, and abstract expressionist canvases.",contemporary:"Analyze conceptual installations, performance art formats, and digital assets."}},geography:{name:"World Geography",icon:"🗺️",isCoding:!1,concepts:["landscapes","climate","demographics","urbanization","borders","resources"],dependencies:{landscapes:[],climate:["landscapes"],demographics:["climate"],urbanization:["demographics"],borders:["urbanization"],resources:["landscapes","borders"]},conceptLabels:{landscapes:"Physical Landscapes & Plate Tectonics",climate:"Climate Zones & Ecosystems",demographics:"Human Demographics & Migration",urbanization:"Urbanization & Infrastructure",borders:"Geopolitical Borders & Conflict",resources:"Resource Distribution & Global Trade"},conceptDescriptions:{landscapes:"Analyze plate boundaries, seismic zones, erosion patterns, and landform developments.",climate:"Analyze atmospheric circulation, rain shadow zones, and global biomes.",demographics:"Evaluate demographic transition stages, population pyramids, and push-pull migrations.",urbanization:"Analyze concentric zone models, infrastructure layouts, and megacity expansions.",borders:"Evaluate nation-state sovereignty, physical boundaries, and border disputes.",resources:"Map resource zones, analyze water/energy demands, and track supply chains."}},marketing:{name:"Digital Marketing",icon:"📈",isCoding:!1,concepts:["segmentation","marketing_mix","digital_ads","content_strategy","brand_equity","analytics"],dependencies:{segmentation:[],marketing_mix:["segmentation"],digital_ads:["marketing_mix"],content_strategy:["marketing_mix"],brand_equity:["content_strategy"],analytics:["digital_ads"]},conceptLabels:{segmentation:"Market Segmentation & Targeting",marketing_mix:"The 4 Ps & Marketing Mix",digital_ads:"Digital Advertising Channels",content_strategy:"Content Strategy & SEO",brand_equity:"Brand Equity & Positioning",analytics:"Marketing Analytics & KPIs"},conceptDescriptions:{segmentation:"Divide consumer audiences by demographics, behaviors, and psychographics.",marketing_mix:"Coordinate Product, Price, Place, and Promotion variables for target markets.",digital_ads:"Manage Search Engine Marketing (SEM), PPC bids, social ads, and retargetings.",content_strategy:"Optimize web search rankings (SEO) and coordinate content marketing campaigns.",brand_equity:"Manage brand associations, perceived qualities, positioning, and loyalties.",analytics:"Track click-through rates (CTR), conversion costs (CAC), lifespans (LTV), and ROIs."}}};q.python.category="coding";q.javascript.category="coding";q.html_css.category="coding";q.sql.category="coding";q.dsa.category="coding";q.linear_algebra.category="stem";q.calculus.category="stem";q.physics.category="stem";q.chemistry.category="stem";q.biology.category="stem";q.organic_chemistry.category="stem";q.environmental_science.category="stem";q.history.category="humanities";q.english.category="humanities";q.psychology.category="humanities";q.art_history.category="humanities";q.geography.category="humanities";q.macroeconomics.category="business";q.microeconomics.category="business";q.marketing.category="business";const oe=[{id:"computer_science",name:"Computer Science",icon:"💻",category:"coding",isCoding:!0,concepts:["programming_fundamentals","data_structures","computer_architecture","operating_systems","software_engineering","databases"]},{id:"it",name:"Information Technology (IT)",icon:"🔌",category:"coding",isCoding:!0,concepts:["computer_hardware","network_routing","operating_systems_admin","cloud_infrastructure","cybersecurity_basics","it_service_management"]},{id:"software_engineering",name:"Software Engineering",icon:"⚙️",category:"coding",isCoding:!0,concepts:["software_requirements","software_design","testing_quality_assurance","devops_pipelines","agile_methodology","software_maintenance"]},{id:"information_systems",name:"Information Systems",icon:"🗄️",category:"coding",isCoding:!0,concepts:["systems_analysis","database_management","enterprise_systems_erp","it_strategy","business_intelligence","e_business"]},{id:"data_science",name:"Data Science",icon:"📊",category:"coding",isCoding:!0,concepts:["exploratory_data_analysis","statistical_inference","machine_learning","data_visualization","big_data_processing","model_deployment"]},{id:"ai",name:"Artificial Intelligence (AI)",icon:"🤖",category:"coding",isCoding:!0,concepts:["search_algorithms","machine_learning","deep_neural_networks","natural_language_processing","computer_vision","ai_ethics"]},{id:"cybersecurity",name:"Cybersecurity",icon:"🛡️",category:"coding",isCoding:!0,concepts:["cryptography_basics","network_security","system_hardening","penetration_testing","incident_response","governance_compliance"]},{id:"business_administration",name:"Business Administration",icon:"💼",category:"business",isCoding:!1,concepts:["organizational_behavior","operations_management","strategic_management","business_ethics","marketing_principles","corporate_finance"]},{id:"accounting",name:"Accounting",icon:"🧾",category:"business",isCoding:!1,concepts:["financial_accounting","managerial_accounting","auditing_principles","taxation_laws","accounting_information_systems","cost_accounting"]},{id:"finance",name:"Finance",icon:"💵",category:"business",isCoding:!1,concepts:["time_value_of_money","financial_markets","investment_portfolio","corporate_finance","derivatives_risk","international_finance"]},{id:"economics",name:"Economics",icon:"📈",category:"business",isCoding:!1,concepts:["microeconomics_principles","macroeconomics_principles","econometrics","monetary_economics","development_economics","international_trade"]},{id:"law",name:"Law",icon:"⚖️",category:"humanities",isCoding:!1,concepts:["constitutional_law","contract_law","tort_law","criminal_law","property_law","international_jurisprudence"]},{id:"medicine",name:"Medicine",icon:"🩺",category:"health",isCoding:!1,concepts:["pathophysiology","pharmacology_basics","clinical_diagnostics","internal_medicine","surgical_principles","medical_ethics"]},{id:"nursing",name:"Nursing",icon:"👩‍⚕️",category:"health",isCoding:!1,concepts:["fundamentals_of_nursing","patient_care_assessment","pharmacology_in_nursing","medical_surgical_nursing","pediatric_maternity_nursing","nursing_ethics"]},{id:"pharmacy",name:"Pharmacy",icon:"💊",category:"health",isCoding:!1,concepts:["pharmaceutics","pharmacology","medicinal_chemistry","pharmacotherapy","pharmacy_practice","biopharmaceutics"]},{id:"public_health",name:"Public Health",icon:"🏥",category:"health",isCoding:!1,concepts:["epidemiology_basics","biostatistics_public_health","environmental_health","health_policy","social_behavioral_health","global_health"]},{id:"civil_engineering",name:"Civil Engineering",icon:"🏗️",category:"stem",isCoding:!1,concepts:["structural_analysis","geotechnical_engineering","fluid_mechanics","transportation_engineering","environmental_civil","construction_management"]},{id:"mechanical_engineering",name:"Mechanical Engineering",icon:"⚙️",category:"stem",isCoding:!1,concepts:["thermodynamics","fluid_dynamics","kinematics_of_machinery","materials_science","machine_design","control_systems"]},{id:"electrical_engineering",name:"Electrical Engineering",icon:"⚡",category:"stem",isCoding:!1,concepts:["circuit_analysis","electromagnetics","signals_systems","power_systems","control_engineering","microelectronics"]},{id:"electronics_engineering",name:"Electronics Engineering",icon:"📟",category:"stem",isCoding:!1,concepts:["semiconductor_devices","analog_circuits","digital_logic_design","microprocessors","embedded_systems","communication_systems"]},{id:"architecture",name:"Architecture",icon:"🏛️",category:"humanities",isCoding:!1,concepts:["architectural_history","design_theory","building_materials","structural_systems","sustainable_design","urban_design"]},{id:"education",name:"Education",icon:"🎓",category:"humanities",isCoding:!1,concepts:["educational_psychology","curriculum_design","instructional_strategies","classroom_management","educational_assessment","special_education"]},{id:"sociology",name:"Sociology",icon:"👥",category:"humanities",isCoding:!1,concepts:["sociological_theory","research_methods_sociology","social_stratification","sociology_of_family","deviance_social_control","globalization_society"]},{id:"political_science",name:"Political Science",icon:"🏛️",category:"humanities",isCoding:!1,concepts:["political_theory","comparative_politics","international_relations","public_policy","political_institutions","political_behavior"]},{id:"international_relations",name:"International Relations",icon:"🌍",category:"humanities",isCoding:!1,concepts:["ir_theories","foreign_policy_analysis","international_security","international_political_economy","global_governance","diplomatic_history"]},{id:"agriculture",name:"Agriculture",icon:"🚜",category:"stem",isCoding:!1,concepts:["crop_science","soil_science","agricultural_economics","plant_pathology","animal_husbandry","sustainable_agriculture"]},{id:"mathematics_statistics",name:"Mathematics Statistics",icon:"🔢",category:"stem",isCoding:!1,concepts:["probability_theory","mathematical_statistics","regression_analysis","hypothesis_testing","statistical_computation","multivariate_analysis"]},{id:"biochemistry",name:"Biochemistry",icon:"🧬",category:"stem",isCoding:!1,concepts:["protein_structure","enzymology","metabolic_pathways","molecular_genetics","signal_transduction","biochemical_techniques"]},{id:"microbiology",name:"Microbiology",icon:"🦠",category:"stem",isCoding:!1,concepts:["bacteriology","virology","mycology_parasitology","microbial_genetics","immunology_basics","industrial_microbiology"]},{id:"biotechnology",name:"Biotechnology",icon:"🧬",category:"stem",isCoding:!1,concepts:["recombinant_dna","cell_culture","bioprocess_engineering","agricultural_biotech","medical_biotech","bioinformatics"]},{id:"geology",name:"Geology",icon:"🪨",category:"stem",isCoding:!1,concepts:["physical_geology","historical_geology","mineralogy","petrology","structural_geology","plate_tectonics_geology"]},{id:"environmental_management",name:"Environmental Management",icon:"🏞️",category:"stem",isCoding:!1,concepts:["environmental_policy","waste_management","resource_conservation","environmental_impact","sustainable_development","gis_applications"]},{id:"forestry",name:"Forestry",icon:"🌲",category:"stem",isCoding:!1,concepts:["dendrology","forest_ecology","silviculture","forest_management","wood_science","forest_conservation"]},{id:"wildlife_management",name:"Wildlife Management",icon:"🦁",category:"stem",isCoding:!1,concepts:["wildlife_ecology","habitat_management","population_dynamics","conservation_biology","wildlife_policy","human_wildlife_conflict"]},{id:"veterinary_medicine",name:"Veterinary Medicine",icon:"🐕",category:"health",isCoding:!1,concepts:["veterinary_anatomy","animal_physiology","veterinary_pathology","veterinary_pharmacology","clinical_veterinary","veterinary_ethics"]},{id:"food_science_technology",name:"Food Science and Technology",icon:"🍞",category:"stem",isCoding:!1,concepts:["food_chemistry","food_microbiology","food_engineering","food_processing","food_quality_safety","sensory_evaluation"]},{id:"nutrition_dietetics",name:"Nutrition and Dietetics",icon:"🍎",category:"health",isCoding:!1,concepts:["macronutrients_micronutrients","human_nutrition","clinical_nutrition","community_nutrition","dietetic_practice","foodservice_management"]},{id:"public_administration",name:"Public Administration",icon:"🏛️",category:"humanities",isCoding:!1,concepts:["public_org_theory","public_policy_process","public_budgeting_finance","administrative_law","intergovernmental_relations","public_sector_ethics"]},{id:"human_resource_management",name:"Human Resource Management",icon:"👥",category:"business",isCoding:!1,concepts:["recruitment_selection","training_development","performance_management","compensation_benefits","employee_relations","hr_analytics"]},{id:"entrepreneurship",name:"Entrepreneurship",icon:"🚀",category:"business",isCoding:!1,concepts:["opportunity_recognition","business_model_canvas","entrepreneurial_finance","new_venture_creation","growth_scaling","social_entrepreneurship"]},{id:"procurement_logistics",name:"Procurement and Logistics Management",icon:"📦",category:"business",isCoding:!1,concepts:["procurement_principles","inventory_management","warehousing_distribution","logistics_infrastructure","contract_negotiation","global_sourcing"]},{id:"supply_chain_management",name:"Supply Chain Management",icon:"🚚",category:"business",isCoding:!1,concepts:["supply_chain_strategy","demand_forecasting","operations_planning","supplier_relationship","logistics_integration","supply_chain_analytics"]},{id:"tourism_management",name:"Tourism Management",icon:"✈️",category:"business",isCoding:!1,concepts:["tourism_principles","destination_marketing","sustainable_tourism","tourism_policy","visitor_services","cultural_heritage_tourism"]},{id:"hotel_hospitality_management",name:"Hotel and Hospitality Management",icon:"🏨",category:"business",isCoding:!1,concepts:["front_office_operations","housekeeping_management","food_beverage_service","hospitality_marketing","revenue_management","hospitality_law"]},{id:"journalism_mass_comm",name:"Journalism and Mass Communication",icon:"📰",category:"humanities",isCoding:!1,concepts:["news_writing_reporting","media_law_ethics","mass_communication_theory","digital_media_production","investigative_journalism","multimedia_storytelling"]},{id:"public_relations",name:"Public Relations",icon:"📢",category:"humanities",isCoding:!1,concepts:["pr_principles","media_relations","crisis_communication","strategic_pr_campaigns","pr_writing","corporate_communication"]},{id:"library_info_science",name:"Library and Information Science",icon:"📚",category:"humanities",isCoding:!1,concepts:["information_organization","reference_services","collection_development","digital_libraries","information_retrieval","library_management"]},{id:"social_work",name:"Social Work",icon:"🤝",category:"humanities",isCoding:!1,concepts:["social_work_principles","human_behavior_social","social_welfare_policy","social_work_practice","community_organizing","social_work_ethics"]},{id:"development_studies",name:"Development Studies",icon:"🌍",category:"humanities",isCoding:!1,concepts:["theories_of_development","poverty_inequality","sustainable_dev_goals","gender_and_development","development_policy","community_dev"]},{id:"philosophy",name:"Philosophy",icon:"💭",category:"humanities",isCoding:!1,concepts:["epistemology","metaphysics","ethics","logic_argumentation","political_philosophy","history_of_philosophy"]},{id:"languages_linguistics",name:"Languages and Linguistics",icon:"🗣️",category:"humanities",isCoding:!1,concepts:["phonetics_phonology","morphology_syntax","semantics_pragmatics","sociolinguistics","historical_linguistics","applied_linguistics"]},{id:"biomedical_engineering",name:"Biomedical Engineering",icon:"🧬",category:"health",isCoding:!1,concepts:["biomechanics","biomaterials","biomedical_instrumentation","medical_imaging","physiological_modeling","rehabilitation_engineering"]},{id:"chemical_engineering",name:"Chemical Engineering",icon:"🧪",category:"stem",isCoding:!1,concepts:["transport_phenomena","chemical_thermodynamics","reaction_engineering","process_control","chemical_plant_design","mass_transfer"]},{id:"environmental_engineering",name:"Environmental Engineering",icon:"🌱",category:"stem",isCoding:!1,concepts:["water_wastewater_treatment","air_pollution_control","hazardous_waste_remediation","environmental_hydrology","solid_waste_eng","environmental_impact_eng"]},{id:"telecommunications_engineering",name:"Telecommunications Engineering",icon:"📡",category:"coding",isCoding:!1,concepts:["signal_modulation","transmission_lines","wireless_communications","fiber_optics","network_protocols","telecom_switching"]},{id:"mechatronics_engineering",name:"Mechatronics Engineering",icon:"🤖",category:"coding",isCoding:!1,concepts:["sensors_actuators","microcontroller_programming","robotic_kinematics","system_integration","control_systems_eng","plc_programming"]},{id:"petroleum_engineering",name:"Petroleum Engineering",icon:"🛢️",category:"stem",isCoding:!1,concepts:["reservoir_engineering","drilling_engineering","production_engineering","formation_evaluation","enhanced_oil_recovery","petroleum_economics"]},{id:"mining_engineering",name:"Mining Engineering",icon:"⛏️",category:"stem",isCoding:!1,concepts:["rock_mechanics","surface_mining","underground_mining","mineral_processing","mine_ventilation","mine_safety_environmental"]},{id:"agricultural_engineering",name:"Agricultural Engineering",icon:"🌾",category:"stem",isCoding:!1,concepts:["soil_water_conservation","farm_machinery_power","agricultural_processing","irrigation_drainage","precision_agriculture","agricultural_structures"]},{id:"biomedical_sciences",name:"Biomedical Sciences",icon:"🔬",category:"health",isCoding:!1,concepts:["medical_genetics","clinical_biochemistry","hematology_transfusion","medical_microbiology","immunopathology","molecular_diagnostics"]},{id:"medical_lab_science",name:"Medical Laboratory Science",icon:"🥼",category:"health",isCoding:!1,concepts:["laboratory_safety_quality","clinical_chemistry","hematology","medical_microbiology_lab","urinalysis_body_fluids","blood_banking"]},{id:"radiography",name:"Radiography",icon:"🩻",category:"health",isCoding:!1,concepts:["radiation_physics","radiographic_positioning","image_production_evaluation","radiation_protection","computed_tomography_ct","magnetic_resonance_imaging_mri"]},{id:"physiotherapy",name:"Physiotherapy",icon:"🦽",category:"health",isCoding:!1,concepts:["kinesiology","exercise_therapy","electrotherapy","orthopedic_physiotherapy","neurological_physiotherapy","cardiopulmonary_physiotherapy"]},{id:"dentistry",name:"Dentistry",icon:"🦷",category:"health",isCoding:!1,concepts:["dental_anatomy","oral_pathology","periodontology","operative_dentistry","prosthodontics","oral_maxillofacial_surgery"]},{id:"occupational_therapy",name:"Occupational Therapy",icon:"♿",category:"health",isCoding:!1,concepts:["ot_foundations","occupational_performance","pediatric_ot","geriatric_ot","physical_rehabilitation_ot","mental_health_ot"]},{id:"midwifery",name:"Midwifery",icon:"👶",category:"health",isCoding:!1,concepts:["antenatal_care","intranatal_care","postnatal_care","neonatal_assessment","obstetric_emergencies","midwifery_ethics"]},{id:"epidemiology",name:"Epidemiology",icon:"📊",category:"health",isCoding:!1,concepts:["infectious_disease_epidemiology","chronic_disease_epidemiology","outbreak_investigation","epidemiologic_methods","public_health_surveillance","clinical_trials"]},{id:"community_health",name:"Community Health",icon:"🏘️",category:"health",isCoding:!1,concepts:["community_health_assessment","health_promotion_education","preventive_medicine","maternal_child_health","healthcare_delivery_systems","disaster_preparedness"]},{id:"human_anatomy",name:"Human Anatomy",icon:"💀",category:"health",isCoding:!1,concepts:["musculoskeletal_system","nervous_system_anatomy","cardiovascular_respiratory_anatomy","digestive_urinary_anatomy","reproductive_endocrine_anatomy","histology"]},{id:"human_physiology",name:"Human Physiology",icon:"🫁",category:"health",isCoding:!1,concepts:["neurophysiology","cardiovascular_physiology","respiratory_physiology","renal_fluid_physiology","endocrine_reproductive_physiology","gastrointestinal_physiology"]},{id:"genetics",name:"Genetics",icon:"🧬",category:"stem",isCoding:!1,concepts:["transmission_genetics","molecular_genetics_details","population_genetics","cytogenetics","genomics_proteomics","gene_regulation"]},{id:"marine_biology",name:"Marine Biology",icon:"🐬",category:"stem",isCoding:!1,concepts:["marine_ecosystems","oceanography_basics","marine_invertebrates","marine_vertebrates","plankton_ecology","marine_conservation"]},{id:"zoology",name:"Zoology",icon:"🐼",category:"stem",isCoding:!1,concepts:["animal_diversity","vertebrate_zoology","invertebrate_zoology","animal_physiology_comparative","animal_behavior_ethology","evolutionary_zoology"]},{id:"botany",name:"Botany",icon:"🌿",category:"stem",isCoding:!1,concepts:["plant_anatomy","plant_physiology","plant_systematics","plant_ecology","cryptogamic_botany","economic_botany"]},{id:"applied_mathematics",name:"Applied Mathematics",icon:"🧮",category:"stem",isCoding:!1,concepts:["numerical_analysis","mathematical_modeling","optimization_theory","partial_differential_equations","dynamical_systems","scientific_computing"]},{id:"actuarial_science",name:"Actuarial Science",icon:"📊",category:"business",isCoding:!1,concepts:["financial_mathematics","life_contingencies","loss_models","actuarial_risk_theory","survival_analysis","pension_valuation"]},{id:"banking_finance",name:"Banking and Finance",icon:"🏦",category:"business",isCoding:!1,concepts:["commercial_banking","central_banking_systems","credit_risk_analysis","investment_banking","retail_banking_operations","financial_risk_management"]},{id:"insurance_risk_management",name:"Insurance and Risk Management",icon:"🛡️",category:"business",isCoding:!1,concepts:["principles_of_insurance","enterprise_risk_management","property_liability_insurance","life_health_insurance","reinsurance","underwriting_claims"]},{id:"real_estate_management",name:"Real Estate Management",icon:"🏢",category:"business",isCoding:!1,concepts:["real_estate_principles","property_valuation","real_estate_finance","property_management","real_estate_development","real_estate_law"]},{id:"urban_regional_planning",name:"Urban and Regional Planning",icon:"🗺️",category:"humanities",isCoding:!1,concepts:["planning_theory","land_use_planning","transportation_planning","environmental_planning_urban","housing_community_dev","geographic_information_systems_gis"]},{id:"quantity_surveying",name:"Quantity Surveying",icon:"📏",category:"business",isCoding:!1,concepts:["measurement_construction","cost_estimating","contract_administration","construction_technology","procurement_quantity_surveying","value_management"]}];oe.forEach(e=>{const t=e.concepts,i={};t.forEach((s,l)=>{l===0?i[s]=[]:l===1||l===2?i[s]=[t[0]]:l===3?i[s]=[t[1],t[2]]:i[s]=[t[l-1]]});const n={};t.forEach(s=>{n[s]=s.split("_").map(l=>{const y=l.toUpperCase();return["IT","AI","ERP","GIS","SDLC","CT","MRI","PLC","CAC","LTV","ROI","PPC","SEM","SEO","DFS","BFS","LIFO","FIFO","OOP","DSA","BKT","LU","QR","SVD","VSEPR","SOMATIC","MITOSIS","MITOTIC","MRNA","DNA","SN1","SN2","E1","E2","GDP","CPI"].includes(y)?y:l.charAt(0).toUpperCase()+l.slice(1)}).join(" ")});const r={};t.forEach(s=>{const l=n[s];r[s]=`Analyze the core theories, processes, and applications of ${l} within the field of ${e.name}.`}),q[e.id]={name:e.name,icon:e.icon,isCoding:e.isCoding,category:e.category,concepts:t,dependencies:i,conceptLabels:n,conceptDescriptions:r}});function D(e){return q[e]||q.python}function re(e,t,i){const n=D(e),r=n.conceptLabels[t]||t,s=n.conceptDescriptions[t]||"";if(e==="python"){const l=[{concept:"variables",difficulty:"easy",text:"Which of the following is a valid variable name in Python?",options:["2_my_var","my-var","my_var_2","my var"],correctIndex:2,explanation:"Python variables must start with a letter/underscore and contain alphanumeric characters/underscores."},{concept:"variables",difficulty:"medium",text:"What is the output of:\n```python\nx = 5\ny = x\nx = 10\nprint(y)\n```",options:["5","10","NameError","None"],correctIndex:0,explanation:"Integers are immutable. `y` points to the object `5`. Modifying `x` doesn't change `y`."},{concept:"data_types",difficulty:"easy",text:"What is the data type of the expression `x = 5.0` in Python?",options:["int","float","double","str"],correctIndex:1,explanation:"Python assigns decimal numbers to the float class."},{concept:"data_types",difficulty:"medium",text:"What is the main difference between lists and tuples in Python?",options:["Lists can only contain ints.","Lists are mutable, while tuples are immutable.","Tuples use square brackets.","Tuples take twice as much memory."],correctIndex:1,explanation:"Lists are mutable and can be modified. Tuples are immutable."},{concept:"conditions",difficulty:"easy",text:"Which keyword is used in Python to check a secondary condition?",options:["else if","elseif","elif","otherwise"],correctIndex:2,explanation:"Python uses 'elif' for chained branches."},{concept:"conditions",difficulty:"medium",text:"What evaluates from `bool([])`?",options:["True","False","None","TypeError"],correctIndex:1,explanation:"Empty lists evaluate to False."},{concept:"loops",difficulty:"easy",text:"What is the output of `list(range(2, 5))`?",options:["[2, 3, 4, 5]","[2, 3, 4]","[3, 4]","[2, 4]"],correctIndex:1,explanation:"Range counts up to, but not including, the stop value."},{concept:"loops",difficulty:"medium",text:"Which statement immediately exits a loop?",options:["continue","pass","break","exit"],correctIndex:2,explanation:"The 'break' statement terminates the current loop."},{concept:"functions",difficulty:"easy",text:"Which keyword defines a function?",options:["function","def","func","define"],correctIndex:1,explanation:"Python uses 'def' for function declarations."},{concept:"functions",difficulty:"medium",text:"What prints from: `def f(a, b=[]): b.append(a); return b` called twice as `f(1)` then `f(2)`?",options:["[2]","[1, 2]","[1], [2]","TypeError"],correctIndex:1,explanation:"Mutable default parameters are evaluated once and shared across calls."},{concept:"dictionaries",difficulty:"easy",text:"How do you access key 'k' in `d = {'k': 'v'}`?",options:["d.k","d['k']","d(k)","d.get(v)"],correctIndex:1,explanation:"Brackets '[]' pull key values from dictionaries."},{concept:"dictionaries",difficulty:"medium",text:"What exception occurs when looking up a missing key with `[]`?",options:["LookupError","KeyError","ValueError","None"],correctIndex:1,explanation:"Brackets throw a KeyError when the key is missing."},{concept:"oop",difficulty:"easy",text:"What is the standard constructor method name in Python?",options:["__init__","__new__","construct","init"],correctIndex:0,explanation:"__init__ is called when instantiating new class structures."},{concept:"oop",difficulty:"medium",text:"How does a subclass call parent init?",options:["parent.__init__()","super().__init__()","self.super()","base()"],correctIndex:1,explanation:"super() accesses parent instance methods."}],y=l.find(S=>S.concept===t&&S.difficulty===i)||l.find(S=>S.concept===t);if(y)return{id:`q_offline_${t}_${i}`,...y}}return i==="easy"?{id:`q_offline_${e}_${t}_easy`,concept:t,difficulty:i,text:`In **${n.name}**, what is the primary role or definition of **${r}**?`,options:[`${s}`,"It represents an advanced optimization algorithm used in parallel processing.","It is a deprecated mechanism replaced by legacy interfaces in newer revisions.","It is a security framework restricting user permissions to data access."],correctIndex:0,explanation:`Correct! ${r} is fundamentally defined as: ${s}`}:i==="medium"?{id:`q_offline_${e}_${t}_medium`,concept:t,difficulty:i,text:`Consider the application of **${r}** in ${n.name}. Which of the following statements represents a common mistake or misconception regarding this topic?`,options:["Confusing it with concepts that share similar terminology, though their structural implementation and constraints are entirely different.","Assuming that it cannot be modified once initialized, when in fact it is fully dynamic and mutable.","Believing that it operates in constant time O(1) in all scenarios, ignoring scale overheads.","Thinking it requires specialized hardware configurations to execute basic operations."],correctIndex:0,explanation:`Correct! A key misconception for ${r} involves confusing its theoretical behavior with related concepts without checking its core limitations: ${s}`}:{id:`q_offline_${e}_${t}_hard`,concept:t,difficulty:i,text:`Analyze the architectural constraints of **${r}** in ${n.name}. Which of the following options represents the most significant trade-off when implementing this topic at scale?`,options:["Increased structural complexity and debugging overhead in exchange for highly optimized runtime performance and data modularity.","Complete loss of compatibility with legacy databases.","Extreme memory consumption scaling exponentially O(2^N) under ordinary iterations.","Frequent type conversion errors requiring mandatory runtime assertions."],correctIndex:0,explanation:`Correct! Working with ${r} at scale requires balancing implementation complexity against efficiency: ${s}`}}function ce(e,t){const i=D(e),n=i.conceptLabels[t]||t,r=i.conceptDescriptions[t]||"";return i.isCoding?e==="python"?{title:`Python ${n} Challenge`,description:`Write a short python statement to demonstrate **${n}**. Details: ${r}`,startingCode:`# Write code here

`,solutionCheck:s=>s.trim().length>10,hint:`Read the concept description: ${r}`}:{title:`${i.name} - ${n}`,description:`Implement a basic script or statement showcasing **${n}**. Task description: ${r}`,startingCode:`// Enter syntax solution

`,solutionCheck:s=>s.trim().length>8,hint:`Recall that ${n} deals with: ${r}`}:{title:`${i.name} - ${n} Conceptual Check`,description:`Explain the core principles of **${n}** in your own words. Give a specific example or explain its role in **${i.name}**.`,startingCode:"Type your conceptual explanation here (minimum 15 characters)...",solutionCheck:s=>{const l=s.toLowerCase().trim(),y=l.length>=15,T=n.toLowerCase().split(/[ &\-_]+/).some(p=>p.length>3&&l.includes(p))||l.length>30;return y&&T},hint:`Be sure to reference how this links to the definition: "${r}"`}}const Q={user:null,learningTwin:{subjectId:"python",subject:"Python Programming",overallMastery:0,topicsMastery:{},strongTopics:[],developingTopics:[],weakTopics:[],gaps:[],insights:[],recommendedNextStep:null},assessmentHistory:[],settings:{geminiApiKey:""},activeTab:"overview",currentQuiz:null};let a=JSON.parse(JSON.stringify(Q));const ne=[];function le(e){ne.push(e)}function K(){pe(),ne.forEach(e=>e(a))}function de(){try{const e=localStorage.getItem("neurolink_state");if(e){const t=JSON.parse(e);a={...Q,...t}}}catch(e){console.error("Error loading state from localStorage",e)}}function pe(){try{localStorage.setItem("neurolink_state",JSON.stringify(a))}catch(e){console.error("Error saving state to localStorage",e)}}function me(e){a.user={name:e.name,email:e.email,password:e.password,learningGoal:e.learningGoal,educationLevel:e.educationLevel||"High School",learningStyle:e.learningStyle||"examples_first"};const t=e.subjectId||"python";J(t)}function ue(e,t){return a.user&&a.user.email===e&&a.user.password===t?(K(),!0):e==="sarah@edu.com"&&t==="python123"?(a.user={name:"Sarah",email:"sarah@edu.com",password:"python123",learningGoal:"Become comfortable building Python applications",educationLevel:"Undergraduate",learningStyle:"examples_first"},J("python"),!0):!1}function J(e){const t=D(e),i={};t.concepts.forEach(n=>{i[n]=.15}),a.learningTwin={subjectId:e,subject:t.name,overallMastery:0,topicsMastery:i,strongTopics:[],developingTopics:[],weakTopics:[],gaps:[],insights:[],recommendedNextStep:{type:"assessment",text:`Take Initial ${t.name} Assessment`,concept:t.concepts[0],duration:"10-15 mins"}},a.assessmentHistory=[],a.activeTab="overview",K()}function ge(){localStorage.removeItem("neurolink_state"),Object.keys(a).forEach(e=>delete a[e]),Object.assign(a,JSON.parse(JSON.stringify(Q))),K()}function ye(e){a.settings.geminiApiKey=e,K()}function he(){const e=a.user?{...a.user}:null,t=a.settings.geminiApiKey,i=a.learningTwin.subjectId||"python";Object.keys(a).forEach(n=>delete a[n]),Object.assign(a,JSON.parse(JSON.stringify(Q)),{user:e,settings:{geminiApiKey:t}}),a.user&&J(i),K()}function fe(e){const t=a.user?"Go to Dashboard":"Register / Login",i=a.user?"#dashboard":"#auth";e.innerHTML=`
    <!-- Landing Navbar -->
    <header class="landing-navbar">
      <div class="container flex align-center justify-between">
        <div class="logo">
          <div class="logo-icon">🧠</div>
          <span>NeuroLink AI</span>
        </div>
        <nav>
          <a href="${i}" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;">${t}</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-glow"></div>
      <div class="container">
        <h1>Your Learning. <span>Understood by AI.</span></h1>
        <p class="hero-sub">
          NeuroLink AI builds a personalized Learning Twin that understands what you know, discovers what you're missing, and creates the best path for what you should learn next.
        </p>
        <div class="hero-cta">
          <a href="#auth" class="btn btn-primary">Start Learning</a>
          <a href="#how-it-works" class="btn btn-secondary">See How It Works</a>
        </div>
      </div>
    </section>

    <!-- Visual Flowchart Area -->
    <section class="container" style="margin-bottom: 80px;">
      <div class="flowchart-container">
        <h3 class="flowchart-title">The Adaptive Learning Loop</h3>
        <div class="flowchart">
          <div class="flow-step">
            <div class="flow-step-icon">📋</div>
            <h4>Your Knowledge</h4>
            <p>Initial Assessment</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">⚙️</div>
            <h4>AI Analysis</h4>
            <p>BKT Math Engine</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">🔍</div>
            <h4>Knowledge Gaps</h4>
            <p>Root Cause Traced</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">🎯</div>
            <h4>Personalized Path</h4>
            <p>Adaptive Progression</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">💡</div>
            <h4>Socratic Tutor</h4>
            <p>Continuous Adapt</p>
          </div>
          
          <div class="flow-connector"></div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="landing-section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
      <div class="container">
        <h2>How NeuroLink AI Works</h2>
        <div class="three-steps-grid">
          <div class="glass-card step-card">
            <div class="step-num">01</div>
            <h3>Assess</h3>
            <p>Take a 7-question adaptive baseline test. We track not just if your answer is correct, but your response time and self-reported confidence.</p>
          </div>
          <div class="glass-card step-card">
            <div class="step-num">02</div>
            <h3>Understand</h3>
            <p>Our Bayesian engine constructs your Learning Twin profile, locating specific gaps, prerequisite blocks, and high-confidence misconceptions.</p>
          </div>
          <div class="glass-card step-card">
            <div class="step-num">03</div>
            <h3>Adapt</h3>
            <p>Receive an auto-updating learning checklist. Learn complex concepts with your Socratic AI Tutor, run practice sessions, and level up.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section class="landing-section">
      <div class="container">
        <h2>Why NeuroLink AI?</h2>
        <div class="why-grid">
          <div class="glass-card why-card">
            <div class="why-card-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>Skip what you already know. Focus only on the topics that unlock your next level of understanding.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">🧠</div>
            <h3>AI-Powered Gap Detection</h3>
            <p>Identifies why you are struggling by analyzing topic dependencies. It stops you from hitting walls.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">🔀</div>
            <h3>Adaptive Difficulty</h3>
            <p>Practice sets adjust from easy, medium, to hard in real-time based on your changing mastery probability.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">💬</div>
            <h3>Socratic AI Tutor</h3>
            <p>An AI coach that knows your Learning Twin, answers questions, gives hints, and explains code your way.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">📈</div>
            <h3>Continuous Progress</h3>
            <p>Every single response updates your model. Your learning dashboard reflects real educational growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 40px 0; border-top: 1px solid var(--glass-border); text-align: center; color: var(--text-muted); font-size: 0.9rem;">
      <div class="container">
        <p>&copy; 2026 NeuroLink AI. Powered by educational data mining & LLMs.</p>
      </div>
    </footer>
  `;const n=e.querySelector('a[href="#how-it-works"]');n&&n.addEventListener("click",r=>{var s;r.preventDefault(),(s=document.getElementById("how-it-works"))==null||s.scrollIntoView({behavior:"smooth"})})}function ve(e){let t=!0;const i=Object.entries(q).map(([s,l])=>({id:s,name:l.name})).sort((s,l)=>s.name.localeCompare(l.name)),n=()=>{e.innerHTML=`
      <div class="auth-container">
        <div class="glass-card auth-card animate-fade">
          <div class="auth-header">
            <div class="logo" style="justify-content: center; margin-bottom: 16px;">
              <div class="logo-icon">🧠</div>
              <span>NeuroLink AI</span>
            </div>
            <h2>${t?"Welcome Back":"Create Account"}</h2>
            <p>${t?"Log in to access your Learning Twin":"Set up your adaptive learning profile"}</p>
          </div>

          <form id="auth-form">
            ${t?"":`
              <div class="input-group">
                <label for="reg-name">Full Name</label>
                <input type="text" id="reg-name" class="input-control" required placeholder="e.g. Sarah Connor">
              </div>
            `}

            <div class="input-group">
              <label for="auth-email">Email Address</label>
              <input type="email" id="auth-email" class="input-control" required placeholder="name@domain.com">
            </div>

            <div class="input-group">
              <label for="auth-password">Password</label>
              <input type="password" id="auth-password" class="input-control" required placeholder="••••••••">
            </div>

            ${t?"":`
              <div class="input-group">
                <label for="reg-goal">Learning Goal / Subject</label>
                <select id="reg-goal" class="input-control" required>
                  ${i.map(y=>`<option value="${y.id}">${y.name}</option>`).join("")}
                </select>
              </div>
              
              <div class="input-group">
                <label for="reg-style">Preferred Explanation Style</label>
                <select id="reg-style" class="input-control" required>
                  <option value="examples_first">Show code examples first</option>
                  <option value="short_explanations">Keep it short & bullet-pointed</option>
                  <option value="detailed_explanations">Explain deeply with theory</option>
                  <option value="practice_first">Challenge me with practice first</option>
                </select>
              </div>
            `}

            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              ${t?"Login":"Register & Start"}
            </button>
          </form>

          <div class="auth-switch">
            ${t?`
              Don't have an account? <a href="#" id="toggle-auth-mode">Sign up</a>
            `:`
              Already have an account? <a href="#" id="toggle-auth-mode">Log in</a>
            `}
          </div>

          ${t?`
            <div style="margin-top: 24px; padding: 12px; background: rgba(6, 182, 212, 0.05); border: 1px dashed rgba(6, 182, 212, 0.2); border-radius: 8px; font-size: 0.85rem; text-align: center;">
              <span style="color: var(--color-secondary); font-weight: 600; display: block; margin-bottom: 4px;">💡 Hackathon Quick Login</span>
              Email: <code style="color: #fff;">sarah@edu.com</code><br>
              Password: <code style="color: #fff;">python123</code>
            </div>
          `:""}
        </div>
      </div>
    `,e.querySelector("#auth-form").addEventListener("submit",r),e.querySelector("#toggle-auth-mode").addEventListener("click",y=>{y.preventDefault(),t=!t,n()})},r=s=>{var S;s.preventDefault();const l=e.querySelector("#auth-email").value,y=e.querySelector("#auth-password").value;if(t)ue(l,y)?window.location.hash="#dashboard":U("Login Failed","Invalid email or password. Please try again or use the Hackathon Quick Login account.");else{const T=e.querySelector("#reg-name").value,p=e.querySelector("#reg-goal").value,w=((S=q[p])==null?void 0:S.name)||p,M=e.querySelector("#reg-style").value;if(!T||!l||!y){U("Registration Failed","Please fill in all required fields.");return}me({name:T,email:l,password:y,learningGoal:w,subjectId:p,learningStyle:M}),window.location.hash="#onboarding"}};n()}function be(e){var M,c,d;let t=1,i=((M=a.learningTwin)==null?void 0:M.subjectId)||"python",n=((c=a.user)==null?void 0:c.educationLevel)||"beginner",r=((d=a.user)==null?void 0:d.learningStyle)||"examples_first",s="",l="all";const y=()=>{const x=t===1?33.3:t===2?66.6:100;if(e.innerHTML=`
      <div class="container" style="max-width: 800px; padding: 40px 24px;">
        <div class="glass-card onboard-container animate-fade" style="max-width: 100%; padding: 36px;">
          <!-- Step Progress bar -->
          <div class="progress-bar-container" style="margin-bottom: 30px;">
            <div class="onboard-progress" style="width: ${x}%"></div>
          </div>

          <div id="onboard-step-content">
            ${S()}
          </div>

          <div class="onboard-nav" style="margin-top: 30px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <button id="prev-step-btn" class="btn btn-secondary" ${t===1?"disabled":""}>
              Back
            </button>
            <button id="next-step-btn" class="btn btn-primary">
              ${t===3?"Complete & Start Test":"Continue"}
            </button>
          </div>
        </div>
      </div>
    `,e.querySelector("#prev-step-btn").addEventListener("click",()=>{t>1&&(t--,y())}),e.querySelector("#next-step-btn").addEventListener("click",w),t===1){const v=e.querySelector("#subject-search-box");v&&v.addEventListener("input",L=>{s=L.target.value,T()});const h=e.querySelectorAll(".filter-btn");h.forEach(L=>{L.addEventListener("click",()=>{h.forEach(b=>b.classList.remove("btn-accent")),h.forEach(b=>b.classList.add("btn-secondary")),L.classList.remove("btn-secondary"),L.classList.add("btn-accent"),l=L.getAttribute("data-filter"),T()})}),T()}else p()},S=()=>t===1?`
        <div class="onboard-step">
          <h2>Choose Your Subject</h2>
          <p style="margin-bottom: 20px;">We support 90+ adaptive learning tracks. Search or filter to select your focus area.</p>
          
          <!-- Search & Filter Row -->
          <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <input type="text" id="subject-search-box" class="input-control" placeholder="Search subjects (e.g. Computer Science)..." style="flex: 1; min-width: 200px; padding: 8px 14px; font-size: 0.9rem;" value="${s}">
            
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button class="btn btn-accent filter-btn" data-filter="all" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">All</button>
              <button class="btn btn-secondary filter-btn" data-filter="coding" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Coding/Tech</button>
              <button class="btn btn-secondary filter-btn" data-filter="stem" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Science/Math</button>
              <button class="btn btn-secondary filter-btn" data-filter="humanities" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Humanities/Social</button>
              <button class="btn btn-secondary filter-btn" data-filter="business" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Business/Finance</button>
              <button class="btn btn-secondary filter-btn" data-filter="health" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Health/Medicine</button>
            </div>
          </div>

          <!-- Subject Cards Grid container -->
          <div id="subject-grid-container" class="card-selector-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); max-height: 380px; overflow-y: auto; padding-right: 6px; gap: 12px; margin-bottom: 20px;">
            <!-- Filled dynamically -->
          </div>
        </div>
      `:t===2?`
        <div class="onboard-step">
          <h2>Your Current Level</h2>
          <p>This assists the Bayesian model in selecting initial difficulty parameters for your questions.</p>
          
          <div class="flex flex-col gap-4" style="display: flex; flex-direction: column; gap: 14px;">
            <div class="selector-card flex align-center gap-4 text-left ${n==="beginner"?"selected":""}" data-level="beginner" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">🌱</span>
              <div>
                <strong style="display: block;">Beginner</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I have never studied this subject or have very little experience.</span>
              </div>
            </div>

            <div class="selector-card flex align-center gap-4 text-left ${n==="intermediate"?"selected":""}" data-level="intermediate" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">⚡</span>
              <div>
                <strong style="display: block;">Intermediate</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I know basic concepts and logic, but want to bridge gaps.</span>
              </div>
            </div>

            <div class="selector-card flex align-center gap-4 text-left ${n==="advanced"?"selected":""}" data-level="advanced" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">🚀</span>
              <div>
                <strong style="display: block;">Advanced</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I have strong fundamentals and want to master relationships and details.</span>
              </div>
            </div>
          </div>
        </div>
      `:`
        <div class="onboard-step">
          <h2>Preferred Study Style</h2>
          <p>Choose how you prefer the Socratic AI Tutor to present technical explanations.</p>
          
          <div class="card-selector-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 16px; margin-bottom: 20px;">
            <div class="selector-card ${r==="examples_first"?"selected":""}" data-style="examples_first">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">💻</span>
              <span style="display: block; font-size: 0.9rem;">Examples First</span>
            </div>
            <div class="selector-card ${r==="short_explanations"?"selected":""}" data-style="short_explanations">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">📝</span>
              <span style="display: block; font-size: 0.9rem;">Short Bullets</span>
            </div>
            <div class="selector-card ${r==="detailed_explanations"?"selected":""}" data-style="detailed_explanations">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">📚</span>
              <span style="display: block; font-size: 0.9rem;">Deep Theory</span>
            </div>
            <div class="selector-card ${r==="practice_first"?"selected":""}" data-style="practice_first">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">⏱️</span>
              <span style="display: block; font-size: 0.9rem;">Practice First</span>
            </div>
          </div>
        </div>
      `,T=()=>{const x=e.querySelector("#subject-grid-container");if(!x)return;let u=Object.entries(q);if(s.trim()!==""){const v=s.toLowerCase();u=u.filter(([h,L])=>L.name.toLowerCase().includes(v))}if(l!=="all"&&(u=u.filter(([v,h])=>h.category===l)),u.sort((v,h)=>v[1].name.localeCompare(h[1].name)),u.length===0){x.innerHTML=`<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No subjects found matching "${s}"</div>`;return}x.innerHTML=u.map(([v,h])=>`
      <div class="selector-card ${i===v?"selected":""}" data-subject-id="${v}" style="padding: 16px; min-height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px;">
        <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 0;">${h.icon}</span>
        <span style="font-size: 0.85rem; font-weight: 600; text-align: center; word-break: break-word;">${h.name}</span>
      </div>
    `).join(""),x.querySelectorAll(".selector-card").forEach(v=>{v.addEventListener("click",()=>{x.querySelectorAll(".selector-card").forEach(h=>h.classList.remove("selected")),v.classList.add("selected"),i=v.getAttribute("data-subject-id")})})},p=()=>{e.querySelectorAll(".selector-card").forEach(u=>{u.addEventListener("click",()=>{t===2?n=u.getAttribute("data-level"):t===3&&(r=u.getAttribute("data-style")),u.parentNode.querySelectorAll(".selector-card").forEach(k=>k.classList.remove("selected")),u.classList.add("selected")})})},w=()=>{t===1?(t=2,y()):t===2?(t=3,y()):a.user?(a.user.educationLevel=n,a.user.learningStyle=r,J(i),window.location.hash="#assessment"):(U("Error","User session lost. Please log in again."),window.location.hash="#auth")};y()}const W={L0:.15,T:.22,S:.1,G:.2},H=new Proxy({},{get(e,t){var n;const i=((n=a.learningTwin)==null?void 0:n.subjectId)||"python";return D(i).conceptLabels[t]||t}});new Proxy({},{get(e,t){var n;const i=((n=a.learningTwin)==null?void 0:n.subjectId)||"python";return D(i).dependencies[t]||[]}});function Y(){var t;const e=((t=a.learningTwin)==null?void 0:t.subjectId)||"python";return D(e).concepts}function se(){var t;const e=((t=a.learningTwin)==null?void 0:t.subjectId)||"python";return D(e).name}function V(e,t){const{T:i,S:n,G:r}=W;let s;t?s=e*(1-n)/(e*(1-n)+(1-e)*r):s=e*n/(e*n+(1-e)*(1-r));const l=s+(1-s)*i;return Math.max(.01,Math.min(.99,l))}function ae(e,t,i,n,r){a.assessmentHistory.push({questionId:r,concept:e,isCorrect:t,confidence:i,timeSpent:n,timestamp:Date.now()});const s=a.learningTwin.topicsMastery[e]||W.L0;let l=s;if(t)if(i==="not"){const y=V(s,!0);l=s+(y-s)*.4}else l=V(s,!0);else i==="very"?l=V(s,!1)*.8:l=V(s,!1);a.learningTwin.topicsMastery[e]=l,Z()}function Z(){const e=a.learningTwin,t=e.topicsMastery,i=Y(),n=D(e.subjectId).dependencies;e.strongTopics=[],e.developingTopics=[],e.weakTopics=[],e.gaps=[],e.insights=[],i.forEach(p=>{const w=t[p]||W.L0;w>=.8?e.strongTopics.push(p):w>=.45?e.developingTopics.push(p):e.weakTopics.push(p)});const r=i.reduce((p,w)=>p+(t[w]||W.L0),0);e.overallMastery=Math.round(r/i.length*100),i.forEach(p=>{(t[p]||W.L0)<.8&&(n[p]||[]).forEach(c=>{(t[c]||W.L0)<.6&&e.gaps.push({type:"prerequisite",concept:p,prerequisite:c,message:`Struggling with ${H[p]} may stem from weak foundational understanding of ${H[c]}.`})})});const s={};a.assessmentHistory.forEach(p=>{!p.isCorrect&&p.confidence==="very"?s[p.concept]=p:p.isCorrect&&delete s[p.concept]}),Object.keys(s).forEach(p=>{e.gaps.push({type:"misconception",concept:p,message:`Misconception identified in ${H[p]} — you answered questions incorrectly despite expressing high confidence.`})});let l=null;for(let p=0;p<i.length;p++){const w=i[p],M=t[w]||W.L0;if(M<.8){const c=(n[w]||[]).filter(d=>(t[d]||W.L0)<.6);if(c.length>0){const d=c[0];l={type:"review",concept:d,text:`Review foundations of ${H[d]}`,duration:"10 mins"};break}else{M<.45?l={type:"learn",concept:w,text:`Learn ${H[w]} with Tutor`,duration:"15 mins"}:l={type:"practice",concept:w,text:`Practice questions on ${H[w]}`,duration:"10 mins"};break}}}l||(l={type:"mastered",concept:i[i.length-1],text:"You have mastered all fundamentals! Try Advanced Practice.",duration:"10 mins"}),e.recommendedNextStep=l,e.overallMastery<30?e.insights.push(`You are at the beginning of your ${e.subject} journey. Complete assessments and practice to shape your Learning Twin.`):e.overallMastery>=80?e.insights.push(`Excellent work! You demonstrate strong proficiency across most ${e.subject} concepts.`):e.insights.push("You're making steady progress. Your adaptive path is focusing on bridging transitional topics.");const y=a.assessmentHistory.filter(p=>p.isCorrect&&p.confidence==="not");if(y.length>0){const p=[...new Set(y.map(w=>H[w.concept]))];e.insights.push(`Calibration alert: You solved questions correctly for ${p.slice(0,2).join(", ")} but reported low confidence. Practice will help reinforce your confidence.`)}const S=e.gaps.find(p=>p.type==="misconception");S&&e.insights.push(`Misconception warning: The system detected a conceptual error in ${H[S.concept]}. Let's have the AI Tutor clear this up.`);const T=e.gaps.find(p=>p.type==="prerequisite");T&&e.insights.push(`Prerequisite Block: We recommend strengthening your ${H[T.prerequisite]} skills before moving forward on ${H[T.concept]}.`),K()}function _e(e){const t=a.learningTwin.subjectId||"python",i=D(t),n=a.settings.geminiApiKey,r=n&&n.trim()!=="";let s=!1,l="",y="easy";const S=window.location.hash.split("?");if(S.length>1){const o=new URLSearchParams(S[1]);o.get("mode")==="practice"&&(s=!0,l=o.get("concept"),y=o.get("difficulty")||"easy")}let T=0,p=[];s?p=[l,l,l]:p=i.concepts;const w=[];let M=null,c=null,d=0;const x=o=>{const m=Math.floor(o/60).toString().padStart(2,"0"),I=(o%60).toString().padStart(2,"0");return`${m}:${I}`},u=()=>{d=0,c&&clearInterval(c),c=setInterval(()=>{d++;const o=e.querySelector("#assess-timer");o&&(o.textContent=x(d))},1e3)},k=async(o,m)=>{if(r){e.innerHTML=`
        <div class="container" style="max-width: 600px; padding: 60px 24px; text-align: center;">
          <div class="glass-card" style="padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
            <div class="logo-icon" style="width: 50px; height: 50px; font-size: 1.6rem; animation: pulse-node 2.2s infinite;">🧠</div>
            <h3 style="font-family: var(--font-headings);">AI is generating your question...</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Sourcing dynamic challenge on <strong>${i.conceptLabels[o]}</strong> from Gemini models.
            </p>
          </div>
        </div>
      `;try{M=await v(o,m),h(M);return}catch(I){console.error("Failed to generate dynamic question, falling back offline",I)}}M=re(t,o,m),h(M)},v=async(o,m)=>{var P,B,g,E,j;const I=`Generate a single multiple-choice question testing the concept "${i.conceptLabels[o]}" in the subject "${i.name}".
    Difficulty level: "${m}".
    Description of topic: "${i.conceptDescriptions[o]}".

    The response MUST be valid JSON matching this exact structure:
    {
      "text": "The question text. If it is a coding subject, feel free to write code snippets using markdown code blocks (e.g. \`\`\`python). If it is a math subject, use LaTeX formatting for formulas.",
      "options": [
        "Incorrect answer option",
        "Correct answer option",
        "Incorrect answer option",
        "Incorrect answer option"
      ],
      "correctIndex": 1, // must specify the correct 0-indexed index of the options array
      "explanation": "Detailed explanation of why that specific option is correct."
    }`,_=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${n}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:I}]}],generationConfig:{responseMimeType:"application/json",temperature:.75}})});if(!_.ok)throw new Error(`Gemini API returned ${_.status}`);const A=(j=(E=(g=(B=(P=(await _.json()).candidates)==null?void 0:P[0])==null?void 0:B.content)==null?void 0:g.parts)==null?void 0:E[0])==null?void 0:j.text;if(!A)throw new Error("No response text returned from Gemini API");const O=JSON.parse(A.trim());return{id:`q_gemini_${o}_${Date.now()}`,concept:o,difficulty:m,text:O.text,options:O.options,correctIndex:parseInt(O.correctIndex),explanation:O.explanation}},h=o=>{e.innerHTML=`
      <div class="container" style="max-width: 720px; padding: 60px 24px;">
        <div class="assess-header">
          <div>
            <h3 style="font-family: var(--font-headings); font-size: 1.1rem; color: var(--text-secondary);">
              ${s?`Practice: ${i.name}`:`${i.name} Assessment`}
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Question ${T+1} of ${p.length}</p>
          </div>
          <div class="timer-container">
            <span class="timer-icon">⏱️</span>
            <span id="assess-timer">00:00</span>
          </div>
        </div>

        <div class="glass-card animate-fade" style="padding: 36px;">
          <div class="question-container">
            <span class="question-category">${i.conceptLabels[o.concept]}</span>
            <h2 class="question-text">${b(o.text)}</h2>
            
            <div class="options-list">
              ${o.options.map((P,B)=>`
                <button class="option-btn" data-index="${B}">
                  <span class="option-num">${String.fromCharCode(65+B)}</span>
                  <span>${f(P)}</span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Confidence Assessment scale -->
          <div class="confidence-section">
            <h4 class="confidence-title">How confident are you in this answer?</h4>
            <div class="confidence-options">
              <button class="confidence-btn" data-value="not">Not Confident 😕</button>
              <button class="confidence-btn" data-value="somewhat">Somewhat Confident 🙂</button>
              <button class="confidence-btn" data-value="very">Very Confident 😎</button>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button id="next-q-btn" class="btn btn-primary" disabled>
              ${T===p.length-1?"Submit Answers":"Next Question"}
            </button>
          </div>
        </div>
      </div>
    `,u();let m=null,I=null;const _=e.querySelectorAll(".option-btn"),C=e.querySelectorAll(".confidence-btn"),A=e.querySelector("#next-q-btn"),O=()=>{m!==null&&I!==null&&A.removeAttribute("disabled")};_.forEach(P=>{P.addEventListener("click",()=>{_.forEach(B=>B.classList.remove("selected")),P.classList.add("selected"),m=parseInt(P.getAttribute("data-index")),O()})}),C.forEach(P=>{P.addEventListener("click",()=>{C.forEach(B=>B.classList.remove("selected")),P.classList.add("selected"),I=P.getAttribute("data-value"),O()})}),A.addEventListener("click",()=>{if(clearInterval(c),w.push({questionId:o.id,concept:o.concept,answerIndex:m,isCorrect:m===o.correctIndex,confidence:I,timeSpent:d}),T<p.length-1){T++;const P=p[T];k(P,s?y:"easy")}else L()})},L=()=>{w.forEach(C=>{ae(C.concept,C.isCorrect,C.confidence,C.timeSpent,C.questionId)}),Z();const o=a.learningTwin,m=o.strongTopics.map(C=>i.conceptLabels[C]||C).join(", ")||"None",I=o.weakTopics.map(C=>i.conceptLabels[C]||C).join(", ")||"None",_=o.gaps.filter(C=>C.type==="misconception").length;e.innerHTML=`
      <div class="container animate-fade" style="max-width: 600px; padding: 60px 24px; text-align: center;">
        <div class="glass-card" style="padding: 40px;">
          <div class="logo-icon" style="width: 64px; height: 64px; font-size: 2.2rem; margin: 0 auto 20px;">🎉</div>
          <h2>Learning Twin Synced!</h2>
          <p style="color: var(--text-secondary); margin-top: 10px; margin-bottom: 30px;">
            NeuroLink AI has processed your responses and updated your Cognitive Twin for <strong>${i.name}</strong>.
          </p>

          <div style="background: var(--bg-tertiary); border: 1px solid var(--glass-border); border-radius: var(--border-radius-md); padding: 24px; text-align: left; margin-bottom: 30px;">
            <div class="flex justify-between align-center" style="margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
              <span style="font-family: var(--font-headings); font-weight: 600;">Overall Mastery:</span>
              <strong style="color: var(--color-secondary); font-size: 1.4rem;">${o.overallMastery}%</strong>
            </div>

            <div style="margin-bottom: 12px; font-size: 0.9rem;">
              <strong style="color: var(--color-success);">✓ Strong Concepts:</strong>
              <div style="color: var(--text-secondary); margin-top: 4px;">${m}</div>
            </div>

            <div style="margin-bottom: 12px; font-size: 0.9rem;">
              <strong style="color: var(--color-error);">! Gaps / Weaknesses:</strong>
              <div style="color: var(--text-secondary); margin-top: 4px;">${I}</div>
            </div>

            <div style="font-size: 0.9rem;">
              <strong style="color: var(--color-warning);">⚠️ Misconceptions Flagged:</strong>
              <span style="color: var(--text-primary); margin-left: 8px;">${_}</span>
            </div>
          </div>

          <a href="#dashboard" class="btn btn-primary" style="width: 100%;">Enter Dashboard</a>
        </div>
      </div>
    `},b=o=>{if(o.includes("```")){const m=o.split("```");let I=m[0];for(let _=1;_<m.length;_+=2){const C=m[_].trim();let A=C;const O=C.indexOf(`
`);if(O!==-1){const P=C.substring(0,O).trim();["python","javascript","js","sql","html","css"].includes(P)&&(A=C.substring(O+1))}I+=`<pre><code>${f(A)}</code></pre>`,m[_+1]&&(I+=m[_+1])}return I}return f(o)},f=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),$=p[0];k($,s?y:"easy")}let F=[{sender:"tutor",text:"Hello! I am your NeuroLink AI Socratic Tutor. I have analyzed your Learning Twin and I'm here to help you master your studies! Ask me any questions, or click on a suggested question below.",timestamp:Date.now()}];function xe(){var i;const e=se(),t=((i=a.learningTwin.recommendedNextStep)==null?void 0:i.concept)||"variables";F=[{sender:"tutor",text:`Hello ${a.user?a.user.name:"there"}! I'm here to help you study **${e}**. I see we are currently working on mastering **${H[t]||"foundations"}**. Ask me to explain a concept, show you an example, or guide you through a practice problem!`,timestamp:Date.now()}]}async function we(e){F.push({sender:"user",text:e,timestamp:Date.now()});const t=a.settings.geminiApiKey;if(t&&t.trim()!=="")try{return await ke(e,t)}catch(i){console.error("Gemini API error, falling back to offline tutor",i);const n=te(e);return F.push({sender:"tutor",text:`*(API Connection Error - Offline Tutor fallback)*

${n}`,timestamp:Date.now()}),n}else return new Promise(i=>{setTimeout(()=>{const n=te(e);F.push({sender:"tutor",text:n,timestamp:Date.now()}),i(n)},700)})}async function ke(e,t){var u,k,v,h,L,b;const i=a.learningTwin,n=a.user,r=D(i.subjectId),s=r.name,l=Object.entries(i.topicsMastery).map(([f,$])=>`- ${r.conceptLabels[f]||f}: ${Math.round($*100)}%`).join(`
`),y=i.gaps.map(f=>`- [${f.type}] ${f.message}`).join(`
`)||"None detected yet.",S=`You are NeuroLink AI Socratic Tutor, an adaptive learning coach.
The student you are teaching is named "${n.name}".
Their learning goal is: "${n.learningGoal}".
Subject they are studying: "${s}".
Their current overall mastery of "${s}": ${i.overallMastery}%.
Their preferred learning style: "${n.learningStyle}" (examples_first, short_explanations, detailed_explanations, practice_first).
Current topic: "${r.conceptLabels[(u=i.recommendedNextStep)==null?void 0:u.concept]||"foundations"}".

Student Learning Twin State for "${s}":
${l}

Detected Knowledge Gaps / Misconceptions:
${y}

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
6. Keep replies concise and easy to read.`,T=[];let p="user";const w=F.findIndex(f=>f.sender==="user");if(w!==-1)for(let f=w;f<F.length;f++){const $=F[f],z=$.sender==="user"?"user":"model";z===p&&(T.push({role:z,parts:[{text:$.text}]}),p=p==="user"?"model":"user")}let M=T.slice(-6);M.length>0&&M[0].role==="model"&&M.shift(),M.length===0&&(M=[{role:"user",parts:[{text:e}]}]);const c=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:M,systemInstruction:{parts:[{text:S}]},generationConfig:{temperature:.7,maxOutputTokens:800}})});if(!c.ok)throw new Error(`HTTP Error ${c.status}`);const x=(b=(L=(h=(v=(k=(await c.json()).candidates)==null?void 0:k[0])==null?void 0:v.content)==null?void 0:h.parts)==null?void 0:L[0])==null?void 0:b.text;if(!x)throw new Error("Empty response from Gemini API");return x}function te(e){var S,T,p;const t=e.toLowerCase(),i=a.learningTwin,n=D(i.subjectId),r=((S=a.user)==null?void 0:S.learningStyle)||"examples_first";let s=null;if(n.concepts.forEach(w=>{const M=n.conceptLabels[w].toLowerCase();(t.includes(w)||t.includes(M.split(" ")[0])||t.includes(M.split("&")[0].trim()))&&(s=w)}),s)return Ce(i.subjectId,s,r);if(t.includes("hello")||t.includes("hi")||t.includes("hey"))return`Hello! How can I assist you with **${n.name}** today?
We can discuss any concept in your path (such as ${n.concepts.map(w=>n.conceptLabels[w]).slice(0,3).join(", ")}) or check out a quick practice problem. What sounds best?`;if(t.includes("help")||t.includes("what is my path")||t.includes("next step")){const w=((T=i.recommendedNextStep)==null?void 0:T.concept)||n.concepts[0];return`Looking at your Learning Twin, your next recommendation is to focus on **${n.conceptLabels[w]}**. 
Would you like me to explain this concept, show you an example, or quiz you?`}const l=((p=i.recommendedNextStep)==null?void 0:p.concept)||n.concepts[0],y=n.conceptLabels[l];return`That's an interesting question! To help you think about this within **${n.name}**, let's look at **${y}**. 
What is your current understanding of how this concept functions, or are you trying to solve a specific exercise? Share your thoughts and we can break it down step-by-step!`}function Ce(e,t,i){const n=D(e),r=n.conceptLabels[t],s=n.conceptDescriptions[t];n.isCoding;const l=Se(e,t),y=`Socratic Question: Based on this description, how would you apply **${r}** to solve a real-world problem or structure? Try describing it in a sentence, or type code!`;let S=`Let's discuss **${r}** in **${n.name}**.

`;return S+=`**Core Concept**: ${s}

`,i==="examples_first"?(S=`Here is an example illustrating **${r}**:

${l}

`,S+=`**How it works**:
- In ${n.name}, ${r} is used to manage structural relationships.
- ${s}

`):i==="short_explanations"?S=`**${r} Key Takeaways**:
- **Purpose**: ${s}
- **Implementation**: Utilizes standard syntax and structures in ${n.name}.

${l}

`:i==="practice_first"&&(S=`Before I explain, let's test your intuition. How would you solve this basic concept of **${r}**?

*Recall:* ${s}

`),i!=="practice_first"?S+=`${y}`:S+=`What do you think is the main outcome of running this? 

${l}`,S}function Se(e,t){if(e==="python"&&t==="variables")return'```python\nx = 10\ny = "Sarah"\nprint(x * 2)  # Prints 20\n```';if(e==="python"&&t==="loops")return'```python\nfor i in range(3):\n    print(f"Twin active: {i}")\n```';if(e==="javascript"&&t==="async_js")return'```javascript\n// Promise timeout\nconst wait = ms => new Promise(res => setTimeout(res, ms));\nawait wait(1000);\nconsole.log("Synced!");\n```';if(e==="calculus"&&t==="derivatives")return`Equation of instantaneous slope:
$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
Example: If $f(x) = x^2$, then $f'(x) = 2x$.`;if(e==="history"&&t==="french_rev")return`Key Historic Timeline Element:
- 1789: Storming of the Bastille (marks beginnings of the popular revolt)
- 1793: Execution of Louis XVI and Marie Antoinette
- 1799: Napoleon Bonaparte takes power in a coup d'état.`;const i=D(e),n=i.conceptLabels[t];return i.isCoding?`\`\`\`${e}
// Demonstration of ${n}
// Concept: ${i.conceptDescriptions[t]}
initialize_${t}();
\`\`\``:`[${n} Demonstration Framework]
- Principle: ${i.conceptDescriptions[t]}
- Core Application: Utilized to resolve dependencies in ${i.name}.`}function Le(e){le(()=>{window.location.hash.startsWith("#dashboard")&&(a.activeTab!=="practice"&&a.activeTab!=="tutor"&&n(),i())}),e.innerHTML=`
    <div class="dashboard-layout">
      <!-- Sidebar Navigation -->
      <aside class="sidebar">
        <div class="sidebar-top">
          <div class="logo sidebar-logo">
            <div class="logo-icon">🧠</div>
            <span>NeuroLink AI</span>
          </div>
          
          <ul class="sidebar-menu">
            <li class="menu-item ${a.activeTab==="overview"?"active":""}" data-tab="overview">
              <button><span class="menu-item-icon">👤</span>Learning Twin</button>
            </li>
            <li class="menu-item ${a.activeTab==="map"?"active":""}" data-tab="map">
              <button><span class="menu-item-icon">🗺️</span>Knowledge Map</button>
            </li>
            <li class="menu-item ${a.activeTab==="tutor"?"active":""}" data-tab="tutor">
              <button><span class="menu-item-icon">💬</span>AI Tutor</button>
            </li>
            <li class="menu-item ${a.activeTab==="practice"?"active":""}" data-tab="practice">
              <button><span class="menu-item-icon">💻</span>Practice Workspace</button>
            </li>
            <li class="menu-item ${a.activeTab==="analytics"?"active":""}" data-tab="analytics">
              <button><span class="menu-item-icon">📈</span>Analytics & Progress</button>
            </li>
            <li class="menu-item ${a.activeTab==="settings"?"active":""}" data-tab="settings">
              <button><span class="menu-item-icon">⚙️</span>Settings</button>
            </li>
          </ul>
        </div>

        <div class="sidebar-bottom" style="display: flex; flex-direction: column; gap: 14px;">
          <!-- User status chip -->
          <div id="sidebar-user-chip" class="sidebar-user"></div>
          <button id="logout-btn" class="btn btn-secondary" style="width: 100%; font-size: 0.85rem; padding: 10px;">
            Logout
          </button>
        </div>
      </aside>

      <!-- Main Workspace -->
      <main class="dashboard-content">
        <div id="active-tab-container" class="animate-fade"></div>
      </main>
    </div>
  `,e.querySelector("#logout-btn").addEventListener("click",()=>{ge(),window.location.hash="#landing"});const t=e.querySelectorAll(".sidebar-menu .menu-item");t.forEach(c=>{c.addEventListener("click",()=>{t.forEach(d=>d.classList.remove("active")),c.classList.add("active"),a.activeTab=c.getAttribute("data-tab"),n()})}),i(),n();function i(){const c=e.querySelector("#sidebar-user-chip");if(!c||!a.user)return;const d=a.user.name.charAt(0).toUpperCase();c.innerHTML=`
      <div class="user-avatar">${d}</div>
      <div class="user-info">
        <span class="user-name">${a.user.name}</span>
        <span class="user-role">Student Profile</span>
      </div>
    `}function n(){const c=e.querySelector("#active-tab-container");c&&(a.activeTab==="overview"?r(c):a.activeTab==="map"?s(c):a.activeTab==="tutor"?l(c):a.activeTab==="practice"?S(c):a.activeTab==="analytics"?w(c):a.activeTab==="settings"&&M(c))}function r(c){var $,z,o;const d=a.learningTwin,x=a.user,u=D(d.subjectId),k=d.strongTopics.map(m=>`<span class="topic-tag topic-tag-strong">✓ ${u.conceptLabels[m]||m}</span>`).join("")||'<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>',v=d.developingTopics.map(m=>`<span class="topic-tag topic-tag-developing">~ ${u.conceptLabels[m]||m}</span>`).join("")||'<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>',h=d.weakTopics.map(m=>`<span class="topic-tag topic-tag-weak">! ${u.conceptLabels[m]||m}</span>`).join("")||'<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>',L=440-440*(d.overallMastery/100);let b="";if(d.recommendedNextStep){const m=d.recommendedNextStep;m.type==="learn"||m.type==="review"?b='<button id="rec-action-btn" class="btn btn-primary" style="margin-top: 10px;">Start Tutoring</button>':m.type==="practice"?b='<button id="rec-action-btn" class="btn btn-accent" style="margin-top: 10px;">Practice Topic</button>':m.type==="assessment"?b='<a href="#assessment" class="btn btn-primary" style="margin-top: 10px;">Take Assessment</a>':b='<button id="rec-action-btn" class="btn btn-accent" style="margin-top: 10px;">Advanced Practice</button>'}c.innerHTML=`
      <div class="dashboard-header">
        <h1>Welcome, ${x.name} 👋</h1>
        <p>Your Cognitive Learning Twin has been updated with your latest educational metrics.</p>
      </div>

      <!-- Dashboard Cards -->
      <div class="dashboard-grid">
        <!-- Learning Twin Info Panel -->
        <div class="glass-card learning-twin-card">
          <div class="twin-avatar-container">
            <svg class="twin-gauge">
              <defs>
                <linearGradient id="twin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="var(--color-primary)" />
                  <stop offset="100%" stop-color="var(--color-secondary)" />
                </linearGradient>
              </defs>
              <circle class="twin-gauge-bg" cx="80" cy="80" r="70"></circle>
              <circle class="twin-gauge-fill" cx="80" cy="80" r="70" style="stroke-dashoffset: ${L};"></circle>
            </svg>
            <div class="twin-avatar-center">
              <span class="twin-percentage">${d.overallMastery}%</span>
              <span class="twin-label">Mastery</span>
            </div>
          </div>

          <div class="twin-details">
            <h2 class="twin-name">${x.name}'s Learning Twin</h2>
            <p class="twin-status">Subject Track: <strong>${u.name}</strong></p>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">STRONG TOPICS</span>
                <div class="twin-topics-summary">${k}</div>
              </div>
              <div style="margin-top: 4px;">
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">DEVELOPING</span>
                <div class="twin-topics-summary">${v}</div>
              </div>
              <div style="margin-top: 4px;">
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">NEEDS ATTENTION</span>
                <div class="twin-topics-summary">${h}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Action Card -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-secondary);">🎯</span> Recommended Next Step
            </h3>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius: var(--border-radius-sm); padding: 16px;">
              <span style="text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: var(--color-primary); display: block; margin-bottom: 4px;">
                ${(($=d.recommendedNextStep)==null?void 0:$.type)||"Assessment"}
              </span>
              <strong style="font-size: 1.05rem; display: block; margin-bottom: 4px;">
                ${((z=d.recommendedNextStep)==null?void 0:z.text)||"Take Assessment"}
              </strong>
              <span style="font-size: 0.8rem; color: var(--text-secondary); display: block;">
                ⏱️ Estimated duration: ${((o=d.recommendedNextStep)==null?void 0:o.duration)||"10 mins"}
              </span>
            </div>
          </div>
          
          ${b}
        </div>
      </div>

      <!-- Stats Counters Grid -->
      <div class="stats-row">
        <div class="glass-card stat-card">
          <div class="stat-val">${d.overallMastery}%</div>
          <div class="stat-label">Average Mastery</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val">${d.strongTopics.length} / ${u.concepts.length}</div>
          <div class="stat-label">Concepts Mastered</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val" style="color: var(--color-warning);">${d.gaps.length}</div>
          <div class="stat-label">Knowledge Gaps</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val" style="color: var(--color-secondary);">5 days</div>
          <div class="stat-label">Active Streak</div>
        </div>
      </div>

      <!-- AI Insights and Gaps -->
      <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr;">
        <!-- AI Insights -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">💡 AI Twin Insights</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
            ${d.insights.map(m=>`
              <li style="font-size: 0.9rem; line-height: 1.5; padding: 10px 14px; background: rgba(139, 92, 246, 0.05); border-left: 3px solid var(--color-primary); border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;">
                ${m}
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Detected Gaps -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">⚠️ Root Cause Gap Analysis</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${d.gaps.length===0?`
              <div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.9rem;">
                No conceptual blocks or misconceptions detected! You have solid foundations.
              </div>
            `:d.gaps.map(m=>`
              <div style="padding: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: var(--border-radius-sm); font-size: 0.85rem; line-height: 1.5; display: flex; gap: 10px;">
                <span style="font-size: 1.1rem; color: var(--color-error);">${m.type==="misconception"?"💡":"⚠️"}</span>
                <div>
                  <strong style="color: ${m.type==="misconception"?"var(--color-warning)":"#f87171"}">${m.type==="misconception"?"MISCONCEPTION DETECTED:":"FOUNDATIONAL GAP:"}</strong>
                  <span style="color: var(--text-secondary); display: block; margin-top: 2px;">${m.message}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;const f=c.querySelector("#rec-action-btn");f&&f.addEventListener("click",()=>{const m=d.recommendedNextStep;m.type==="learn"||m.type==="review"?e.querySelector(".sidebar-menu [data-tab='tutor']").click():(m.type==="practice"||m.type==="mastered")&&e.querySelector(".sidebar-menu [data-tab='practice']").click()})}function s(c){const d=a.learningTwin,x=d.topicsMastery,u=D(d.subjectId),k=u.concepts,v=u.dependencies,h=g=>{const E=v[g]||[];return E.length===0?0:1+Math.max(...E.map(j=>h(j)))},L={};k.forEach(g=>{L[g]=h(g)});const b=Math.max(...Object.values(L)),f=[];for(let g=0;g<=b;g++)f.push([]);k.forEach(g=>{f[L[g]].push(g)});const $={},z=760,o=360,m=b===0?z/2:(z-120)/b;f.forEach((g,E)=>{const j=60+E*m,N=g.length;g.forEach((R,G)=>{const X=50+(G+.5)*((o-60)/N);$[R]={x:j,y:X}})});let I="";k.forEach(g=>{(v[g]||[]).forEach(j=>{const N=$[j],R=$[g];if(N&&R){const G=x[j]>=.6;I+=`
            <line class="map-link ${G?"unlocked":""}" 
                  x1="${N.x}" y1="${N.y}" 
                  x2="${R.x}" y2="${R.y}" 
                  marker-end="url(#${G?"arrow-unlocked":"arrow"})"></line>
          `}})});let _="";k.forEach(g=>{const E=$[g];if(!E)return;const j=A(g)==="locked",N=O(g);_+=`
        <g class="map-node ${j?"locked":"unlocked"} ${N}" 
           data-concept="${g}" 
           transform="translate(${E.x}, ${E.y})">
          <circle r="32"></circle>
          <text y="4" style="font-size: 10px;">${B(u.conceptLabels[g]||g)}</text>
        </g>
      `}),c.innerHTML=`
      <div class="dashboard-header">
        <h1>Knowledge Map</h1>
        <p>Dynamic 2D prerequisite visualization for <strong>${u.name}</strong>. Click nodes to run tutorials.</p>
      </div>

      <div class="map-canvas-container glass-card">
        <svg class="knowledge-svg" viewBox="0 0 800 400" style="min-height: 380px;">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255, 255, 255, 0.15)"/>
            </marker>
            <marker id="arrow-unlocked" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(6, 182, 212, 0.5)"/>
            </marker>
          </defs>
          
          <!-- Connections -->
          ${I}
          
          <!-- Nodes -->
          ${_}
        </svg>

        <!-- Dynamic detail panel -->
        <div id="map-info-panel" class="map-detail-panel"></div>
      </div>
    `,c.querySelectorAll(".map-node").forEach(g=>{g.addEventListener("click",()=>{const E=g.getAttribute("data-concept");P(E)})});function A(g){return(v[g]||[]).some(N=>(x[N]||.15)<.6)?"locked":"unlocked"}function O(g){var R;const E=x[g]||.15,j=(R=d.recommendedNextStep)==null?void 0:R.concept;if(A(g)==="locked")return"locked";let N="weak";return E>=.8?N="mastered":E>=.45&&(N="developing"),j===g?`${N} current-target`:N}function P(g){const E=c.querySelector("#map-info-panel");if(!E)return;const j=x[g]||.15,N=A(g)==="locked",R=Math.round(j*100);let G="";N?G='<span class="topic-tag topic-tag-weak" style="background: rgba(255,255,255,0.05); color: var(--text-muted);">🔒 Locked</span>':j>=.8?G='<span class="topic-tag topic-tag-strong">✓ Mastered</span>':j>=.45?G='<span class="topic-tag topic-tag-developing">~ Developing</span>':G='<span class="topic-tag topic-tag-weak">! Needs Attention</span>';const X=(v[g]||[]).map(ee=>u.conceptLabels[ee]+((x[ee]||.15)<.6?" ❌":" (Mastered)")).join(", ")||"None";E.innerHTML=`
        <div class="flex justify-between align-center" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-headings);">${u.conceptLabels[g]||g}</h4>
            <span style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-top: 2px;">
              Prerequisites: ${X}
            </span>
          </div>
          <div class="flex align-center gap-4" style="display: flex; align-items: center; gap: 12px;">
            ${G}
            <strong style="font-size: 1.3rem; font-family: var(--font-headings);">${R}%</strong>
          </div>
        </div>

        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
          ${u.conceptDescriptions[g]||""}
        </p>

        <div class="flex gap-4" style="display: flex; gap: 12px;">
          <button id="node-learn-btn" class="btn btn-primary" ${N?"disabled":""}>Start Tutorial</button>
          <button id="node-practice-btn" class="btn btn-secondary" ${N?"disabled":""}>Practice Exercises</button>
        </div>
      `,E.classList.add("active"),E.querySelector("#node-learn-btn").addEventListener("click",()=>{a.learningTwin.recommendedNextStep={type:"learn",concept:g,text:`Learn ${u.conceptLabels[g]} with Tutor`},e.querySelector(".sidebar-menu [data-tab='tutor']").click()}),E.querySelector("#node-practice-btn").addEventListener("click",()=>{a.activeTab="practice",n(),T(g)})}function B(g){return g.split(" & ")[0].split(" / ")[0]}}function l(c){var I;const d=((I=a.learningTwin.recommendedNextStep)==null?void 0:I.concept)||Y()[0],u=D(a.learningTwin.subjectId).conceptLabels[d]||d,k=a.settings.geminiApiKey,v=k&&k.trim()!=="";c.innerHTML=`
      <div class="dashboard-header flex justify-between align-center" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h1>Socratic AI Tutor</h1>
          <p>Analyzing subject: <strong>${se()}</strong></p>
        </div>
        <div>
          ${v?`
            <span class="topic-tag topic-tag-strong" style="font-family: var(--font-code); font-size: 0.8rem;">● Live AI Mode (Gemini 2.5)</span>
          `:`
            <span class="topic-tag topic-tag-developing" style="font-family: var(--font-code); font-size: 0.8rem;">● Offline Mode (Socratic Templates)</span>
          `}
        </div>
      </div>

      <div class="tutor-layout glass-card" style="padding: 0;">
        <div id="chat-history-container" class="chat-history">
          ${F.map(_=>`
            <div class="chat-bubble ${_.sender==="user"?"chat-bubble-user":"chat-bubble-tutor"}">
              <div class="chat-sender-label">${_.sender==="user"?"You":"AI Tutor"}</div>
              <div>${o(_.text)}</div>
            </div>
          `).join("")}
        </div>

        <div class="tutor-suggestions">
          <button class="suggestion-chip" data-prompt="Explain ${u} with an example">Explain ${u}</button>
          <button class="suggestion-chip" data-prompt="Give me a simple example of ${u}">Show example</button>
          <button class="suggestion-chip" data-prompt="Why do we need ${u}?">Why use this?</button>
          <button class="suggestion-chip" data-prompt="Simplify explanations for ${u}">Simplify concept</button>
          <button class="suggestion-chip" data-prompt="Ask me a Socratic practice question about ${u}">Quiz me</button>
        </div>

        <div class="chat-input-area">
          <textarea id="tutor-input-box" class="chat-textarea" placeholder="Type your learning question..."></textarea>
          <button id="tutor-send-btn" class="btn btn-primary" style="height: 48px; border-radius: var(--border-radius-sm);">Send</button>
        </div>
      </div>
    `;const h=c.querySelector("#chat-history-container"),L=c.querySelector("#tutor-input-box"),b=c.querySelector("#tutor-send-btn");h.scrollTop=h.scrollHeight;const f=async _=>{if(!_||_.trim()==="")return;L.value="",z("user",_);const C=z("tutor","*Tutor is writing...*"),A=await we(_);C.querySelector("div:last-child").innerHTML=o(A),h.scrollTop=h.scrollHeight};b.addEventListener("click",()=>f(L.value)),L.addEventListener("keydown",_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),f(L.value))}),c.querySelectorAll(".suggestion-chip").forEach(_=>{_.addEventListener("click",()=>{f(_.getAttribute("data-prompt"))})});function z(_,C){const A=document.createElement("div");return A.className=`chat-bubble ${_==="user"?"chat-bubble-user":"chat-bubble-tutor"}`,A.innerHTML=`
        <div class="chat-sender-label">${_==="user"?"You":"AI Tutor"}</div>
        <div>${o(C)}</div>
      `,h.appendChild(A),h.scrollTop=h.scrollHeight,A}function o(_){let C=_.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");if(C=C.split(`
`).map(A=>A.trim().startsWith("- ")?`<li style="margin-left: 20px; margin-bottom: 6px;">${A.trim().substring(2)}</li>`:A).join(`
`),C.includes("```")){const A=C.split("```");let O=A[0];for(let P=1;P<A.length;P+=2){const B=A[P].trim();let g=B;const E=B.indexOf(`
`);if(E!==-1){const j=B.substring(0,E).trim();["python","javascript","sql","html","css"].includes(j)&&(g=B.substring(E+1))}O+=`<pre><code>${m(g)}</code></pre>`,A[P+1]&&(O+=A[P+1])}return O.replace(/\n/g,"<br>")}return C.replace(/\n/g,"<br>")}function m(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}let y=null;function S(c){var L;const d=a.learningTwin,x=D(d.subjectId),u=Y(),k=((L=d.recommendedNextStep)==null?void 0:L.concept)||u[0];c.innerHTML=`
      <div class="dashboard-header">
        <h1>Practice Workspace</h1>
        <p>Test your knowledge in <strong>${x.name}</strong>. Solve coding and conceptual checks.</p>
      </div>

      <div style="margin-bottom: 24px; display: flex; gap: 8px; flex-wrap: wrap;">
        ${u.map(b=>`
          <button class="btn btn-secondary topic-select-btn ${y===b?"btn-accent":""}" 
                  data-concept="${b}" 
                  style="font-size: 0.8rem; padding: 6px 12px; border-radius: 20px;">
            ${x.conceptLabels[b]}
          </button>
        `).join("")}
      </div>

      <div id="practice-workspace-body"></div>
    `;const v=c.querySelectorAll(".topic-select-btn");v.forEach(b=>{b.addEventListener("click",()=>{v.forEach($=>{$.classList.remove("btn-accent"),$.classList.add("btn-secondary")}),b.classList.remove("btn-secondary"),b.classList.add("btn-accent");const f=b.getAttribute("data-concept");y=f,T(f)})}),y||(y=k);const h=c.querySelector(`.topic-select-btn[data-concept="${y}"]`);h&&(v.forEach(b=>{b.classList.remove("btn-accent"),b.classList.add("btn-secondary")}),h.classList.remove("btn-secondary"),h.classList.add("btn-accent")),T(y)}function T(c){const d=e.querySelector("#practice-workspace-body");if(!d)return;const x=a.learningTwin,u=D(x.subjectId),k=ce(x.subjectId,c);if(!k){d.innerHTML='<div class="glass-card text-center">No exercise loaded for this topic.</div>';return}const v=u.isCoding?"interactive_sandbox.py":"socratic_essay_draft.txt",h=u.isCoding?"Run Code & Submit":"Submit Essay Response";d.innerHTML=`
      <div class="practice-layout">
        <!-- Problem details -->
        <div class="practice-question-panel">
          <div class="glass-card" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; min-height: 280px;">
            <div>
              <span class="question-category">${u.conceptLabels[c]} Practice</span>
              <h2 style="font-size: 1.25rem; margin-bottom: 12px;">${k.title}</h2>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                ${k.description}
              </p>
            </div>
            
            <div style="background: rgba(255,255,255,0.02); padding: 12px; border: 1px dashed var(--glass-border); border-radius: var(--border-radius-sm); font-size: 0.85rem; color: var(--text-muted);">
              <strong>Hint:</strong> ${k.hint}
            </div>
          </div>

          <!-- Solution feedback container -->
          <div id="solution-feedback" class="practice-feedback-card"></div>
        </div>

        <!-- Sandbox Editor Panel -->
        <div class="code-editor-panel">
          <div class="editor-header">
            <span>${v}</span>
            <span class="editor-lang">${u.isCoding?u.name:"Conceptual Text"}</span>
          </div>
          <textarea id="editor-textarea-field" class="editor-textarea" spellcheck="false">${k.startingCode}</textarea>
          <div class="editor-footer">
            <button id="run-code-btn" class="btn btn-primary">${h}</button>
          </div>
        </div>
      </div>
    `;const L=d.querySelector("#run-code-btn"),b=d.querySelector("#editor-textarea-field"),f=d.querySelector("#solution-feedback");L.addEventListener("click",async()=>{const $=b.value;f.className="practice-feedback-card active",f.innerHTML='<span style="font-size: 0.85rem; color: var(--text-muted);">Evaluating your response...</span>';let z=!1,o="";const m=a.settings.geminiApiKey;if(!u.isCoding&&m&&m.trim()!=="")try{const I=await p(u.name,u.conceptLabels[c],k.description,$,m);z=I.isCorrect,o=I.feedback}catch(I){console.error("Gemini practice evaluator failed, falling back offline",I)}o===""&&(z=k.solutionCheck($),o=z?`Your response matches the check requirements. Your mastery score for <strong>${u.conceptLabels[c]}</strong> has increased in your Learning Twin.`:"The response did not meet validation parameters. Review spelling, definitions, or code syntax and try again."),ae(c,z,"somewhat",20,`practice_${c}`),f.className="practice-feedback-card active",z?(f.classList.add("feedback-success"),f.innerHTML=`
          <strong style="color: var(--color-success); display: block; margin-bottom: 4px;">✓ Response Validated: Correct!</strong>
          <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: block;">
            ${o}
          </span>
          <button id="next-practice-btn" class="btn btn-secondary" style="margin-top: 10px; font-size: 0.8rem; padding: 6px 12px;">Go to Dashboard</button>
        `,f.querySelector("#next-practice-btn").addEventListener("click",()=>{e.querySelector(".sidebar-menu [data-tab='overview']").click()})):(f.classList.add("feedback-error"),f.innerHTML=`
          <strong style="color: var(--color-error); display: block; margin-bottom: 4px;">❌ Response Check Failed</strong>
          <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: block;">
            ${o}
          </span>
        `),Z()})}const p=async(c,d,x,u,k)=>{var f,$,z,o,m;const v=`You are a Socratic tutor. Evaluate the student's essay answer for this prompt:
    Prompt: "${x}"
    Concept: "${d}"
    Subject: "${c}"

    Student's Answer:
    "${u}"

    Analyze if they understand the core definition. Provide a brief 2-3 sentence feedback.
    The response MUST be valid JSON in this exact structure:
    {
      "isCorrect": true, // set to true if they demonstrated sufficient understanding of the concept, else false
      "feedback": "Your Socratic feedback details here, highlighting what they got right and wrong."
    }`,h=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${k}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:v}]}],generationConfig:{responseMimeType:"application/json",temperature:.2}})});if(!h.ok)throw new Error(`API returned ${h.status}`);const b=(m=(o=(z=($=(f=(await h.json()).candidates)==null?void 0:f[0])==null?void 0:$.content)==null?void 0:z.parts)==null?void 0:o[0])==null?void 0:m.text;if(!b)throw new Error("Empty response text");return JSON.parse(b.trim())};function w(c){const d=a.learningTwin,x=a.assessmentHistory,u=D(d.subjectId),k=Y(),v=x.length,h=x.filter(o=>o.isCorrect).length,L=v>0?Math.round(h/v*100):0,b=x.filter(o=>o.isCorrect&&o.confidence==="very").length,f=x.filter(o=>o.isCorrect&&o.confidence==="not").length,$=x.filter(o=>!o.isCorrect&&o.confidence==="very").length,z=x.filter(o=>!o.isCorrect&&o.confidence==="not").length;c.innerHTML=`
      <div class="dashboard-header">
        <h1>Analytics & Progress</h1>
        <p>A comprehensive overview of your performance metrics, Bayesian mastery probability, and metacognition calibration.</p>
      </div>

      <div class="dashboard-grid">
        <!-- Progress Bars -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">Bayesian Mastery Probabilities</h3>
          <div class="bar-chart-container">
            ${k.map(o=>{const m=Math.round((d.topicsMastery[o]||.15)*100);return`
                <div class="bar-chart-row">
                  <div class="chart-label-row">
                    <span>${u.conceptLabels[o]||o}</span>
                    <strong>${m}%</strong>
                  </div>
                  <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: ${m}%;"></div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Calibration Matrix -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 6px;">Metacognitive Calibration</h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">Matches your answers accuracy with self-reported confidence.</p>
          
          <div class="calibration-chart">
            <div class="calibration-box" style="border-left: 3px solid var(--color-success);">
              <div class="calibration-num">${b}</div>
              <div class="calibration-text">Mastered (Correct + Confident)</div>
            </div>
            
            <div class="calibration-box" style="border-left: 3px solid var(--color-warning);">
              <div class="calibration-num">${f}</div>
              <div class="calibration-text">Gaps (Correct + Low Confidence)</div>
            </div>

            <div class="calibration-box" style="border-left: 3px solid var(--color-error);">
              <div class="calibration-num">${$}</div>
              <div class="calibration-text">Misconceptions (Wrong + Confident)</div>
            </div>

            <div class="calibration-box" style="border-left: 3px solid var(--text-muted);">
              <div class="calibration-num">${z}</div>
              <div class="calibration-text">Unknown (Wrong + Low Confidence)</div>
            </div>
          </div>

          <div style="margin-top: 20px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; background: rgba(255,255,255,0.02); padding: 12px; border-radius: var(--border-radius-sm);">
            <strong>System Calibration Insight:</strong>
            ${$>0?`
              We've detected <strong>${$} active misconceptions</strong>. You are applying logic that is consistently incorrect, though you feel confident in it. Spend extra time with the Socratic AI Tutor.
            `:`
              Your confidence correlates strongly with accuracy! This is excellent, as it prevents logical misconceptions in building application concepts.
            `}
          </div>
        </div>
      </div>

      <!-- Quick Stats Footer -->
      <div class="stats-row" style="margin-bottom: 0;">
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val">${v}</div>
          <div class="stat-label">Total Submissions</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val" style="color: var(--color-secondary);">${L}%</div>
          <div class="stat-label">Answer Accuracy</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val">${b+f}</div>
          <div class="stat-label">Total Successes</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val" style="color: var(--color-error);">${$+z}</div>
          <div class="stat-label">Total Errors</div>
        </div>
      </div>
    `}function M(c){c.innerHTML=`
      <div class="dashboard-header">
        <h1>Profile & Settings</h1>
        <p>Manage your account settings, clear educational states, and input AI credentials.</p>
      </div>

      <div class="glass-card" style="max-width: 600px; margin-bottom: 30px;">
        <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">Gemini API Configuration</h3>
        
        <div class="input-group">
          <label for="gemini-key-input">Gemini API Key</label>
          <input type="password" id="gemini-key-input" class="input-control" value="${a.settings.geminiApiKey||""}" placeholder="AIzaSy...">
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">
            Adding an API key enables <strong>Live AI Mode</strong>. Questions, practice evaluations, and Socratic answers will be generated dynamically by Gemini 2.5 models.
          </span>
        </div>

        <button id="save-api-key-btn" class="btn btn-primary">Save API Configuration</button>
      </div>

      <div class="glass-card" style="max-width: 600px; border-color: rgba(239, 68, 68, 0.2);">
        <h3 style="font-family: var(--font-headings); font-size: 1.1rem; color: var(--color-error); margin-bottom: 12px;">Danger Zone</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">
          This will delete all assessment history, BKT mastery probabilities, and reset your Learning Twin to baseline credentials.
        </p>

        <button id="reset-twin-btn" class="btn btn-secondary" style="border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
          Reset Learning Twin
        </button>
      </div>
    `,c.querySelector("#save-api-key-btn").addEventListener("click",()=>{const d=c.querySelector("#gemini-key-input").value;ye(d),U("Success","Gemini API Configuration saved! The AI Tutor is now synced.")}),c.querySelector("#reset-twin-btn").addEventListener("click",()=>{confirm("Are you sure you want to reset your Learning Twin? All your progress and assessment logs will be deleted.")&&(he(),xe(),U("Twin Reset","Your Cognitive Learning Twin has been reset. You will need to take the initial assessment again."),window.location.hash="#assessment")})}}function U(e,t){const i=document.getElementById("global-modal"),n=document.getElementById("modal-title"),r=document.getElementById("modal-message");i&&n&&r?(n.textContent=e,r.textContent=t,i.classList.remove("hidden")):alert(`${e}: ${t}`)}document.addEventListener("DOMContentLoaded",()=>{de();const e=document.getElementById("global-modal"),t=document.getElementById("modal-close-btn"),i=document.getElementById("modal-confirm-btn"),n=()=>e.classList.add("hidden");t&&t.addEventListener("click",n),i&&i.addEventListener("click",n),window.addEventListener("hashchange",ie),ie()});function ie(){const e=window.location.hash||"#landing",t=document.getElementById("app");if(!t)return;const i=!!a.user,n=i&&!!a.user.learningGoal,r=i&&a.assessmentHistory.length>0;if(!i&&!["#landing","#auth"].includes(e)){window.location.hash="#landing";return}if(i&&!n&&e!=="#onboarding"){window.location.hash="#onboarding";return}if(i&&n&&!r&&e==="#dashboard"){window.location.hash="#assessment";return}t.className="",e==="#landing"?fe(t):e==="#auth"?ve(t):e==="#onboarding"?be(t):e==="#assessment"?_e(t):e==="#dashboard"?Le(t):window.location.hash="#landing"}
