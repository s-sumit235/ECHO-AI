import HeroSection from "../components/HeroSection";
import ObjectivesSection from "../components/ObjectivesSection";
import WorkflowDiagram from "../components/WorkflowDiagram";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TEAM } from "../data/mockResults";
import { User, ArrowRight } from "lucide-react";

function ModelSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider mb-5">
              DEEP LEARNING MODEL
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              DenseNet121 +<br />
              <span className="text-purple-400">Transfer Learning</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pre-trained DenseNet121 is adapted for chest X-ray multi-label classification. Dense connections support feature reuse and effective visual feature extraction. The model outputs probability scores for 7 abnormality classes simultaneously.
            </p>
            <div className="space-y-3">
              {[
                { label: "Architecture", value: "DenseNet121 (Dense Connection Network)" },
                { label: "Task", value: "Multi-label Classification" },
                { label: "Dataset", value: "NIH ChestX-ray14 (112,120 images)" },
                { label: "Classes", value: "7 Abnormality Categories" },
                { label: "XAI Method", value: "Grad-CAM Heatmap Visualization" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-gray-400 text-sm">{item.label}: </span>
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual architecture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 rounded-2xl bg-gray-900/60 border border-purple-500/20">
              {/* DenseNet visual */}
              <p className="text-xs text-gray-500 font-semibold tracking-widest mb-4 text-center">
                DENSENET121 ARCHITECTURE
              </p>
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {["Input X-ray", "Dense Block 1", "Dense Block 2", "Dense Block 3", "Dense Block 4", "Feature Extract.", "Classification", "7 Probabilities"].map(
                  (block, i) => (
                    <div key={i} className="flex items-center gap-1 flex-shrink-0">
                      <div
                        className="px-2 py-3 rounded-lg text-center min-w-[72px]"
                        style={{
                          background: `hsl(${260 + i * 12}, 50%, 20%)`,
                          border: `1px solid hsl(${260 + i * 12}, 50%, 35%)`,
                        }}
                      >
                        <p className="text-white text-[10px] font-semibold leading-tight">{block}</p>
                      </div>
                      {i < 7 && (
                        <ArrowRight
                          className="w-3 h-3 flex-shrink-0"
                          style={{ color: `hsl(${260 + i * 12}, 60%, 55%)` }}
                        />
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Abnormality classes */}
              <div className="mt-6">
                <p className="text-xs text-gray-500 font-semibold tracking-widest mb-3">
                  PREDICTED ABNORMALITY CLASSES
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Pneumonia", "Cardiomegaly", "Pleural Effusion", "Edema", "Pneumothorax", "Atelectasis", "Consolidation"].map(
                    (c, i) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-full text-xs font-medium border"
                        style={{
                          background: `hsl(${i * 50}, 60%, 12%)`,
                          borderColor: `hsl(${i * 50}, 60%, 30%)`,
                          color: `hsl(${i * 50}, 80%, 65%)`,
                        }}
                      >
                        {c}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TeamPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold tracking-wider mb-4">
            PROJECT TEAM
          </div>
          <h2 className="text-4xl font-black text-white">
            Meet the <span className="text-green-400">Team</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-800/60 border border-white/5 hover:border-green-500/20 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 border border-green-500/20 flex items-center justify-center">
                <User className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">{member.name}</p>
                <p className="text-gray-500 text-xs">PRN: {member.prn}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 hover:text-white transition-all"
        >
          View Full Project Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-white mb-4">
            Ready to Analyze<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              a Chest X-ray?
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Upload any chest X-ray image and get instant AI-powered abnormality detection with explainable Grad-CAM visualization.
          </p>
          <Link
            to="/analyze"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-base"
          >
            Start Analysis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ObjectivesSection />
      <WorkflowDiagram />
      <ModelSection />
      <TeamPreview />
      <CTASection />
    </main>
  );
}
