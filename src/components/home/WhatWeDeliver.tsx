'use client';

import { useEffect, useState, useCallback } from 'react';

const slides = [
    {
        category: 'SERVICES',
        title: 'Using AI for Now and Future',
        description:
            'We lead the AI revolution by helping you build Gen AI-powered solutions that enhance critical workflows and simplify processes.',
        image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80',
    },
    {
        category: 'SERVICES',
        title: 'Deep Industry Knowledge',
        description:
            "We're experts in diverse industries, providing tailored solutions that address unique challenges and drive success.",
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    },
    {
        category: 'SERVICES',
        title: 'Custom SaaS Development',
        description:
            'We build robust and scalable platforms with modern architecture, clean code standards, and user-first experiences.',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80',
    },
    {
        category: 'SERVICES',
        title: 'Enterprise Workflow Automation',
        description:
            'We automate business operations through integrated tools, APIs, and smart orchestration for faster decisions and better outcomes.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
        category: 'SERVICES',
        title: 'Standardized Development',
        description:
            'Our standardized suite of processes makes product development faster and efficient to ensure consistency, quality, and reduced time-to-market.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    },
    {
        category: 'SERVICES',
        title: 'From Prototype to Deployment',
        description:
            'We move your idea from rapid prototype to production deployment with clear milestones, measurable outcomes, and dependable delivery.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    },
];

const INTERVAL = 3000;

export default function WhatWeDeliver() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);

    const goTo = useCallback((idx: number) => {
        setActive(idx);
        setProgress(0);
    }, []);

    // Auto-advance (resets on manual navigation too)
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive((prev) => (prev + 1) % slides.length);
            setProgress(0);
        }, INTERVAL);
        return () => clearTimeout(timer);
    }, [active]);

    // Progress bar tick
    useEffect(() => {
        setProgress(0);
        const tick = setInterval(() => {
            setProgress((p) => Math.min(p + 100 / (INTERVAL / 50), 100));
        }, 50);
        return () => clearInterval(tick);
    }, [active]);

    const slide = slides[active];

    return (
        <section className="py-14 md:py-16 bg-slate-100 border-y border-slate-200">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16">
                <div className="mb-7 md:mb-8">
                    <h2 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight">
                        What We Deliver
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
                    <div className="relative h-[280px] md:h-[400px] rounded-3xl overflow-hidden shadow-md border border-slate-200">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col justify-center">
                        <div>
                            <span className="text-[13px] md:text-sm font-bold tracking-[0.2em] uppercase text-brand mb-4 block">
                                {slide.category}
                            </span>
                            <h3 className="font-display font-extrabold text-3xl md:text-5xl text-ink tracking-tight leading-[1.1] mb-4">
                                {slide.title}
                            </h3>
                            <p className="text-mid text-lg md:text-xl leading-[1.45] max-w-xl">
                                {slide.description}
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-2 max-w-sm">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goTo(idx)}
                                    aria-label={`Slide ${idx + 1}`}
                                    className="relative h-1.5 w-14 rounded-full overflow-hidden bg-slate-300/80 shrink-0 focus:outline-none"
                                >
                                    {idx === active && (
                                        <span
                                            className="absolute inset-y-0 left-0 bg-brand-accent rounded-full"
                                            style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
                                        />
                                    )}
                                    {idx < active && (
                                        <span className="absolute inset-0 bg-brand-accent rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
