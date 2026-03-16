import { Code2, BrainCircuit, Workflow } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "End-to-end development of bespoke web platforms using Next.js and secure backends.",
            icon: <Code2 size={24} className="text-brand" />,
            delay: "100ms"
        },
        {
            title: "AI Integration",
            description: "Specializing in Python-driven AI modules, CP-SAT solvers, and constraint-satisfaction engines.",
            icon: <BrainCircuit size={24} className="text-brand-accent" />,
            delay: "200ms"
        },
        {
            title: "Enterprise Workflow Automation",
            description: "API bridges and n8n workflows to eliminate manual data entry and streamline operations.",
            icon: <Workflow size={24} className="text-[#0784a8]" />,
            delay: "300ms"
        }
    ];

    return (
        <section id="services" className="relative py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-brand/10 text-brand text-xs font-semibold tracking-wide uppercase mb-3">
                        What We Do
                    </span>
                    <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight mb-4">
                        Custom Engineering Solutions
                    </h2>
                    <p className="text-soft text-base md:text-lg max-w-2xl mx-auto">
                        We build scalable, cloud-native applications tailored to optimize your business operations and accelerate growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                            style={{ animationDelay: service.delay }}
                        >
                            <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="font-display font-bold text-xl text-ink mb-3 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-soft leading-relaxed text-[15px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
