import { motion } from "framer-motion";
import { TEAM } from "../data/mockResults";
import { User, BookOpen, Database, Award, Target, TrendingUp } from "lucide-react";

const metrics = [
  { label: "Precision", icon: Target, desc: "Accuracy of positive predictions" },
  { label: "Recall", icon: TrendingUp, desc: "Sensitivity to true positives" },
  { label: "F1-Score", icon: Award, desc: "Harmonic mean of precision & recall" },
  { label: "ROC-AUC", icon: TrendingUp, desc: "Area under ROC curve per class" },
];

const futureScope = [
  "Expand abnormality categories beyond 7 classes",
  "Improve model robustness and generalization",
  "Explore additional explainability methods (SHAP, LIME)",
  "Evaluate on diverse external datasets",
  "Further develop toward clinically validated decision-support research",
];

const expectedOutcomes = [
  "Multi-label chest X-ray abnormality predictions",
  "Probability scores for selected abnormalities",
  "Grad-CAM visual explanations",
  "Interactive Streamlit demonstration",
  "Research-oriented explainable AI prototype",
];

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 pt-20">
      {/* Header */}
      <div className="relative bg-gray-900/50 border-b border-white/5 py-14">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider mb-4">
              <BookOpen className="w-3 h-3" />
              ABOUT THE PROJECT
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Project <span className="text-purple-400">Overview</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explainable Deep Learning for Automated Medical Image Abnormality Detection and Classification — A research prototype by the ECHO AI team at Symbiosis Skills & Professional University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 space-y-16">

        {/* Problem statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold tracking-wider mb-4">
              PROBLEM STATEMENT
            </div>
            <h2 className="text-3xl font-black text-white mb-4">The Challenge</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Chest X-ray interpretation requires expert radiological knowledge and can be time-consuming. Deep learning can assist in identifying possible abnormalities, but predictions without visual explanations can be difficult for clinicians to interpret and trust.
            </p>
            <p className="text-gray-400 leading-relaxed">
              ECHO AI proposes an explainable deep learning system that performs multi-label chest X-ray abnormality classification and highlights image regions influencing predictions, bridging the gap between AI accuracy and clinical interpretability.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/60 border border-red-500/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800 text-2xl">🩻</div>
              <div className="text-gray-400 text-sm">Chest X-ray</div>
              <div className="flex-1 h-px bg-gray-700" />
              <div className="flex-shrink-0 p-2 rounded-lg bg-purple-500/20 text-2xl">🧠</div>
              <div className="text-gray-400 text-sm">AI Model</div>
              <div className="flex-1 h-px bg-gray-700" />
              <div className="flex-shrink-0 p-2 rounded-lg bg-cyan-500/20 text-2xl">🔥</div>
              <div className="text-gray-400 text-sm">Explanation</div>
            </div>
            <p className="text-gray-500 text-xs text-center">End-to-end pipeline: Image → Prediction → Explainable output</p>
          </div>
        </motion.section>

        {/* Dataset */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider mb-5">
            <Database className="w-3 h-3" />
            DATASET
          </div>
          <h2 className="text-3xl font-black text-white mb-6">NIH ChestX-ray14</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: "112,120", label: "Chest X-ray Images" },
              { value: "30,805", label: "Unique Patients" },
              { value: "14", label: "Disease Labels" },
              { value: "7", label: "Classes Used" },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-2xl bg-gray-900/60 border border-blue-500/15 text-center">
                <div className="text-3xl font-black text-blue-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Pneumonia", "Cardiomegaly", "Pleural Effusion", "Edema", "Pneumothorax", "Atelectasis", "Consolidation"].map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                {c}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Model evaluation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider mb-5">
            MODEL EVALUATION
          </div>
          <h2 className="text-3xl font-black text-white mb-6">Performance Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="p-5 rounded-2xl bg-gray-900/60 border border-orange-500/15 hover:border-orange-500/30 transition-colors">
                <m.icon className="w-6 h-6 text-orange-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-1">{m.label}</h3>
                <p className="text-gray-400 text-xs">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Evaluation focuses on classification performance across all selected abnormality classes using multi-label metrics.
          </p>
        </motion.section>

        {/* Expected outcomes + Future scope */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="p-6 rounded-2xl bg-gray-900/60 border border-green-500/15">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wider mb-4">
              EXPECTED OUTCOMES
            </div>
            <ul className="space-y-3">
              {expectedOutcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400 text-sm mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900/60 border border-cyan-500/15">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider mb-4">
              FUTURE SCOPE
            </div>
            <ul className="space-y-3">
              {futureScope.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 text-sm mt-0.5">→</span>
                  <span className="text-gray-300 text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider mb-5">
            PROJECT TEAM
          </div>
          <h2 className="text-3xl font-black text-white mb-6">The Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {TEAM.map((member, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-purple-500/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">{member.name}</p>
                  <p className="text-gray-500 text-sm">PRN: {member.prn}</p>
                </div>
              </div>
            ))}

            {/* Mentor card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Dr. Pragati Deogharkar</p>
                <p className="text-cyan-400 text-sm font-medium">Project Mentor</p>
                <p className="text-gray-500 text-xs">Symbiosis Skills & Professional University</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
