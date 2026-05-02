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
      <section className="container pt-40 pb-16">
        <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">The Journal</p>
        <h1 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.05] balance max-w-4xl">
          Considered writing on intellectual property.
        </h1>
        <p className="reveal mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Quarterly essays from our partners on patents, brand stewardship, disputes, and the
          long view of intangible assets.
        </p>
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
