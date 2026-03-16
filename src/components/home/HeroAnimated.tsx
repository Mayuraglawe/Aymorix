'use client';

import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function HeroAnimated() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // CRMLive Sparkline Canvas
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const sizeCanvas = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        sizeCanvas();

        const W = () => canvas.offsetWidth;
        const H = () => canvas.offsetHeight;
        const N = 80;
        const data: number[] = [];
        for (let i = 0; i < N; i++) {
            data.push(0.3 + 0.4 * Math.random() + 0.15 * Math.sin(i * 0.3));
        }

        let rafId: number;

        const drawSparkline = () => {
            const w = W();
            const h = H();
            ctx.clearRect(0, 0, w, h);

            const newY = Math.max(
                0.08,
                Math.min(0.95, data[data.length - 1] + (Math.random() - 0.48) * 0.08 + 0.004)
            );
            data.push(newY);
            if (data.length > N) data.shift();

            const xStep = w / (N - 1);
            const pad = 4;

            const grad = ctx.createLinearGradient(0, 0, 0, h);
            grad.addColorStop(0, 'rgba(24,71,240,0.18)');
            grad.addColorStop(1, 'rgba(24,71,240,0.01)');

            ctx.beginPath();
            data.forEach((v, i) => {
                const x = i * xStep;
                const y = h - pad - v * (h - pad * 2);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            });
            ctx.lineTo((N - 1) * xStep, h);
            ctx.lineTo(0, h);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();

            ctx.beginPath();
            data.forEach((v, i) => {
                const x = i * xStep;
                const y = h - pad - v * (h - pad * 2);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            });
            ctx.strokeStyle = '#1847f0';
            ctx.lineWidth = 1.8;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.stroke();

            rafId = requestAnimationFrame(drawSparkline);
        };

        drawSparkline();

        return () => {
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
            {/* Background Enhancements */}
            <div className="dot-grid absolute inset-0 opacity-55 pointer-events-none z-0"></div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(24, 71, 240, 0.055) 0%, transparent 68%)' }}
            ></div>

            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-8 md:px-16 py-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                {/* LEFT COLUMN: Copy & CTA */}
                <div className="flex-1 min-w-0 max-w-[540px]">
                    <div className="animate-[fadeIn_0.8s_ease_forwards] opacity-0 inline-block mb-7" style={{ animationDelay: '80ms' }}>
                        <span className="inline-flex items-center gap-2 bg-[#eef1fd] border-[1.5px] border-[#c3ccf8] rounded-full px-4 py-1.5 text-xs font-semibold text-brand tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full animate-pdot bg-brand"></span>
                            CRM · Custom SaaS · AI Integration — All in one
                        </span>
                    </div>

                    <h1
                        className="animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 mb-5 font-display font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight text-ink"
                        style={{ animationDelay: '180ms' }}
                    >
                        <span className="block">Software that</span>
                        <span className="block text-grad py-1">runs your</span>
                        <span className="block">business.</span>
                    </h1>

                    <p
                        className="animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 mb-10 text-[clamp(15px,1.45vw,17px)] text-soft max-w-[440px] leading-relaxed tracking-tight"
                        style={{ animationDelay: '280ms' }}
                    >
                        Aymorix is a deep-tech agency engineering cloud-native, enterprise-grade platforms. Tailor-built workflows that connect teams and automate operations.
                    </p>

                    <div className="animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 flex flex-wrap items-center gap-4 mb-12" style={{ animationDelay: '400ms' }}>
                        <Link href="#demo" className="btn-primary">
                            Book a Free Demo <ArrowRight size={14} strokeWidth={2} />
                        </Link>
                        <Link href="#algomate" className="btn-ghost">
                            <Play size={14} strokeWidth={2} className="text-mid" />
                            Watch Algomate in Action
                        </Link>
                    </div>

                    <div className="animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0 flex flex-wrap gap-3 mb-8" style={{ animationDelay: '520ms' }}>
                        <div className="bg-white border-[1.5px] border-slate-200 rounded-xl px-4 py-3 cursor-default hover:border-brand-accent/40 hover:-translate-y-[2px] hover:shadow-lg transition-all">
                            <div className="font-display font-bold text-[22px] text-ink tracking-tight">SIH 2025</div>
                            <div className="text-[11.5px] font-medium text-soft mt-1">Winners</div>
                        </div>
                        <div className="bg-white border-[1.5px] border-slate-200 rounded-xl px-4 py-3 cursor-default hover:border-brand-accent/40 hover:-translate-y-[2px] hover:shadow-lg transition-all">
                            <div className="font-display font-bold text-[22px] text-ink tracking-tight">Hybrid AI</div>
                            <div className="text-[11.5px] font-medium text-soft mt-1">Driven Engine</div>
                        </div>
                        <div className="bg-white border-[1.5px] border-slate-200 rounded-xl px-4 py-3 cursor-default hover:border-brand-accent/40 hover:-translate-y-[2px] hover:shadow-lg transition-all">
                            <div className="font-display font-bold text-[22px] text-ink tracking-tight">NEP 2020</div>
                            <div className="text-[11.5px] font-medium text-soft mt-1">Compliant</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Dashboard Mockup */}
                <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 pointer-events-none">
                    <div className="relative w-full max-w-[580px]">
                        <div className="product-panel opacity-0 animate-[fadeIn_0.8s_ease_forwards]" style={{ animationDelay: '400ms' }}>

                            {/* Chrome Bar */}
                            <div className="chrome-bar px-4 py-3 flex items-center gap-2">
                                <div className="w-[10px] h-[10px] rounded-full bg-red-400"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-yellow-400"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-green-400"></div>
                                <div className="flex-1 mx-3 h-6 rounded-md bg-[#eef0f7] flex items-center px-3 gap-1.5 text-[11px] text-soft">
                                    app.aymorix.com/algomate
                                </div>
                                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand/10 text-[10.5px] font-semibold text-brand">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-blink"></span>
                                    LIVE
                                </div>
                            </div>

                            {/* Panel Body */}
                            <div className="p-4 bg-slate-50/50">
                                {/* KPI Row */}
                                <div className="grid grid-cols-4 gap-2 mb-3">
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '500ms' }}>
                                        <div className="text-[9.5px] font-semibold text-soft uppercase tracking-wider mb-1.5">Schedules</div>
                                        <div className="font-display font-bold text-[15px] text-ink">1,400+</div>
                                        <div className="text-[9.5px] font-semibold text-green-600 mt-1">100% Conflict-free</div>
                                    </div>
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '550ms' }}>
                                        <div className="text-[9.5px] font-semibold text-soft uppercase tracking-wider mb-1.5">Teachers</div>
                                        <div className="font-display font-bold text-[15px] text-ink">450</div>
                                        <div className="text-[9.5px] font-semibold text-green-600 mt-1">Assigned Load</div>
                                    </div>
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '600ms' }}>
                                        <div className="text-[9.5px] font-semibold text-soft uppercase tracking-wider mb-1.5">Time Saved</div>
                                        <div className="font-display font-bold text-[15px] text-ink animate-kpiTick">95%</div>
                                        <div className="text-[9.5px] font-semibold text-amber-500 mt-1">Reduced Manual Hrs</div>
                                    </div>
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '650ms' }}>
                                        <div className="text-[9.5px] font-semibold text-soft uppercase tracking-wider mb-1.5">Solver Load</div>
                                        <div className="font-display font-bold text-[15px] text-ink">1.2s</div>
                                        <div className="text-[9.5px] font-semibold text-brand mt-1">CP-SAT Active</div>
                                    </div>
                                </div>

                                <div className="grid gap-3 grid-cols-[1.15fr_0.85fr]">
                                    {/* Chart */}
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '700ms' }}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-[11px] font-semibold text-ink">Timetable Generation Engine</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-blink"></span>
                                                <span className="text-[9.5px] font-semibold text-brand">Running</span>
                                            </div>
                                        </div>
                                        {/* Canvas Sparkline */}
                                        <canvas ref={canvasRef} height="62" className="w-full block rounded mb-2"></canvas>
                                        {/* Simulated Bars */}
                                        <div className="flex items-end gap-1 h-11 mt-2">
                                            <div className="flex-1 h-[40%] bg-gradient-to-t from-brand/20 to-brand rounded-t-[3px]"></div>
                                            <div className="flex-1 h-[65%] bg-gradient-to-t from-brand/20 to-brand/80 rounded-t-[3px]"></div>
                                            <div className="flex-1 h-[55%] bg-gradient-to-t from-brand/20 to-brand/90 rounded-t-[3px]"></div>
                                            <div className="flex-1 h-[80%] bg-gradient-to-t from-brand/20 to-brand/80 rounded-t-[3px]"></div>
                                            <div className="flex-1 h-[60%] bg-gradient-to-t from-brand/20 to-brand/70 rounded-t-[3px]"></div>
                                            <div className="flex-1 h-full bg-gradient-to-t from-brand/60 to-brand rounded-t-[3px] shadow-[0_2px_12px_rgba(24,71,240,0.28)] relative overflow-hidden">
                                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/30 rounded-t-[3px] animate-progShimmer"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activity Feed */}
                                    <div className="mc opacity-0 animate-[fadeUp_0.8s_ease_forwards]" style={{ animationDelay: '800ms' }}>
                                        <div className="flex items-center justify-between mb-2.5">
                                            <span className="text-[11px] font-semibold text-ink">Live Activity</span>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-slate-50 border border-slate-100">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand to-brand-accent text-white flex items-center justify-center text-[8px] font-bold">TC</div>
                                                <div className="flex-1">
                                                    <div className="text-[9.5px] font-semibold text-ink">Timetable generated</div>
                                                    <div className="text-[8px] text-soft">CompSci Dept</div>
                                                </div>
                                                <span className="text-[8.5px] text-soft">1m ago</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-slate-50 border border-slate-100">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-[8px] font-bold">CR</div>
                                                <div className="flex-1">
                                                    <div className="text-[9.5px] font-semibold text-ink">Conflict resolved</div>
                                                    <div className="text-[8px] text-soft">Lab 3 Booking</div>
                                                </div>
                                                <span className="text-[8.5px] text-soft">5m ago</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-brand/5 border border-brand/10">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-brand-accent text-white flex items-center justify-center text-[8px] font-bold hover:animate-pulse"> AI</div>
                                                <div className="flex-1">
                                                    <div className="text-[9.5px] font-semibold text-ink flex gap-1">AI Solver <span className="text-[8px] font-normal text-soft">is typing...</span></div>
                                                    <div className="flex gap-1 mt-1">
                                                        <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce"></div>
                                                        <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                        <div className="w-1 h-1 bg-brand-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                    </div>
                                                </div>
                                                <span className="text-[8.5px] font-semibold text-brand-accent">Now</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
