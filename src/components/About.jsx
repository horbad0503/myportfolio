import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  Download,
  Shield,
  Terminal,
  User,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import {
  profile,
  aboutInfo,
  devSkills,
  securitySkills,
  featuredDeployments,
} from "../data/portfolio";

const aboutIcons = { GraduationCap, Award, Briefcase, MapPin, User };

export default function About() {
  return (
    <section id="about" className="relative py-24">
      {/* ============ BACKGROUND ============ */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <img
          src={profile.aboutBg}
          alt=""
          className="absolute -left-40 top-1/2 h-[140%] w-auto -translate-y-1/2 object-contain opacity-[0.04] blur-sm"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <img
          src={profile.logo}
          alt=""
          className="absolute -right-32 top-20 h-[400px] w-[400px] object-contain opacity-[0.03]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-neon-400/[0.05] blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-[300px] w-[300px] rounded-full bg-secure-400/[0.04] blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-void-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-void-950 to-transparent" />
      </div>

      <div className="container-x">
        {/* ============ SECTION HEADER ============ */}
        <div>
          <div className="flex items-center gap-3">
            <span className="cmd cmd-before">about</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/40 to-transparent" />
          </div>
          <h2 className="mt-4 section-title">
            whoami<span className="text-neon-400">/</span>
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
            Profile · Skills · Deployments
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* ============ ID CARD ============ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="panel panel-hover relative overflow-hidden"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                identity.card
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="status-dot status-dot-live" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-secure-400">
                  active
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-neon-400 to-secure-400 opacity-60 blur-sm" />
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-neon-400/40 bg-void-950">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.innerHTML =
                          '<div class="grid h-full place-items-center font-mono text-xl font-bold text-neon-400">AO</div>';
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-void-950 bg-secure-400">
                    <Shield size={11} className="text-void-950" />
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    name
                  </div>
                  <div className="font-mono text-lg font-bold text-white">
                    {profile.firstName} {profile.lastName}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-neon-400">
                    {profile.shortRole}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="status-dot status-dot-live" />
                    <span className="font-mono text-[10px] text-secure-400">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>

              <div className="data-divider my-6" />

              <div className="space-y-4">
                {aboutInfo.map((info) => {
                  const Icon = aboutIcons[info.icon] || User;
                  return (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-neon-400/20 bg-neon-400/5 text-neon-400">
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {info.label}
                        </div>
                        <div className="font-mono text-sm text-white">
                          {info.value}
                        </div>
                        <div className="font-mono text-[10px] text-slate-500">
                          {info.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="data-divider my-6" />

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a
                  href="/CV.pdf"
                  download="Ayokunle_Obadare_CV.pdf"
                  className="btn-primary flex w-full items-center justify-center gap-2"
                >
                  <Download size={14} /> Download PDF
                </a>
                <a
                  href="/CV.docx"
                  download="Ayokunle_Obadare_CV.docx"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-neon-400/30 bg-neon-400/5 px-4 py-3 font-mono text-xs text-neon-300 transition hover:border-neon-400/60 hover:bg-neon-400/10"
                >
                  <Download size={14} /> Download DOCX
                </a>
              </div>
              <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[10px] text-slate-500">
                <Shield size={10} className="text-secure-400" />
                Choose PDF or Word format · Updated Oct 2026
              </div>
            </div>
          </motion.div>

          {/* ============ RIGHT COLUMN ============ */}
          <div className="space-y-6">
            {/* whoami output */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="panel panel-hover overflow-hidden"
            >
              <div className="terminal-header">
                <Terminal size={13} className="text-neon-400" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  cat bio.txt
                </span>
                <div className="ml-auto font-mono text-[9px] text-slate-600">
                  {">"} 2 min read
                </div>
              </div>

              <div className="space-y-4 p-6">
                <p className="text-sm leading-relaxed text-slate-300">
                  {profile.bio}
                </p>

                {profile.bio2 && (
                  <p className="text-sm leading-relaxed text-slate-300">
                    {profile.bio2}
                  </p>
                )}

                {profile.focus && (
                  <div className="border-l-2 border-neon-400 pl-4">
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-neon-400">
                      current.focus
                    </div>
                    <p className="text-sm italic leading-relaxed text-slate-400">
                      {profile.focus}
                    </p>
                  </div>
                )}

                {profile.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {profile.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Skills — two panels */}
            <div className="grid gap-6 md:grid-cols-2">
              <SkillPanel
                title="dev.arsenal"
                icon={Icons.Code2}
                skills={devSkills}
                accent="neon"
              />
              <SkillPanel
                title="sec.expertise"
                icon={Shield}
                skills={securitySkills}
                accent="secure"
              />
            </div>

            {/* Featured deployments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="panel panel-hover overflow-hidden"
            >
              <div className="terminal-header">
                <Icons.Rocket size={13} className="text-neon-400" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  ls deployments/
                </span>
                <span className="ml-auto chip">{featuredDeployments.length} live</span>
              </div>

              <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4">
                {featuredDeployments.map((d, i) => {
                  const Icon = Icons[d.icon] || Icons.Circle;
                  return (
                    <motion.div
                      key={d.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      className="group rounded-lg border border-neon-400/10 bg-void-950/50 p-3 transition hover:border-neon-400/40 hover:bg-neon-400/5"
                    >
                      <Icon
                        size={16}
                        className="text-neon-400/60 transition group-hover:text-neon-400"
                      />
                      <div className="mt-2 truncate font-mono text-[11px] font-medium text-white">
                        {d.name}
                      </div>
                      <div className="truncate font-mono text-[9px] text-slate-500">
                        {d.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="panel grid grid-cols-3 gap-4 p-6"
            >
              {[
                { icon: CheckCircle2, value: "10+", label: "Projects Shipped" },
                { icon: Award, value: "2", label: "Certifications" },
                { icon: GraduationCap, value: "2026", label: "Graduated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon size={18} className="mx-auto text-neon-400" />
                  <div className="mt-2 font-mono text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SKILL PANEL (unchanged)
   ============================================================ */
function SkillPanel({ title, icon: Icon, skills, accent = "neon" }) {
  const accentColor = accent === "secure" ? "text-secure-400" : "text-neon-400";
  const barFrom = accent === "secure" ? "from-secure-400" : "from-neon-400";
  const barTo = accent === "secure" ? "to-secure-500" : "to-secure-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="panel panel-hover overflow-hidden"
    >
      <div className="terminal-header">
        <Icon size={13} className={accentColor} />
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
          {title}
        </span>
      </div>

      <div className="space-y-4 p-5">
        {skills.map((s, i) => (
          <div key={s.name}>
            <div className="mb-2 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-300">{s.name}</span>
              <span className={accentColor}>{s.percent}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-neon-400/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${barFrom} ${barTo}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}