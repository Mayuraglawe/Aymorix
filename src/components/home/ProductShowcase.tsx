"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type Product = {
    name: string;
    description: string;
    metrics: string[];
    image: string;
    imageAlt: string;
    href?: string;
};

const PRODUCTS: Product[] = [
    {
        name: 'Algomate',
        description:
            'An enterprise-grade timetable automation platform using hybrid AI algorithms to resolve complex scheduling conflicts in seconds.',
        metrics: ['99.9% Conflict-Free', '1000+ Concurrent Users', 'Next.js + Python'],
        image: '/screen.png',
        imageAlt: 'Algomate dashboard preview',
        href: '/products/algomate',
    },
    {
        name: 'Zenith',
        description:
            'A unified operations command center that connects departments, workflows, and analytics for faster and smarter decision-making.',
        metrics: ['Real-time Insights', 'Role-based Dashboards', 'Cloud-native Architecture'],
        image: '/zenith_website1.jpeg',
        imageAlt: 'Zenith operations dashboard',
        href: '/products/zenith',
    },
    {
        name: 'Allergy Detection App',
        description:
            'AI-assisted allergy detection workflows that help identify risks earlier and provide reliable recommendations for clinical teams.',
        metrics: ['AI-assisted Detection', 'Faster Risk Screening', 'Audit-ready Reports'],
        image: '/allergy1.png',
        imageAlt: 'Medical analysis interface for allergy detection',
        href: '/products/allergy-detection-app',
    },
    {
        name: 'Automated Land Boundary Detection',
        description:
            'Computer vision powered geospatial product that detects and validates land boundaries from satellite and survey data with high precision.',
        metrics: ['Satellite + GIS Processing', 'High-Precision Mapping', 'Automated Compliance Checks'],
        image: '/boundary.jpeg',
        imageAlt: 'Map-based land boundary detection product view',
        href: '/products/automated-land-boundary-detection',
    },
];

const ANIMATION_MS = 700;
const CYCLE_MS = 3500;
const HOLD_MS = CYCLE_MS - ANIMATION_MS;

