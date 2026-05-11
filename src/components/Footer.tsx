import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, Youtube } from "lucide-react";
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
      <div className="md:col-span-2 flex flex-col justify-start items-start">
        <div className="font-serif text-2xl">Avimukta</div>

        <p className="mt-4 max-w-sm text-sm text-white/70 leading-relaxed">
          A boutique intellectual property practice — patents, trademarks, and strategic counsel
          for founders, scientists, and global brands.
        </p>

        {/* 🔥 SOCIAL ICONS */}
        <div className="flex items-center gap-5 mt-6">

          <a
            href="https://www.linkedin.com/company/104831424/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://www.youtube.com/@Avimukta_IP"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <Youtube size={20} />
          </a>

          <a
            href="https://x.com/AvimuktaIP"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.292 19.49h2.039L6.486 3.24H4.298l13.31 17.404Z" />
            </svg>
          </a>

          <a
            href="https://www.quora.com/profile/Avimukta-IP-Services"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D4AF37] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.3 18.6c2.6-1.2 4.2-3.8 4.2-7 0-5-3.1-8.1-7.6-8.1S4.3 6.6 4.3 11.6s3.1 8.1 7.6 8.1c.8 0 1.5-.1 2.2-.3l2.7 3.2h3.2l-3.7-4Zm-3.4-2.1c-2.5 0-4.2-1.8-4.2-4.9s1.7-4.9 4.2-4.9 4.2 1.8 4.2 4.9-1.7 4.9-4.2 4.9Z" />
            </svg>
          </a>

        </div>
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

        <div className="text-sm text-white/70">
          <div className="grid grid-cols-[140px_1fr] gap-y-2">

            <span className="text-white/50">Phone / WhatsApp</span>
            <span>+91 70199 79704</span>

            <span className="text-white/50">Alternate</span>
            <span>+91 7892 312058</span>

            <span className="text-white/50">Email</span>
            <span>
              <a href="mailto:info@avimuktaip.com" className="nav-link">
                info@avimuktaip.com
              </a>
            </span>

            <span className="text-white/50">Hours</span>
            <span className="whitespace-nowrap">
              Monday – Saturday, 9 AM – 6 PM IST
            </span>

            <span className="text-white/50">Response Time</span>
            <span>Within 24 hours</span>

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
        <div className="flex items-center gap-6 uppercase tracking-[0.2em]">
          <Link
            to="/privacy-policy"
            className="hover:text-ivory transition-colors"
          >
            Privacy Policy
          </Link>

          <span>Crafted with restraint</span>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;