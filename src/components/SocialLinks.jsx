import { Github, Linkedin, Facebook } from "lucide-react";
import XIcon from "./icons/XIcon";
import { socials } from "../data/portfolio";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  x: XIcon,
};

export default function SocialLinks({
  size = 18,
  variant = "icon", // "icon" | "labeled"
  className = "",
}) {
  if (variant === "labeled") {
    return (
      <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
        {socials.map((s) => {
          const Icon = ICONS[s.icon] || Github;
          return (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-400/20 to-indigo-500/20 text-brand-300">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] uppercase tracking-wider text-slate-500">
                  {s.name}
                </span>
                <span className="block truncate text-sm font-medium text-slate-200">
                  {s.label}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {socials.map((s) => {
        const Icon = ICONS[s.icon] || Github;
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={s.name}
            title={s.name}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-300"
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}