export default function ProductShowcase() {
    const [queue, setQueue] = useState<number[]>(PRODUCTS.map((_, idx) => idx));
    const [isAnimating, setIsAnimating] = useState(false);
    const [progress, setProgress] = useState(0);

    const activeIndex = queue[0];

    useEffect(() => {
        if (isAnimating) return;

        const startAt = Date.now();
        const tick = setInterval(() => {
            const elapsed = Date.now() - startAt;
            const pct = Math.min((elapsed / HOLD_MS) * 100, 100);
            setProgress(pct);

            if (pct >= 100) {
                setIsAnimating(true);
                clearInterval(tick);
            }
        }, 50);

        return () => clearInterval(tick);
    }, [activeIndex, isAnimating]);

    useEffect(() => {
        if (!isAnimating) return;

        const timer = setTimeout(() => {
            setQueue((prev) => [...prev.slice(1), prev[0]]);
            setProgress(0);
            setIsAnimating(false);
        }, ANIMATION_MS);

        return () => clearTimeout(timer);
    }, [isAnimating]);

    const activeProduct = useMemo(() => PRODUCTS[activeIndex], [activeIndex]);

    const bringToFront = (targetIdx: number) => {
        if (targetIdx === activeIndex && !isAnimating) return;

        // Allow direct jump even when auto-transition animation is currently running.
        if (isAnimating) {
            setIsAnimating(false);
        }

        setQueue((prev) => {
            const at = prev.indexOf(targetIdx);
            if (at <= 0) return prev;
            return [...prev.slice(at), ...prev.slice(0, at)];
        });
        setProgress(0);
    };

    const getCardClasses = (position: number) => {
        if (position === 0) {
            return isAnimating
                ? 'z-30 -translate-y-[112%] opacity-0 scale-[0.98]'
                : 'z-30 translate-y-0 opacity-100 scale-100';
        }

        if (position === 1) {
            return isAnimating
                ? 'z-20 translate-y-0 opacity-100 scale-100'
                : 'z-20 translate-y-4 opacity-90 scale-[0.985]';
        }

        if (position === 2) {
            return isAnimating
                ? 'z-10 translate-y-4 opacity-90 scale-[0.985]'
                : 'z-10 translate-y-8 opacity-75 scale-[0.97]';
        }

        return 'z-0 translate-y-10 opacity-0 scale-95 pointer-events-none';
    };

    return (
        <section id="products" className="py-24 text-white overflow-hidden relative bg-[linear-gradient(145deg,#050916_0%,#0b1126_42%,#14122f_100%)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(0,190,255,0.18),transparent_38%),radial-gradient(circle_at_88%_8%,rgba(153,69,255,0.2),transparent_42%),radial-gradient(circle_at_80%_88%,rgba(45,115,255,0.2),transparent_45%)]" />
            <div className="absolute -left-24 top-1/3 h-60 w-60 rotate-12 rounded-[40px] border border-cyan-200/20 bg-cyan-300/10 blur-2xl" />
            <div className="absolute -right-20 bottom-16 h-52 w-52 -rotate-12 rounded-[42px] border border-fuchsia-200/20 bg-fuchsia-300/10 blur-2xl" />

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 text-slate-300 border border-white/20 text-xs font-semibold tracking-wide uppercase mb-3 text-center">
                        Engineered by Aymorix
                    </span>
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-5">
                        Our Products
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Built to solve real-world operational challenges with scalable engineering and AI-first architecture.
                    </p>
                </div>

                <div className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-sm p-4 md:p-6 shadow-[0_24px_60px_rgba(5,8,22,0.45)]">
                    <div className="relative h-[420px] md:h-[460px]">
                        {PRODUCTS.map((product, idx) => {
                            const position = queue.indexOf(idx);
                            return (
                                <article
                                    key={product.name}
                                    className={`absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${getCardClasses(position)}`}
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-full">
                                        <div className="p-7 md:p-10 text-ink flex flex-col justify-between">
                                            <div>
                                                <span className="text-5xl md:text-6xl font-light text-slate-300 leading-none">{idx + 1}</span>
                                                <h3 className="mt-6 font-display font-extrabold text-3xl md:text-4xl tracking-tight text-ink leading-tight">
                                                    {product.name}
                                                </h3>
                                                <p className="mt-4 text-mid text-base leading-relaxed max-w-lg">
                                                    {product.description}
                                                </p>
                                            </div>

                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {product.metrics.map((metric) => (
                                                    <span
                                                        key={`${product.name}-${metric}`}
                                                        className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold tracking-wide text-mid"
                                                    >
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>

                                            {product.href && (
                                                <div className="mt-6">
                                                    <Link
                                                        href={product.href}
                                                        className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-brand"
                                                    >
                                                        Explore {product.name}
                                                        <span aria-hidden="true">↗</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative min-h-[220px] lg:min-h-full">
                                            <Image
                                                src={product.image}
                                                alt={product.imageAlt}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex items-center gap-2.5">
                        {PRODUCTS.map((product, idx) => (
                            <button
                                key={`${product.name}-progress`}
                                onClick={() => bringToFront(idx)}
                                className="relative h-1.5 w-14 rounded-full overflow-hidden bg-white/20 shrink-0 hover:bg-white/30 transition-colors"
                                aria-label={`View ${product.name}`}
                            >
                                {idx === activeIndex && (
                                    <span
                                        className="absolute inset-y-0 left-0 bg-brand-accent rounded-full"
                                        style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {PRODUCTS.map((product, idx) => (
                            <button
                                key={`${product.name}-tab`}
                                onClick={() => bringToFront(idx)}
                                className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                                    idx === activeIndex
                                        ? 'bg-white/10 border-white/20 text-white'
                                        : 'bg-transparent border-white/10 text-slate-400 hover:text-white'
                                }`}
                            >
                                {product.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
