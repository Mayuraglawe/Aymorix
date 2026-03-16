import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-white/85 border-b border-slate-100 glass-nav">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-brand to-brand-accent">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        {/* Geometric X Concept */}
                        <path d="M4 4l12 12m0-12L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className="font-display font-bold text-lg tracking-tight text-ink">
                    Aymorix
                </span>
            </Link>

            <ul className="hidden md:flex items-center gap-9 list-none">
                <li>
                    <Link href="#services" className="text-soft text-sm font-medium hover:text-ink transition-colors tracking-tight">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="#products" className="text-soft text-sm font-medium hover:text-ink transition-colors tracking-tight">
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="#tech-stack" className="text-soft text-sm font-medium hover:text-ink transition-colors tracking-tight">
                        Tech Stack
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="text-soft text-sm font-medium hover:text-ink transition-colors tracking-tight">
                        About Us
                    </Link>
                </li>
            </ul>

            <div className="flex items-center gap-3">
                <Link href="#signin" className="btn-ghost hidden md:inline-flex">
                    Sign in
                </Link>
                <Link href="#contact" className="btn-primary">
                    Book a Demo <ArrowRight size={14} strokeWidth={2} />
                </Link>
            </div>
        </nav>
    );
}
