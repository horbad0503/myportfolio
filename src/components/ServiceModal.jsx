import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import {
  X,
  Terminal,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
} from "lucide-react";
import { services, serviceDetails } from "../data/portfolio";

export default function ServiceModal({ serviceId, onClose }) {
  const service = services.find((s) => s.id === serviceId);
  const detail = serviceId ? serviceDetails[serviceId] : null;

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (serviceId) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [serviceId, onClose]);

  return (
    <AnimatePresence>
      {service && detail && (
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
            className="terminal-window relative max-h-[90vh] w-full max-w-4xl overflow-y-auto"
          >
            {/* Header bar */}
            <div className="terminal-header sticky top-0 z-10">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-2 truncate font-mono text-[10px] text-slate-500">
                ./services/{service.title.toLowerCase().replace(/\s+/g, "-")}
              </span>
              <button
                onClick={onClose}
                className="ml-auto grid h-7 w-7 place-items-center rounded-md border border-neon-400/20 text-neon-400 transition hover:bg-neon-400/10"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* Top: icon + title */}
              <div className="flex flex-wrap items-start gap-5">
                <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-xl border border-neon-400/30 bg-neon-400/5 text-neon-400">
                  {(() => {
                    const Icon = Icons[service.icon] || Icons.Circle;
                    return <Icon size={28} />;
                  })()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neon-400/60">
                    [{service.id}] {detail.tagline}
                  </div>
                  <h2 className="mt-2 font-mono text-2xl font-bold text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {detail.overview}
                  </p>
                </div>
              </div>

              <div className="data-divider my-8" />

              {/* Two-column: deliverables + process */}
              <div className="grid gap-8 md:grid-cols-2">
                {/* Deliverables */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Package size={14} className="text-neon-400" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      What you get
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {detail.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 flex-shrink-0 text-secure-400"
                        />
                        <span className="text-sm leading-relaxed text-slate-400">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <Layers size={14} className="text-neon-400" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      How it works
                    </h3>
                  </div>
                  <ol className="relative space-y-4 border-l border-neon-400/20 pl-5">
                    {detail.process.map((p) => (
                      <li key={p.step} className="relative">
                        <span className="absolute -left-[25px] top-0.5 grid h-4 w-4 place-items-center rounded-full border border-neon-400/40 bg-void-950 font-mono text-[7px] text-neon-400">
                          {p.step}
                        </span>
                        <div className="font-mono text-sm font-semibold text-white">
                          {p.title}
                        </div>
                        <div className="mt-0.5 text-xs leading-relaxed text-slate-500">
                          {p.detail}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="data-divider my-8" />

              {/* Stack + timeline */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    tech.stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {detail.stack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    typical.timeline
                  </div>
                  <div className="flex items-center gap-2 font-mono text-sm text-white">
                    <Terminal size={13} className="text-neon-400" />
                    {detail.timeline}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-neon-400/10 pt-6">
                <a href="#contact" onClick={onClose} className="btn-primary">
                  ./start-project <ArrowRight size={13} />
                </a>
                <button onClick={onClose} className="btn-ghost">
                  close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}