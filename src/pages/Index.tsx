import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

gsap.registerPlugin(ScrollTrigger);

// --- State & Events ---
const hoverEvent = new EventTarget();
const setHovered = (val: boolean) => hoverEvent.dispatchEvent(new CustomEvent('hover', { detail: val }));
const useHovered = () => {
  const [hovered, setH] = useState(false);
  useEffect(() => {
    const handler = (e: any) => setH(e.detail);
    hoverEvent.addEventListener('hover', handler);
    return () => hoverEvent.removeEventListener('hover', handler);
  }, []);
  return hovered;
};

// --- Components ---
function HoverHeading({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={`relative inline-block cursor-pointer group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.div
        className="relative z-10"
        variants={{
          rest: { scale: 1, filter: "blur(0px)", y: 0 },
          hover: { scale: 1.05, filter: "blur(0px)", y: -5, textShadow: "0px 10px 30px rgba(236, 232, 223, 0.3)" }
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[2px] bg-current origin-left"
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 }
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}


// --- Hero Heading Component ---
function AnimatedHeroHeading() {
  const line1 = "Mastery in".split("");
  const line2 = "Innovation.".split("");
  const ease = [0.16, 1, 0.3, 1] as const;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mousePxX = useMotionValue(0);
  const mousePxY = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set((x / rect.width) - 0.5);
    mouseY.set((y / rect.height) - 0.5);
    mousePxX.set(x);
    mousePxY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const springConfig = { damping: 40, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const bgX = useTransform(smoothX, [-0.5, 0.5], [80, -80]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [80, -80]);

  const orbSpringConfig = { damping: 30, stiffness: 150, mass: 0.5 };
  const orbX = useSpring(mousePxX, orbSpringConfig);
  const orbY = useSpring(mousePxY, orbSpringConfig);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
      className="relative w-full py-12"
      style={{ perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Parallax Law Motifs */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center"
        style={{ x: bgX, y: bgY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 1.5, ease }}
      >
        <div className="absolute top-[-20%] left-[-10%] text-[10rem] md:text-[18rem] font-serif font-black italic text-[#0D2342]/12 opacity-20 blur-[1px] tracking-tight select-none whitespace-nowrap">
          Justitia
        </div>

      </motion.div>

      {/* Main Interactive Heading */}
      <motion.h1
        className="text-5xl md:text-[8rem] leading-[0.9] font-serif tracking-tight relative cursor-crosshair z-20"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Base Text Layer */}
        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
          <div className="block whitespace-nowrap">
            {line1.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block text-[#0D2342]"
                variants={{
                  rest: { y: 0, x: 0, filter: "blur(0px)" },
                  hover: {
                    y: -10,
                    x: i * 2,
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
                  }
                }}
                transition={{ duration: 1, ease, delay: i * 0.02 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="block whitespace-nowrap">
            {line2.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block text-[#5E748E] italic origin-center"
                variants={{
                  rest: {
                    y: 0,
                    x: 0,
                    filter: "blur(0px)",
                    scale: 1,
                    textShadow: "0px 0px 0px rgba(212,175,55,0)"
                  },
                  hover: {
                    y: -10,
                    x: i * 2,
                    filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
                    scale: 1.02,
                    textShadow: "0px 15px 40px rgba(212,175,55,0.5)"
                  }
                }}
                transition={{ duration: 1, ease, delay: (line1.length + i) * 0.02 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Gold Shimmer Mask Overlay Layer */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(120deg, transparent 0%, transparent 40%, rgba(212, 175, 55, 0.9) 50%, transparent 60%, transparent 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            transform: "translateZ(41px)"
          }}
          variants={{
            rest: { backgroundPosition: "200% 0%", opacity: 0 },
            hover: { backgroundPosition: "-100% 0%", opacity: 1 }
          }}
          transition={{ duration: 1.2, ease }}
        >
          <div className="block whitespace-nowrap">
            {line1.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  rest: { y: 0, x: 0 },
                  hover: { y: -10, x: i * 2 }
                }}
                transition={{ duration: 1, ease, delay: i * 0.02 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="block whitespace-nowrap">
            {line2.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block italic origin-center"
                variants={{
                  rest: { y: 0, x: 0, scale: 1 },
                  hover: { y: -10, x: i * 2, scale: 1.02 }
                }}
                transition={{ duration: 1, ease, delay: (line1.length + i) * 0.02 }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.h1>

      {/* Glass Ripple & Ambient Particles */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none z-30 mix-blend-overlay"
        style={{ x: orbX, y: orbY, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {/* Main Glass Ripple Orb */}
        <div className="w-72 h-72 rounded-full" style={{
          backdropFilter: "blur(6px) brightness(1.05)",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)",
          boxShadow: "inset 0 0 30px rgba(212,175,55,0.15)"
        }} />

        {/* Floating Gold Dust near cursor */}
        {[...Array(6)].map((_, i) => {
          const px = Math.sin(i * Math.PI / 3) * (50 + i * 15);
          const py = Math.cos(i * Math.PI / 3) * (50 + i * 15);
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full bg-[#D4AF37]"
              style={{
                width: 2 + i,
                height: 2 + i,
                x: px,
                y: py,
                filter: `blur(${i * 0.5}px)`,
              }}
              animate={{
                x: [px, px + (i % 2 === 0 ? 20 : -20), px],
                y: [py, py + (i % 3 === 0 ? -20 : 20), py],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </motion.div>
    </motion.div>
  );
}

// --- Main Page ---
export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [darkNav, setDarkNav] = useState(false);

  // Smooth Scroll & Infinite Loop Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      infinite: true, // Enables seamless looping
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Sticky Scroll Sequences
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Services panels pin and slide
      const sections = gsap.utils.toArray('.service-panel');
      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".services-container",
          pin: true,
          scrub: 1,
          end: "+=4000",
        }
      });

      // Background color morphs for services
      gsap.to('.services-container', {
        backgroundColor: "#355C7D",
        ease: "none",
        scrollTrigger: {
          trigger: ".services-container",
          start: "top top",
          end: "+=4000",
          scrub: 1,
        }
      });
      ScrollTrigger.create({
        trigger: ".services-container",
        start: "top top",
        end: "bottom top",
        onEnter: () => setDarkNav(true),
        onLeaveBack: () => setDarkNav(false),
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });

  // Immersive transition calculations mapped to total page scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.05], [0, 150]);


  return (
    <SiteLayout>
      <div
        ref={containerRef}
        className="bg-gradient-to-b from-[#F7F5EF] via-[#f2eee4] to-[#ECE8DF] text-[#0B1523] selection:bg-[#0D2342] selection:text-[#F7F5EF] font-sans overflow-hidden"
      >




        <main className="relative z-10">

          {/* HERO SECTION */}

          <section className="h-screen flex flex-col justify-center px-8 md:px-24">
            <motion.div style={{ opacity: heroOpacity, y: heroY }} className="max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <span className="text-[#5E748E] uppercase tracking-[0.4em] text-xs md:text-sm mb-8 block">
                  Elite IP Strategists First
                </span>
              </motion.div>

              <AnimatedHeroHeading />

              <motion.div
                className="mt-12 max-w-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              >
                <p className="text-xl md:text-2xl text-[#0B1523] font-light leading-relaxed mb-8">
                  Illuminating the Landscape of Innovation, Risk, and Value.
                </p>

                <p className="text-base md:text-lg text-[#5E748E] leading-relaxed max-w-3xl">
                  We do not merely advise. We illuminate, harvest, and build—engineering
                  intellectual property portfolios that endure, compete, and create lasting
                  wealth for the enterprises bold enough to lead.
                </p>
              </motion.div>

            </motion.div> {/* THIS WAS MISSING */}

          </section>
          <section
            className="h-[22vh] relative z-10 pointer-events-none -mb-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, #F7F5EF 0%, #eef0ed 18%, #ccd4d9 42%, #7890a5 70%, #27445D 100%)"
            }}
          />
          {/* SERVICES SEQUENCE */}
          <section className="services-container h-screen overflow-hidden bg-[#27445D] text-[#F7F5EF] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.3)]" id="expertise">


            <div className="h-full flex flex-col w-full absolute top-0 left-0">
              <div className="service-panel h-screen w-full flex items-center justify-center relative shrink-0">
                <div className="max-w-5xl px-8 md:px-0 text-center relative z-10">
                  <HoverHeading>

                    <h3 className="text-6xl md:text-[9rem] font-serif mb-8 text-[#ECE8DF]">Patent</h3>

                    <h3 className="text-6xl md:text-[9rem] font-serif mb-8 text-[#ECE8DF]">Patents</h3>

                  </HoverHeading>
                  <p className="text-lg md:text-3xl font-light text-[#5E748E] max-w-3xl mx-auto leading-relaxed mt-12">
                    Securing technical frontiers. Comprehensive drafting, prosecution, and patent analytics for complex utility and design assets.                  </p>
                </div>
              </div>

              <div className="service-panel h-screen w-full flex items-center justify-center relative shrink-0">
                <div className="max-w-5xl px-8 md:px-0 text-center relative z-10">
                  <HoverHeading>
                    <h3 className="text-6xl md:text-[9rem] font-serif mb-8 text-[#ECE8DF]">Trademarks</h3>
                  </HoverHeading>
                  <p className="text-lg md:text-3xl font-light text-[#5E748E] max-w-3xl mx-auto leading-relaxed mt-12">
                    Architecting brand dominance. Global portfolio management and aggressive enforcement strategies.
                  </p>
                </div>
              </div>

              <div className="service-panel h-screen w-full flex items-center justify-center relative shrink-0">
                <div className="max-w-5xl px-8 md:px-0 text-center relative z-10">
                  <HoverHeading>
                    <h3 className="text-6xl md:text-[9rem] font-serif mb-8 text-[#ECE8DF]">Advisory</h3>
                  </HoverHeading>
                  <p className="text-lg md:text-3xl font-light text-[#5E748E] max-w-3xl mx-auto leading-relaxed mt-12">
                    Strategic intelligence. Licensing, due diligence, and risk mitigation for high-stakes transactions.
                  </p>
                </div>
              </div>
              <div className="service-panel h-screen w-full flex items-center justify-center relative shrink-0">
                <div className="max-w-5xl px-8 md:px-0 text-center relative z-10">
                  <HoverHeading>
                    <h3 className="text-6xl md:text-[9rem] font-serif mb-8 text-[#ECE8DF]">
                      Litigation
                    </h3>
                  </HoverHeading>

                  <p className="text-lg md:text-3xl font-light text-[#5E748E] max-w-3xl mx-auto leading-relaxed mt-12">
                    Enforcement with precision. Strategic representation, dispute resolution,
                    infringement actions, and high-stakes intellectual property litigation.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* TRANSITION GRADIENT */}
          <section className="h-[35vh] bg-gradient-to-b from-[#355C7D] to-[#F7F5EF] relative z-20 pointer-events-none" />
          {/* PHILOSOPHY */}
          <section className="min-h-screen bg-[#F7F5EF] flex items-center justify-center py-40 px-8 md:px-24 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="philosophy">
            <div className="max-w-7xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.15] font-serif text-[#0D2342]"
              >
                We believe in <HoverHeading className="text-[#5E748E] italic px-2">restraint</HoverHeading> and <HoverHeading className="text-[#5E748E] italic px-2">precision.</HoverHeading> <br />A truly enduring legal framework is invisible, yet impenetrable.
              </motion.p>
            </div>
          </section>
          {/* TRANSITION INTO CTA */}
          <section
            className="h-[28vh] relative z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #F7F5EF 0%, #e8e3d8 25%, #c9d1d8 55%, #5f7a95 78%, #27445D 100%)"
            }}
          />

          {/* TRANSITION GRADIENT */}
          <section className="h-[50vh] bg-gradient-to-b from-[#27445D] to-[#F7F5EF] relative z-20 pointer-events-none" />

          {/* DUPLICATE HERO FOR SEAMLESS INFINITE SCROLL */}
          <section className="h-screen flex flex-col justify-center px-8 md:px-24 bg-[#F7F5EF] relative z-10 pointer-events-none">
            <div className="max-w-6xl">
              <span className="text-[#5E748E] uppercase tracking-[0.4em] text-xs md:text-sm mb-8 block">
                Intellectual Property Advisory
              </span>
              <h1 className="text-5xl md:text-[8rem] leading-[0.9] font-serif tracking-tight text-[#0D2342]">
                Mastery in<br />
                <span className="text-[#5E748E] italic">Innovation.</span>
              </h1>
              <p className="mt-12 text-xl md:text-2xl max-w-2xl text-[#0B1523] font-light leading-relaxed">
                We do not merely advise. We illuminate, harvest, and build intellectual property portfolios that endure, compete, and create lasting wealth for the enterprises bold enough to lead.              </p>
            </div>
          </section>

        </main>
      </div >

    </SiteLayout>
  );
}