import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

const Home = () => {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Marble pillar and brass scales of justice"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />
        <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32 text-ivory">
          <div className="max-w-3xl">
            <p
              className="text-[11px] uppercase tracking-[0.35em] text-ivory/70 animate-fade-in-slow"
              style={{ animationDelay: "200ms" }}
            >
              Avimukta — Intellectual Property
            </p>
            <h1
              className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance animate-fade-in-slow"
              style={{ animationDelay: "600ms" }}
            >
              The quiet craft of protecting ideas.
            </h1>
            <p
              className="mt-8 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed animate-fade-in-slow"
              style={{ animationDelay: "1100ms" }}
            >
              For two decades, we have counselled inventors, founders and global houses on the
              stewardship of their most valuable intangible assets.
            </p>
            <div
              className="mt-12 flex items-center gap-8 animate-fade-in-slow"
              style={{ animationDelay: "1700ms" }}
            >
              <Link
                to="/services"
                className="inline-flex items-center text-xs uppercase tracking-[0.25em] border-b border-ivory/60 pb-1 transition-opacity duration-700 hover:opacity-70"
              >
                Discover our practice
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-ivory/60 transition-opacity duration-700 hover:opacity-100"
              >
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/50 animate-fade-in-slow"
          style={{ animationDelay: "2200ms" }}
        >
          Scroll
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container py-32 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <p className="reveal md:col-span-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            01 — A House of Counsel
          </p>
          <div className="md:col-span-8">
            <h2 className="reveal font-serif text-3xl md:text-5xl leading-tight balance">
              Few firms have the patience to listen. Fewer still, the discipline to translate that
              listening into enduring protection.
            </h2>
            <p className="reveal mt-8 max-w-2xl text-muted-foreground leading-relaxed">
              Avimukta is a boutique intellectual property practice. We work with a deliberately
              limited roster of clients so that every matter receives the attention of a senior
              partner from first conversation to final filing.
            </p>
          </div>
        </div>
      </section>

      <div className="hairline container" />

      {/* PRACTICE PILLARS */}
      <section className="container py-32 md:py-40">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {[
            { n: "I", t: "Patents", d: "Specifications, prosecution, freedom-to-operate, portfolio strategy." },
            { n: "II", t: "Trademarks", d: "Brand clearance, registration, oppositions, global filing programs." },
            { n: "III", t: "Disputes", d: "Pre-litigation strategy, infringement actions, mediation, appeals." },
          ].map((p, i) => (
            <div
              key={p.t}
              className="reveal bg-background p-10 md:p-12 transition-colors duration-700 hover:bg-secondary/50"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-serif text-brass text-sm tracking-widest">{p.n}</div>
              <h3 className="mt-6 font-serif text-3xl">{p.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <Link to="/services" className="mt-8 inline-block nav-link text-xs uppercase tracking-[0.2em]">
                Read more
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-gradient-ink text-ivory py-32 md:py-44">
        <div className="container grid md:grid-cols-12 gap-12 items-center">
          <div className="reveal reveal-left md:col-span-6">
            <img
              src={about}
              alt="Leather-bound ledger, fountain pen and brass magnifier"
              width={1600}
              height={1100}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <p className="reveal text-[11px] uppercase tracking-[0.3em] text-ivory/50">02 — Our Philosophy</p>
            <h2 className="reveal mt-6 font-serif text-3xl md:text-5xl leading-tight balance">
              Restraint is the rarest form of expertise.
            </h2>
            <p className="reveal mt-8 text-ivory/70 leading-relaxed max-w-xl">
              We do not pursue volume. We pursue precision. Each filing is reviewed personally;
              each strategy debated quietly among partners before it ever reaches a registry.
            </p>
            <Link
              to="/about"
              className="reveal mt-10 inline-flex items-center text-xs uppercase tracking-[0.25em] border-b border-ivory/40 pb-1 transition-opacity duration-700 hover:opacity-70"
            >
              The Avimukta Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-32 md:py-44 text-center">
        <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">An invitation</p>
        <h2 className="reveal mt-6 font-serif text-4xl md:text-6xl leading-tight balance max-w-3xl mx-auto">
          Begin a conversation about what you have built.
        </h2>
        <Link
          to="/contact"
          className="reveal mt-12 inline-flex items-center text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 transition-opacity duration-700 hover:opacity-70"
        >
          Request a private consultation
        </Link>
      </section>
    </SiteLayout>
  );
};

export default Home;
