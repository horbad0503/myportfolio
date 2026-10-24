
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [time, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  // Handle scroll and active navigation link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const pos = window.scrollY + 140;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        if (
          pos >= section.offsetTop &&
          pos < section.offsetTop + section.offsetHeight
        ) {
          setActive(link.href.slice(1));
        }
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reliable mobile navigation
  const handleMobileNavClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    // Close menu and restore page scrolling
    setOpen(false);
    document.body.style.overflow = "";

    if (!target) {
      console.warn(`Navigation section not found: ${href}`);
      return;
    }

    // Update active link immediately
    setActive(href.slice(1));

    // Update the URL without triggering default anchor scrolling
    window.history.replaceState(null, "", href);

    // Scroll to the target section after the menu begins closing
    window.setTimeout(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neon-400/15 bg-void-950/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={(event) => {
            if (window.innerWidth < 1024) {
              handleMobileNavClick(event, "#home");
            }
          }}
          className="group flex items-center gap-3"
        >
          <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-neon-400/30 bg-void-950 transition group-hover:border-neon-400/60 group-hover:shadow-[0_0_20px_-4px_rgba(0,229,255,0.5)]">
            <img
              src={profile.logo}
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.innerHTML =
                  '<div class="grid h-full w-full place-items-center font-mono text-xs font-bold text-neon-400">AO</div>';
              }}
            />
          </div>

          <div className="hidden leading-tight sm:block">
            <div className="font-mono text-xs text-neon-400/60">
              ~/
            </div>

            <div className="-mt-0.5 font-mono text-sm font-bold text-white">
              {profile.handle}
              <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-neon-400 animate-blink" />
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, i) => {
            const isActive = active === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.href.slice(1))}
                  className={`group relative flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                    isActive
                      ? "text-neon-400"
                      : "text-slate-500 hover:text-neon-300"
                  }`}
                >
                  <span className="text-[10px] text-neon-400/40">
                    0{i + 1}
                  </span>

                  {link.label}

                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-neon-400" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop right cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-lg border border-secure-400/30 bg-secure-400/5 px-3 py-2">
            <span className="status-dot status-dot-live" />

            <span className="font-mono text-[10px] uppercase tracking-wider text-secure-400">
              Live
            </span>

            <span className="font-mono text-[10px] text-slate-500">
              {time}
            </span>
          </div>

          <a
            href="#contact"
            className="btn-primary !px-4 !py-2 !text-xs"
          >
            ./connect
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-neon-400/30 bg-neon-400/5 text-neon-400 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neon-400/15 bg-void-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x py-5">
              <div className="mb-4 flex items-center gap-2 border-b border-neon-400/15 pb-3 font-mono text-[10px] uppercase tracking-wider text-neon-400/60">
                <span className="status-dot status-dot-live" />
                nav — {time}
              </div>

              <ul className="grid grid-cols-2 gap-2">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) =>
                        handleMobileNavClick(event, link.href)
                      }
                      aria-current={
                        active === link.href.slice(1)
                          ? "location"
                          : undefined
                      }
                      className={`flex items-center gap-2 rounded-lg border px-4 py-3 font-mono text-sm transition ${
                        active === link.href.slice(1)
                          ? "border-neon-400/40 text-neon-400"
                          : "border-neon-400/10 bg-neon-400/5 text-slate-300 hover:border-neon-400/40 hover:text-neon-300"
                      }`}
                    >
                      <span className="text-[10px] text-neon-400/40">
                        0{i + 1}
                      </span>

                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(event) =>
                  handleMobileNavClick(event, "#contact")
                }
                className="btn-primary mt-4 w-full"
              >
                ./connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
