import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderOpen, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="terminal-window relative max-h-[90vh] w-full max-w-5xl overflow-y-auto"
          >
            <div className="terminal-header sticky top-0 z-10">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-2 font-mono text-[10px] text-slate-500">
                ./{project.title.toLowerCase().replace(/\s+/g, "-")}
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
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-md border border-neon-400/20 bg-neon-400/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon-400">
                  <FolderOpen size={11} /> live project
                </div>

                <h2 className="mt-4 font-mono text-3xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-neon-400" /> 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={11} className="text-secure-400" /> production
                  </span>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={13} /> ./visit-live
                  </a>
                  <button onClick={onClose} className="btn-ghost">
                    close
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