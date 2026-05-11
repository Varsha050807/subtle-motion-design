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


                    {/* ── Right: Journal cards ───────────────────────────────────────
              Each <JournalCard> is fully self-contained.
              Batch stagger: batchIndex = globalIndex % BATCH_SIZE
              → cards 0,1,2 stagger together; cards 3,4,5 form next batch; etc.
              At 200 cards: 67 batches of 3, each batch staggers independently
              as the user scrolls to it. No global 200-card stagger.
          ─────────────────────────────────────────────────────────────── */}

                    <div className="relative max-w-6xl mx-auto space-y-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {posts.map((post, index) => (
                                <motion.div
                                    key={post.slug}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    {post.external ? (
                                        <a
                                            href={post.external}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block h-full"
                                        >
                                            <div className="h-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

                                                <div className="overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                                    />
                                                </div>

                                                <div className="p-8">
                                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
                                                        <span className="text-[#D4AF37]">
                                                            {post.category}
                                                        </span>

                                                        <span>•</span>
                                                        <span>{post.date}</span>

                                                        <span>•</span>
                                                        <span>{post.read}</span>
                                                    </div>

                                                    <h2 className="font-serif text-3xl leading-[1.3] mb-4 text-[#1A1A1A] dark:text-white">
                                                        {post.title}
                                                    </h2>

                                                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="mt-6">
                                                        <span className="text-xs uppercase tracking-[0.15em] border-b border-[#D4AF37]/30 pb-1">
                                                            Read Essay
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="group block h-full"
                                        >
                                            <div className="h-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500">

                                                <div className="overflow-hidden">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                                    />
                                                </div>

                                                <div className="p-8">
                                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
                                                        <span className="text-[#D4AF37]">
                                                            {post.category}
                                                        </span>

                                                        <span>•</span>
                                                        <span>{post.date}</span>

                                                        <span>•</span>
                                                        <span>{post.read}</span>
                                                    </div>

                                                    <h2 className="font-serif text-3xl leading-[1.3] mb-4 text-[#1A1A1A] dark:text-white">
                                                        {post.title}
                                                    </h2>

                                                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="mt-6">
                                                        <span className="text-xs uppercase tracking-[0.15em] border-b border-[#D4AF37]/30 pb-1">
                                                            Read Essay
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
};

export default IPInsights;