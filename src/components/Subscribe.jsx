import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Users,
  X,
  Sparkles,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SUBSCRIBE_ENDPOINT } from "../data/portfolio";

const STORAGE_KEY = "dolapo.subscribers.v1";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* --- tiny storage helpers --------------------------------------------- */
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
    /* ignore quota errors */
  }
}

/* --- component -------------------------------------------------------- */
export default function Subscribe() {
  const [subscribers, setSubscribers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSubscribers(readSubscribers());
  }, []);

  const currentEmail = form.email.trim().toLowerCase();
  const isDuplicate = useMemo(
    () => subscribers.some((s) => s.email === currentEmail),
    [subscribers, currentEmail]
  );

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("idle");
    setMessage("");

    const email = form.email.trim().toLowerCase();
    const name = form.name.trim();

    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (isDuplicate) {
      setStatus("error");
      setMessage("You\u2019re already subscribed with this email.");
      return;
    }

    setStatus("loading");

    const entry = {
      name,
      email,
      subscribedAt: new Date().toISOString(),
    };

    try {
      // Optional: POST to a real endpoint if configured
      if (SUBSCRIBE_ENDPOINT) {
        const res = await fetch(SUBSCRIBE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(entry),
        });
        if (!res.ok) throw new Error("Subscription endpoint rejected the request.");
      } else {
        // Simulated network latency so the UX feels real out of the box
        await new Promise((r) => setTimeout(r, 650));
      }

      const next = [...subscribers, entry];
      setSubscribers(next);
      writeSubscribers(next);
      setForm({ name: "", email: "" });
      setStatus("success");
      setMessage("You\u2019re in. New insights will land in your inbox.");
    } catch (err) {
      setStatus("error");
      setMessage(
        err?.message || "Something went wrong. Please try again in a moment."
      );
    }
  }

  function unsubscribe(email) {
    const next = subscribers.filter((s) => s.email !== email);
    setSubscribers(next);
    writeSubscribers(next);
    setStatus("idle");
    setMessage("");
  }

  return (
    <section id="subscribe" className="relative py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Newsletter"
          title="Stay in the Loop"
          subtitle="Occasional notes on data analytics, SQL, Power BI, Python, and dashboards. No spam \u2014 unsubscribe any time."
        />

        <Reveal delay={0.08}>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 sm:p-10">
            {/* decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              {/* Left copy */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <Bell size={13} className="text-brand-300" />
                  <span className="text-xs font-medium text-slate-300">
                    Data &amp; analytics updates
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
                  Get new projects &amp; insights by email
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                  Short, practical writeups on analytics projects, SQL techniques,
                  Power BI dashboards, and Python tooling. Delivered occasionally,
                  never shared with anyone.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="chip">
                    <Users size={12} className="mr-1.5" />
                    {subscribers.length}{" "}
                    {subscribers.length === 1 ? "subscriber" : "subscribers"}
                  </span>
                  <span className="chip">
                    <Sparkles size={12} className="mr-1.5" /> No spam, ever
                  </span>
                </div>
              </div>

              {/* Right form */}
              <form
                onSubmit={onSubmit}
                className="glass relative rounded-2xl p-5 sm:p-6"
                noValidate
              >
                <div className="grid gap-4">
                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Name <span className="text-slate-600">(optional)</span>
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      autoComplete="name"
                      className={inputClass}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className={inputClass}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" /> Subscribing…
                      </>
                    ) : (
                      <>
                        <Bell size={15} /> Subscribe
                      </>
                    )}
                  </button>

                  <AnimatePresence mode="wait">
                    {message && (
                      <motion.div
                        key={status + message}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className={`flex items-start gap-2 rounded-xl border p-3 text-xs ${
                          status === "success"
                            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                            : "border-rose-400/25 bg-rose-400/10 text-rose-300"
                        }`}
                      >
                        {status === "success" ? (
                          <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" />
                        ) : (
                          <AlertCircle size={14} className="mt-0.5 flex-shrink-0" />
                        )}
                        <span>{message}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p className="text-[11px] leading-relaxed text-slate-500">
                    By subscribing you agree to the{" "}
                    <a
                      href="#legal-privacy"
                      className="text-brand-300 underline-offset-2 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    . We never sell your data.
                  </p>
                </div>

                {/* Subscriber list (local) */}
                {subscribers.length > 0 && (
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      Recent (this device)
                    </p>
                    <ul className="max-h-28 space-y-1.5 overflow-y-auto pr-1">
                      {subscribers
                        .slice()
                        .reverse()
                        .slice(0, 5)
                        .map((s) => (
                          <li
                            key={s.email}
                            className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs"
                          >
                            <span className="truncate text-slate-300">
                              {s.name ? `${s.name} · ` : ""}
                              {s.email}
                            </span>
                            <button
                              type="button"
                              onClick={() => unsubscribe(s.email)}
                              aria-label={`Unsubscribe ${s.email}`}
                              className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full text-slate-500 transition hover:bg-white/5 hover:text-rose-300"
                            >
                              <X size={11} />
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.05] focus:ring-2 focus:ring-brand-400/20";