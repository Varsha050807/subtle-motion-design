import SiteLayout from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true, margin: "-100px" }
};

export default function Subscription() {

    // 🔥 horizontal scroll logic (FIXED)
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const track = trackRef.current;
            if (!section || !track) return;

            const rect = section.getBoundingClientRect();
            const total = section.offsetHeight - window.innerHeight;
            const scrolled = Math.min(Math.max(-rect.top, 0), total);
            const progress = total > 0 ? scrolled / total : 0;

            const maxX = track.scrollWidth - window.innerWidth;
            track.style.transform = `translate3d(${-progress * maxX}px,0,0)`;
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <SiteLayout>

            {/* HERO */}
            <section className="h-[90vh] flex items-center justify-center bg-[#27445D] text-[#F7F5EF] text-center px-6 pt-20">
                <motion.div {...fadeUp} className="max-w-5xl">
                    <p className="uppercase tracking-[0.4em] text-[#D4AF37] text-xs mb-6">
                        India · International · 360° IP Protection
                    </p>

                    <h1 className="text-5xl md:text-7xl font-serif leading-[1.1]">
                        Your invention deserves more than<br />a single patent.
                    </h1>

                    <p className="mt-8 text-lg text-[#ECE8DF]/80">
                        A patent is a document. A portfolio is a business asset. The difference — in fundraising outcomes,
                        acquisition value, and competitive defence — is determined entirely by how your IP is managed between
                        filing and the rest of your company's life. We manage that gap.
                    </p>
                </motion.div>
            </section>

            {/* ROLES */}
            <section className="py-20 text-center border-b">
                <motion.div {...fadeUp} className="container">
                    <p className="text-xl font-serif text-[#0D2342]">
                        Advocates · Patent Agents · Attorneys · IP Counsel · Patent Analysts
                    </p>

                    <h2 className="mt-12 text-4xl font-serif text-[#0D2342]">
                        Most companies have IP.<br />
                        Very few have a strategy.
                    </h2>

                    <p className="mt-6 text-[#0D2342]/70 max-w-xl mx-auto">
                        The difference determines everything that happens at fundraising, acquisition, and enforcement.
                    </p>
                </motion.div>
            </section>

            {/* PRINCIPLE */}
            <section className="py-28 text-center">
                <motion.div {...fadeUp} className="container">
                    <p className="uppercase tracking-[0.3em] text-sm text-[#5E748E] mb-6">
                        Our founding principle
                    </p>

                    <h2 className="text-5xl font-serif text-[#0D2342]">
                        One team.<br />
                        Every dimension<br />
                        of intellectual property.
                    </h2>

                    <p className="mt-10 italic text-[#5E748E] max-w-2xl mx-auto">
                        "The question is never whether you have a patent. The question is whether it covers the product you are actually shipping — today."
                    </p>
                </motion.div>
            </section>

            {/* INVESTOR */}
            <section className="py-24 border-t">
                <motion.div {...fadeUp} className="container max-w-4xl">
                    <h2 className="text-4xl font-serif text-[#0D2342] mb-6">
                        The investor's lens on IP
                    </h2>

                    <p className="text-xl text-[#0D2342]/80 mb-6">
                        You filed a patent. You don't yet have a strategy.
                    </p>

                    <p className="text-[#0D2342]/70">
                        At your next funding round, three questions will define your IP's credibility — how many applications
                        you've filed, whether you've moved internationally, and whether anyone has actually mapped your patents
                        to the product you're shipping. Most companies cannot answer all three with confidence.
                    </p>
                </motion.div>
            </section>

            {/* 🔥 HORIZONTAL SCROLL */}
            <section ref={sectionRef} style={{ height: "300vh" }}>
                <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F5EF]">
                    <div ref={trackRef} className="flex h-full w-[400vw]">

                        {[
                            ["01", "Your patent drifts from your product", "Examination takes years. Your product evolves. Without monthly portfolio reviews matched to your roadmap, you prosecute — and eventually receive — a patent on something you no longer ship. By then, you have also paid foreign maintenance fees on a filing that no longer maps to reality."],
                            ["02", "Searches are skipped to protect billing", "A patentability search might reveal an invention is unprotectable — meaning no filing, no fee. The traditional billing model discourages this honesty. We conduct a search on every matter before any prosecution begins. If it is not worth filing, you will know first."],
                            ["03", "Innovation is never formally captured", "The most protectable inventions in your organisation are not on any disclosure form. They are in product meetings, engineering conversations, and design decisions. Without a structured invention harvesting process, that value disappears quietly."],
                            ["04", "IP strategy is disconnected from business", "White space analysis, technology evolution mapping, and competitive density studies exist — but most companies never access them because the traditional model only engages when there is a filing to do. We bring this intelligence to every client, on retainer."]
                        ].map((item, i) => (
                            <div key={i} className="w-screen flex items-center justify-center px-16">
                                <div className="max-w-2xl">
                                    <p className="text-[#D4AF37] mb-4">{item[0]}</p>
                                    <h2 className="text-5xl font-serif text-[#0D2342]">{item[1]}</h2>
                                    <p className="mt-6 text-[#0D2342]/70">{item[2]}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* MODEL FULL TEXT */}
            <section className="py-28">
                <div className="container max-w-5xl space-y-10">
                    <h2 className="text-5xl font-serif text-[#0D2342]">Our model</h2>

                    <p className="text-xl">In-house counsel. Without the in-house cost.</p>

                    <p>
                        We work the way a dedicated IP department works — present in your product conversations,
                        proactive on your portfolio, and accountable to your business outcomes. Fixed fee. No billing clock.
                    </p>

                    <p><b>We integrate with your team</b><br />
                        Advocates, patent agents, and analysts work alongside your founders, engineers, and R&D leads — not in isolation waiting for a brief.
                    </p>

                    <p><b>Search before every rupee is spent</b><br />
                        Every matter begins with a patentability search and prior art analysis.
                    </p>

                    <p><b>Monthly portfolio reviews — every active matter</b><br />
                        Every active filing is checked against your current product each month.
                    </p>

                    <p><b>Strategy delivered continuously, not on demand</b><br />
                        White space analysis, competitive density mapping, and technology evolution studies are woven into how we manage your portfolio.
                    </p>

                    <p><b>Single point of contact — India and international</b><br />
                        From IPO prosecution and PCT national phase entry to multi-jurisdictional strategy.
                    </p>
                </div>
            </section>

            {/* FULL COVERAGE */}
            <section className="py-28 bg-[#F7F5EF]">
                <div className="container">
                    <h2 className="text-5xl font-serif mb-12">
                        Subscription model — what is covered
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div>
                            <h3 className="font-serif text-xl mb-4">Patent pipeline</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Patentability search on every matter</li>
                                <li>Prior art & FTO analysis</li>
                                <li>Complete & provisional specification drafting</li>
                                <li>Claim architecture & strategy</li>
                                <li>FER responses & prosecution management</li>
                                <li>Opposition handling</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl mb-4">Portfolio intelligence</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Monthly portfolio review — all active matters</li>
                                <li>Product-to-IP alignment check</li>
                                <li>Invention harvesting workshops</li>
                                <li>White space & innovation gap analysis</li>
                                <li>Technology evolution mapping</li>
                                <li>Competitive landscape & density studies</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-serif text-xl mb-4">International & commercial</h3>
                            <ul className="space-y-2 text-sm">
                                <li>PCT national phase entry — India</li>
                                <li>Multi-jurisdiction filing strategy</li>
                                <li>IP agreement drafting & review</li>
                                <li>NDA, licensing & assignment contracts</li>
                                <li>Board & investor IP reporting</li>
                                <li>IP education</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#27445D] text-center text-white">
                <div className="container max-w-3xl">
                    <h2 className="text-5xl font-serif">
                        Your IP should outlast your next pivot.
                    </h2>

                    <p className="mt-6 text-white/70">
                        Let us review your current portfolio — or help you build one from the ground up.
                        No hourly clock. No obligation.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-block mt-10 px-10 py-4 border border-white hover:bg-white hover:text-[#27445D] transition"
                    >
                        Request a portfolio consultation ↗
                    </Link>
                </div>
            </section>

        </SiteLayout>
    );
}