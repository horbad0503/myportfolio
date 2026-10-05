import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Terminal, Radio, ChevronDown } from "lucide-react";
import { profile, heroTerminal, heroTyped, heroStats } from "../data/portfolio";

function useTyped(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDel(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setIdx((i) => i + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, del, idx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyped(heroTyped);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20">
      {/* ============ BACKGROUND LAYERS ============ */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Profile image — anchored right, large, faded */}
        <img
          src={profile.heroBg}
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right opacity-[0.18] sm:opacity-25 lg:opacity-40"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Gradient wash — darkens the left where text sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-void-950 via-void-950/92 to-void-950/40" />

        {/* Top and bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/60 via-transparent to-void-950" />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Cyan glow orb — top right */}
        <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-neon-400/[0.08] blur-[100px]" />

        {/* Green glow orb — bottom left */}
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-secure-400/[0.06] blur-[100px]" />

        {/* Scanning line animation */}
        <div className="absolute inset-x-0 top-0 h-[1px] animate-scan bg-gradient-to-r from-transparent via-neon-400/40 to-transparent" />
      </div>

      <div className="container-x">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_1fr]">
          {/* ============ LEFT: Terminal window ============ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Availability pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secure-400/30 bg-secure-400/5 px-3 py-1.5">
              <span className="status-dot status-dot-live" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-secure-400">
                Available for opportunities
              </span>
            </div>

            {/* Headline with typing animation */}
            <h1 className="font-mono text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-slate-500">&gt; </span>
              Building <span className="text-neon-400">{typed}</span>
              <span className="ml-1 inline-block h-8 w-2 translate-y-1 animate-blink bg-neon-400 sm:h-10 sm:w-2.5" />
            </h1>

            {/* Tagline */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                <Zap size={15} /> ./start-project
              </a>
              <a href="#portfolio" className="btn-ghost">
                <ArrowRight size={15} /> ./view-work
              </a>
            </div>

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="terminal-window mt-10 max-w-2xl"
            >
              {/* Terminal header */}
              <div className="terminal-header">
                <span className="terminal-dot bg-danger-400" />
                <span className="terminal-dot bg-warn-400" />
                <span className="terminal-dot bg-secure-400" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  {profile.handle}@secops: ~/portfolio
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="status-dot status-dot-live" />
                  <span className="font-mono text-[10px] text-secure-400">
                    connected
                  </span>
                </div>
              </div>

              {/* Terminal body */}
              <div className="space-y-3 p-5 font-mono text-xs sm:text-sm">
                {heroTerminal.map((line, i) => (
                  <motion.div
                    key={line.prompt}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.25 }}
                  >
                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="text-neon-400">$</span>
                      <span className="text-neon-300">{line.prompt}</span>
                    </div>
                    {Array.isArray(line.output) ? (
                      <div className="ml-4 mt-1 space-y-1">
                        {line.output.map((o) => (
                          <div key={o} className="text-secure-400">
                            {o}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="ml-4 mt-1 text-white">{line.output}</div>
                    )}
                  </motion.div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="text-neon-400">$</span>
                  <span className="inline-block h-4 w-2 animate-blink bg-neon-400" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ============ RIGHT: Stats panel ============ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* System status card */}
            <div className="panel panel-hover relative overflow-hidden p-6">
              {/* Logo watermark in background */}
              <img
                src={profile.logo}
                alt=""
                className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 object-contain opacity-[0.06]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-neon-400/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="cmd">system.status</div>
                  <Radio size={14} className="text-secure-400" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {heroStats.map((s, i) => (
                    <div
                      key={s.label}
                      className="rounded-lg border border-neon-400/10 bg-void-950/50 p-4"
                    >
                      <div className="font-mono text-2xl font-bold text-neon-400">
                        {s.value}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                        {s.label}
                      </div>
                      <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-neon-400/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${60 + i * 10}%` }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                          className="h-full bg-gradient-to-r from-neon-400 to-secure-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Two info tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="panel panel-hover p-5">
                <Shield size={20} className="text-secure-400" />
                <div className="mt-3 font-mono text-xs text-white">
                  CISCO CERTIFIED
                </div>
                <div className="mt-1 font-mono text-[10px] text-slate-500">
                  CyberOps Associate
                </div>
              </div>

              <div className="panel panel-hover p-5">
                <Terminal size={20} className="text-neon-400" />
                <div className="mt-3 font-mono text-xs text-white">
                  B.TECH CYBERSEC
                </div>
                <div className="mt-1 font-mono text-[10px] text-slate-500">
                  FUTA · Class of 2026
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              className="group flex items-center justify-center gap-2 pt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500 transition hover:text-neon-400"
            >
              scroll to explore
              <ChevronDown
                size={12}
                className="transition group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}