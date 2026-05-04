import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SiteLayout from "@/components/SiteLayout";

// --- Data ---
const SERVICE_CATEGORIES = [
  {
    id: "protection",
    title: "PROTECTION",
    services: [
      { n: "01", title: "Patent Filing", body: "Drafting, filing, and prosecuting utility and design patents globally." },
      { n: "02", title: "Trademark Services", body: "Brand clearance, registration, and portfolio management." },
      { n: "03", title: "Copyright", body: "Securing creative expressions, software, and literary works." },
      { n: "04", title: "Industrial Design", body: "Protecting aesthetic and ornamental configurations of products." },
    ]
  },
  {
    id: "strategy",
    title: "STRATEGY",
    services: [
      { n: "05", title: "Strategic IP Solution", body: "Aligning IP assets with long-term commercial goals." },
      { n: "06", title: "Patent Search & Analytics", body: "FTO, invalidity, and landscape analysis." },
      { n: "07", title: "IP Consultations", body: "Expert guidance for founders and corporate boards." },
      { n: "08", title: "Portfolio Management", body: "Maximizing ROI on global intellectual property assets." },
    ]
  },
  {
    id: "legal",
    title: "LEGAL",
    services: [
      { n: "09", title: "Patent Litigation Support", body: "Technical advocacy in infringement and validity disputes." },
      { n: "10", title: "Merger & Acquisition", body: "IP due diligence for high-stakes corporate transactions." },
      { n: "11", title: "Contract & Policies", body: "Drafting robust IP, NDA, and employment agreements." },
      { n: "12", title: "Licensing", body: "Structuring technology transfer and commercialization deals." },
    ]
  },
  {
    id: "international",
    title: "INTERNATIONAL",
    services: [
      { n: "13", title: "PCT National Phase", body: "Seamless entry into India for global PCT applications." },
      { n: "14", title: "Paralegal Services", body: "Docketing, renewals, and administrative IP support." },
    ]
  }
];

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(c => c.services);

// --- Components ---

function ServicesHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] cursor-crosshair pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* Reactive Spotlight Glow */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)",
          x: spotlightX,
          y: spotlightY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Subtle Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <motion.div
          className="absolute top-[20%] left-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[70%] left-[30%] w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Abstract Judicial Geometry */}
        <motion.div
          className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] border border-white/5 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 text-center">
        <motion.p
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#D4AF37] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Expertise
        </motion.p>

        <h1 className="text-5xl md:text-[8rem] leading-[0.9] font-serif tracking-tight flex flex-col items-center">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Fourteen disciplines.
          </motion.span>
          <motion.span
            className="block text-[#5E748E] italic mt-2 md:mt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            One standard.
          </motion.span>
        </h1>

        <motion.p
          className="mt-12 text-lg md:text-2xl max-w-3xl mx-auto text-[#ECE8DF]/70 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          Strategic intellectual property, litigation, advisory, and legal infrastructure built for innovators, founders, enterprises, and global brands.
        </motion.p>
      </div>
    </section>
  );
}
function VideoBox() {
  return (
    <div className="relative bg-[#ffffff]/70 backdrop-blur-xl border border-white/50 p-10 md:p-14 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex items-center justify-center">

      {/* Empty video container */}
      <div className="w-full h-[300px] md:h-[400px] border-2 border-dashed border-[#D4AF37]/40 flex items-center justify-center">
        <span className="text-[#5E748E] text-lg">
          Video Placeholder
        </span>
      </div>

    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      id={`service-${service.n}`}
      className="group relative bg-[#ffffff]/70 backdrop-blur-xl border border-white/50 p-10 md:p-14 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.03)] cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
    >
      <motion.div
        variants={{ hover: { y: -5, scale: 1.01 } }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex justify-between items-start mb-12">
          <span className="text-sm tracking-[0.2em] text-[#5E748E] font-medium">
            {service.n}
          </span>
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <h3 className="text-4xl md:text-5xl font-serif text-[#0D2342] mb-6 relative inline-block">
          {service.title}
          {/* Gold Underline Draw */}
          <motion.div
            className="absolute -bottom-2 left-0 h-[2px] bg-[#D4AF37]"
            variants={{
              rest: { width: "0%" },
              hover: { width: "100%" }
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </h3>

        <p className="text-lg md:text-xl text-[#0B1523]/70 font-light max-w-lg leading-relaxed mt-4">
          {service.body}
        </p>

      </motion.div>

      {/* Glass Reflection Sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
        variants={{
          rest: { left: "-100%" },
          hover: { left: "200%" }
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function StickyShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // We use ScrollTrigger to detect which category is currently scrolling past
    SERVICE_CATEGORIES.forEach((cat) => {
      ScrollTrigger.create({
        trigger: `#category-${cat.id}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActiveCategory(cat.id);
        }
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#F7F5EF] text-[#0D2342] py-32 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto relative flex flex-col lg:flex-row items-start gap-12">

        {/* LEFT STICKY */}
        <div className="lg:w-[45%] sticky top-32 lg:h-[calc(100vh-8rem)] items-center hidden lg:flex">
          <div className="relative w-full h-full flex flex-col justify-center">
            {SERVICE_CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                className="absolute inset-x-0"
                initial={false}
                animate={{
                  opacity: activeCategory === cat.id ? 1 : 0,
                  y: activeCategory === cat.id ? 0 : 40,
                  filter: activeCategory === cat.id ? "blur(0px)" : "blur(10px)"
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: activeCategory === cat.id ? "auto" : "none" }}
              >
                <h2 className="text-6xl xl:text-[6rem] leading-[0.9] font-serif tracking-tight text-[#0D2342] uppercase">
                  {cat.title}
                </h2>
                <p className="mt-8 text-2xl text-[#5E748E] font-light max-w-md leading-relaxed">
                  Precision strategies tailored for securing your assets in the {cat.title.toLowerCase()} domain.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SCROLLING CARDS */}
        <div className="lg:w-[55%] flex flex-col gap-32 lg:py-32">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} id={`category-${cat.id}`} className="flex flex-col gap-8 md:gap-12">
              {/* Mobile Category Title */}
              <h2 className="lg:hidden text-5xl font-serif text-[#0D2342] mb-4 border-b border-[#0D2342]/10 pb-4">
                {cat.title}
              </h2>
              <VideoBox />

              {cat.services.map((srv) => (
                <ServiceCard key={srv.n} service={srv} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function BentoGrid() {
  return (
    <section className="py-32 bg-[#27445D] text-[#F7F5EF] relative overflow-hidden px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Complete Lexicon</p>
          <h2 className="text-5xl md:text-7xl font-serif">Comprehensive Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {ALL_SERVICES.map((srv, i) => {
            // Distribute different card sizes for masonry bento look
            const isLarge = i === 0 || i === 7;
            const isTall = i === 3 || i === 10;
            const isWide = i === 5 || i === 12;

            return (
              <motion.div
                key={srv.n}
                className={`group relative border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-end cursor-pointer overflow-hidden
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                  ${isTall ? "md:row-span-2" : ""}
                  ${isWide ? "md:col-span-2" : ""}
                `}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover="hover"

              >
                {/* Background Bloom on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent pointer-events-none"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <span className="text-[#D4AF37] font-mono text-xs mb-4 block tracking-widest">{srv.n}</span>
                  <h3 className={`font-serif text-white ${isLarge ? 'text-4xl' : 'text-2xl'} mb-2`}>
                    {srv.title}
                  </h3>

                  {/* Body text expands out on hover */}
                  <motion.div
                    className="overflow-hidden"
                    variants={{
                      rest: { height: 0, opacity: 0, marginTop: 0 },
                      hover: { height: "auto", opacity: 1, marginTop: "1rem" }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="text-white/70 text-sm pt-4 border-t border-white/10">
                      {srv.body}
                    </p>
                  </motion.div>
                </div>

                {/* Subtle border highlight */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  variants={{
                    rest: { opacity: 0, scaleX: 0 },
                    hover: { opacity: 1, scaleX: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function QuickNavigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // 100px offset to prevent the sticky header or top margin from obscuring the title
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#ECE8DF] text-[#0D2342] py-24 px-4 md:px-8 border-b border-[#0D2342]/5 relative z-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Service Index</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D2342]">Quick Navigation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex flex-col">
              <h3 className="text-lg tracking-[0.2em] uppercase text-[#5E748E] font-medium mb-8 pb-4 border-b border-[#0D2342]/10">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-6">
                {cat.services.map((srv) => (
                  <li key={srv.n}>
                    <a
                      href={`#service-${srv.n}`}
                      onClick={(e) => handleScroll(e, `service-${srv.n}`)}
                      className="group flex items-start gap-4 cursor-pointer"
                    >
                      <span className="text-xs font-mono text-[#D4AF37] mt-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                        {srv.n}
                      </span>
                      <span className="text-[#0D2342]/80 group-hover:text-[#0D2342] font-serif text-lg md:text-xl transition-colors duration-300 relative inline-block">
                        {srv.title}
                        <span className="absolute left-0 right-0 -bottom-1 h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  useEffect(() => {
    // Lenis Smooth Scroll Setup for this page
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <SiteLayout>
      <div className="bg-[#F7F5EF] min-h-screen">
        <ServicesHero />
        <QuickNavigation />
        <StickyShowcase />
        <BentoGrid />
      </div>
    </SiteLayout>
  );
}