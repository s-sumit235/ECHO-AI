import { motion } from "framer-motion";
import { ABNORMALITIES } from "../data/mockResults";
import { CheckCircle2, XCircle } from "lucide-react";

const COLOR_MAP = {
  Pneumonia: "#ef4444",
  Cardiomegaly: "#f97316",
  "Pleural Effusion": "#a855f7",
  Edema: "#3b82f6",
  Pneumothorax: "#ec4899",
  Atelectasis: "#eab308",
  Consolidation: "#06b6d4",
};

export default function ProbabilityBars({ scores, detected }) {
  const sorted = [...ABNORMALITIES].sort((a, b) => scores[b] - scores[a]);

  return (
    <div className="space-y-3">
      {sorted.map((label, i) => {
        const pct = Math.round(scores[label] * 100);
        const isDetected = detected.includes(label);
        const color = COLOR_MAP[label];

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {isDetected ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
                )}
                <span className={`text-xs font-semibold ${isDetected ? "text-white" : "text-gray-400"}`}>
                  {label}
                </span>
              </div>
              <span
                className="text-xs font-bold tabular-nums"
                style={{ color: isDetected ? color : "#6b7280" }}
              >
                {pct}%
              </span>
            </div>

            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
                style={{
                  background: isDetected
                    ? `linear-gradient(90deg, ${color}aa, ${color})`
                    : "#374151",
                  boxShadow: isDetected ? `0 0 8px ${color}88` : "none",
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Threshold indicator */}
      <div className="pt-2 flex items-center gap-2 text-xs text-gray-500">
        <div className="w-3 h-0.5 bg-gray-500" />
        <span>Threshold: 0.50 — probabilities above threshold are flagged as detected</span>
      </div>
    </div>
  );
}
