import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gradient-ink text-ivory mt-32">
    <div className="container py-20 grid gap-12 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="font-serif text-2xl">Avimukta</div>
        <p className="mt-4 max-w-sm text-sm text-ivory/70 leading-relaxed">
          A boutique intellectual property practice — patents, trademarks, and strategic counsel
          for founders, scientists, and global brands.
        </p>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-4">Practice</div>
        <ul className="space-y-2 text-sm">
          <li><Link className="nav-link" to="/services">Patents</Link></li>
          <li><Link className="nav-link" to="/services">Trademarks</Link></li>
          <li><Link className="nav-link" to="/services">Copyright</Link></li>
          <li><Link className="nav-link" to="/services">Litigation</Link></li>
        </ul>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-4">Office</div>
        <address className="not-italic text-sm text-ivory/70 leading-relaxed">
          12 Court Chambers<br />
          New Delhi, India 110001<br />
          <a href="mailto:hello@avimukta.law" className="nav-link mt-2 inline-block">hello@avimukta.law</a>
        </address>
      </div>
    </div>
    <div className="border-t border-ivory/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
        <span>© {new Date().getFullYear()} Avimukta IP Services. All rights reserved.</span>
        <span className="tracking-[0.2em] uppercase">Crafted with restraint</span>
      </div>
    </div>
  </footer>
);

export default Footer;
