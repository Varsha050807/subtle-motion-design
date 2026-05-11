import SiteLayout from "@/components/SiteLayout";
import {
    Scale,
    ShieldCheck,
    Landmark,
    ArrowRight,
} from "lucide-react";

const Newsletter = () => {
    return (
        <SiteLayout>

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#27445D] text-[#F7F5EF] pt-32">
                {/* ambient visuals */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[15%] left-[8%] w-[45vw] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
                    <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    <div className="absolute top-[10%] right-[5%] w-[42vw] h-[42vw] border border-white/5 rounded-full" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] border border-[#D4AF37]/10 rounded-full" />
                </div>

                <div className="container relative z-10 text-center">

                    <p className="text-xs md:text-sm tracking-[0.45em] uppercase text-[#D4AF37] mb-8">
                        Avimukta Journal
                    </p>

                    <h1 className="font-serif text-5xl md:text-[8rem] leading-[0.88] tracking-tight">
                        <span className="block">
                            Legal Intelligence.
                        </span>

                        <span className="block italic text-[#7489A0] mt-5">
                            Delivered with clarity.
                        </span>
                    </h1>

                    <p className="mt-14 text-lg md:text-2xl max-w-4xl mx-auto text-[#ECE8DF]/70 font-light leading-relaxed">
                        Thoughtful commentary on patents, trademarks,
                        copyright, disputes, innovation strategy,
                        and the evolving architecture of intellectual property law.
                    </p>

                    {/* SUBSCRIBE BOX */}
                    <div className="mt-20 max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-5 md:p-7">

                        <div className="flex flex-col md:flex-row gap-4">

                            <input
                                type="email"
                                placeholder="Enter your professional email"
                                className="flex-1 bg-transparent border border-white/10 px-6 py-5 text-white placeholder:text-white/40 outline-none"
                            />

                            <button className="group bg-[#D4AF37] text-[#27445D] px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold flex items-center justify-center gap-3 hover:gap-5 transition-all duration-300">
                                Subscribe

                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>

                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs uppercase tracking-[0.18em] text-white/40">
                            <span>Monthly Dispatches</span>
                            <span>Curated Legal Insights</span>
                            <span>No Spam</span>
                        </div>

                    </div>

                </div>
            </section>

            {/* FEATURED INSIGHTS */}
            <section className="bg-[#F7F5EF] text-[#27445D] py-32">
                <div className="container">

                    <div className="max-w-3xl">
                        <p className="uppercase tracking-[0.35em] text-xs text-[#5E748E]">
                            Included In Every Edition
                        </p>

                        <h2 className="font-serif text-4xl md:text-6xl mt-6 leading-tight">
                            Strategic insight for modern intellectual property practice.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-20">

                        {/* CARD 1 */}
                        <div className="group bg-white border border-black/5 p-10 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                            <Scale className="w-11 h-11 text-[#D4AF37] mb-8" />

                            <h3 className="font-serif text-3xl leading-snug">
                                Trademark Intelligence
                            </h3>

                            <p className="mt-5 text-[#27445D]/70 leading-relaxed">
                                Brand strategy, filing patterns, opposition trends,
                                and practical trademark protection guidance
                                for emerging and established businesses.
                            </p>

                        </div>

                        {/* CARD 2 */}
                        <div className="group bg-white border border-black/5 p-10 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                            <ShieldCheck className="w-11 h-11 text-[#D4AF37] mb-8" />

                            <h3 className="font-serif text-3xl leading-snug">
                                Patent Strategy
                            </h3>

                            <p className="mt-5 text-[#27445D]/70 leading-relaxed">
                                Insights into drafting, prosecution,
                                portfolio development, technology protection,
                                and innovation-focused legal strategy.
                            </p>

                        </div>

                        {/* CARD 3 */}
                        <div className="group bg-white border border-black/5 p-10 hover:-translate-y-3 transition-all duration-700 relative overflow-hidden">

                            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                            <Landmark className="w-11 h-11 text-[#D4AF37] mb-8" />

                            <h3 className="font-serif text-3xl leading-snug">
                                Litigation & Compliance
                            </h3>

                            <p className="mt-5 text-[#27445D]/70 leading-relaxed">
                                Enforcement strategy, licensing considerations,
                                compliance developments, and dispute resolution insights
                                from the broader IP ecosystem.
                            </p>

                        </div>

                    </div>
                </div>
            </section>
            {/* CINEMATIC VIDEO SECTION */}
            <section className="bg-[#F7F5EF] py-10">

                <div className="container">

                    <div className="relative overflow-hidden">

                        {/* video */}
                        <video
                            src="/videos/newsletter.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-[70vh] object-cover"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* content */}
                        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-3xl text-white">

                            <p className="uppercase tracking-[0.35em] text-xs text-[#D4AF37] mb-5">
                                The Avimukta Perspective
                            </p>

                            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                                Thoughtful legal strategy begins long before conflict.
                            </h2>

                            <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                                Our editorial dispatches explore the intersection of
                                innovation, protection, litigation, and long-term
                                intellectual property strategy.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* QUOTE SECTION */}
            <section className="bg-[#EFEAE0] py-28 text-[#27445D]">
                <div className="container max-w-5xl text-center">

                    <p className="uppercase tracking-[0.35em] text-xs text-[#5E748E]">
                        Editorial Philosophy
                    </p>

                    <blockquote className="font-serif text-3xl md:text-5xl leading-[1.4] mt-10">
                        “The most valuable legal guidance is not merely reactive —
                        it anticipates the future before conflict arrives.”
                    </blockquote>

                    <p className="mt-8 uppercase tracking-[0.25em] text-sm text-[#27445D]/50">
                        Avimukta IP Services
                    </p>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative bg-[#27445D] text-[#F7F5EF] py-32 overflow-hidden">

                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="container relative z-10 text-center max-w-4xl mx-auto">

                    <p className="uppercase tracking-[0.35em] text-xs text-[#D4AF37]">
                        Join The Mailing List
                    </p>

                    <h2 className="font-serif text-4xl md:text-7xl mt-8 leading-[1]">
                        For founders,
                        innovators,
                        and modern enterprises.
                    </h2>

                    <p className="mt-10 text-lg md:text-xl text-white/70 leading-relaxed">
                        Receive considered legal commentary and curated intellectual
                        property insights directly from the Avimukta editorial desk.
                    </p>

                    <button className="group mt-14 bg-[#D4AF37] text-[#27445D] px-10 py-5 uppercase tracking-[0.2em] text-sm font-semibold inline-flex items-center gap-3 hover:gap-5 transition-all duration-300">

                        Subscribe Now

                        <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                    </button>

                </div>
            </section>

        </SiteLayout>
    );
};

export default Newsletter;