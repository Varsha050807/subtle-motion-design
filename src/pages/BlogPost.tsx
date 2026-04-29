import SiteLayout from "@/components/SiteLayout";
import { Link, useParams } from "react-router-dom";
import { posts } from "./Blog";

const paragraphs = [
  "There is a temptation, particularly among newer practitioners, to regard a patent specification as a technical artefact — a document whose worth is measured in the precision of its diagrams and the breadth of its claims. We resist this view.",
  "A specification is, before anything else, a piece of writing. It is read by examiners, by opposing counsel, by judges who may have no specialised training in the underlying art. The clarity of its prose is therefore not an aesthetic concern but a strategic one.",
  "We compose specifications the way one composes a long letter to an attentive but sceptical reader. Every sentence is asked to justify itself. Adverbs are interrogated. The temptation to over-claim — that besetting weakness of the inexperienced — is held in check by a slow and unhurried review process.",
  "What follows is not a method so much as a temperament. We list it here in case it proves useful.",
  "First, draft the background as though the reader has never encountered the field. The discipline of explanation reveals what is genuinely novel. Second, compose the claims aloud. A claim that cannot be read in a single breath is a claim that will be misread under examination. Third, set the document aside for at least a week before the final review. Distance is the cheapest editor.",
  "None of this is original. It is, in fact, the inherited practice of every careful drafter we have known. We record it here only because the inheritance is in danger of being forgotten.",
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug) ?? posts[0];

  return (
    <SiteLayout>
      <article>
        <header className="container pt-40 pb-12 max-w-3xl">
          <Link to="/blog" className="reveal nav-link text-xs uppercase tracking-[0.25em] text-muted-foreground">
            ← The Journal
          </Link>
          <div className="reveal mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-brass">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.read}</span>
          </div>
          <h1 className="reveal mt-6 font-serif text-4xl md:text-6xl leading-[1.08] balance">
            {post.title}
          </h1>
          <p className="reveal mt-8 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
        </header>

        <div className="reveal container max-w-5xl">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        <div className="container max-w-2xl py-20 md:py-28 space-y-8 font-serif text-xl md:text-[22px] leading-[1.65] text-foreground/90">
          {paragraphs.map((p, i) => (
            <p key={i} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              {p}
            </p>
          ))}
        </div>

        <div className="hairline container" />

        <section className="container py-24">
          <p className="reveal text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Continue reading</p>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            {posts.filter((p) => p.slug !== post.slug).slice(0, 2).map((p, i) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="reveal group block lift" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1200} height={900}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[1400ms] ease-rolex group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug group-hover:opacity-75 transition-opacity duration-500">{p.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
};

export default BlogPost;
