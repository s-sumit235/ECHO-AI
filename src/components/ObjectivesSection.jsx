import { motion } from "framer-motion";
import { OBJECTIVES } from "../data/mockResults";
import { Scan, Brain, Zap, Eye, Monitor } from "lucide-react";

const iconMap = { Scan, Brain, Zap, Eye, Monitor };

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ObjectivesSection() {
  return (
    <section className="py-24 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider mb-4">
            OBJECTIVES
          </div>
          <h2 className="text-4xl font-black text-white mb-3">
            What ECHO AI <span className="text-cyan-400">Achieves</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A comprehensive AI-driven pipeline designed to assist radiologists and clinicians in fast, accurate chest X-ray interpretation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {OBJECTIVES.map((obj, i) => {
            const Icon = iconMap[obj.icon];
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-shadow">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{obj.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{obj.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
