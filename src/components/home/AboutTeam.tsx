export default function AboutTeam() {
    const team = [
        { name: "Paritosh", role: "Founder & CEO / Architect" },
        { name: "Mayur", role: "CTO / Backend" },
        { name: "Ayush", role: "Head of Engineering / Frontend" },
        { name: "Yogeshvar", role: "Lead AI Engineer" },
        { name: "Radhika", role: "Product Manager" },
        { name: "Gargi", role: "QA / Operations" },
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold tracking-wide uppercase mb-3 text-center">
                        About Us
                    </span>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight text-ink mb-5">
                        Built for Performance.<br /> Driven by Data.
                    </h2>
                    <p className="text-soft text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We are an award-winning collective of software engineers. We build robust architectures that operate seamlessly at scale across multiple verticals.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {team.map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                        >
                            <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br from-brand/20 to-brand-accent/30 text-brand font-display font-bold flex items-center justify-center text-xl">
                                {member.name.charAt(0)}
                            </div>
                            <h3 className="font-display font-bold text-ink mb-1 tracking-tight">
                                {member.name}
                            </h3>
                            <p className="text-xs font-medium text-soft tracking-tight uppercase">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
