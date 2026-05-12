import SiteLayout from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import about from "@/assets/about.jpg";
import panel1 from "@/assets/panel1.png";
import panel2 from "@/assets/panel2.png";
import panel3 from "@/assets/panel3.png";

const panels = [
  {
    year: "Origin",
    title: "A practice founded on listening.",
    body: "Avimukta was established as a counter-proposal to the volume firm — a chamber where partners answered their own correspondence and every brief began with a conversation, never a form.",
    image: about,
  },
  {
    year: "Craft",
    title: "Drafting as a discipline.",
    body: "We treat the patent specification as a literary form. Claims are composed, revised, and read aloud — because the strength of a right is, ultimately, the strength of its language.",
    image: panel1,
  },
  {
    year: "Stewardship",
    title: "Portfolios as long horizons.",
    body: "An IP portfolio outlives the team that built it. We design ours to be inherited — documented, taxonomised, and reviewable by any successor counsel without a single missing thread.",
    image: panel2,
  },
  {
    year: "Today",
    title: "A boutique, by design.",
    body: "We deliberately remain small. Each year, we accept only as many engagements as we can personally counsel. The result is a practice that reads less like a firm and more like a chamber.",
    image: panel3,
  },
];

function AboutHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const x = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const y = useSpring(mouseY, { damping: 25, stiffness: 120 });

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] pt-20 cursor-crosshair"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 60%)",
        }}
      />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-[25%] left-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-[70%] left-[30%] w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
          animate={{ x: ["200%", "-100%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[50vw] h-[50vw] border border-white/5 rounded-full"
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
          About Avimukta
        </p>

        <h1 className="text-5xl md:text-7xl font-serif leading-[1.05]">
          Unforsaken. Unbound.
        </h1>

        <p className="mt-6 text-[#ECE8DF]/70 max-w-2xl mx-auto">
          More than a name, it is the principle that defines our practice. At Avimukta, every idea entrusted to us is treated with enduring commitment and responsibility. We ensure that your intellectual work is never left unprotected, never overlooked, and never abandoned at any stage of its journey.
          From concept to protection and beyond, we stand with you, preserving the integrity, value, and future of your innovation with unwavering dedication.


        </p>
      </div>
    </section>
  );
}
function LoopColumn({ items }: { items: any[] }) {
  const looped = [...items, ...items];

  return (
    <div className="h-[420px] overflow-hidden border border-[#0D2342]/10 bg-white/30 backdrop-blur-sm relative">

      {/* fade top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />

      {/* fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />

      {/* TRACK */}
      <div
        className="flex flex-col"
        style={{
          animation: "scrollLoop 14s linear infinite",
          willChange: "transform",
        }}
      >
        {looped.map((item, i) => (
          <div className="px-8 py-8 border-b border-[#0D2342]/5 shrink-0" key={i}>
            <h3 className="font-serif text-xl text-[#0B1B33] font-medium">              {item.title}
            </h3>
            <p className="text-sm text-[#0D2342]/85 mt-2 leading-relaxed">              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
function WhoWeServe() {
  const items = [
    {
      title: "Startups",
      desc: "Protecting core innovation. Structuring IP from day one. Built for scale and valuation.",
    },
    {
      title: "Research & Academia",
      desc: "From discovery to protection to commercialization—across disciplines.",
    },
    {
      title: "MSMEs & Manufacturing",
      desc: "Securing processes, products, and brands at every stage of growth.",
    },
    {
      title: "Independent Inventors",
      desc: "Expert guidance. Clear direction. From idea to market.",
    },
    {
      title: "Corporates",
      desc: "Portfolio management, global filings, and strategic IP at scale.",
    },
    {
      title: "International Clients",
      desc: "India entry, prosecution, and protection: executed with precision.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 border-t border-[#0D2342]/10 overflow-hidden">
      <div className="container relative z-10">

        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* LEFT */}
          <div className="md:col-span-4">

            {/* MATCHING OUR VALUES STYLE */}
            <p className="text-2xl md:text-4xl uppercase tracking-[0.25em] text-[#0D2342] mb-6 font-semibold">
              Who we serve
            </p>

            <p className="mt-6 text-[#0B1B33]/85 text-base md:text-lg leading-relaxed max-w-md">
              Built for those who build seriously.
            </p>

          </div>

          {/* RIGHT */}
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
            <LoopColumn items={items.slice(0, 3)} />
            <LoopColumn items={items.slice(3, 6)} />
          </div>

        </div>
      </div>
    </section>
  );
}
function AboutPromise() {
  const points = [
    {
      title: "Specialists, not generalists",
      body: "Every mandate is led by domain experts — engineering, biotech, pharma, software, manufacturing etc — ensuring depth where it matters.",
    },
    {
      title: "Complete capability",
      body: "Patents, trademarks, copyrights, designs, contracts, licensing, PCT filings, and strategy — seamlessly delivered under one roof.",
    },
    {
      title: "Global perspective",
      body: "Advising Indian clients worldwide and international clients in India, aligned with both domestic law and global frameworks.",
    },
    {
      title: "Structured precision",
      body: "Defined scope. Clear timelines. Disciplined execution. Every engagement, transparent by design.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative container py-24 md:py-32">

      <div className="grid md:grid-cols-12 gap-14">

        {/* LEFT STICKY ANCHOR */}
        <div className="md:col-span-4 md:sticky md:top-32 h-fit">

          <p className="text-2xl md:text-4xl uppercase tracking-[0.25em] text-[#0D2342] mb-6 font-semibold">
            What sets us apart
          </p>

          <div className="w-14 h-[1px] bg-[#D4AF37]" />

          <p className="mt-6 text-[#0D2342]/85 text-base md:text-lg leading-relaxed max-w-xs">
            Not a list of services — a structured philosophy of practice.
          </p>

        </div>

        {/* RIGHT FLOW */}
        <div className="md:col-span-8">

          {points.map((p, i) => (
            <motion.div
              key={i}
              onViewportEnter={() => setActive(i)}
              initial={{ opacity: 0.35 }}
              animate={{
                opacity: active === i ? 1 : 0.35,
                x: active === i ? 0 : 6,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ amount: 0.6 }}
              className="py-10"
            >

              <h3 className="font-serif text-2xl md:text-4xl text-[#0D2342] leading-tight">
                {p.title}
              </h3>

              <p className="mt-4 text-[#0D2342]/85 text-base md:text-lg leading-relaxed max-w-2xl">
                {p.body}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
function RotatingValues() {
  const values = [
    {
      title: "Clarity",
      body: "Defined scope. Clear timelines. No surprises.",
    },
    {
      title: "Expertise",
      body: "Work handled by those who understand the technology.",
    },
    {
      title: "Integrity",
      body: "Honest advice. No weak filings. No unnecessary work.",
    },
    {
      title: "Communication",
      body: "Complex matters, made clear. You stay in control.",
    },
    {
      title: "Continuity",
      body: "Beyond filing. With you for the life of your IP.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % values.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentItem = values[index];

  return (
    <div className="relative h-[220px] md:h-[280px] w-full">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-serif text-4xl md:text-6xl text-[#0D2342] mb-6">
            {currentItem.title}
          </h3>
          <p className="text-lg md:text-2xl text-[#0D2342]/70 max-w-2xl leading-relaxed">
            {currentItem.body}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const About = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);

      const maxX = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const els = trackRef.current?.querySelectorAll<HTMLElement>(".panel");
    if (!els) return;

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView =
        rect.left < window.innerWidth * 0.85 &&
        rect.right > window.innerWidth * 0.15;

      el.classList.toggle("in-view", inView);
    });
  }, [progress]);

  return (
    <SiteLayout>

      <AboutHero />

      <div className="hairline container" />


      {/* 🔥 OUR VALUES */}
      <section className="relative pt-16 pb-2 md:pt-20 md:pb-4 border-t border-[#0D2342]/10 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">

            {/* Header / Left Side */}
            <div className="md:col-span-6 lg:col-span-5">
              <p className="text-2xl md:text-4xl uppercase tracking-[0.25em] text-[#0D2342] mb-6 font-semibold">
                Our Values
              </p>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.2] text-[#0D2342] max-w-2xl">
                The standards we do not negotiate.
              </h2>
            </div>

            {/* Rotating Content / Right Side */}
            <div className="md:col-span-6 lg:col-span-7">
              <RotatingValues />
            </div>

          </div>
        </div>
      </section>

      {/* HORIZONTAL SLIDER */}
      <section
        ref={sectionRef}
        className="relative -mt-20 md:-mt-28"
        style={{ height: `${panels.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-background">
          <div
            ref={trackRef}
            className="flex h-full will-change-transform transition-transform duration-[900ms] ease-rolex"
            style={{ width: `${panels.length * 100}vw` }}
          >
            {panels.map((p) => (
              <div key={p.year} className="panel relative shrink-0 h-full w-screen flex items-center">
                <div className="container grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-6">
                    <img src={p.image} className="w-full aspect-[4/3] object-cover panel-img" />
                  </div>
                  <div className="md:col-span-6">
                    <div className="text-brass font-serif text-sm tracking-[0.3em] panel-text-1">{p.year}</div>
                    <h2 className="mt-6 font-serif text-3xl md:text-5xl panel-text-2">{p.title}</h2>
                    <p className="mt-6 text-[#0D2342]/70 panel-text-3 leading-relaxed">                            {p.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-px bg-border overflow-hidden">
            <div className="h-full bg-foreground" style={{ width: `${progress * 100}%` }} />
          </div>
        </div>
      </section>

      <WhoWeServe />
      <AboutPromise />

    </SiteLayout>
  );
};

export default About;