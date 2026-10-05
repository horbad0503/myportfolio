import { useEffect, useMemo, useState } from "react";
import {
  ChevronRight,
  ArrowUp,
  Send,
  Lock,
  Radio,
  CheckCircle2,
  AlertCircle,
  Users,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { profile, navLinks, socials, SUBSCRIBE_ENDPOINT } from "../data/portfolio";
import LegalModal from "./LegalModal";

/* Map the `icon` string from portfolio.js → react-icons component */
const SOCIAL_ICONS = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  facebook: FaFacebookF,
};

const STORAGE_KEY = "ayokunle.subscribers.v1";
const EMAIL_RE = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;

function readSubscribers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function writeSubscribers(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    /* ignore */
  }
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [feedback, setFeedback] = useState("");
  const [subscribers, setSubscribers] = useState([]);
  const [legalOpen, setLegalOpen] = useState(null); // "terms" | "privacy" | null

  useEffect(() => {
    setSubscribers(readSubscribers());
  }, []);

  const normalizedEmail = email.trim().toLowerCase();
  const isDuplicate = useMemo(
    () => subscribers.some((s) => s.email === normalizedEmail),
    [subscribers, normalizedEmail]
  );

  const subscribe = async (e) => {
    e.preventDefault();
    setFeedback("");
    setStatus("idle");

    if (!EMAIL_RE.test(normalizedEmail)) {
      setStatus("error");
      setFeedback("invalid.email — try again");
      return;
    }
    if (isDuplicate) {
      setStatus("error");
      setFeedback("already.subscribed");
      return;
    }

    setSubscribing(true);
    const entry = { email: normalizedEmail, subscribedAt: new Date().toISOString() };

    try {
      if (SUBSCRIBE_ENDPOINT) {
        const res = await fetch(SUBSCRIBE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(entry),
        });
        if (!res.ok) throw new Error("endpoint.rejected");
      } else {
        // simulated network latency
        await new Promise((r) => setTimeout(r, 800));
      }

      const next = [...subscribers, entry];
      setSubscribers(next);
      writeSubscribers(next);
      setEmail("");
      setStatus("success");
      setFeedback("subscribed — check your inbox");
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 5000);
    } catch (err) {
      setStatus("error");
      setFeedback(err?.message || "transmission.failed — retry");
    } finally {
      setSubscribing(false);
    }
  };

  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative mt-24 overflow-hidden border-t border-neon-400/10 bg-void-950 pt-16 pb-8">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon-400/[0.06] blur-[120px]" />
          <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-secure-400/[0.05] blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
        </div>

        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
            {/* ============ BRAND ============ */}
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-neon-400/30 bg-void-900 transition hover:border-neon-400/60 hover:shadow-[0_0_20px_-4px_rgba(0,229,255,0.5)]">
                  <img
                    src={profile.logo}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML =
                        '<div class="grid h-full w-full place-items-center font-mono text-sm font-bold text-neon-400">AO</div>';
                    }}
                  />
                </div>

                <div>
                  <div className="font-mono text-sm font-bold text-white">
                    {profile.firstName.toLowerCase()}@{profile.handle}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neon-400/60">
                    secops · fullstack
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Building secure, scalable digital experiences that protect what
                matters most.
              </p>

              <div className="mt-5 space-y-2 font-mono text-[10px] uppercase tracking-wider">
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="status-dot status-dot-live" />
                  all systems operational
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Radio size={10} className="text-neon-400" />
                  responding in &lt;24h
                </div>
              </div>
            </div>

            {/* ============ NAV ============ */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-400">
                // nav
              </h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 font-mono text-xs text-slate-400 transition hover:text-neon-400"
                    >
                      <span className="text-[10px] text-neon-400/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                      <ChevronRight
                        size={11}
                        className="ml-auto opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ============ MODULES ============ */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-400">
                // modules
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  "Full-Stack",
                  "CyberSecurity",
                  "Network Sec",
                  "DevSecOps",
                  "Vulnerability",
                ].map((e) => (
                  <li key={e}>
                    <a
                      href="#services"
                      className="group flex items-center gap-2 font-mono text-xs text-slate-400 transition hover:text-neon-400"
                    >
                      <span className="text-neon-400/60">▸</span>
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ============ CONTACT ============ */}
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-400">
                // contact
              </h3>
              <ul className="mt-5 space-y-3 font-mono text-xs">
                <li>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-2 text-slate-400 transition hover:text-neon-400"
                  >
                    <span className="text-neon-400/60">tel:</span>
                    {profile.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 break-all text-slate-400 transition hover:text-neon-400"
                  >
                    <span className="text-neon-400/60">mail:</span>
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span className="text-neon-400/60">loc:</span>
                  Akure, NG
                </li>
                <li className="flex items-center gap-2 text-slate-500">
                  <span className="text-neon-400/60">tz:</span>
                  GMT+1
                </li>
              </ul>
            </div>
          </div>

          {/* ============ NEWSLETTER ============ */}
          <div className="mt-12 rounded-xl border border-neon-400/15 bg-void-900/50 p-6 backdrop-blur-xl">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <Send size={20} className="text-neon-400" />
                <div>
                  <div className="font-mono text-sm font-bold text-white">
                    subscribe.feed
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    security insights · dev updates
                  </div>
                </div>
              </div>

              {subscribers.length > 0 && (
                <span className="chip">
                  <Users size={10} className="mr-1.5" />
                  {subscribers.length}{" "}
                  {subscribers.length === 1 ? "subscriber" : "subscribers"}
                </span>
              )}

              <form
                onSubmit={subscribe}
                className="ml-auto flex min-w-[280px] flex-1 gap-2"
                noValidate
              >
                <div className="flex flex-1 items-center gap-2 rounded-lg border border-neon-400/20 bg-void-950/60 px-3 transition focus-within:border-neon-400/60">
                  <span className="font-mono text-xs text-neon-400/60">›</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full bg-transparent py-2.5 font-mono text-xs text-white placeholder-slate-600 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribing}
                  className="btn-primary !py-2.5 !text-xs disabled:opacity-60"
                >
                  {subscribing ? "..." : "./subscribe"}
                </button>
              </form>
            </div>

            {feedback && (
              <div
                className={`mt-3 flex items-center gap-2 font-mono text-[10px] ${
                  status === "success" ? "text-secure-400" : "text-danger-400"
                }`}
              >
                {status === "success" ? (
                  <CheckCircle2 size={11} />
                ) : (
                  <AlertCircle size={11} />
                )}
                {feedback}
              </div>
            )}

            {!feedback && (
              <div className="mt-3 flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                <Lock size={10} className="text-secure-400" />
                no spam · unsubscribe anytime
              </div>
            )}
          </div>

          {/* ============ BOTTOM ============ */}
          <div className="mt-12 flex flex-col gap-6 border-t border-neon-400/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Socials */}
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
                    className="group grid h-9 w-9 place-items-center rounded-lg border border-neon-400/20 bg-neon-400/5 text-slate-400 transition hover:border-neon-400/60 hover:bg-neon-400/10 hover:text-neon-400"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>

            {/* Copyright + legal + back to top */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              <span>© {new Date().getFullYear()} Obadare Ayokunle</span>
              <span className="text-neon-400/30">|</span>
              <button
                type="button"
                onClick={() => setLegalOpen("privacy")}
                className="transition hover:text-neon-400"
              >
                privacy
              </button>
              <button
                type="button"
                onClick={() => setLegalOpen("terms")}
                className="transition hover:text-neon-400"
              >
                terms
              </button>
              <button
                onClick={scrollTop}
                className="flex items-center gap-1.5 rounded-lg border border-neon-400/20 bg-neon-400/5 px-3 py-1.5 transition hover:border-neon-400/50 hover:text-neon-400"
              >
                <ArrowUp size={11} /> top
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={legalOpen} onClose={() => setLegalOpen(null)} />
    </>
  );
}