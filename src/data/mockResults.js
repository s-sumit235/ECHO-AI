export const ABNORMALITIES = [
  "Pneumonia",
  "Cardiomegaly",
  "Pleural Effusion",
  "Edema",
  "Pneumothorax",
  "Atelectasis",
  "Consolidation",
];

export const MOCK_RESULTS_SETS = [
  {
    detected: ["Pneumonia", "Pleural Effusion", "Consolidation"],
    scores: {
      Pneumonia: 0.87,
      Cardiomegaly: 0.12,
      "Pleural Effusion": 0.74,
      Edema: 0.23,
      Pneumothorax: 0.08,
      Atelectasis: 0.31,
      Consolidation: 0.65,
    },
    gradcamColor: "from-yellow-500/60 via-red-500/50 to-transparent",
    gradcamDescription:
      "High activation in lower-right lung field indicating Pneumonia consolidation pattern. Blunted costophrenic angle consistent with Pleural Effusion.",
  },
  {
    detected: ["Cardiomegaly", "Edema"],
    scores: {
      Pneumonia: 0.15,
      Cardiomegaly: 0.91,
      "Pleural Effusion": 0.44,
      Edema: 0.78,
      Pneumothorax: 0.06,
      Atelectasis: 0.19,
      Consolidation: 0.22,
    },
    gradcamColor: "from-orange-500/60 via-yellow-400/40 to-transparent",
    gradcamDescription:
      "Prominent activation around the cardiac silhouette indicating cardiomegaly. Diffuse perihilar haze consistent with pulmonary edema.",
  },
  {
    detected: ["Atelectasis", "Pneumothorax"],
    scores: {
      Pneumonia: 0.28,
      Cardiomegaly: 0.09,
      "Pleural Effusion": 0.37,
      Edema: 0.14,
      Pneumothorax: 0.82,
      Atelectasis: 0.76,
      Consolidation: 0.31,
    },
    gradcamColor: "from-red-600/60 via-orange-400/40 to-transparent",
    gradcamDescription:
      "Activation pattern in upper lung zone suggests pneumothorax. Linear band density in the left lower lobe is consistent with atelectasis.",
  },
  {
    detected: [],
    scores: {
      Pneumonia: 0.04,
      Cardiomegaly: 0.06,
      "Pleural Effusion": 0.05,
      Edema: 0.03,
      Pneumothorax: 0.02,
      Atelectasis: 0.07,
      Consolidation: 0.04,
    },
    gradcamColor: "from-green-400/30 via-teal-300/20 to-transparent",
    gradcamDescription:
      "No significant activation regions detected. Lung fields appear clear. Cardiac silhouette within normal limits.",
  },
];

export function getMockResult() {
  return MOCK_RESULTS_SETS[Math.floor(Math.random() * MOCK_RESULTS_SETS.length)];
}

export const TEAM = [
  { name: "Sumit Solaniki", prn: "2401202055" },
  { name: "Sukshiti Madge", prn: "2401202054" },
  { name: "Fawad Sange", prn: "2401202017" },
  { name: "Samruddhi Ghule", prn: "2401202041" },
  { name: "Sarwar Sayyad", prn: "2401202045" },
];

export const OBJECTIVES = [
  {
    icon: "Scan",
    title: "Multi-label Detection",
    desc: "Detect multiple abnormalities simultaneously from a single chest X-ray image.",
  },
  {
    icon: "Brain",
    title: "DenseNet121 Model",
    desc: "Leverage DenseNet121 architecture with transfer learning for high-accuracy classification.",
  },
  {
    icon: "Zap",
    title: "Transfer Learning",
    desc: "Apply transfer learning for efficient model development on the NIH ChestX-ray14 dataset.",
  },
  {
    icon: "Eye",
    title: "Grad-CAM XAI",
    desc: "Use Gradient-weighted Class Activation Mapping to visualize influential image regions.",
  },
  {
    icon: "Monitor",
    title: "Streamlit Interface",
    desc: "Provide an interactive web-based demonstration interface for clinical evaluation.",
  },
];

export const WORKFLOW_STEPS = [
  { step: "NIH ChestX-ray14", sub: "14 disease labels · 112k images" },
  { step: "Data Cleaning & EDA", sub: "Exploratory analysis" },
  { step: "Image Preprocessing", sub: "Resize + Normalize" },
  { step: "Data Augmentation", sub: "Rotation, flip, zoom" },
  { step: "Train / Val / Test Split", sub: "70 / 15 / 15 %" },
  { step: "DenseNet121 + TL", sub: "Transfer Learning" },
  { step: "Multi-label Classification", sub: "7 abnormality classes" },
  { step: "Grad-CAM", sub: "Explainable AI" },
  { step: "Predictions + Scores", sub: "Probability per class" },
  { step: "Streamlit App", sub: "Interactive prototype" },
];
