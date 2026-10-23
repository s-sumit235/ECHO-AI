import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Activity, ArrowRight, Shield, Zap } from "lucide-react";

const badges = [
  { icon: Shield, label: "NIH ChestX-ray14" },
  { icon: Zap, label: "DenseNet121" },
  { icon: Activity, label: "Grad-CAM XAI" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl" />

      {/* Floating lung X-ray silhouette */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block opacity-10">
        <svg width="320" height="400" viewBox="0 0 320 400" fill="none">
          <ellipse cx="100" cy="200" rx="80" ry="160" stroke="#22d3ee" strokeWidth="1.5" />
          <ellipse cx="220" cy="200" rx="80" ry="160" stroke="#22d3ee" strokeWidth="1.5" />
          <ellipse cx="160" cy="180" rx="30" ry="120" fill="#22d3ee" opacity="0.3" />
          <line x1="100" y1="60" x2="160" y2="80" stroke="#22d3ee" strokeWidth="1" />
          <line x1="220" y1="60" x2="160" y2="80" stroke="#22d3ee" strokeWidth="1" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={60 + i * 8}
              y1={130 + i * 10}
              x2={140 - i * 4}
              y2={130 + i * 10}
              stroke="#22d3ee"
              strokeWidth="0.8"
              opacity="0.6"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* University badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-widest mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYMBIOSIS SKILLS & PROFESSIONAL UNIVERSITY
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-2">
            <span className="text-white">ECHO</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> AI</span>
          </h1>
          <p className="text-sm sm:text-base text-cyan-400/80 tracking-[0.4em] font-medium mb-6">
            EXPLAINABLE CHEST-RAY ANALYSIS AI
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Explainable Deep Learning for{" "}
          <span className="text-white font-semibold">Automated Medical Image</span>{" "}
          Abnormality Detection & Classification
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-gray-500 mb-10"
        >
          A Deep Learning-Based Decision-Support Prototype for Chest X-ray Analysis
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/analyze"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-base"
          >
            <Activity className="w-5 h-5" />
            Analyze X-ray
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 text-base"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 font-medium"
            >
              <b.icon className="w-3.5 h-3.5 text-cyan-400" />
              {b.label}
            </div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "112K+", label: "X-ray Images" },
            { value: "7", label: "Abnormality Classes" },
            { value: "DenseNet121", label: "AI Architecture" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
