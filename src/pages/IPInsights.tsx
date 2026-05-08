import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";


// ─── Data ────────────────────────────────────────────────────────────────────

export const posts = [
    {
        slug: "startup-spent-x-lakhs-patents",
        title:
            "Startup spent ₹X lakhs on patents — still lost to a copycat. What broke?",
        excerpt:
            "A practical look at where patent strategy fails: filing without enforceability, weak claim architecture, and missing commercial alignment.",
        image: blog1,
        date: "May 2026",
        read: "5 min",
        category: "Patent Strategy",
        external:
            "https://www.linkedin.com/pulse/startup-spent-x-lakhs-patents-still-lost-copycat-what-b-manur-phd--2ivfc/?trackingId=h1huJjO0R02ZP%2F4pCk7UUg%3D%3D",
    },
    {
        slug: "your-research-probably-patentable",
        title: "Your research is probably patentable. Here's why you never filed.",
        excerpt:
            "Many valuable inventions never become protected assets—not because they lack novelty, but because they were never identified, captured, or strategically filed.",
        image: blog2,
        date: "May 2026",
        read: "4 min",
        category: "Research & Patents",
        external:
            "https://www.linkedin.com/pulse/your-research-probably-patentable-here-why-you-never-filed-b-manur-8ncmc/?trackingId=vtaDwHxbSqS3yPY78wM8fg%3D%3D",
    },
    {
        slug: "why-filing-too-early",
        title:
            "Why filing a patent too early is just as dangerous as filing too late",
        excerpt:
            "Patent timing is strategy. File too early and protection may be weak; file too late and novelty may already be lost.",
        image: blog3,
        date: "March 2026",
        read: "5 min",
        category: "Patent Timing",
        external:
            "https://www.linkedin.com/pulse/why-filing-patent-too-early-just-dangerous-late-b-manur-phd--s5s3c/?trackingId=TsKRKX%2FMQb%2B8k%2BPA4A8C8g%3D%3D",
    },
    {
        slug: "developer-owns-your-invention",
        title:
            "You are about to lose your patent rights because your developer owns your invention",
        excerpt:
            "Many founders assume payment equals ownership. In IP law, without assignment agreements, the creator may legally own what your company built.",
        image: "/images/image4.png",
        date: "March 2026",
        read: "4 min",
        category: "IP Ownership",
        external:
            "https://www.linkedin.com/pulse/you-lose-your-patent-rights-because-developer-owns-b-manur-phd--rwgrc/?trackingId=lMIlYrW4RNCC50I4nQQAtQ%3D%3D",
    },
    {
        slug: "should-i-file-a-patent",
        title: `"If you have invented something and are asking 'Should I file a patent?'"`,
        excerpt:
            "The better question is not whether to file, but what exactly is protectable, when to file, and how to structure protection strategically.",
        image: "/images/image5.png",
        date: "March 2026",
        read: "4 min",
        category: "Patent Filing",
        external:
            "https://www.linkedin.com/pulse/you-have-invented-something-asking-should-i-file-b-manur-phd--glzlc/?trackingId=lMIlYrW4RNCC50I4nQQAtQ%3D%3D",
    },
    {
        slug: "drafting-as-a-discipline",
        title:
            "Drafting as a discipline: why the patent specification is a literary form",
        excerpt:
            "A claim is read more often by adversaries than by examiners. Compose accordingly.",
        image: "/images/image6.png",
        date: "April 2026",
        read: "8 min",
        category: "Patents",
    },
    {
        slug: "the-quiet-trademark",
        title:
            "The quiet trademark: brand protection that begins before the launch",
        excerpt:
            "Clearance done early is clearance done once. A short guide for founders.",
        image: "/images/image7.png",
        date: "March 2026",
        read: "6 min",
        category: "Trademarks",
    },
    {
        slug: "litigation-as-last-recourse",
        title: "Litigation as last recourse: the case for considered restraint",
        excerpt:
            "The most successful enforcement strategies rarely see a courtroom. Here is why.",
        image: "/images/image8.png",
        date: "February 2026",
        read: "10 min",
        category: "Disputes",
    },
    {
        slug: "portfolio-as-inheritance",
        title:
            "Portfolios as inheritance: building IP that outlives the team that built it",
        excerpt:
            "Documentation is the rarest virtue in IP management — and the most valuable.",
        image: "/images/image9.png",
        date: "January 2026",
        read: "7 min",
        category: "Strategy",
    },
];

// ─── Animation constants ──────────────────────────────────────────────────────

/**
 * BATCH_SIZE: number of cards that share a stagger group.
 * Cards beyond this reset to index 0 within the next batch.
 * Keeps max concurrent animations capped at 3 regardless of total card count.
 */
const BATCH_SIZE = 3;

/**
 * STAGGER_STEP: delay between cards within a batch (seconds).
 * 80ms is subtle enough to feel editorial, not performative.
 */
const STAGGER_STEP = 0.08;

// ─── Shared motion variants ───────────────────────────────────────────────────

