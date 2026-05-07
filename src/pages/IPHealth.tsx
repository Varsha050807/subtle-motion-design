import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import gsap from 'gsap';
import SiteLayout from "@/components/SiteLayout";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import {
    ArrowRight, EyeOff, FileText, Bookmark,
    Target, Scale, ShieldCheck, Layers,
    ChevronRight, ShieldAlert
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IPHealth() {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const showcaseRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        let animationFrameId: number;
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const render = () => {
            setSmoothMouse((prev) => ({
                x: lerp(prev.x, mousePos.x, 0.1),
                y: lerp(prev.y, mousePos.y, 0.1)
            }));
            animationFrameId = requestAnimationFrame(render);
        };
        render();

        // ScrollTrigger Animations
        const storyLines = gsap.utils.toArray('.story-line');
        storyLines.forEach((line: any) => {
            gsap.fromTo(line,
                { opacity: 0.1, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: line,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 1,
                    }
                }
            );
        });

        // Pinned Showcase
        if (showcaseRef.current) {
            ScrollTrigger.create({
                trigger: showcaseRef.current,
                start: "top top",
                end: "+=200%",
                pin: '.showcase-left',
                scrub: 1,
            });
        }

        return () => {
            lenis.destroy();
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [mousePos]);

    const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) => {
        const buttonRef = useRef<HTMLDivElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        };

        const reset = () => setPosition({ x: 0, y: 0 });

        const content = (
            <motion.div
                ref={buttonRef}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className={`relative overflow-hidden group rounded-full border border-[#D4AF37]/30 flex items-center justify-center cursor-pointer transition-colors duration-500 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 ${className}`}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </motion.div>
        );

        if (href) {
            return <a href={href} target="_blank" rel="noopener noreferrer" className="block w-fit">{content}</a>;
        }
        return content;
    };

    const diagnostics = [
        { icon: ShieldCheck, title: "Protectability", desc: "Is your idea legally defensible in its current state?" },
        { icon: EyeOff, title: "Disclosure Risk", desc: "Have public statements already jeopardized your filing?" },
        { icon: Bookmark, title: "Brand Ownership", desc: "Clearance and registration of your core brand assets." },
        { icon: FileText, title: "Filing Position", desc: "Strategic timing and structuring of your IP portfolio." },
        { icon: Target, title: "Competitive Exposure", desc: "Mapping competitor claims against your innovations." },
        { icon: Scale, title: "Freedom To Operate", desc: "Ensuring you can commercialize without infringement." },
        { icon: Layers, title: "White Space Potential", desc: "Identifying unclaimed territories for future dominance." },
        { icon: ShieldAlert, title: "Portfolio Strength", desc: "Stress-testing your existing IP against market realities." }
    ];

    return (
        <SiteLayout>
            <div ref={containerRef} className="bg-[#F7F5EF] text-[#0D2342] min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#0D2342] overflow-hidden">

                <motion.div
                    className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-50 origin-left"
                    style={{ scaleX: smoothProgress }}
                />

                {/* SECTION 1 - HERO */}
                <section ref={heroRef} className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 z-10 bg-gradient-to-br from-[#27445D] to-[#5E748E] text-[#F7F5EF] overflow-hidden">

                    {/* Spotlight Glow */}
                    <motion.div
                        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none z-0"
                        style={{
                            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 60%)",
                            x: smoothMouse.x,
                            y: smoothMouse.y,
                            translateX: "-50%",
                            translateY: "-50%"
                        }}
                    />

                    {/* Ambient Hero Particles */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
                                initial={{
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                                    opacity: Math.random() * 0.4 + 0.1,
                                    scale: Math.random() * 2,
                                }}
                                animate={{
                                    y: [null, Math.random() * -200 - 100],
                                    opacity: [null, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 15 + 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-5xl mx-auto text-center relative z-10 pt-20"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-white/5 backdrop-blur-md mb-12 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">Strategic IP Diagnostic</span>
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8">
                            Do You Know Where Your <span className="italic text-[#D4AF37]">Idea Stands</span> Today — <br className="hidden md:block" />
                            <span className="text-[#F7F5EF]/60">Or Are You Assuming It's Still Yours?</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-lg md:text-2xl text-[#F7F5EF]/80 max-w-3xl mx-auto font-light leading-relaxed mb-16"
                        >
                            Most innovators lose control before they realize exposure has already begun.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="flex justify-center"
                        >

                        </motion.div>
                    </motion.div>
                </section>

                {/* SECTION 2 - STORY BLOCK */}

                <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-24 z-10 bg-[#F7F5EF] text-[#0D2342]">
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-20">
                        <h2 className="story-line font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-center">
                            <span className="text-[#0D2342]/45">He thought he was just</span>
                            <br />
                            <span className="text-[#0D2342]">exploring options.</span>
                        </h2>

                        <h2 className="story-line font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-center italic text-[#D4AF37]">
                            Someone else filed first.
                        </h2>
                    </div>
                </section>

                {/* SECTION 3 - DIAGNOSTIC GRID */}
                <section className="relative w-full py-32 px-6 z-10 bg-[#ECE8DF]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-24 md:flex items-end justify-between">
                            <div className="max-w-2xl">
                                <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#0D2342]">The Diagnostic Engine</h2>
                                <p className="text-[#0D2342]/60 text-lg md:text-xl leading-relaxed font-light">
                                    Our proprietary framework maps your total exposure surface, identifying critical vulnerabilities before they become liabilities.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div className="w-32 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {diagnostics.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="group relative p-8 rounded-2xl border border-[#0D2342]/5 bg-white/40 hover:bg-white backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(13,35,66,0.05)]"
                                >
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                    <item.icon className="w-10 h-10 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                                    <h3 className="font-serif text-2xl mb-3 text-[#0D2342]">{item.title}</h3>
                                    <p className="text-sm text-[#0D2342]/60 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4 - SCROLL PINNED SHOWCASE */}
                <section ref={showcaseRef} className="relative w-full bg-[#F7F5EF] py-20 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">

                        {/* Pinned Left Side */}
                        <div className="showcase-left w-full lg:w-1/3 lg:h-[80vh] flex flex-col justify-center pt-20 lg:pt-0">
                            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-[#0D2342] leading-tight">
                                Strategic <br /><span className="italic text-[#D4AF37]">Architecture</span>
                            </h2>
                            <p className="text-[#0D2342]/60 text-lg font-light mb-8">
                                We don't just file paperwork. We build defensible moats around your most valuable assets, ensuring long-term commercial dominance.
                            </p>
                            <MagneticButton className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#0D2342] border-[#0D2342]/20 hover:border-[#D4AF37]">
                                Explore Methodology
                            </MagneticButton>
                        </div>

                        {/* Scrolling Right Side */}
                        <div className="w-full lg:w-2/3 space-y-12 lg:py-[20vh]">
                            {[
                                { num: "01", title: "Diagnostic Mapping", desc: "A comprehensive audit of your current intellectual property landscape, identifying unseen gaps and exposure risks before competitors do." },
                                { num: "02", title: "Defensive Structuring", desc: "Strategic filing positioning that creates overlapping layers of protection, transforming standalone ideas into impenetrable portfolios." },
                                { num: "03", title: "Commercial Positioning", desc: "Aligning your IP assets directly with your business objectives to maximize valuation, licensing leverage, and market share." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/60 backdrop-blur-sm border border-[#0D2342]/5 p-10 md:p-16 rounded-3xl shadow-[0_10px_40px_rgba(13,35,66,0.03)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.08)] transition-shadow duration-700">
                                    <div className="text-[#D4AF37] font-serif text-6xl mb-8 opacity-40">{item.num}</div>
                                    <h3 className="font-serif text-3xl md:text-4xl mb-6 text-[#0D2342]">{item.title}</h3>
                                    <p className="text-[#0D2342]/70 text-lg md:text-xl leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5 - WHY IT MATTERS */}
                <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 z-10 bg-gradient-to-br from-[#27445D] to-[#0D2342] text-[#F7F5EF] overflow-hidden">
                    {/* Soft Animated Beams */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <motion.div
                            className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"
                            animate={{ opacity: [0.1, 1, 0.1], scaleY: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#F7F5EF] to-transparent"
                            animate={{ opacity: [0.1, 0.8, 0.1], scaleY: [1, 1.5, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-[#D4AF37] rounded-full blur-[2px]"
                                initial={{
                                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                                    opacity: 0,
                                }}
                                animate={{
                                    y: [null, Math.random() * -100 - 50],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 8 + 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                            <span className="text-[#F7F5EF]/40 block mb-6 text-3xl md:text-5xl">Most don't lose because their idea isn't strong.</span>
                            They lose because they <span className="italic text-[#D4AF37]">waited too long.</span>
                        </h2>
                    </div>
                </section>

                {/* SECTION 6 - OFFER PANEL */}
                <section className="relative w-full py-32 px-6 z-10 flex justify-center bg-[#ECE8DF]">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-4xl relative"
                    >
                        <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-br from-[#D4AF37]/60 via-transparent to-[#27445D]/30 opacity-50 pointer-events-none" />
                        <div className="bg-[#F7F5EF]/90 backdrop-blur-2xl rounded-3xl p-12 md:p-24 border border-[#0D2342]/10 shadow-[0_30px_60px_rgba(13,35,66,0.08)] relative overflow-hidden flex flex-col items-center text-center">

                            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-xs uppercase tracking-[0.2em] text-[#0D2342] font-semibold mb-10">
                                <span className="px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10">Free</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                <span>30 Minutes</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                <span>Online</span>
                            </div>

                            <h2 className="font-serif text-5xl md:text-6xl mb-8 text-[#0D2342]">The Diagnostic Session</h2>
                            <p className="text-[#0D2342]/60 mb-12 max-w-lg mx-auto text-xl leading-relaxed font-light">
                                Strictly limited to <strong className="text-[#D4AF37] font-semibold">4 curated slots weekly</strong>. Reserved for serious researchers, engineers, startups, and MSMEs.
                            </p>
                            <MagneticButton
                                href="https://forms.gle/NbD357jAStqUCyTx9"
                                className="px-14 py-5 bg-[#0D2342] text-white text-sm uppercase tracking-[0.18em] font-bold shadow-[0_15px_35px_rgba(13,35,66,0.18)] hover:shadow-[0_20px_45px_rgba(13,35,66,0.28)]"
                            >
                                Start My Diagnostic
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </MagneticButton>
                        </div>
                    </motion.div>
                </section>

                {/* SECTION 7 - FINAL CTA */}


            </div>
        </SiteLayout >
    );
}