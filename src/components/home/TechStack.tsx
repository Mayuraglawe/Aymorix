export default function TechStack() {
    const technologies = [
        "Next.js", "React", "TypeScript", "Python",
        "Supabase", "PostgreSQL", "OR-Tools", "Tailwind CSS"
    ];

    return (
        <section id="tech-stack" className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16">
                <div className="text-center mb-10">
                    <span className="text-[10px] md:text-xs font-semibold text-soft/60 uppercase tracking-widest leading-none mb-4 block">
                        Powered By Modern Tech
                    </span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80">
                    {technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="py-2.5 px-6 bg-slate-50 border border-slate-200 rounded-lg shadow-sm hover:shadow hover:bg-white hover:border-brand-accent/30 transition-all font-display font-semibold text-sm text-ink tracking-tight"
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