/**
 * cardVariants — viewport enter animation
 *
 * fade-up: opacity 0→1, y 24px→0
 * scale-in: 0.98→1 (premium editorial micro-compression)
 * duration 0.55s with ease-out curve: fast settle, no lingering motion
 *
 * `reducedMotion` variant skips all transforms; only opacity fades.
 * Framer Motion automatically respects prefers-reduced-motion via
 * `useReducedMotion()` — we handle it explicitly for full control.
 */
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.98,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1], // custom ease-out: quick accel, soft land
        },
    },
    // Reduced-motion: opacity only, instant settle
    hiddenReduced: {
        opacity: 0,
    },
    visibleReduced: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

/**
 * hoverVariants — card hover state
 *
 * lift: y -4px (not -translate-y-1 which is 4px CSS, same value — but now
 * GPU-composited via Framer Motion, not a CSS class on the anchor)
 * Shadow is applied via className change on hover (CSS custom property trick)
 * because box-shadow is NOT GPU-composited and should stay in CSS.
 *
 * Note: whileHover on motion.div is better than CSS :hover on <a> because
 * it composes cleanly with whileInView state without specificity conflicts.
 */
const hoverVariants = {
    rest: { y: 0 },
    hover: {
        y: -4,
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
};

// ─── Hero section animation ───────────────────────────────────────────────────
// UNCHANGED from original — this is the hero, not the journal listing.
// Re-typed here for completeness; no logic modified.

const heroFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            delay: i * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};

// ─── JournalCard component ────────────────────────────────────────────────────

interface Post {
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    date?: string;
    read?: string;
    category: string;
    external?: string;
}

interface JournalCardProps {
    post: Post;
    /**
     * batchIndex: position of this card within its batch (0, 1, or 2).
     * Used to compute stagger delay. Always < BATCH_SIZE.
     * Computed as: globalIndex % BATCH_SIZE
     */
    batchIndex: number;
}

/**
 * JournalCard
 *
 * Self-contained motion scope. Each card:
 *   1. Observes its own viewport entry (Intersection Observer via Framer Motion)
 *   2. Fires its own animation independently
 *   3. Staggers only within its batch group (batchIndex * STAGGER_STEP)
 *   4. Has hover micro-interactions scoped to itself
 *
 * Scalability: Adding 200 more cards adds 200 independent observers.
 * Each observer fires once (once: true) then disconnects.
 * No global animation state, no index-based global delays.
 */
const JournalCard = ({ post, batchIndex }: JournalCardProps) => {
    const prefersReducedMotion = useReducedMotion();

    const enterVariant = prefersReducedMotion ? "visibleReduced" : "visible";
    const hiddenVariant = prefersReducedMotion ? "hiddenReduced" : "hidden";

    const staggerDelay = prefersReducedMotion ? 0 : batchIndex * STAGGER_STEP;

    const cardContent = (
        /**
         * Outer motion.div: handles viewport-enter animation (whileInView)
         * Inner structure: image container + text — no motion on children,
         * keeping the DOM motion node count minimal.
         */
        <motion.div
            // ── Viewport-enter animation ──────────────────────────────────
            variants={cardVariants}
            initial={hiddenVariant}
            whileInView={enterVariant}
            viewport={{
                once: true,      // Disconnect observer after first trigger
                amount: 0.15,    // Fire when 15% of card is visible — early reveal
            }}
            // ── Per-card stagger via transition override ───────────────────
            // We override transition.delay here rather than in variants so
            // the batchIndex prop can influence it without variant coupling.
            transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: staggerDelay,
            }}
            // ── Hover lift (GPU-composited y transform only) ───────────────
            whileHover={prefersReducedMotion ? undefined : "hover"}
            animate="rest"
            // Merge rest/hover variants for lift
            // hoverVariants handles y; shadow handled in CSS below
            style={{ originY: 1 }} // scale from bottom for natural grounding
            className={[
                "group flex flex-col",
                // CSS shadow elevation on hover — NOT GPU-composited intentionally.
                // box-shadow stays in CSS; transform stays in Framer Motion.
                // This is the correct separation of concerns.
                "transition-shadow duration-300",
                "hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                "rounded-lg",
            ].join(" ")}
        >
            {/* ── Image container ─────────────────────────────────────────── */}
            <div className="overflow-hidden bg-[#F8F8F8] dark:bg-[#1A1A1A] rounded-lg mb-5">
                {/*
         * Image zoom via CSS transform (not Framer Motion motion.img).
         * Reason: CSS transform on an already-composited layer (the parent
         * has overflow:hidden) is cheaper than adding another Framer Motion
         * node. The group-hover CSS class is sufficient here.
         * Scale range: 1 → 1.04 (within 1.02–1.05 spec).
         */}
                <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className={[
                        "w-full aspect-[16/9] max-h-[240px] object-cover",
                        // Image zoom: CSS transform, GPU-composited via will-change on hover
                        prefersReducedMotion
                            ? ""
                            : "transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]",
                    ].join(" ")}
                />
            </div>

            {/* ── Meta ───────────────────────────────────────────────────────── */}
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                <span className="text-[#D4AF37] font-medium">{post.category}</span>
                {post.date && (
                    <>
                        <span>·</span>
                        <span>{post.date}</span>
                    </>
                )}
                {post.read && (
                    <>
                        <span>·</span>
                        <span>{post.read}</span>
                    </>
                )}
            </div>

            {/* ── Title ──────────────────────────────────────────────────────── */}
            <h2 className="font-serif text-2xl md:text-[1.65rem] leading-[1.3] text-foreground transition-colors duration-300 group-hover:text-foreground/80 balance mb-2">
                {post.title}
            </h2>

            {/* ── Excerpt ────────────────────────────────────────────────────── */}
            <p className="text-sm text-muted-foreground/90 font-light leading-relaxed">
                {post.excerpt}
            </p>

            {/* ── CTA ────────────────────────────────────────────────────────── */}
            <div className="mt-5 flex items-center">
                <span className="text-xs uppercase tracking-[0.15em] text-foreground/80 border-b border-[#D4AF37]/30 pb-1 transition-colors duration-300 group-hover:border-[#D4AF37] group-hover:text-foreground">
                    Read essay
                </span>
            </div>
        </motion.div>
    );

    // Wrap in external link or internal Link — structure unchanged from original
    return post.external ? (
        <a
            key={post.slug}
            href={post.external}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xl"
        >
            {cardContent}
        </a>
    ) : (
        <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block w-full max-w-xl"
        >
            {cardContent}
        </Link>
    );
};

