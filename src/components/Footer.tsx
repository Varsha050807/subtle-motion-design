import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* --- FLOATING LEGAL WORDS --- */
const floatingWords = [
  "Equity", "Justice", "Lex", "Veritas", "Counsel",
  "Advocacy", "Statute", "Jurisdiction", "Doctrine", "Fiduciary"
];

const FloatingWords = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {floatingWords.map((word, i) => {
        const highlight = word === "Lex" || word === "Justice";

        return (
          <motion.span
            key={i}
            className={`absolute font-serif ${highlight ? "text-[#D4AF37]/70" : "text-white/30"
              }`}
            style={{
              left: `${5 + i * 9}%`,
              top: `${15 + (i % 6) * 12}%`,
              fontSize: `${16 + (i % 3) * 12}px`,
              filter: highlight
                ? "drop-shadow(0 0 10px rgba(212,175,55,0.35))"
                : "blur(0.3px)",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
              opacity: [0.25, 0.65, 0.25],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

/* --- FOOTER --- */
const Footer = () => (
  <footer className="relative bg-[#27445D] text-[#F7F5EF] mt-32 overflow-hidden">

    {/* FLOATING BACKGROUND WORDS */}
    <FloatingWords />

    <div className="container py-20 grid gap-12 md:grid-cols-4 relative z-10">

      {/* BRAND */}
      <div className="md:col-span-2">
        <div className="font-serif text-2xl">Avimukta</div>
        <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
          A boutique intellectual property practice — patents, trademarks, and strategic counsel
          for founders, scientists, and global brands.
        </p>
      </div>

      {/* PRACTICE */}
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">
          Practice
        </div>
        <ul className="space-y-2 text-sm">
          <li><Link className="nav-link" to="/services">Patents</Link></li>
          <li><Link className="nav-link" to="/services">Trademarks</Link></li>
          <li><Link className="nav-link" to="/services">Copyright</Link></li>
          <li><Link className="nav-link" to="/services">Litigation</Link></li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-4">
          Support
        </div>
        <div className="text-sm text-white/70 leading-relaxed space-y-2">
          <div>
            Phone / WhatsApp: +91 70199 79704 <br />
            Alternate: +91 7892 312058
          </div>
          <div>
            Email: <br />
            <a href="mailto:info@avimuktaip.com" className="nav-link">
              info@avimuktaip.com
            </a>
          </div>
          <div>
            Hours: Monday - Saturday, 9 AM - 6 PM IST
          </div>
          <div>
            Response Time: Within 24 hours
          </div>
        </div>
      </div>

    </div>

    {/* BOTTOM STRIP */}
    <div className="border-t border-white/10 relative z-10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <span>
          © 2026 Avimukta IP Services — A brand under Manur Research & Service LLP. All rights reserved.
        </span>
        <span className="tracking-[0.2em] uppercase">Crafted with restraint</span>
      </div>
    </div>

  </footer>
);

export default Footer;