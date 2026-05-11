import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/ip-insights", label: "IP Insights" },
  { to: "/ip-health", label: "IP Health" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/contact", label: "Contact" },
  { to: "/subscription-model", label: "Subscription" },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isLightMode = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-[32px] z-50 transition-all duration-700 ${scrolled
        ? "bg-[#27445D]/80 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent"
        } ${isLightMode ? "text-[#0D2342]" : "text-white"}`}
    >
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img
            src="/images/logo.jpeg"
            alt="Avimukta Logo"
            className="h-10 w-auto object-contain"
          />

          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl font-semibold">
              Avimukta
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] opacity-70 font-medium">
              IP Services
            </span>
          </div>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.28em] uppercase font-serif font-medium">
          {links.map((l) => {
            if (l.label === "About") {
              return (
                <div
                  key={l.to}
                  className="relative flex items-center"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <div className="flex items-center gap-1.5 transition-all duration-500 hover:-translate-y-1">
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `group/link relative ${isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                        }`
                      }
                      onClick={() => setIsAboutOpen(false)}
                    >
                      <span>{l.label}</span>
                      <div className="absolute -bottom-2 left-0 h-[1px] w-full bg-current origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500" />
                    </NavLink>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsAboutOpen(!isAboutOpen);
                      }}
                      className="focus:outline-none"
                      aria-label="Toggle About dropdown"
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 opacity-70 hover:opacity-100 ${isAboutOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`absolute top-full left-0 pt-6 transition-all duration-300 ${isAboutOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
                      }`}
                  >
                    <div className="bg-[#27445D]/95 backdrop-blur-xl border border-white/10 px-6 py-4 min-w-[160px] shadow-2xl flex flex-col">
                      <NavLink
                        to="/team"
                        className={({ isActive }) =>
                          `relative transition-all duration-300 block text-white tracking-[0.2em] uppercase text-xs font-semibold ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100 hover:translate-x-2"
                          }`
                        }
                        onClick={() => setIsAboutOpen(false)}
                      >
                        Our Team
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `group relative transition-all duration-500 hover:-translate-y-1 ${isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                  }`
                }
              >
                <span>{l.label}</span>
                <div className="absolute -bottom-2 left-0 h-[1px] w-full bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </NavLink>
            );
          })}
        </nav>

        {/* CTA */}

      </div>
    </header>
  );
};

export default Navbar;