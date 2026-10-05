import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  ExternalLink,
  Shield,
  Award,
  BadgeCheck,
  Building2,
  Calendar,
  IdCard,
  CheckCircle2,
  ArrowRight,
  FolderOpen,
} from "lucide-react";
import { projects, certifications } from "../data/portfolio";

export default function Portfolio({ onOpenProject, onOpenCert }) {
  return (
    <section id="portfolio" className="relative py-24">
      <div className="container-x">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="cmd cmd-before">projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/40 to-transparent" />
          </div>
          <h2 className="mt-4 section-title">
            Featured <span className="text-neon-400">deployments</span>
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
            10 live · 2 certifications · full archive
          </p>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={onOpenProject} />
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <div className="flex items-center gap-3">
            <span className="cmd cmd-before">certifications</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/40 to-transparent" />
          </div>
          <h2 className="mt-4 section-title">
            Verified <span className="text-neon-400">credentials</span>
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {certifications.map((c, i) => (
              <CertCard key={c.id} cert={c} index={i} onOpen={onOpenCert} />
            ))}
          </div>
        </div>

        {/* Achievement stats */}
        <AchievementRow />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="panel mt-20 flex flex-col items-center gap-6 p-12 text-center"
        >
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-neon-400/30 bg-neon-400/5 text-neon-400">
            <FolderOpen size={24} />
          </div>
          <div>
            <h3 className="font-mono text-2xl font-bold text-white">
              Want the full archive?
            </h3>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              GitHub has every commit, every branch, every line of code across
              all 10 deployments.
            </p>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            ./view-on-github <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-neon-400/40 hover:shadow-[0_20px_50px_-20px_rgba(0,229,255,0.4)]"
    >
      {/* Terminal header */}
      <div className="terminal-header">
        <span className="terminal-dot bg-danger-400" />
        <span className="terminal-dot bg-warn-400" />
        <span className="terminal-dot bg-secure-400" />
        <span className="ml-2 truncate font-mono text-[10px] text-slate-500">
          ./{project.title.toLowerCase().replace(/\s+/g, "-")}
        </span>
      </div>

      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-neon-400/10 bg-void-950">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML =
              '<div class="grid h-full place-items-center font-mono text-xs text-neon-400/30">[ no preview ]</div>';
          }}
        />

        {/* Scanline */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon-400/[0.05] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 h-px bg-neon-400/40 opacity-0 transition group-hover:opacity-100" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-void-950/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-md border border-neon-400/40 bg-neon-400/10 px-4 py-2 font-mono text-[11px] font-semibold text-neon-300 transition hover:bg-neon-400/20"
          >
            <Eye size={12} /> preview
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-md bg-neon-400 px-4 py-2 font-mono text-[11px] font-semibold text-void-950 transition hover:bg-neon-300"
          >
            <ExternalLink size={12} /> live
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 font-mono text-base font-bold text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex gap-2 border-t border-neon-400/10 pt-4">
          <button
            onClick={() => onOpen(project)}
            className="font-mono text-[10px] uppercase tracking-wider text-neon-400 transition hover:text-neon-300"
          >
            ./details →
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ml-auto font-mono text-[10px] uppercase tracking-wider text-slate-500 transition hover:text-neon-400"
          >
            live ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function CertCard({ cert, index, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onOpen(cert)}
      className="group panel cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-secure-400/40 hover:shadow-[0_20px_50px_-20px_rgba(16,185,129,0.4)]"
    >
      <div className="terminal-header">
        <span className="terminal-dot bg-danger-400" />
        <span className="terminal-dot bg-warn-400" />
        <span className="terminal-dot bg-secure-400" />
        <span className="ml-2 font-mono text-[10px] text-slate-500">
          cert.{cert.id}.verify
        </span>
        <span className="ml-auto flex items-center gap-1.5 rounded-md border border-secure-400/30 bg-secure-400/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-secure-400">
          <CheckCircle2 size={9} /> verified
        </span>
      </div>

      <div className="grid gap-5 p-6 sm:grid-cols-[140px_1fr]">
        {/* Cert image */}
        <div className="relative aspect-square overflow-hidden rounded-lg border border-neon-400/15 bg-void-950">
          <img
            src={cert.img}
            alt={cert.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.innerHTML =
                '<div class="grid h-full place-items-center text-secure-400/30"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>';
            }}
          />
        </div>

        {/* Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-neon-400">
            <Building2 size={10} />
            {cert.issuer}
          </div>
          <h3 className="mt-2 font-mono text-sm font-bold leading-tight text-white">
            {cert.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-400">
            {cert.description}
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[10px]">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar size={10} className="text-neon-400" />
              {cert.year}
            </div>
            <div className="flex items-center gap-1.5 truncate text-slate-500">
              <IdCard size={10} className="text-neon-400" />
              {cert.credentialId}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpen(cert);
              }}
              className="inline-flex items-center gap-1.5 rounded-md bg-neon-400 px-3 py-1.5 font-mono text-[10px] font-semibold text-void-950 transition hover:bg-neon-300"
            >
              <BadgeCheck size={11} /> verify
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("Certificate download would start here.");
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-neon-400/30 bg-neon-400/5 px-3 py-1.5 font-mono text-[10px] font-semibold text-neon-400 transition hover:bg-neon-400/10"
            >
              download
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AchievementRow() {
  const stats = [
    { icon: Shield, target: 99, suffix: "%", label: "Security Score" },
    { icon: Award, target: 10, suffix: "+", label: "Live Deployments" },
    { icon: BadgeCheck, target: 2, suffix: "", label: "Certifications" },
    { icon: ArrowRight, target: 15, suffix: "+", label: "Countries Served" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="panel mt-20 grid grid-cols-2 gap-6 p-8 sm:grid-cols-4"
    >
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <s.icon size={20} className="mx-auto text-neon-400" />
          <div className="mt-3 font-mono text-3xl font-extrabold text-neon-400">
            <Counter target={s.target} suffix={s.suffix} />
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function Counter({ target, suffix }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const step = Math.max(1, target / 40);
          const id = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(id);
            }
            setValue(Math.floor(current));
          }, 30);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}