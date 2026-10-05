import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, Terminal } from "lucide-react";
import { services, specialized } from "../data/portfolio";

export default function Services({ onExplore }) {
  return (
    <section id="services" className="relative py-24">
      <div className="container-x">
        <div>
          <div className="flex items-center gap-3">
            <span className="cmd cmd-before">services</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/40 to-transparent" />
          </div>
          <h2 className="mt-4 section-title">
            What I <span className="text-neon-400">deliver</span>
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
            Operations · Enterprise-grade · Security-first
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = Icons[s.icon] || Icons.Circle;
            const isFeatured = s.featured;
            return (
              <motion.article
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`panel panel-hover group relative flex flex-col overflow-hidden p-6 ${
                  isFeatured ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-0 h-16 w-16">
                  <div className="absolute right-0 top-0 h-px w-8 bg-neon-400/40" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-neon-400/40" />
                </div>

                <div className="font-mono text-[10px] uppercase tracking-wider text-neon-400/60">
                  [{s.id}]
                </div>

                <div
                  className={`mt-4 grid ${
                    isFeatured ? "h-14 w-14" : "h-11 w-11"
                  } place-items-center rounded-lg border border-neon-400/30 bg-neon-400/5 text-neon-400 transition group-hover:border-neon-400 group-hover:bg-neon-400/10`}
                >
                  <Icon size={isFeatured ? 24 : 18} />
                </div>

                <h3
                  className={`mt-4 font-mono font-bold text-white ${
                    isFeatured ? "text-xl" : "text-base"
                  }`}
                >
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {s.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.features.map((f) => (
                    <span key={f} className="chip">
                      {f}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onExplore(s.id)}
                  className="mt-6 inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-neon-400/60 transition hover:text-neon-400 group-hover:text-neon-400"
                >
                  ./explore
                  <ArrowRight
                    size={11}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </motion.article>
            );
          })}

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 flex flex-col items-start justify-between gap-6 rounded-2xl border border-neon-400/30 bg-gradient-to-br from-neon-400/[0.08] via-void-900/70 to-void-900/70 p-6 backdrop-blur-xl lg:col-span-2 lg:flex-row lg:items-center"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-secure-400">
                <Terminal size={11} /> ready to deploy
              </div>
              <h3 className="mt-3 font-mono text-lg font-bold text-white">
                Let's build something secure.
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Free 30-minute consultation. No commitment.
              </p>
            </div>
            <a href="#contact" className="btn-primary shrink-0">
              ./start-project <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Specialized */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="cmd">specialized.modules</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {specialized.map((item, i) => {
              const Icon = Icons[item.icon] || Icons.Circle;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="panel group p-4 transition hover:border-neon-400/40 hover:bg-neon-400/5"
                >
                  <Icon
                    size={18}
                    className="text-neon-400/60 transition group-hover:text-neon-400"
                  />
                  <div className="mt-3 font-mono text-[11px] font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    {item.sub}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}