/*
 * POSTS DATA - generated from the clinical guideline JSON files:
 *   - clinical_guidelines_headache.json
 *   - clinical_guidelines_abdominal_discomfort_elderly.json
 *   - clinical_guidelines_primary_tremors.json
 *
 * Drop-in replacement: exports and post shape are unchanged, so existing
 * components keep working. Each post body is a list of blocks:
 *   { type: "h", text }   section heading
 *   { type: "p", text }   paragraph
 *   { type: "ul", items } bullet list
 */

export const CATEGORY_STYLES = {
  Neurology: { fg: "#6d34b8", bg: "#f1e8fb" },
  Geriatrics: { fg: "#0f766e", bg: "#dff5f2" },
  "Movement Disorders": { fg: "#1a56c4", bg: "#e4edfc" },
};

export const POSTS = [
  /* ------------------------------------------------------------------ */
  /* 1. HEADACHE                                                         */
  /* ------------------------------------------------------------------ */
  {
    id: "headache-evaluation-adults",
    title: "Headache in adults: classify first, then treat",
    category: "Neurology",
    date: "2026-09-18",
    author: "Clinical Content Team",
    summary:
      "A structured approach to the adult with headache: screen for red flags, classify the pattern, and match treatment to the underlying cause.",
    tags: ["headache", "migraine", "red flags"],
    keyPoints: [
      "Assess ABCs and screen for red flags before anything else.",
      "Migraine, cluster and tension headache are usually diagnosed clinically.",
      "Sudden severe onset, neurological deficit or fever with stiff neck need urgent work-up.",
    ],
    body: [
      { type: "h", text: "Start with the red flags" },
      {
        type: "p",
        text: "Begin with ABCs, a focused history and a physical and neurological examination. Any of the following should change the pace and depth of the work-up.",
      },
      {
        type: "ul",
        items: [
          "Sudden onset (thunderclap)",
          "Neurological deficit",
          "New onset after 50 years of age",
          "Fever with stiff neck",
          "Seizures",
          "Progressive worsening or a change in pattern",
          "Persistent vomiting",
        ],
      },
      { type: "h", text: "Classify the headache" },
      {
        type: "p",
        text: "Document onset, duration, location, character, associated symptoms and triggers. This pattern usually points to the diagnosis before any test is ordered.",
      },
      { type: "h", text: "Migraine" },
      {
        type: "p",
        text: "Typically unilateral and throbbing, moderate to severe, with nausea or vomiting, photophobia and phonophobia, and worse with activity. An aura may precede the attack. Diagnosis is usually clinical, with neuroimaging reserved for atypical features or red flags.",
      },
      {
        type: "ul",
        items: [
          "Acute: ibuprofen 400-800 mg, sumatriptan 50-100 mg at onset (may repeat once after 2 hours), metoclopramide 10 mg for nausea",
          "Preventive (at least 3 months): topiramate, propranolol or amitriptyline, started low and titrated",
          "Non-drug: trigger avoidance, regular sleep and meals, hydration, stress management, relaxation and biofeedback",
        ],
      },
      { type: "h", text: "Cluster headache" },
      {
        type: "p",
        text: "Severe, piercing, unilateral pain around the eye lasting 15 to 180 minutes, with a red tearing eye, nasal congestion and restlessness. Attacks come in clusters. New onset after 40 years or persistence outside cluster periods should prompt imaging.",
      },
      {
        type: "ul",
        items: [
          "Acute: subcutaneous sumatriptan 6 mg, zolmitriptan 5 mg nasal spray, or 100% oxygen at 12-15 L/min for 15-20 minutes",
          "Preventive: verapamil titrated over weeks, with a short prednisolone-type steroid taper as a bridge",
          "Avoid alcohol during a cluster period and keep sleep regular",
        ],
      },
      { type: "h", text: "Tension-type headache" },
      {
        type: "p",
        text: "Bilateral, pressing or tightening, mild to moderate, not aggravated by routine activity and without nausea or vomiting. It is often linked to stress or fatigue.",
      },
      {
        type: "ul",
        items: [
          "Acute: paracetamol or ibuprofen for up to 7 days",
          "Preventive if frequent: amitriptyline or mirtazapine for at least 2 to 3 months",
          "Stress management, ergonomic correction, regular exercise and adequate sleep",
        ],
      },
      { type: "h", text: "Secondary causes not to miss" },
      {
        type: "ul",
        items: [
          "Thunderclap headache: worst-ever pain peaking in seconds. Urgent CT brain, then lumbar puncture and CT or MR angiography to rule out subarachnoid haemorrhage",
          "Brain tumour: progressive headache, worse in the morning, with vomiting, seizures, focal deficit or cognitive change. MRI with contrast",
          "Acute angle closure glaucoma: severe eye pain, halos, blurred vision, red eye. Measure intraocular pressure and refer to ophthalmology immediately",
          "Chronic sinusitis: facial pressure, purulent discharge, worse bending forward. Intranasal corticosteroid, saline irrigation and antibiotics when indicated",
          "Uncontrolled hypertension: dull occipital headache with dizziness and blurred vision. Lower blood pressure gradually, and treat as an emergency above 180/120 mmHg with red-flag features",
          "Drug-induced headache: look for a temporal link to a new drug or dose change, and review analgesic overuse",
        ],
      },
      { type: "h", text: "Good practice" },
      {
        type: "ul",
        items: [
          "Treat the underlying cause and give symptomatic relief",
          "Use medicines judiciously and avoid analgesic overuse",
          "Encourage sleep, hydration and exercise",
          "Address psychosocial factors and arrange regular follow-up",
        ],
      },
      {
        type: "p",
        text: "This summary is a guide only and does not replace individualised clinical judgement. Check doses against your local formulary.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. ABDOMINAL DISCOMFORT IN THE ELDERLY                              */
  /* ------------------------------------------------------------------ */
  {
    id: "abdominal-discomfort-elderly",
    title: "Abdominal discomfort in older adults: a guideline-based approach",
    category: "Geriatrics",
    date: "2026-09-11",
    author: "Clinical Content Team",
    summary:
      "How to work up abdominal discomfort in the elderly, from initial assessment and red flags to condition-specific management and follow-up.",
    tags: ["abdominal pain", "elderly", "frailty"],
    keyPoints: [
      "Older patients often present atypically, so keep a low threshold for investigation.",
      "Review medications first, especially NSAIDs, and consider frailty and polypharmacy.",
      "Reassess response within 24 to 72 hours and adjust the plan.",
    ],
    body: [
      { type: "h", text: "A four-step approach" },
      {
        type: "ul",
        items: [
          "Initial approach: ABCs and stability, detailed history, medication review, physical examination and red flags",
          "Initial evaluation: CBC, U&E, LFT and CRP, with ECG, abdominal ultrasound and stool occult blood where appropriate, plus hydration and nutrition status",
          "Diagnosis and risk stratification: combine clinical features, tests and imaging, stratify severity, identify complications and consider co-morbidities and frailty",
          "Management and follow-up: start condition-specific treatment, reassess at 24-72 hours, adjust therapy, plan follow-up and refer if needed",
        ],
      },
      { type: "h", text: "Red flags" },
      {
        type: "ul",
        items: [
          "Significant weight loss",
          "GI bleeding (haematemesis, melaena or haematochezia)",
          "Progressive dysphagia or persistent vomiting",
          "Severe pain with guarding or rigidity",
          "Unexplained iron deficiency anaemia",
          "Obstructive symptoms or jaundice",
          "Altered mental status",
        ],
      },
      { type: "h", text: "Upper GI: GORD and peptic ulcer" },
      {
        type: "p",
        text: "GORD presents with heartburn and regurgitation, often worse at night or after meals, sometimes with cough or hoarseness. Consider drug causes such as nitrates and calcium channel blockers. Peptic ulcer causes epigastric burning pain, and NSAID use is common in this age group.",
      },
      {
        type: "ul",
        items: [
          "GORD: lifestyle measures, a once-daily PPI trial (e.g. pantoprazole 40 mg), antacids or alginates as needed. Escalate to twice-daily PPI or a nocturnal H2 blocker, and arrange endoscopy if alarm symptoms or refractory",
          "Peptic ulcer: stop NSAIDs, start a PPI, and test for H. pylori with breath test, stool antigen or biopsy",
          "H. pylori eradication: PPI plus clarithromycin and amoxicillin (or metronidazole) for 14 days, then confirm eradication",
          "Continue PPI for 4-8 weeks (duodenal) or 8-12 weeks (gastric ulcer)",
          "Long-term PPI: watch for B12 deficiency and fractures",
        ],
      },
      { type: "h", text: "Biliary and lower GI" },
      {
        type: "ul",
        items: [
          "Gall bladder disease: RUQ pain after fatty meals, possibly with fever. Ultrasound first, with LFT and CBC. Laparoscopic cholecystectomy if fit, IV antibiotics for acute cholecystitis, percutaneous cholecystostomy if surgical risk is high, ERCP for choledocholithiasis",
          "Diverticulitis: LLQ pain, fever and altered bowel habit, sometimes confusion in the elderly. CT abdomen and pelvis with contrast is the gold standard. Oral antibiotics if uncomplicated, IV antibiotics and drainage or surgery if complicated. Colonoscopy 6-8 weeks after recovery",
          "Bowel obstruction: colicky pain, vomiting, distension and constipation. Nil by mouth, IV fluids, nasogastric decompression and analgesia. Surgery for strangulation, ischaemia, perforation or failure of conservative treatment",
        ],
      },
      { type: "h", text: "Cancers to keep in mind" },
      {
        type: "p",
        text: "Both gastric and colorectal cancer are more common in older adults and often declare themselves through alarm features rather than pain alone.",
      },
      {
        type: "ul",
        items: [
          "Gastric carcinoma: early satiety, weight loss, anaemia. Endoscopy with biopsy, then CT for staging",
          "Colorectal cancer: change in bowel habit, rectal bleeding, iron deficiency anaemia. Colonoscopy with biopsy, then CT abdomen and pelvis",
          "Treatment is multidisciplinary, with nutritional support, anaemia correction, pain control and early palliative care input where disease is advanced",
        ],
      },
      { type: "h", text: "Best practice in older patients" },
      {
        type: "ul",
        items: [
          "Treat the cause, not just the symptom",
          "Consider frailty, polypharmacy and malnutrition",
          "Use the lowest effective dose and avoid NSAIDs and unnecessary drugs",
          "Ensure adequate hydration and nutrition",
          "Support family and caregivers, and plan advance care in advanced disease",
        ],
      },
      {
        type: "p",
        text: "This summary is a guide only. Clinical judgement is essential, so refer to local guidelines and seek specialist input as needed.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. PRIMARY TREMORS                                                  */
  /* ------------------------------------------------------------------ */
  {
    id: "tremor-classification-management",
    title: "Tremor: identify the type, then choose the treatment",
    category: "Movement Disorders",
    date: "2026-09-04",
    author: "Clinical Content Team",
    summary:
      "How to characterise a tremor, separate the common types, and match management to the cause, from essential tremor to functional tremor.",
    tags: ["tremor", "essential tremor", "parkinsonism"],
    keyPoints: [
      "Characterise the tremor as rest, postural, action or kinetic before deciding on a cause.",
      "Always review medications and check TSH, electrolytes and renal and liver function.",
      "Start low and go slow with drug treatment, and treat the underlying cause where possible.",
    ],
    body: [
      { type: "h", text: "Approach" },
      {
        type: "ul",
        items: [
          "History: onset, duration, which hand, triggers",
          "Examination and tremor characterisation (rest, postural, action, kinetic)",
          "Basic tests: CBC, random blood sugar, TSH, renal and liver function, electrolytes, and a toxicology screen if indicated",
          "Classify the type, look for secondary causes, and grade severity with a tool such as the Fahn-Tolosa-Marin Tremor Rating Scale",
        ],
      },
      { type: "h", text: "Red flags" },
      {
        type: "ul",
        items: [
          "Acute onset",
          "Unilateral resting tremor with rapid progression",
          "Tremor with weakness, numbness, vision change or ataxia",
          "Tremor with altered consciousness",
          "Suspected drug toxicity or cerebellar lesion",
          "Onset in a child or adolescent, or signs of Wilson's disease",
          "Severe disability affecting daily activities",
        ],
      },
      { type: "h", text: "Essential tremor" },
      {
        type: "p",
        text: "Bilateral action tremor, postural more than kinetic, usually in the hands but sometimes involving the head or voice. Onset is gradual, family history is common, and a small amount of alcohol often helps.",
      },
      {
        type: "ul",
        items: [
          "Non-drug: reassurance, avoid caffeine and stimulants, adequate sleep, stress management, occupational therapy and weighted utensils",
          "First-line drugs: propranolol 40-240 mg/day or primidone 25-250 mg/day, started low and titrated",
          "Next steps: combination therapy, or topiramate, gabapentin or pregabalin",
          "Review at 4-6 weeks, and monitor heart rate and blood pressure on beta-blockers",
        ],
      },
      { type: "h", text: "Parkinsonian tremor" },
      {
        type: "p",
        text: "Pill-rolling resting tremor with asymmetric onset that lessens with voluntary movement, usually alongside bradykinesia, rigidity and postural instability. Confirm the diagnosis, check against Parkinson's disease criteria, and review medications such as antipsychotics.",
      },
      {
        type: "ul",
        items: [
          "Levodopa/carbidopa, started low and titrated",
          "Dopamine agonists, MAO-B inhibitors or COMT inhibitors",
          "Physiotherapy, with deep brain stimulation or apomorphine/Duodopa for advanced disease",
          "Regular neurologist follow-up",
        ],
      },
      { type: "h", text: "Physiologic and situational tremor" },
      {
        type: "p",
        text: "Physiologic tremor is low amplitude and high frequency, and is enhanced by anxiety, fatigue, caffeine, nicotine, hyperthyroidism and drugs such as beta-agonists, SSRIs, TCAs, lithium and valproate. Situational tremor appears in settings such as public speaking, with a normal neurological exam.",
      },
      {
        type: "ul",
        items: [
          "Remove triggers, reassure and treat any underlying cause such as hyperthyroidism",
          "Relaxation techniques, CBT and skill training for situational tremor",
          "If troublesome, propranolol 10-40 mg as needed for performance-related situations, short term only",
        ],
      },
      { type: "h", text: "Other tremor types" },
      {
        type: "ul",
        items: [
          "Cerebellar (intention) tremor: dysmetria with ataxia, dysarthria or nystagmus. Neurological evaluation and MRI brain if indicated, treat the cause, clonazepam or primidone may help",
          "Dystonic tremor: occurs in the dystonic body part and is often task-specific. Botulinum toxin, anticholinergics or benzodiazepines, and DBS in selected cases. Consider Wilson's disease in young patients",
          "Drug-induced tremor: onset after starting a drug, often bilateral action tremor. Stop or reduce the offending drug, use propranolol if symptomatic, and review in 2-4 weeks",
          "Functional (psychogenic) tremor: variable, distractible and entrainable, with inconsistent findings. Explain the diagnosis, avoid unnecessary tests, and offer CBT, physiotherapy and active rehabilitation",
        ],
      },
      { type: "h", text: "Good practice" },
      {
        type: "ul",
        items: [
          "Identify the tremor type accurately",
          "Treat the underlying cause whenever possible",
          "Individualise treatment to severity and functional impact",
          "Monitor side effects and adherence",
          "A multidisciplinary approach improves outcomes",
        ],
      },
      {
        type: "p",
        text: "This summary is a guide only. Clinical judgement is essential, and early recognition with appropriate management improves quality of life and functional outcomes.",
      },
    ],
  },
];

export const CATEGORIES = [...new Set(POSTS.map((p) => p.category))];

export function readingMinutes(post) {
  const text = post.body
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}