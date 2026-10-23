import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { Upload, X, ImageIcon, Loader2, AlertCircle } from "lucide-react";
import { getMockResult } from "../data/mockResults";
import ResultsPanel from "./ResultsPanel";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFile = useCallback((f) => {
    if (!f) return;
    if (!f.type.startsWith("image/")) {
      setError("Please upload a valid image file (JPEG, PNG, DICOM preview).");
      return;
    }
    setError(null);
    setResult(null);
    setFile(f);
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(f);
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragging(false);
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  const onInputChange = (e) => handleFile(e.target.files[0]);

  const reset = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
    setError(null);
  };

  const analyze = async () => {
    setLoading(true);
    // Simulate AI inference delay
    await new Promise((r) => setTimeout(r, 2800));
    setResult(getMockResult());
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Upload dropzone */}
      <AnimatePresence mode="wait">
        {!preview ? (
          <motion.label
            key="dropzone"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            className={`flex flex-col items-center justify-center w-full h-72 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-300 ${
              dragging
                ? "border-cyan-400 bg-cyan-500/10 scale-[1.01]"
                : "border-gray-600 hover:border-cyan-500/50 hover:bg-cyan-500/5 bg-gray-900/40"
            }`}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onInputChange}
            />
            <div className={`mb-4 p-4 rounded-full transition-colors ${dragging ? "bg-cyan-500/20" : "bg-gray-800"}`}>
              <Upload className={`w-8 h-8 transition-colors ${dragging ? "text-cyan-400" : "text-gray-400"}`} />
            </div>
            <p className="text-white font-semibold text-base mb-1">
              {dragging ? "Drop to upload" : "Upload Chest X-ray"}
            </p>
            <p className="text-gray-400 text-sm mb-3">Drag & drop or click to browse</p>
            <p className="text-gray-600 text-xs">Supports JPEG, PNG, WebP</p>
          </motion.label>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gray-900"
          >
            {/* X-ray image */}
            <div className="relative">
              <img
                src={preview}
                alt="X-ray preview"
                className="w-full h-72 object-contain bg-black"
              />

              {/* Grad-CAM heatmap overlay (shown after result) */}
              {result && (
                <div
                  className={`heatmap-overlay absolute inset-0 bg-gradient-radial ${result.gradcamColor} mix-blend-screen pointer-events-none`}
                  style={{
                    background: `radial-gradient(ellipse at 60% 55%, rgba(239,68,68,0.55) 0%, rgba(234,179,8,0.4) 30%, rgba(6,182,212,0.15) 60%, transparent 80%)`,
                  }}
                />
              )}

              {/* Scan line animation during loading */}
              {loading && (
                <div className="absolute inset-0 overflow-hidden">
                  <div className="scan-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}

              {/* Labels overlay when result ready */}
              {result && (
                <div className="absolute top-3 left-3">
                  <div className="flex flex-wrap gap-1.5">
                    {result.detected.length > 0 ? (
                      result.detected.map((d) => (
                        <span key={d} className="px-2 py-0.5 rounded-full bg-red-500/80 text-white text-xs font-bold backdrop-blur-sm">
                          {d}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/80 text-white text-xs font-bold backdrop-blur-sm">
                        No Abnormality
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Grad-CAM label */}
              {result && (
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded-lg bg-black/60 text-cyan-400 text-xs font-semibold backdrop-blur-sm border border-cyan-500/20">
                    Grad-CAM Visualization
                  </span>
                </div>
              )}
            </div>

            {/* Image info bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-t border-white/5">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm font-medium truncate max-w-xs">{file?.name}</span>
                <span className="text-gray-500 text-xs">({(file?.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button
                onClick={reset}
                className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {error}
        </motion.div>
      )}

      {/* Analyze button */}
      {preview && !result && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={analyze}
          disabled={loading}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-3"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Running DenseNet121 + Grad-CAM...
            </>
          ) : (
            <>
              <span>Analyze X-ray</span>
              <span className="text-cyan-200">→</span>
            </>
          )}
        </motion.button>
      )}

      {/* Results panel */}
      <AnimatePresence>
        {result && <ResultsPanel result={result} onReset={reset} />}
      </AnimatePresence>
    </div>
  );
}
