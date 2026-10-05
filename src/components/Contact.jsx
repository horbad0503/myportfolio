import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Send, CheckCircle2, Lock } from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { contactInfo, profile, socials } from "../data/portfolio";

const initial = { name: "", email: "", subject: "", message: "" };

/* Map the `icon` string from portfolio.js to a react-icons component */
const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || form.name.length < 2)
      return alert("Please enter a valid name.");
    if (!form.email || !/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(form.email))
      return alert("Please enter a valid email.");
    if (!form.subject || form.subject.length < 3)
      return alert("Please enter a subject.");
    if (!form.message || form.message.length < 10)
      return alert("Please enter a message (min 10 chars).");

    setSending(true);
    // Optional: hook to a real endpoint here (Formspree, Getform, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSuccess(true);
    setForm(initial);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container-x">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3">
            <span className="cmd cmd-before">contact</span>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-400/40 to-transparent" />
          </div>
          <h2 className="mt-4 section-title">
            Let's <span className="text-neon-400">connect</span>
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-slate-500">
            secure channel · response within 24h
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="panel panel-hover overflow-hidden"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-2 font-mono text-[10px] text-slate-500">
                contact.info
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="status-dot status-dot-live" />
                <span className="font-mono text-[10px] text-secure-400">
                  online
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-1">
                {contactInfo.map((item) => {
                  const Icon = Icons[item.icon] || Icons.Circle;
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      href={item.href}
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 border-b border-neon-400/10 py-4 last:border-0"
                    >
                      <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg border border-neon-400/20 bg-neon-400/5 text-neon-400 transition group-hover:border-neon-400/50 group-hover:bg-neon-400/10">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {item.label}
                        </div>
                        <div className="mt-0.5 truncate font-mono text-sm text-white transition group-hover:text-neon-300">
                          {item.value}
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="data-divider my-6" />

              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                  social.channels
                </div>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon] || FaGithub;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={s.name}
                        title={`${s.name} · ${s.label}`}
                        className="group grid h-10 w-10 place-items-center rounded-lg border border-neon-400/20 bg-neon-400/5 text-slate-400 transition hover:border-neon-400/50 hover:bg-neon-400/10 hover:text-neon-400"
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="terminal-window relative"
          >
            <div className="terminal-header">
              <span className="terminal-dot bg-danger-400" />
              <span className="terminal-dot bg-warn-400" />
              <span className="terminal-dot bg-secure-400" />
              <span className="ml-2 font-mono text-[10px] text-slate-500">
                transmit.message
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <Lock size={11} className="text-secure-400" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-secure-400">
                  encrypted
                </span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <TermField
                  label="name"
                  icon={Icons.User}
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your full name"
                />
                <TermField
                  label="email"
                  icon={Icons.Mail}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@domain.com"
                />
              </div>
              <TermField
                label="subject"
                icon={Icons.Tag}
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="What's this about?"
              />
              <TermField
                label="message"
                icon={Icons.PenTool}
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Type your message..."
                textarea
              />

              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full disabled:opacity-50"
              >
                {sending ? (
                  <>
                    transmitting...{" "}
                    <Icons.Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <Send size={14} /> ./transmit
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                <Lock size={10} className="text-secure-400" />
                End-to-end encrypted · never shared
              </div>
            </form>

            {success && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 grid place-items-center rounded-xl bg-void-950/95 p-8 backdrop-blur-xl"
              >
                <div className="text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-xl border border-secure-400/40 bg-secure-400/10">
                    <CheckCircle2 size={32} className="text-secure-400" />
                  </div>
                  <h4 className="mt-5 font-mono text-lg font-bold text-white">
                    transmission.acknowledged
                  </h4>
                  <p className="mt-2 text-sm text-slate-400">
                    I'll get back to you within 24 hours.
                  </p>
                  <p className="mt-1 font-mono text-[10px] text-slate-500">
                    {profile.email}
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary mt-6"
                  >
                    close
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TERMINAL FIELD
   ============================================================ */
function TermField({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea,
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value;

  return (
    <div className="relative">
      <div className="mb-2 flex items-center justify-between">
        <label
          className={`font-mono text-[10px] uppercase tracking-wider transition ${
            active ? "text-neon-400" : "text-slate-500"
          }`}
        >
          {label}
        </label>
        {active && (
          <span className="flex items-center gap-1 font-mono text-[9px] text-secure-400">
            <span className="status-dot status-dot-live" /> active
          </span>
        )}
      </div>
      <div
        className={`relative flex items-start gap-2 rounded-lg border bg-void-950/60 p-3 transition ${
          focused
            ? "border-neon-400/60 shadow-[0_0_0_3px_rgba(0,229,255,0.1)]"
            : "border-neon-400/15"
        }`}
      >
        <Icon
          size={13}
          className={`mt-0.5 flex-shrink-0 transition ${
            active ? "text-neon-400" : "text-slate-600"
          }`}
        />
        {textarea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            rows={5}
            className="w-full resize-none bg-transparent font-mono text-sm text-white placeholder-slate-600 outline-none"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent font-mono text-sm text-white placeholder-slate-600 outline-none"
          />
        )}
      </div>
    </div>
  );
}