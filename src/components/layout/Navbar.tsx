"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Plus, MonitorPlay, Clock, ShoppingCart, GraduationCap, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 md:py-5 bg-white/85 border-b border-slate-100 glass-nav">
            <Link href="/" className="flex items-center gap-3 no-underline">
                <Image
                    src="/Aymorix_logo2.png"
                    alt="Aymorix logo"
                    width={42}
                    height={42}
                    className="w-9 h-9 sm:w-10 sm:h-10"
                    priority
                />
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-ink">
                    Aymorix Technologies
                </span>
            </Link>

            <ul className="hidden md:flex items-center gap-12 lg:gap-14 list-none">
                <li>
                    <Link href="#services" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        href="#industry"
                        className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        Industry
                    </Link>
                </li>
                <li>
                    <div className="group relative">
                        <Link
                            href="#products"
                            className="relative inline-flex items-center gap-1 text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                        >
                            Products
                            <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
                        </Link>

                        <div className="pointer-events-none absolute left-0 top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                            <div className="w-65 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_16px_40px_rgba(8,13,28,0.12)]">
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
                    <Link href="#tech-stack" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        Tech Stack
                    </Link>
                </li>
                <li>
                    <Link href="#faq" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        FAQ
                    </Link>
                </li>

                <li>
                    <Link href="#about" className="relative inline-block text-ink text-[16px] font-semibold tracking-[0.06em] transition-all duration-300 hover:text-brand hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                        About Us
                    </Link>
                </li>
            </ul>

            <div className="flex items-center gap-3">
                <Link href="#contact" className="hidden sm:inline-flex btn-primary">
                    Contact Us <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-ink transition hover:bg-slate-50 md:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
                    <div className="mx-auto max-w-screen-xl space-y-2">
                        <Link href="#services" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Services</Link>
                        <Link href="#industry" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Industry</Link>
                        <Link href="#products" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Products</Link>
                        <Link href="#tech-stack" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Tech Stack</Link>
                        <Link href="#faq" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">FAQ</Link>
                        <Link href="#about" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">About Us</Link>
                        <div className="mt-3 border-t border-slate-200 pt-3">
                            <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wide text-soft">Products</p>
                            <Link href="/products/algomate" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Algomate</Link>
                            <Link href="/products/zenith" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Zenith</Link>
                            <Link href="/products/allergy-detection-app" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Allergy Detection App</Link>
                            <Link href="/products/automated-land-boundary-detection" onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-slate-50">Automated Land Boundary Detection</Link>
                        </div>
                        <Link href="#contact" onClick={closeMenu} className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white">
                            Contact Us <ArrowRight size={14} strokeWidth={2} />
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
