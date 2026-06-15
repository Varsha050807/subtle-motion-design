import SiteLayout from "@/components/SiteLayout";

const team = [
    {
        name: "Dr Vishwaraj B Manur",
        role: "Founder & Principal Patent Agent",
        qualifications: "B.E, M.Tech, PhD (Wireless Communication), Pursuing LLB",
        experience: "10+ years of experience",
    },
    {
        name: "Ms. Ambika Patil",
        role: "Founding Partner & Research Consultant",
        qualifications: "",
        experience: "10+ years of experience",
    },
    {
        name: "Mr. Basavaraj S Manur",
        role: "Advocate & Trademark Attorney",
        qualifications: "",
        experience: "36+ years of experience",
    },
    {
        name: "Ms. Shashikala M N",
        role: "Advocate & IP Consultant",
        qualifications: "",
        experience: "13+ years of experience",
    },
    {
        name: "Mr. Tatappa Rachannanavar",
        role: "Cyber Security Specialist & Operations Head",
        qualifications: "B.E, M.Tech, Pursuing LLB",
        experience: "10+ years of experience",
    },
    {
        name: "Ms. Kavyashree B A",
        role: "Client Relationship Manager",
        qualifications: "MBA (Finance & HR)",
        experience: "5+ years of experience",
    },
];

const Team = () => {
    return (
        <SiteLayout>
            <section className="relative pt-32 pb-24 container">

                {/* HEADER */}
                <div className="mb-16 max-w-3xl">
                    <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6">
                        Our Team
                    </p>

                    <h1 className="font-serif text-4xl md:text-6xl text-[#0D2342] leading-tight">
                        The people behind the practice.
                    </h1>

                    <p className="mt-6 text-[#0D2342]/70 text-lg leading-relaxed">
                        A multidisciplinary team combining legal expertise, engineering depth,
                        and strategic advisory — united by precision and discipline.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {team.map((member, i) => (
                        <div
                            key={i}
                            className="border border-[#0D2342]/10 p-6 bg-white/40 backdrop-blur-sm hover:shadow-lg transition duration-500"
                        >

                            <h3 className="font-serif text-2xl text-[#0D2342]">
                                {member.name}
                            </h3>

                            <p className="mt-2 text-[#0D2342]/80 font-medium">
                                {member.role}
                            </p>

                            {member.qualifications && (
                                <p className="mt-3 text-sm text-[#0D2342]/60">
                                    {member.qualifications}
                                </p>
                            )}

                            <p className="mt-3 text-sm text-[#0D2342]/70">
                                {member.experience}
                            </p>

                        </div>
                    ))}

                </div>
            </section>
        </SiteLayout>
    );
};

export default Team;