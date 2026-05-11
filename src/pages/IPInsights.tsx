// IPInsights.tsx
// Place at: src/pages/IPInsights.tsx

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SiteLayout from "@/components/SiteLayout";
import { posts } from "@/pages/posts";

// ─── Easing curves ────────────────────────────────────────────────────────────
const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_CIRC = [0.25, 0.1, 0.25, 1] as const;

// ─── Hero ambient orb ─────────────────────────────────────────────────────────
const AmbientOrb = ({ className }: { className: string }) => (
    <motion.div
        className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
);

// ─── Staggered hero word reveal ───────────────────────────────────────────────
const HeroWord = ({
    children,
    delay,
    italic,
}: {
    children: string;
    delay: number;
    italic?: boolean;
}) => (
    <span className="inline-block overflow-hidden">
        <motion.span
            className={`inline-block ${italic ? "italic" : ""}`}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1.1, delay, ease: EASE_EXPO }}
        >
            {children}
        </motion.span>
    </span>
);

// ─── Journal card ─────────────────────────────────────────────────────────────
interface CardProps {
    post: (typeof posts)[number];
    index: number;
}

const JournalCard = ({ post, index }: CardProps) => {
    const shouldReduceMotion = useReducedMotion();
    const batchDelay = (index % 2) * 0.12;

    return (
        <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: batchDelay, ease: EASE_EXPO }}
            className="group relative"
        >
            <Link to={`/blog/${post.slug}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-2xl">
                {/* Card shell */}
                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f1e2b]/70 backdrop-blur-sm transition-all duration-700 group-hover:border-[#D4AF37]/20 group-hover:bg-[#0f1e2b]/90">

                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/10] shrink-0">
                        <motion.img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8, ease: EASE_CIRC }}
                        />
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e2b] via-[#0f1e2b]/20 to-transparent" />

                        {/* Category badge */}
                        <div className="absolute top-5 left-5">
                            <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase font-medium text-[#D4AF37] bg-[#0f1e2b]/80 backdrop-blur-sm border border-[#D4AF37]/30 px-3 py-1.5 rounded-full">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-8 pt-7">
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#8BA4BD]/60 mb-5">
                            <time>{post.date}</time>
                            <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                            <span>{post.read}</span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-[1.35rem] leading-[1.35] text-[#ECE8DF] mb-4 transition-colors duration-300 group-hover:text-white">
                            {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm leading-relaxed text-[#8BA4BD]/70 font-light flex-1">
                            {post.excerpt}
                        </p>

                        {/* CTA */}
                        <div className="mt-7 flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#D4AF37]/80 transition-all duration-300 group-hover:text-[#D4AF37] group-hover:gap-3">
                            <span>Read Essay</span>
                            <svg
                                width="16"
                                height="10"
                                viewBox="0 0 16 10"
                                fill="none"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path
                                    d="M1 5h14M11 1l4 4-4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom gold line reveal on hover */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.5, ease: EASE_EXPO }}
                        style={{ transformOrigin: "left center" }}
                    />
                </div>
            </Link>
        </motion.article>
    );
};

// ─── Featured card (first post, full-width) ───────────────────────────────────
const FeaturedCard = ({ post }: { post: (typeof posts)[number] }) => (
    <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.1, ease: EASE_EXPO }}
        className="group relative col-span-full"
    >
        <Link to={`/blog/${post.slug}`} className="block outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f1e2b]/70 backdrop-blur-sm transition-all duration-700 group-hover:border-[#D4AF37]/20 md:flex md:min-h-[460px]">

                {/* Image — left half on md+ */}
                <div className="relative overflow-hidden md:w-1/2 shrink-0 aspect-[16/10] md:aspect-auto">
                    <motion.img
                        src={post.image}
                        alt={post.title}
                        loading="eager"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.9, ease: EASE_CIRC }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f1e2b] hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e2b] via-transparent to-transparent md:hidden" />
                </div>

                {/* Content — right half */}
                <div className="relative flex flex-col justify-center p-10 md:p-14 md:w-1/2">
                    {/* Featured label */}
                    <motion.p
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: EASE_EXPO }}
                        className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-5 flex items-center gap-2"
                    >
                        <span className="w-6 h-px bg-[#D4AF37]" />
                        Featured Essay
                    </motion.p>

                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8BA4BD]/60">{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8BA4BD]/60">{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8BA4BD]/60">{post.read}</span>
                    </div>

                    <h2 className="font-serif text-3xl md:text-[2.4rem] leading-[1.25] text-[#ECE8DF] mb-6 transition-colors duration-300 group-hover:text-white">
                        {post.title}
                    </h2>

                    <p className="text-[#8BA4BD]/70 font-light leading-relaxed mb-8">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2.5 text-[11px] tracking-[0.18em] uppercase text-[#D4AF37]/80 transition-all duration-300 group-hover:text-[#D4AF37] group-hover:gap-4">
                        <span>Read Essay</span>
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
                            <path d="M1 5h18M14 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    </motion.article>
);

// ─── Scroll indicator ─────────────────────────────────────────────────────────
const ScrollIndicator = () => (
    <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8BA4BD]/40"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
    >

        <motion.div
            className="w-px h-8 bg-gradient-to-b from-[#D4AF37]/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
        />
    </motion.div>
);

// ─── Section divider ──────────────────────────────────────────────────────────
const Hairline = () => (
    <div className="relative my-16 md:my-24">
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
    </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const IPInsights = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    const [featured, ...rest] = posts;

    return (
        <SiteLayout>
            {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
            <section
                ref={heroRef}
                className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a1520] pt-20"
            >
                {/* Ambient background orbs */}
                <AmbientOrb className="w-[600px] h-[600px] bg-[#27445D]/60 top-[-10%] left-[-8%]" />
                <AmbientOrb className="w-[400px] h-[400px] bg-[#D4AF37]/8 bottom-[0%] right-[5%]" />
                <AmbientOrb className="w-[300px] h-[300px] bg-[#1a3348]/80 top-[30%] right-[-5%]" />

                {/* Geometric lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
                    <div className="absolute top-[22%] left-[8%] w-[45vw] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                    <div className="absolute top-[75%] left-[25%] w-[60vw] h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="absolute top-[10%] right-[4%] w-[38vw] h-[38vw] border border-white/20 rounded-full" />
                    <div className="absolute bottom-[5%] left-[2%] w-[20vw] h-[20vw] border border-[#D4AF37]/30 rounded-full" />
                </div>

                {/* Hero content with parallax */}
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="relative z-10 container text-center"
                >
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.4, ease: EASE_EXPO }}
                        className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#D4AF37] mb-8 flex items-center justify-center gap-3"
                    >
                        <span className="w-10 h-px bg-[#D4AF37]/50" />
                        IP Insights
                        <span className="w-10 h-px bg-[#D4AF37]/50" />
                    </motion.p>

                    <h1 className="font-serif text-[clamp(3.2rem,10vw,8rem)] leading-[0.95] tracking-tight mb-8">
                        <div className="overflow-hidden">
                            <span className="text-[#8BA4BD] font-light italic">
                                <HeroWord delay={0.2}>Considered</HeroWord>
                                {" "}
                                <HeroWord delay={0.32}>writing.</HeroWord>
                            </span>
                        </div>
                        <div className="overflow-hidden mt-2">
                            <motion.span
                                className="inline-block italic text-[#8BA4BD] font-light"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 1.1, delay: 0.52, ease: EASE_EXPO }}
                            >
                                Enduring ideas.
                            </motion.span>
                        </div>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.85, ease: EASE_EXPO }}
                        className="mt-6 text-base md:text-lg max-w-xl mx-auto text-[#8BA4BD]/70 font-light leading-relaxed"
                    >
                        Quarterly essays on patents, trademarks, disputes,{" "}
                        <br className="hidden md:block" />
                        and the architecture of intellectual property.
                    </motion.p>

                    {/* Issue count */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-10 text-[10px] tracking-[0.25em] uppercase text-[#8BA4BD]/35"
                    >
                        {posts.length} essays · Vol. I
                    </motion.p>
                </motion.div>

                <ScrollIndicator />
            </section>

            {/* ══════════════════════════════════════════════════════
          JOURNAL LISTING
      ══════════════════════════════════════════════════════ */}
            <section className="relative bg-[#F7F5EF] min-h-screen">
                {/* Subtle background texture */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(13,35,66,0.18) 1px, transparent 0)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="container relative z-10 py-20 md:py-32 max-w-6xl mx-auto px-4 md:px-8">

                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE_EXPO }}
                        className="flex items-center gap-4 mb-14"
                    >
                        <span className="w-8 h-px bg-[#D4AF37]/60" />
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]/70">
                            The Journal
                        </span>
                    </motion.div>

                    {/* Featured post */}
                    <FeaturedCard post={featured} />

                    <Hairline />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
                        {rest.map((post, i) => (
                            <JournalCard key={post.slug} post={post} index={i} />
                        ))}
                    </div>

                    {/* Footer note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-24 text-center"
                    >
                        <div className="w-px h-12 bg-gradient-to-b from-[#D4AF37]/30 to-transparent mx-auto mb-6" />
                        <p className="text-[10px] tracking-[0.25em] uppercase text-[#8BA4BD]/30">
                            All essays © {new Date().getFullYear()} · All rights reserved
                        </p>
                    </motion.div>
                </div>
            </section>
        </SiteLayout>
    );
};

export default IPInsights;