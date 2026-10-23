import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "../data/mockResults";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function WorkflowDiagram() {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider mb-4">
            PROPOSED WORKFLOW
          </div>
          <h2 className="text-4xl font-black text-white mb-3">
            End-to-End <span className="text-blue-400">Pipeline</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From raw NIH dataset ingestion through DenseNet121 inference to explainable Grad-CAM heatmaps.
          </p>
        </motion.div>

        {/* Two column pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left column: steps 1-5 */}
          <div className="space-y-3">
            {WORKFLOW_STEPS.slice(0, 5).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/60 border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/20 flex items-center justify-center text-xs font-bold text-cyan-400">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">{s.step}</div>
                    <div className="text-gray-400 text-xs">{s.sub}</div>
                  </div>
                </div>
                {i < 4 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-cyan-500/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right column: steps 6-10 */}
          <div className="space-y-3">
            {WORKFLOW_STEPS.slice(5).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/60 border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                    {i + 6}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">{s.step}</div>
                    <div className="text-gray-400 text-xs">{s.sub}</div>
                  </div>
                </div>
                {i < 4 && (
                  <div className="flex justify-center my-1">
                    <ArrowDown className="w-4 h-4 text-blue-500/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central arrow connecting the two columns */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center mt-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/20">
            <ArrowRight className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Multi-label Classification Pipeline</span>
            <ArrowRight className="w-5 h-5 text-blue-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
