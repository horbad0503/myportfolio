import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, FileText } from "lucide-react";
import { legal } from "../data/portfolio";

export default function LegalModal({ type, onClose }) {
  const data = type ? legal[type] : null;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (data) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] grid place-items-center bg-void-950/85 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="terminal-window relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden"
          >
            {/* Terminal chrome */}
            <div className="terminal-header">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {type === "privacy" ? "cat privacy.md" : "cat terms.md"}
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="status-dot status-dot-live" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-secure-400">
                  secure
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-3 grid h-6 w-6 place-items-center rounded-md border border-neon-400/20 text-slate-400 transition hover:border-neon-400/50 hover:text-neon-400"
              >
                <X size={12} />
              </button>
            </div>

            {/* Header */}
            <div className="flex items-start gap-3 border-b border-neon-400/10 p-6">
              <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg border border-neon-400/30 bg-neon-400/5 text-neon-400">
                {type === "privacy" ? <Shield size={18} /> : <FileText size={18} />}
              </div>
              <div>
                <h3 className="font-mono text-lg font-bold text-white">
                  {data.title}
                </h3>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  last.updated → {data.lastUpdated}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="overflow-y-auto p-6">
              <p className="text-sm leading-relaxed text-slate-300">{data.intro}</p>

              <div className="mt-6 space-y-5">
                {data.sections.map((s) => (
                  <section key={s.heading}>
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neon-400">
                      {s.heading}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {s.body}
                    </p>
                  </section>
                ))}
              </div>

              <p className="mt-8 border-t border-neon-400/10 pt-5 font-mono text-[10px] leading-relaxed text-slate-500">
                # informational only · not legal advice
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-neon-400/10 p-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {type === "privacy" ? "privacy.policy" : "terms.of.service"}
              </span>
              <button onClick={onClose} className="btn-primary !py-2 !text-xs">
                ./close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}