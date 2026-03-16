import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function ProductShowcase() {
    return (
        <section id="products" className="py-24 bg-ink text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,71,240,0.15),transparent_60%)]"></div>

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 flex flex-col items-center justify-center relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 text-slate-300 border border-white/20 text-xs font-semibold tracking-wide uppercase mb-3 text-center">
                        Engineered by Aymorix
                    </span>
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-5">
                        Products: Algomate
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        An enterprise-grade platform automating timetable scheduling using hybrid AI algorithms. Resolves complex NEP 2020 scheduling conflicts in seconds, saving 95% of administrative time.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-wide text-brand-accent">
                        99.9% Conflict-Free
                    </span>
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-wide text-[#0784a8]">
                        1000+ Concurrent Users
                    </span>
                    <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-wide text-emerald-400">
                        Built with Next.js + Python
                    </span>
                </div>

                <div className="relative w-full max-w-5xl mx-auto perspective-1000">
                    <div className="rounded-2xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden transform rotate-x-[12deg] -rotate-y-[5deg] scale-100 md:scale-105 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-700 ease-out">
                        <div className="h-8 bg-slate-800/80 border-b border-white/10 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </div>
                        {/* The user provided a large screen.png image, assume it's /screen.png */}
                        <Image
                            src="/screen.png"
                            alt="Algomate Dashboard Mockup"
                            width={1200}
                            height={700}
                            className="w-full h-auto object-cover opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
