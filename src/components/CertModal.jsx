import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Building2, Calendar, IdCard, CheckCircle2, BadgeCheck, Download, ShieldCheck } from "lucide-react";

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-void-950/90 p-4 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="terminal-window relative max-h-[90vh] w-full max-w-5xl overflow-y-auto"
          >
            <div className="terminal-header sticky top-0 z-10">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-2 font-mono text-[10px] text-slate-500">
                cert.{cert.id}.verify
              </span>
              <button
                onClick={onClose}
                className="ml-auto grid h-7 w-7 place-items-center rounded-md border border-neon-400/20 text-neon-400 transition hover:bg-neon-400/10"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-neon-400/15 bg-void-950 lg:aspect-auto lg:min-h-[400px]">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md border border-secure-400/30 bg-void-950/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-secure-400 backdrop-blur">
                  <CheckCircle2 size={10} /> verified
                </div>
              </div>

              <div className="flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-md border border-neon-400/20 bg-neon-400/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-400">
                  <Award size={11} /> elite credential
                </div>

                <h2 className="mt-4 font-mono text-2xl font-bold text-white sm:text-3xl">
                  {cert.title}
                </h2>

                <div className="mt-5 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Building2 size={12} className="text-neon-400" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar size={12} className="text-neon-400" />
                    Issued: {cert.year}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <IdCard size={12} className="text-neon-400" />
                    ID: {cert.credentialId}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-400">
                  {cert.description}
                </p>

                <div className="mt-5 space-y-2 rounded-lg border border-neon-400/10 bg-neon-400/5 p-4">
                  {cert.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 font-mono text-[11px] text-slate-400"
                    >
                      <ShieldCheck size={11} className="text-secure-400" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <button
                    onClick={() => alert("Verification link would open here.")}
                    className="btn-primary"
                  >
                    <BadgeCheck size={13} /> ./verify
                  </button>
                  <button
                    onClick={() => alert("Certificate download would start here.")}
                    className="btn-ghost"
                  >
                    <Download size={13} /> download
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}