// BlogPost.tsx
// Place at: src/pages/BlogPost.tsx

import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";
import { posts } from "@/pages/posts";

// ─── Easing ───────────────────────────────────────────────────────────────────
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

// ─── Reading progress bar ─────────────────────────────────────────────────────
const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/80 via-[#D4AF37] to-[#D4AF37]/80 z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

// ─── Back button ──────────────────────────────────────────────────────────────
const BackButton = () => (
  <Link
    to="/blog"
    className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-[#5E748E] hover:text-[#D4AF37] transition-colors duration-300 group"
  >
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      className="transition-transform duration-300 group-hover:-translate-x-1"
    >
      <path d="M19 5H1M6 1L1 5l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    IP Insights
  </Link>
);

// ─── Related post card ────────────────────────────────────────────────────────
const RelatedCard = ({ post, index }: { post: (typeof posts)[number]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_EXPO }}
  >
    <Link
      to={`/blog/${post.slug}`}
      className="group flex gap-5 items-start py-5 border-b border-[#0D2342]/10 hover:border-[#D4AF37]/30 transition-colors duration-500"
    >
      <div className="overflow-hidden rounded-lg shrink-0 w-20 h-14">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#D4AF37] mb-1.5">{post.category}</p>
        <h4 className="font-serif text-sm leading-snug text-[#3D5166] group-hover:text-[#0D2342] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h4>
      </div>
    </Link>
  </motion.div>
);

// ─── Ambient decoration ───────────────────────────────────────────────────────
const AmbientBlob = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
    animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />
);

