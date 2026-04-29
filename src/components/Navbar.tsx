import { NavLink, Link } from "react-router-dom";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-700 ease-rolex ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 transition-opacity duration-500 hover:opacity-75">
          <span className="font-serif text-xl tracking-tight">Avimukta</span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">IP Services</span>
        </Link>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className="nav-link">
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.2em] border-b border-foreground/40 pb-0.5 transition-opacity duration-500 hover:opacity-70"
        >
          Consult
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
