import SiteLayout from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import about from "@/assets/about.jpg";
import panel1 from "@/assets/panel1.jpg";
import panel2 from "@/assets/panel2.jpg";
import panel3 from "@/assets/panel3.jpg";

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

const About = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Vertical scroll → horizontal translate. Smooth, no snap.
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

  // Reveal panels as they enter horizontal viewport
  useEffect(() => {
    const els = trackRef.current?.querySelectorAll<HTMLElement>(".panel");
    if (!els) return;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.left < window.innerWidth * 0.85 && rect.right > window.innerWidth * 0.15;
      el.classList.toggle("in-view", inView);
    });
  }, [progress]);

  return (
    <SiteLayout>
      {/* Intro */}
      <section className="container pt-40 pb-24">
        <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">About Avimukta</p>
        <h1 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance max-w-4xl">
          A chamber, not a firm.
        </h1>
        <p className="reveal mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          What follows is a quiet account of how we work, why we remain small, and the convictions
          that have shaped every brief we have signed.
        </p>
      </section>

      <div className="hairline container" />

      {/* Horizontal architecture-slider */}
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: `${panels.length * 100}vh` }}
        aria-label="Our story"
      >
        <div className="sticky top-0 h-screen overflow-hidden bg-background">
          <div
            ref={trackRef}
            className="flex h-full will-change-transform transition-transform duration-[900ms] ease-rolex"
            style={{ width: `${panels.length * 100}vw` }}
          >
            {panels.map((p) => (
              <div
                key={p.year}
                className="panel relative shrink-0 h-full w-screen flex items-center"
              >
                <div className="container grid md:grid-cols-12 gap-10 items-center">
                  <div className="md:col-span-6">
                    <div className="overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        width={1400}
                        height={1000}
                        className="w-full aspect-[4/3] object-cover panel-img transition-[opacity,transform] duration-[1100ms] ease-rolex"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="text-brass font-serif text-sm tracking-[0.3em] panel-text-1">
                      {p.year}
                    </div>
                    <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-tight balance panel-text-2">
                      {p.title}
                    </h2>
                    <p className="mt-6 text-muted-foreground leading-relaxed max-w-md panel-text-3">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress hairline */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-px bg-border overflow-hidden">
            <div
              className="h-full bg-foreground transition-[width] duration-700 ease-rolex"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="container py-32 md:py-44">
        <div className="grid md:grid-cols-12 gap-10">
          <p className="reveal md:col-span-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Our promise
          </p>
          <div className="md:col-span-8">
            <h2 className="reveal font-serif text-3xl md:text-5xl leading-tight balance">
              We answer every letter ourselves. We always will.
            </h2>
          </div>
        </div>
      </section>

      <style>{`
        .panel .panel-img { opacity: 0; transform: translateY(12px); }
        .panel .panel-text-1, .panel .panel-text-2, .panel .panel-text-3 { opacity: 0; transform: translateY(10px); transition: opacity 1100ms cubic-bezier(0.22,0.61,0.36,1), transform 1100ms cubic-bezier(0.22,0.61,0.36,1); }
        .panel .panel-text-2 { transition-delay: 120ms; }
        .panel .panel-text-3 { transition-delay: 240ms; }
        .panel.in-view .panel-img { opacity: 1; transform: translateY(0); transition: opacity 1100ms cubic-bezier(0.22,0.61,0.36,1), transform 1100ms cubic-bezier(0.22,0.61,0.36,1); }
        .panel.in-view .panel-text-1, .panel.in-view .panel-text-2, .panel.in-view .panel-text-3 { opacity: 1; transform: translateY(0); }
      `}</style>
    </SiteLayout>
  );
};

export default About;