// ─── Share button ─────────────────────────────────────────────────────────────
const ShareButton = ({ title }: { title: string }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: window.location.href });
      } catch {
        // dismissed
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-[#5E748E] hover:text-[#D4AF37] transition-colors duration-300 border border-[#0D2342]/15 hover:border-[#D4AF37]/40 px-4 py-2.5 rounded-full"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="2" cy="6" r="1.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="2" r="1.5" stroke="currentColor" strokeWidth="1" />
        <circle cx="10" cy="10" r="1.5" stroke="currentColor" strokeWidth="1" />
        <path d="M3.5 5.2L8.5 2.8M3.5 6.8L8.5 9.2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
      Share
    </button>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const imageRef = useRef<HTMLDivElement>(null);

  const post = posts.find((p) => p.slug === slug);
  const related = posts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3);
  const moreEssays = posts.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length);
  const relatedPosts = [...related, ...moreEssays].slice(0, 4);

  // Subtle parallax on hero image
  const { scrollYProgress: imageScrollProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(imageScrollProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <SiteLayout>
        <div className="min-h-screen bg-[#F5F2EC] flex items-center justify-center text-center px-4">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6">404</p>
            <h1 className="font-serif text-4xl text-[#0D2342] mb-6">Essay not found</h1>
            <Link to="/blog" className="text-sm text-[#5E748E] hover:text-[#D4AF37] transition-colors">
              Return to IP Insights
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <ReadingProgress />

      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ══════════════════════════════════════════════════════
              HERO
          ══════════════════════════════════════════════════════ */}
          <section className="relative bg-[#F5F2EC] overflow-hidden pt-20">
            <AmbientBlob className="w-[500px] h-[500px] bg-[#D4AF37]/10 top-0 left-[-10%]" />
            <AmbientBlob className="w-[300px] h-[300px] bg-[#27445D]/8 bottom-0 right-[5%]" />

            <div className="container max-w-4xl mx-auto px-4 md:px-8 relative z-10 pt-12 pb-16">
              {/* Back nav */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: EASE_EXPO }}
              >
                <BackButton />
              </motion.div>

              {/* Category + meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: EASE_EXPO }}
                className="flex flex-wrap items-center gap-3 mt-12 mb-7 text-[10px] tracking-[0.22em] uppercase"
              >
                <span className="text-[#D4AF37]">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
                <time className="text-[#5E748E]">{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-[#D4AF37]/50" />
                <span className="text-[#5E748E]">{post.read}</span>
              </motion.div>

              {/* Title */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={shouldReduceMotion ? false : { y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.25, ease: EASE_EXPO }}
                  className="font-serif text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.15] tracking-tight text-[#0D2342]"
                >
                  {post.title}
                </motion.h1>
              </div>

              {/* Excerpt */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.45, ease: EASE_EXPO }}
                className="mt-6 text-lg leading-relaxed text-[#3D5166] font-light max-w-2xl"
              >
                {post.excerpt}
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6, ease: EASE_EXPO }}
                style={{ transformOrigin: "left center" }}
                className="mt-10 h-px bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent"
              />
            </div>

            {/* Feature image */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE_EXPO }}
              className="relative overflow-hidden mx-auto max-w-6xl px-4 md:px-8"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[21/9]">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  style={shouldReduceMotion ? undefined : { y: imageY }}
                  className="w-full h-full object-cover scale-[1.1]"
                />
                {/* Image gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EC] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2EC] via-transparent to-transparent opacity-10" />
              </div>
            </motion.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              ARTICLE BODY
          ══════════════════════════════════════════════════════ */}
          <section className="relative bg-[#F5F2EC]">
            {/* Subtle side gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden lg:block ml-[max(2rem,calc((100vw-56rem)/2-3rem))]" />

            <div className="container max-w-3xl mx-auto px-4 md:px-8 py-20 md:py-28">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 1, ease: EASE_EXPO }}

                // ─── Prose styles ─────────────────────────────────────────────
                className={`
                  prose-article
                  [&_.lead]:text-xl [&_.lead]:leading-relaxed [&_.lead]:text-[#3D5166] [&_.lead]:font-light [&_.lead]:mb-10 [&_.lead]:block
                  [&_p]:text-[#3D5166] [&_p]:leading-[1.85] [&_p]:font-light [&_p]:mb-6
                  [&_h2]:font-serif [&_h2]:text-[1.8rem] [&_h2]:leading-[1.25] [&_h2]:text-[#0D2342] [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:tracking-tight
                  [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-[#0D2342] [&_h3]:mt-10 [&_h3]:mb-4
                  [&_h2]:after:block [&_h2]:after:w-8 [&_h2]:after:h-px [&_h2]:after:bg-[#D4AF37]/60 [&_h2]:after:mt-3
                  [&_blockquote]:border-l-2 [&_blockquote]:border-[#D4AF37]/60 [&_blockquote]:pl-6 [&_blockquote]:py-1 [&_blockquote]:my-10 [&_blockquote]:bg-[#EDE9E0]/50 [&_blockquote]:rounded-r-lg [&_blockquote]:pr-4
                  [&_blockquote_p]:text-[#27445D] [&_blockquote_p]:text-lg [&_blockquote_p]:italic
                  [&_strong]:text-[#0D2342] [&_strong]:font-semibold
                  [&_ul]:list-none [&_ul]:pl-0 [&_ul_li]:relative [&_ul_li]:pl-6 [&_ul_li]:text-[#3D5166] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-[0.65em] [&_ul_li]:before:w-2 [&_ul_li]:before:h-px [&_ul_li]:before:bg-[#D4AF37]/70
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol_li]:text-[#3D5166] [&_ol_li]:leading-relaxed [&_ol_li]:mb-3
                  selection:bg-[#D4AF37]/25 selection:text-[#0D2342]
                  [&_p]:text-[#3D5166] [&_p]:leading-[1.85] [&_p]:font-light [&_p]:mb-6 [&_p]:text-justify
                `}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Actions row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE_EXPO }}
                className="flex flex-wrap items-center gap-4 mt-16 pt-10 border-t border-[#0D2342]/10"
              >
                <ShareButton title={post.title} />

                {post.external && (
                  <a
                    href={post.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-[#5E748E] hover:text-[#D4AF37] transition-colors duration-300 border border-[#0D2342]/15 hover:border-[#D4AF37]/40 px-5 py-2.5 rounded-full group"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      <path d="M8 1h3m0 0v3M11 1L6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Read on LinkedIn
                    <span className="ml-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block">↗</span>
                  </a>
                )}
              </motion.div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              RELATED ESSAYS
          ══════════════════════════════════════════════════════ */}
          {relatedPosts.length > 0 && (
            <section className="bg-[#EDE9E0] border-t border-[#0D2342]/08">
              <div className="container max-w-3xl mx-auto px-4 md:px-8 py-20">
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: EASE_EXPO }}
                  className="flex items-center gap-4 mb-10"
                >
                  <span className="w-7 h-px bg-[#D4AF37]/60" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                    Continue Reading
                  </span>
                </motion.div>

                {/* Related list */}
                <div>
                  {relatedPosts.map((related, i) => (
                    <RelatedCard key={related.slug} post={related} index={i} />
                  ))}
                </div>

                {/* Back to journal */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE_EXPO }}
                  className="mt-12 text-center"
                >
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-[#5E748E] hover:text-[#D4AF37] transition-colors duration-300 group"
                  >
                    <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                    View all essays
                    <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
                  </Link>
                </motion.div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  );
};

export default BlogPost;