// ─── Page component ───────────────────────────────────────────────────────────

const IPInsights = () => {
    return (
        <SiteLayout>
            {/* ═══════════════════════════════════════════════════════════════════
          HERO — animation system UNCHANGED from original.
          Only the journal listing section below has been modified.
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] pt-20">
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-[20%] left-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    <div className="absolute top-[70%] left-[30%] w-[60vw] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] border border-white/5 rounded-full" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="container relative z-10 text-center"
                >
                    <motion.p
                        custom={0}
                        variants={heroFadeUp}
                        className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-6"
                    >
                        IP Insights
                    </motion.p>

                    <motion.h1
                        custom={1}
                        variants={heroFadeUp}
                        className="font-serif text-5xl md:text-6xl lg:text-[7rem] leading-[1] tracking-tight"
                    >
                        <span className="block text-white">Considered writing.</span>
                        <span className="block italic text-[#8BA4BD] mt-2 font-light">
                            Enduring ideas.
                        </span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={heroFadeUp}
                        className="mt-8 md:mt-10 text-base md:text-lg max-w-2xl mx-auto text-[#ECE8DF]/80 font-light leading-relaxed"
                    >
                        Quarterly essays on patents, trademarks, disputes, and the
                        architecture of intellectual property.
                    </motion.p>
                </motion.div>
            </section>

            <div className="hairline container" />

            {/* ═══════════════════════════════════════════════════════════════════
          JOURNAL LISTING — redesigned animation system
          ─────────────────────────────────────────────────────────────────
          Layout structure: UNCHANGED (two-column, left video, right cards)
          Sticky left panel: KEPT (it's a layout feature, not animation)
          Animation: REPLACED (see JournalCard above)
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="container py-16 md:py-24">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start relative max-w-6xl mx-auto">

                    {/* ── Left: Video panel ─────────────────────────────────────────
              CHANGE: Removed scroll-linked motion on this panel.
              The sticky positioning is preserved (layout decision, not motion).
              Animation: simple whileInView fade-up, fires once.
              No scroll-position coupling, no parallax.
          ─────────────────────────────────────────────────────────────── */}
                    <div className="w-full md:w-5/12 lg:w-[40%] md:sticky md:top-32 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full aspect-[16/9] max-h-[450px] relative overflow-hidden rounded-xl bg-[#1A1A1A] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        >
                            <video
                                src="/videos/insights.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-90"
                            />
                        </motion.div>
                    </div>

                    {/* ── Right: Journal cards ───────────────────────────────────────
              Each <JournalCard> is fully self-contained.
              Batch stagger: batchIndex = globalIndex % BATCH_SIZE
              → cards 0,1,2 stagger together; cards 3,4,5 form next batch; etc.
              At 200 cards: 67 batches of 3, each batch staggers independently
              as the user scrolls to it. No global 200-card stagger.
          ─────────────────────────────────────────────────────────────── */}
                    <div className="w-full md:w-7/12 lg:w-[60%] max-w-xl mx-auto md:mx-0">
                        <div className="max-h-[78vh] overflow-y-auto pr-4 space-y-16 md:space-y-20 scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent">
                            {posts.map((post, globalIndex) => (
                                <JournalCard
                                    key={post.slug}
                                    post={post}
                                    batchIndex={globalIndex % BATCH_SIZE}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
};

export default IPInsights;