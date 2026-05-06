import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightMode = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-[#27445D]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        } ${isLightMode ? "text-[#0D2342]" : "text-white"}`}
    >
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-baseline gap-2 hover:opacity-80 transition"
        >
          <span className="font-serif text-xl font-semibold">
            Avimukta
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] opacity-70 font-medium">
            IP Services
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-12 text-sm tracking-[0.2em] uppercase font-serif font-semibold">
          {links.map((l) => (
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
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className={`hidden md:inline-flex items-center text-xs uppercase tracking-[0.2em] border-b pb-0.5 font-semibold transition ${isLightMode
              ? "border-[#0D2342]/50 hover:opacity-70"
              : "border-white/50 hover:opacity-80"
            }`}
        >
          Consult
        </Link>
      </div>
    </header>
  );
};

export default Navbar;