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
    video: "/videos/protection.mp4",
    services: [
      {
        n: "01", title: "Patent Drafting & Prosecution", body: "Drafting, filing, and prosecuting utility and design patents globally.", detailedBody:
          "Your patent is defined by its claims. We craft complete and provisional specifications with technical precision, then prosecute them through examination to grant, handling FER responses, amendments, oppositions, and ensuring your invention is protected with strength, clarity, and enforceability", image: "http://www.luminouslegal.com/wp-content/uploads/2015/04/Patents-big.jpg"
      },
      {
        n: "02", title: "Trademark Registration & Protection", body: "Brand clearance, registration, and portfolio management.", detailedBody:
          "Brands are assets. We conduct searches, manage applications, registrations, renewals, oppositions, and enforcement in India and internationally, ensuring your name, logo, and identity are secured, protected, and positioned to support recognition, trust, and long-term commercial value.", image: "https://cms.ezylegal.in/wp-content/uploads/2022/12/IP-Trademark.jpeg"
      },
      {
        n: "03", title: "Copyright Registration & Enforcement", body: "Securing creative expressions, software, and literary works.", detailedBody:
          "Creative work deserves protection. We assist with copyright registration, licensing, assignments, and enforcement for software, research, content, and artistic works, ensuring your intellectual output is legally secured, commercially usable, and defended against infringement across all applicable domains.", image: "https://astepabovelegalsolutions.com/wp-content/uploads/2022/09/DM_20220924113326_001.jpg"
      },
      {
        n: "04", title: "Industrial Design Registration", body: "Protecting aesthetic and ornamental configurations of products.", detailedBody:
          "Design defines perception. We secure protection for the visual aspects of products, including shape, configuration, and ornamentation, managing filings, examinations, oppositions, renewals, and enforcement, ensuring your designs remain exclusively yours across their full lifecycle of commercial use.", image: "https://www.studiored.com/wp-content/uploads/2021/07/industrial-design-companies-hero.webp?x83661"
      },
      {
        n: "05", title: "Patent Illustration", body: "Docketing, renewals, and administrative IP support.", detailedBody:
          "Precision matters in every figure. We create technically accurate, jurisdiction-compliant patent drawings across mechanical, chemical, electrical, design, and software domains, delivering clear, examiner-ready visuals that strengthen specifications, support claims, and enhance the overall quality of your patent filings.", image: "https://www.writinglaw.com/wp-content/uploads/2023/04/Paralegal-Services.png"
      },
    ]
  },
  {
    id: "strategy",
    title: "STRATEGY",
    video: "/videos/strategy.mp4",
    services: [
      {
        n: "06", title: "IP Consultation & Strategy", body: "Aligning IP assets with long-term commercial goals.", detailedBody:
          "IP strategy shapes outcomes. We advise on what to protect, when to act, how to structure ownership, and how to leverage assets, aligning intellectual property decisions with commercial goals, ensuring every step contributes to long-term value, scalability, and competitive positioning.", image: "https://ip.com/wp-content/uploads/2023/07/patent-landscape-services-patent-software-services.jpg"
      },
      {
        n: "07", title: "Patent Search & Prior Art Analysis", body: "FTO, invalidity, and landscape analysis.", detailedBody:
          "Before filing or building, clarity is critical. We conduct patentability searches, FTO analyses, landscape studies, and competitor mapping across jurisdictions, delivering structured insights, clear novelty positions, and strategic recommendations that guide confident innovation and informed IP decisions.", image: "https://www.ipophil.gov.ph/wp-content/uploads/2020/10/IPOPHL-web-header-PatSearch.jpg"
      },
      {
        n: "08", title: "Invention Harvesting & IP Strategy", body: "Expert guidance for founders and corporate boards.", detailedBody:
          "We uncover hidden innovation within your organisation. Through structured programs and focused workshops, we systematically capture, refine, and convert ideas into protectable assets, building high-value IP portfolios that align with business strategy and unlock long-term commercial potential.", image: "https://www.ust.edu.ph/wp-content/uploads/2023/07/ITSO-IP-Consultation-1536x864.png"
      },
      {
        n: "09", title: "White Space Analysis & Competitive Density Analysis", body: "Maximizing ROI on global intellectual property assets.", detailedBody:
          "Opportunity lies where others are not looking. We identify innovation gaps, assess technology density, and analyse competitive positioning, enabling you to target untapped areas, differentiate effectively, and invest in IP that delivers meaningful commercial advantage and strategic growth.", image: "https://flourishfinancialservices.in/wp-content/uploads/2024/01/PMS-page-section-1-img.png"
      },
    ]
  },
  {
    id: "legal",
    title: "LEGAL",
    video: "/videos/legal.mp4",
    services: [
      {
        n: "10", title: "Patent Litigation Support", body: "Technical advocacy in infringement and validity disputes.", detailedBody:
          "Disputes demand precision. We provide pre-litigation analysis, claim charts, evidence preparation, and strategic support, helping you enforce your rights or defend against claims, ensuring your position is protected with clarity, strength, and informed legal direction throughout proceedings.", image: "https://ipwatchdog.com/wp-content/uploads/2021/11/Depositphotos_461955494_XL-scaled.jpg"
      },
      {
        n: "11", title: "IP Due Diligence for M&A & Investments", body: "IP due diligence for high-stakes corporate transactions.", detailedBody:
          "IP defines valuation. We conduct detailed due diligence, assessing ownership, validity, enforceability, encumbrances, and risks, delivering clear insights that enable investors and acquirers to understand exposure, validate assets, and make informed decisions in high-stakes transactions.", image: "https://5.imimg.com/data5/SELLER/Default/2025/8/537468067/CK/YK/VT/147344956/merger-acquisition-services-500x500.jpeg"
      },
      {
        n: "12", title: "Contract Drafting & IP Agreements", body: "Drafting robust IP, NDA, and employment agreements.", detailedBody:
          "IP strength depends on strong agreements. We draft, review, and advise on NDAs, licensing, assignments, technology transfers, and co-development contracts, ensuring clarity, enforceability, and alignment with your business objectives while managing compliance and long-term contractual risk.", image: "https://golferhive.com/wp-content/uploads/2025/11/Top-down-flat-lay-of-venue-contract-with-highlighted-cancellation-policies-gold-pen-laptop-and-folders-on-rustic-wood.jpg"
      },
      {
        n: "13", title: "Technology Evolution Mapping", body: "Structuring technology transfer and commercialization deals.", detailedBody:
          "Innovation follows patterns. We analyse filing trends, citation networks, and claim evolution to map how technologies develop, revealing emerging opportunity zones, anticipating competitive shifts, and positioning your IP strategy ahead of where markets and technologies are moving next.", image: "https://hsipservices.com/images/licensing.jpg"
      },
    ]
  },
  {
    id: "international",
    title: "INTERNATIONAL",
    video: "/videos/international.mp4",
    services: [
      {
        n: "14", title: "PCT National Phase Entry — India", body: "Seamless entry into India for global PCT applications.", detailedBody:
          "Global protection requires precision at entry. We manage complete PCT national phase filings in India, ensuring compliance with deadlines, documentation, and legal requirements, while supporting both foreign applicants entering India and Indian applicants expanding internationally through the PCT system.", image: "https://origiin.com/wp-content/uploads/international-business-meeting.jpg"
      },

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

      <div className="relative z-10 flex flex-col items-center">        <motion.p
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
function VideoBox({ video }: { video: string }) {
  return (
    <div className="relative bg-[#ffffff]/70 backdrop-blur-xl border border-white/50 p-6 md:p-8 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.03)] rounded-2xl">
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover block"
        />
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

        <p className="text-lg md:text-xl text-[#0B1523]/70 font-light max-w-2xl leading-relaxed mt-4 mx-auto text-justify">          {service.detailedBody || service.body}
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
                <p className="mt-8 text-2xl text-[#5E748E] font-light max-w-md leading-relaxed text-justify">                  Precision strategies tailored for securing your assets in the {cat.title.toLowerCase()} domain.
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
              <VideoBox video={cat.video} />

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
                className={`group relative border border-white/10  p-8 flex flex-col justify-end cursor-pointer overflow-hidden
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
                {srv.image && (
                  <>
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url(${srv.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }}
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.08 }
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Dark Overlay (THIS FIXES EVERYTHING) */}
                    <div className="absolute inset-0 bg-[#0D2342]/60 z-0" />
                  </>
                )}
                {/* Background Bloom on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent pointer-events-none"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10 h-full flex flex-col">


                  <span className="text-[#D4AF37] font-mono text-xs mb-3 block tracking-widest">
                    {srv.n}
                  </span>

                  <h3 className={`font-serif text-white ${isLarge ? "text-4xl" : "text-2xl"} mb-2`}>
                    {srv.title}
                  </h3>

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

        <section className="bg-[#F7F5EF] text-[#0D2342] py-16 px-4 md:px-8 relative z-20">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-3xl mx-auto bg-white border border-[#0D2342]/10 rounded-xl shadow-sm py-8 px-6 md:px-10 text-center">
              <h3 className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-4 font-semibold">
                Note for Global Audience
              </h3>
              <p className="text-lg md:text-xl font-serif leading-relaxed opacity-90">
                All services are designed to comply with international IP laws, ensuring broad applicability across jurisdictions. To enhance accessibility for non-English-speaking audiences, we can provide key term glossaries or translations upon request.
              </p>
            </div>
          </div>
        </section>

        <QuickNavigation />
        <StickyShowcase />
        <BentoGrid />
      </div>
    </SiteLayout>
  );
}