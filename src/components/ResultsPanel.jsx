import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, RotateCcw, Info } from "lucide-react";
import ProbabilityBars from "./ProbabilityBars";

export default function ResultsPanel({ result, onReset }) {
  const hasFindings = result.detected.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="space-y-5"
    >
      {/* Status banner */}
      <div
        className={`flex items-center gap-3 p-4 rounded-xl border ${
          hasFindings
            ? "bg-red-500/10 border-red-500/20"
            : "bg-green-500/10 border-green-500/20"
        }`}
      >
        {hasFindings ? (
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
        ) : (
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
        )}
        <div>
          <p className={`font-bold text-sm ${hasFindings ? "text-red-300" : "text-green-300"}`}>
            {hasFindings
              ? `${result.detected.length} Abnormalit${result.detected.length > 1 ? "ies" : "y"} Detected`
              : "No Significant Abnormalities Detected"}
          </p>
          <p className="text-gray-400 text-xs mt-0.5">
            {hasFindings
              ? result.detected.join(" · ")
              : "Chest X-ray appears within normal limits."}
          </p>
        </div>
      </div>

      {/* Probability scores */}
      <div className="p-5 rounded-2xl bg-gray-900/70 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-sm">Probability Scores</h3>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-md">DenseNet121</span>
        </div>
        <ProbabilityBars scores={result.scores} detected={result.detected} />
      </div>

      {/* Grad-CAM explanation */}
      <div className="p-5 rounded-2xl bg-gray-900/70 border border-white/5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-red-500" />
          <h3 className="text-white font-bold text-sm">Grad-CAM Interpretation</h3>
        </div>
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-400 text-xs leading-relaxed">{result.gradcamDescription}</p>
        </div>
        {/* Heatmap legend */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500" />
          <div className="flex justify-between w-full text-xs text-gray-500 mt-1 px-0.5 -mx-full">
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low activation</span>
          <span>High activation</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/15">
        <p className="text-yellow-400/80 text-xs leading-relaxed">
          <span className="font-bold">⚠ Research Prototype:</span> ECHO AI is a demonstration system trained on the NIH ChestX-ray14 dataset. Results are for research purposes only and should not replace professional radiological evaluation.
        </p>
      </div>

      {/* Reset button */}
      <button
        onClick={onReset}
        className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Analyze Another X-ray
      </button>
    </motion.div>
  );
}
