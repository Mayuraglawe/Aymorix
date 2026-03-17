import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-white/85 border-b border-slate-100 glass-nav">
            <Link href="/" className="flex items-center gap-3 no-underline">
                <Image
                    src="/Aymorix_logo2.png"
                    alt="Aymorix logo"
                    width={42}
                    height={42}
                    className="w-10 h-10"
                    priority
                />
                <span className="font-display font-bold text-2xl tracking-tight text-ink">
                    Aymorix
                </span>
            </Link>

            <ul className="hidden md:flex items-center gap-12 lg:gap-14 list-none">
                <li>
                    <Link href="#services" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Services
                    </Link>
                </li>
                <li>
                    <div className="group relative">
                        <button
                            type="button"
                            className="relative inline-flex items-center gap-1 text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                        >
                            Products
                            <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                        </button>

                        <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                            <div className="w-[260px] rounded-xl border border-slate-200 bg-white p-2 shadow-[0_16px_40px_rgba(8,13,28,0.12)]">
                                <Link href="/products/algomate" className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 hover:text-brand">
                                    Algomate
                                </Link>
                                <Link href="/products/zenith" className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 hover:text-brand">
                                    Zenith
                                </Link>
                                <Link href="/products/allergy-detection-app" className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 hover:text-brand">
                                    Allergy Detection App
                                </Link>
                                <Link href="/products/automated-land-boundary-detection" className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink transition-colors hover:bg-slate-50 hover:text-brand">
                                    Automated Land Boundary Detection
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <Link href="#tech-stack" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Tech Stack
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        About Us
                    </Link>
                </li>
            </ul>

            <div className="flex items-center gap-3">
                <Link href="#contact" className="btn-primary">
                    Book a Demo <ArrowRight size={14} strokeWidth={2} />
                </Link>
            </div>
        </nav>
    );
}
