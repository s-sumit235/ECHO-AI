import { motion } from "framer-motion";
import UploadSection from "../components/UploadSection";
import { Activity, Info, Cpu, Eye } from "lucide-react";

const steps = [
  { icon: "①", label: "Upload Chest X-ray", desc: "Drag & drop or browse" },
  { icon: "②", label: "Analyze Image", desc: "DenseNet121 inference" },
  { icon: "③", label: "View Results", desc: "Scores + Grad-CAM" },
];

export default function Analyze() {
  return (
    <main className="min-h-screen bg-gray-950 pt-20">
      {/* Header */}
      <div className="relative bg-gray-900/50 border-b border-white/5 py-12">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider mb-4">
              <Activity className="w-3 h-3" />
              ANALYSIS TOOL
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">
              Chest X-ray <span className="text-cyan-400">Analysis</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Upload a chest X-ray image to detect multiple abnormalities using DenseNet121 with Grad-CAM explainability.
            </p>

            {/* Steps */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800/60 border border-white/5">
                    <span className="text-cyan-400 font-bold text-sm">{s.icon}</span>
                    <div className="text-left">
                      <p className="text-white text-xs font-semibold">{s.label}</p>
                      <p className="text-gray-500 text-xs">{s.desc}</p>
                    </div>
                  </div>
                  {i < 2 && (
                    <span className="hidden sm:block text-gray-600 text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Upload + results — wider column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <UploadSection />
          </motion.div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Model info card */}
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-4 h-4 text-purple-400" />
                <h3 className="text-white font-bold text-sm">Model Information</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Architecture", value: "DenseNet121" },
                  { label: "Training", value: "Transfer Learning" },
                  { label: "Dataset", value: "NIH ChestX-ray14" },
                  { label: "Input Size", value: "224 × 224 px" },
                  { label: "Output", value: "7 class probabilities" },
                  { label: "XAI", value: "Grad-CAM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-white text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Explainability card */}
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-4 h-4 text-orange-400" />
                <h3 className="text-white font-bold text-sm">About Grad-CAM</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Gradient-weighted Class Activation Mapping (Grad-CAM) generates visual heatmaps highlighting image regions that most strongly influenced the model's prediction.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500" />
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>Cool (Low)</span>
                <span>Hot (High)</span>
              </div>
            </div>

            {/* Detected classes */}
            <div className="p-5 rounded-2xl bg-gray-900/60 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-4 h-4 text-cyan-400" />
                <h3 className="text-white font-bold text-sm">Detectable Conditions</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Pneumonia", color: "#ef4444" },
                  { name: "Cardiomegaly", color: "#f97316" },
                  { name: "Pleural Effusion", color: "#a855f7" },
                  { name: "Edema", color: "#3b82f6" },
                  { name: "Pneumothorax", color: "#ec4899" },
                  { name: "Atelectasis", color: "#eab308" },
                  { name: "Consolidation", color: "#06b6d4" },
                ].map((c) => (
                  <span
                    key={c.name}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${c.color}18`,
                      border: `1px solid ${c.color}40`,
                      color: c.color,
                    }}
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
              <p className="text-yellow-400/70 text-xs leading-relaxed">
                <span className="font-bold">Research Use Only.</span> This is a prototype demonstration. Not intended for clinical diagnosis. Always consult a qualified radiologist.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
