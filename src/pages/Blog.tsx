import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

export const posts = [
  {
    slug: "drafting-as-a-discipline",
    title: "Drafting as a discipline: why the patent specification is a literary form",
    excerpt: "A claim is read more often by adversaries than by examiners. Compose accordingly.",
    image: blog1,
    date: "April 2026",
    read: "8 min",
    category: "Patents",
  },
  {
    slug: "the-quiet-trademark",
    title: "The quiet trademark: brand protection that begins before the launch",
    excerpt: "Clearance done early is clearance done once. A short guide for founders.",
    image: blog2,
    date: "March 2026",
    read: "6 min",
    category: "Trademarks",
  },
  {
    slug: "litigation-as-last-recourse",
    title: "Litigation as last recourse: the case for considered restraint",
    excerpt: "The most successful enforcement strategies rarely see a courtroom. Here is why.",
    image: blog3,
    date: "February 2026",
    read: "10 min",
    category: "Disputes",
  },
  {
    slug: "portfolio-as-inheritance",
    title: "Portfolios as inheritance: building IP that outlives the team that built it",
    excerpt: "Documentation is the rarest virtue in IP management — and the most valuable.",
    image: blog1,
    date: "January 2026",
    read: "7 min",
    category: "Strategy",
  },
  {
    slug: "freedom-to-operate",
    title: "Freedom-to-operate, properly understood",
    excerpt: "The opinion is only as useful as the questions it dared to ask.",
    image: blog2,
    date: "December 2025",
    read: "9 min",
    category: "Patents",
  },
  {
    slug: "global-brand-clearance",
    title: "Global brand clearance: the Madrid system, used well",
    excerpt: "Filing widely is easy. Filing wisely is the difference.",
    image: blog3,
    date: "November 2025",
    read: "5 min",
    category: "Trademarks",
  },
];

const Blog = () => {
  return (
    <SiteLayout>
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] pt-20">
        {/* ambient details */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div className="absolute top-[70%] left-[30%] w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] border border-white/5 rounded-full" />
        </div>

        <div className="container relative z-10 text-center">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#D4AF37] mb-8">
            The Journal
          </p>

          <h1 className="font-serif text-5xl md:text-[8rem] leading-[0.9] tracking-tight">
            <span className="block">Considered writing.</span>
            <span className="block italic text-[#5E748E] mt-4">
              Enduring ideas.
            </span>
          </h1>

          <p className="mt-12 text-lg md:text-2xl max-w-3xl mx-auto text-[#ECE8DF]/70 font-light leading-relaxed">
            Quarterly essays on patents, trademarks, disputes, and the architecture of intellectual property.
          </p>
        </div>
      </section>

      <div className="hairline container" />

      {/* SPLIT SCROLL LAYOUT */}
      <section className="container py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24 items-start relative">

          {/* LEFT SIDE: STICKY VIDEO */}
          <div className="w-full md:w-5/12 lg:w-[45%] md:sticky md:top-0 md:h-screen md:py-12 flex flex-col justify-center">
            <div className="w-full h-[60vh] md:h-full relative overflow-hidden bg-secondary reveal">
              <video

                src="/videos/blog.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: SCROLLING POSTS */}
          <div className="w-full md:w-7/12 lg:w-[55%] flex flex-col gap-20 md:gap-32 md:py-12">
            {posts.map((p) => (
              <Link
                to={`/blog/${p.slug}`}
                key={p.slug}
                className="reveal group block lift"
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[1400ms] ease-rolex group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="text-brass">{p.category}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-snug transition-opacity duration-500 group-hover:opacity-75 balance">
                  {p.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <span className="mt-8 inline-block nav-link text-xs uppercase tracking-[0.2em]">
                  Read essay
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </SiteLayout>
  );
};

export default Blog;