import { motion } from "framer-motion";
import { Activity, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-white tracking-widest">
                ECHO<span className="text-cyan-400"> AI</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Explainable deep learning for automated chest X-ray abnormality detection and classification.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/analyze", label: "Analyze X-ray" },
                { to: "/about", label: "About & Team" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Project Info</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>📊 Dataset: NIH ChestX-ray14</li>
              <li>🧠 Model: DenseNet121 + Transfer Learning</li>
              <li>🔍 XAI: Gradient-weighted CAM</li>
              <li>🏫 Symbiosis Skills & Professional University</li>
              <li>👩‍🏫 Mentor: Dr. Pragati Deogharkar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2024 ECHO AI Project. For research and educational purposes only.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> by the ECHO AI Team
          </p>
        </div>
      </div>
    </footer>
  );
}
