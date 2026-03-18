import { Code2, BrainCircuit, Workflow } from 'lucide-react';

export default function Services() {
    const services = [
        {
            title: "Custom SaaS Development",
            description: "End-to-end development of bespoke web platforms using Next.js and secure backends.",
            icon: Code2,
            iconColor: 'text-brand',
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85",
            delay: "100ms"
        },
        {
            title: "AI Integration",
            description: "Specializing in Python-driven AI modules, CP-SAT solvers, and constraint-satisfaction engines.",
            icon: BrainCircuit,
            iconColor: 'text-brand-accent',
            image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1200&q=85",
            delay: "200ms"
        },
        {
            title: "Enterprise Workflow Automation",
            description: "API bridges and n8n workflows to eliminate manual data entry and streamline operations.",
            icon: Workflow,
            iconColor: 'text-[#0784a8]',
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
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
                    {services.map((service, idx) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-[fadeUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                                style={{ animationDelay: service.delay }}
                            >
                                <div className="pointer-events-none absolute inset-0 z-0 translate-y-[-100%] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#072a57]/75 via-[#0f4b86]/65 to-[#0c698f]/70" />
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-slate-50 border border-slate-100 shadow-sm transition-colors group-hover:bg-white/20 group-hover:border-white/30 ${service.iconColor} group-hover:text-white`}>
                                        <Icon size={24} className="text-current" />
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3 tracking-tight transition-colors group-hover:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-soft leading-relaxed text-[15px] transition-colors group-hover:text-blue-100">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Industries We Excel In Heading */}
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 mt-24">
                <h2 id="industry" className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight mb-4 text-center">
                    Industries We Excel In
                </h2>
                <p className="text-soft text-base md:text-lg max-w-2xl mx-auto text-center mb-10">
                    Delivering tailored software solutions to meet the unique challenges of diverse sectors.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* First row: Education, Healthcare */}
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col items-start justify-between min-h-[260px] md:min-h-[320px] group">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">Education</h3>
                        <div className="relative w-full h-40 mb-2">
                            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80" alt="Education" className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                <p className="text-ink text-lg font-medium mb-4">Our education solutions streamline administration, enhance learning experiences, and empower institutions with digital tools for modern classrooms.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col items-start justify-between min-h-[260px] md:min-h-[320px]">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">Healthcare</h3>
                        <div className="relative w-full h-40 mb-2 group">
                            <img src="/health_care.png" alt="Healthcare" className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                <p className="text-ink text-lg font-medium mb-4">Our healthcare app development services can help you improve staff productivity, reduce costs, and achieve service excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Second row: Food & Beverages, Manufacturing, E-commerce */}
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col items-start justify-between min-h-[260px] md:min-h-[320px] group">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">Media and Entertainment</h3>
                        <div className="relative w-full h-40 mb-2">
                            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Media and Entertainment" className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                <p className="text-ink text-lg font-medium mb-4">We create platforms for content management, streaming, and audience engagement.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col items-start justify-between min-h-[260px] md:min-h-[320px] group">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">Hospitality</h3>
                        <div className="relative w-full h-40 mb-2">
                            <img src="/hospitality.png" alt="Hospitality" className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                <p className="text-ink text-lg font-medium mb-4">Our hospitality solutions optimize guest management, booking systems, and operational workflows for hotels, restaurants, and resorts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-md p-8 flex flex-col items-start justify-between min-h-[260px] md:min-h-[320px] group">
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">E-commerce</h3>
                        <div className="relative w-full h-40 mb-2">
                            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="E-commerce" className="w-full h-full object-cover rounded-xl transition-opacity duration-500 group-hover:opacity-0" />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-6 group-hover:opacity-100 opacity-0 transition-opacity duration-500">
                                <p className="text-ink text-lg font-medium mb-4">We build seamless e-commerce platforms for shopping and customer engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
