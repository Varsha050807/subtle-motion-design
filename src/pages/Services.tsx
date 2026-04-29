import SiteLayout from "@/components/SiteLayout";
import panel1 from "@/assets/panel1.jpg";
import panel2 from "@/assets/panel2.jpg";
import panel3 from "@/assets/panel3.jpg";

const services = [
  {
    n: "01",
    title: "Patents",
    image: panel1,
    body: "From specification drafting to global prosecution, we shepherd inventions through every jurisdiction. Our scientifically trained associates partner with examiners, not against them.",
    bullets: ["Drafting & filing", "Prosecution & appeals", "Freedom-to-operate opinions", "Portfolio management"],
  },
  {
    n: "02",
    title: "Trademarks & Brand",
    image: panel2,
    body: "A trademark is the visible face of a reputation. We protect that face with international clearance, registration programs, and oppositions handled with discretion.",
    bullets: ["Clearance & search", "National & Madrid filings", "Oppositions & rectifications", "Brand audits"],
  },
  {
    n: "03",
    title: "Litigation & Enforcement",
    image: panel3,
    body: "When matters reach a courtroom, our litigation desk brings two decades of contested experience — and the temperament to settle when settlement serves the client.",
    bullets: ["Infringement suits", "Anti-counterfeiting", "Customs enforcement", "Mediation & arbitration"],
  },
  {
    n: "04",
    title: "Strategic Advisory",
    image: panel1,
    body: "For founders, R&D leaders and licensing teams: discreet counsel on IP valuation, transactions, due diligence and long-horizon portfolio planning.",
    bullets: ["IP due diligence", "Licensing & assignments", "Valuation support", "Board-level advisory"],
  },
];

const Services = () => {
  return (
    <SiteLayout>
      <section className="container pt-40 pb-24">
        <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Practice</p>
        <h1 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance max-w-4xl">
          Counsel, in four quiet disciplines.
        </h1>
        <p className="reveal mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Each engagement is led by a partner. Each strategy is composed for the client — never a template,
          never a checklist.
        </p>
      </section>

      <div className="hairline container" />

      <section className="container py-24 md:py-32 space-y-32 md:space-y-44">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={s.title}
              className="grid md:grid-cols-12 gap-10 md:gap-16 items-center"
            >
              <div
                className={`reveal ${reverse ? "reveal-right md:order-2 md:col-span-7" : "reveal-left md:col-span-7"}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                <div className="reveal text-brass font-serif text-sm tracking-[0.3em]">{s.n}</div>
                <h2 className="reveal mt-4 font-serif text-3xl md:text-5xl leading-tight">{s.title}</h2>
                <p className="reveal mt-6 text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-8 space-y-3">
                  {s.bullets.map((b, j) => (
                    <li
                      key={b}
                      className="reveal flex items-baseline gap-4 text-sm border-b border-border pb-3 lift hover:pl-2"
                      style={{ transitionDelay: `${j * 80}ms` }}
                    >
                      <span className="text-brass text-xs">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </SiteLayout>
  );
};

export default Services;
