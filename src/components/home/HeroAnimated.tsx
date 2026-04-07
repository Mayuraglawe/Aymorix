'use client';

import { Play, ArrowRight, Home, LayoutGrid, Smartphone, ChevronUp, Check, Bell, Star, Briefcase, Package, Sun, Truck, UserRound, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Tab = 'crm' | 'erp' | 'app';

type FeedItem = {
    initials: string;
    name: string;
    action: string;
    chip: string;
    chipClass: string;
};

export default function HeroAnimated() {
    const [activeTab, setActiveTab] = useState<Tab>('crm');
    const [showToast, setShowToast] = useState(false);
    const [kpiTick, setKpiTick] = useState(0);
    const [kpi, setKpi] = useState({ revenueM: 12.4, leads: 248, dealsWon: 36, pipelineK: 840 });
    const [pipelineVals, setPipelineVals] = useState([68, 44, 28, 18]);
    const [feedRows, setFeedRows] = useState<FeedItem[]>([
        {
            initials: 'RS',
            name: 'Rahul Sharma',
            action: 'Viewed proposal · Meridian Corp',
            chip: 'Hot lead',
            chipClass: 'bg-[#dcfce7] text-[#14532d]',
        },
        {
            initials: 'NK',
            name: 'Neha Kapoor',
            action: 'Opened quote · Vortex',
            chip: 'Proposal',
            chipClass: 'bg-[#dbeafe] text-[#1e3a8a]',
        },
    ]);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const triggerToast = () => {
        setShowToast(true);
        window.setTimeout(() => setShowToast(false), 2200);
    };

    const ERP_HEALTH = [
        { label: 'Orders', value: 96, color: 'from-[#5b30e8] to-[#7e5cf7]' },
        { label: 'Inventory', value: 88, color: 'from-[#1847f0] to-[#4d7aff]' },
        { label: 'Fulfillment', value: 91, color: 'from-[#0784a8] to-[#0ba7cc]' },
    ];

    // Keep tab auto-rotation consistent on desktop and mobile.
    useEffect(() => {
        const tabOrder: Tab[] = ['crm', 'erp', 'app'];
        const rotateTimer = window.setInterval(() => {
            setActiveTab((prev) => {
                const currentIndex = tabOrder.indexOf(prev);
                return tabOrder[(currentIndex + 1) % tabOrder.length];
            });
        }, 3000);

        return () => window.clearInterval(rotateTimer);
    }, []);

    // CRM Live Sparkline Logic
    useEffect(() => {
        if (activeTab !== 'crm') return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const sizeCanvas = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        sizeCanvas();
        window.addEventListener('resize', sizeCanvas);

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
                Math.min(0.95, (data[data.length - 1] || 0.5) + (Math.random() - 0.48) * 0.08 + 0.004)
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
            window.removeEventListener('resize', sizeCanvas);
        };
    }, [activeTab]);

    useEffect(() => {
        if (activeTab !== 'crm') return;

        const kpiTimer = window.setInterval(() => {
            setKpiTick((value) => value + 1);
            setKpi((prev) => ({
                revenueM: +(prev.revenueM + (Math.random() * 0.3 - 0.05)).toFixed(1),
                leads: Math.max(0, Math.round(prev.leads + (Math.random() * 8 - 3))),
                dealsWon: Math.max(0, Math.round(prev.dealsWon + (Math.random() * 2 - 0.4))),
                pipelineK: Math.max(0, Math.round(prev.pipelineK + (Math.random() * 12 - 4))),
            }));
        }, 4000);

        const pipelineTimer = window.setInterval(() => {
            setPipelineVals((prev) => prev.map((value) => Math.max(5, Math.min(95, value + (Math.random() * 8 - 4)))));
        }, 5000);

        const feedTimer = window.setInterval(() => {
            setFeedRows((prev) => {
                const nextItem: FeedItem = {
                    initials: 'AJ',
                    name: 'Amir Jafari',
                    action: 'Won contract · Meridian Corp',
                    chip: 'Won!',
                    chipClass: 'bg-[#dcfce7] text-[#14532d]',
                };
                if (nextItem.chip === 'Won!') {
                    triggerToast();
                }
                return [nextItem, ...prev].slice(0, 2);
            });
        }, 6000);

        const firstToast = window.setTimeout(triggerToast, 2800);

        return () => {
            window.clearInterval(kpiTimer);
            window.clearInterval(pipelineTimer);
            window.clearInterval(feedTimer);
            window.clearTimeout(firstToast);
        };
    }, [activeTab]);

    return (
        <section className="relative min-h-screen flex flex-col bg-white overflow-hidden pt-20 md:pt-24 max-[600px]:pt-[76px]">
            {/* Background Background */}
            <div className="dot-grid absolute inset-0 opacity-55 pointer-events-none z-0"></div>
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-275 h-130 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(24, 71, 240, 0.055) 0%, transparent 68%)' }}
            ></div>

            {/* Main Content Area */}
            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-10 max-[600px]:py-7 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 max-[600px]:gap-7">

                    {/* Left Side: Copy & CTA */}
                    <div className="flex-1 min-w-0 max-w-135 max-[600px]:max-w-full pt-3 max-[600px]:pt-1">
                        <div className="animate-fadeIn opacity-0 inline-block mb-7 max-[600px]:mb-5" style={{ animationDelay: '80ms' }}>
                            <span className="inline-flex items-center gap-2 bg-[#eef1fd] border-[1.5px] border-[#c3ccf8] rounded-full px-4 py-1.5 text-xs font-semibold text-brand tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full animate-pdot bg-brand"></span>
                                CRM · ERP · Custom Apps — All in one
                            </span>
                        </div>

                        <h1
                            className="animate-fadeUp opacity-0 mb-5 max-[600px]:mb-4 font-display font-extrabold text-[clamp(2.4rem,5vw,4.2rem)] max-[600px]:text-[clamp(1.9rem,9vw,2.5rem)] leading-[1.01] tracking-[-0.045em] text-ink"
                            style={{ animationDelay: '180ms' }}
                        >
                            <span className="block">
                                Engineering <span className="text-blue-600">scalable SaaS</span> & <span className="text-black">intelligent automations</span>
                            </span>
                        </h1>

                        <p
                            className="animate-fadeUp opacity-0 mb-10 max-[600px]:mb-7 text-[clamp(14.5px,1.45vw,16.5px)] max-[600px]:text-[14px] text-soft max-w-107.5 max-[600px]:max-w-full leading-[1.8] max-[600px]:leading-[1.65] tracking-tight"
                            style={{ animationDelay: '280ms' }}
                        >
                            Tailor-built CRM, ERP, and mobile apps that connect your teams, automate workflows, and give you complete visibility across every department.
                        </p>

                        <div className="animate-fadeUp opacity-0 flex flex-wrap items-center gap-3 mb-12 max-[600px]:mb-8" style={{ animationDelay: '400ms' }}>
    			<Link href="#contact" className="btn-primary">
    				Get In Touch <ArrowRight size={13} strokeWidth={2.5} />
    			</Link>
    		</div>

                    {/* 4 Pillars stats section restored */}
                    <div className="mt-8 max-[600px]:mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-[600px]:gap-3 text-center">
                        <div>
                            <div className="text-3xl max-[600px]:text-2xl font-bold text-primary">50+</div>
                            <div className="text-xs text-gray-500">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-3xl max-[600px]:text-2xl font-bold text-primary">20+</div>
                            <div className="text-xs text-gray-500">Industries Served</div>
                        </div>
                        <div>
                            <div className="text-3xl max-[600px]:text-2xl font-bold text-primary">100k+</div>
                            <div className="text-xs text-gray-500">Users Impacted</div>
                        </div>
                        <div>
                            <div className="text-3xl max-[600px]:text-2xl font-bold text-primary">10+</div>
                            <div className="text-xs text-gray-500">Countries Reached</div>
                        </div>
                    </div>

                        <div className="animate-fadeUp opacity-0 flex flex-wrap gap-2" style={{ animationDelay: '660ms' }}>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold bg-[#eef1fd] border-[1.5px] border-[#c3ccf8] text-brand">
                                <Home size={11} /> CRM Suite
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold bg-[#f2efff] border-[1.5px] border-[#cec3fa] text-brand-accent">
                                <LayoutGrid size={11} /> ERP Platform
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold bg-[#ecfcff] border-[1.5px] border-[#a0ecf8] text-[#0784a8]">
                                <Smartphone size={11} /> Mobile Apps
                            </span>
                        </div>
                    </div>

                    {/* Right Side: Interactive Panel */}
                    <div className="flex w-full lg:flex-1 items-start justify-center min-w-0 pt-2 mt-2 lg:mt-0 overflow-hidden">
                        <div className="relative w-full max-w-full lg:max-w-160 overflow-hidden">
                            <div className="product-panel animate-fadeIn opacity-0" style={{ animationDelay: '400ms' }}>

                                {/* Browser Chrome */}
                                <div className="chrome-bar px-4 py-2.75 flex items-center gap-1.75">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
                                    <div className="flex-1 mx-3 h-6 rounded-md bg-[#eef0f7] flex items-center px-2.5 gap-1.5 text-[11px] text-soft">
                                        aymorix.com
                                    </div>
                                    <div className="flex items-center gap-1.25 px-2.5 py-1 rounded-md bg-[#eef1fd] text-[10.5px] font-bold text-brand">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-blink"></span>
                                        LIVE
                                    </div>
                                </div>

                                {/* Tabs Navigation */}
                                <div className="flex border-b border-[#e8edf6] bg-[#fafbfd] overflow-x-auto">
                                    <button
                                        onClick={() => setActiveTab('crm')}
                                        className={`shrink-0 px-3 sm:px-4.5 py-2.5 text-[10px] sm:text-[12px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-all outline-none border-b-[2.5px] ${activeTab === 'crm' ? 'text-brand border-brand bg-white' : 'text-soft border-transparent hover:text-mid hover:bg-[#f4f5fb]'
                                            }`}
                                    >
                                        <Home size={11} /> CRM Dashboard
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('erp')}
                                        className={`shrink-0 px-3 sm:px-4.5 py-2.5 text-[10px] sm:text-[12px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-all outline-none border-b-[2.5px] ${activeTab === 'erp' ? 'text-brand border-brand bg-white' : 'text-soft border-transparent hover:text-mid hover:bg-[#f4f5fb]'
                                            }`}
                                    >
                                        <LayoutGrid size={11} /> ERP Overview
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('app')}
                                        className={`shrink-0 px-3 sm:px-4.5 py-2.5 text-[10px] sm:text-[12px] font-semibold flex items-center gap-1 sm:gap-1.5 transition-all outline-none border-b-[2.5px] ${activeTab === 'app' ? 'text-brand border-brand bg-white' : 'text-soft border-transparent hover:text-mid hover:bg-[#f4f5fb]'
                                            }`}
                                    >
                                        <Smartphone size={11} /> Mobile App
                                    </button>
                                </div>

                                {/* Tab Content */}
                                <div className="relative min-h-132.5 overflow-x-hidden p-4 max-[600px]:min-h-0 max-[600px]:p-3">
                                    {activeTab === 'crm' && (
                                        <div key="crm-tab" className="animate-fadeIn">
                                            {/* Toast Notification */}
                                            <div className={`absolute top-4 right-3 z-50 w-52.5 transition-all duration-400 ${showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
                                                <div className="bg-white border-[1.5px] border-[#a7f0c4] rounded-xl p-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.1)] flex items-center gap-2.5">
                                                    <div className="relative">
                                                        <div className="w-6.5 h-6.5 bg-[#dcfce7] rounded-full flex items-center justify-center">
                                                            <Check size={12} className="text-[#0f7a42]" strokeWidth={3} />
                                                        </div>
                                                        <div className="absolute inset-0 rounded-full border-2 border-[#0f7a42]/30 animate-ping-slow"></div>
                                                    </div>
                                                    <div>
                                                        <div className="text-[10.5px] font-bold text-ink">Deal Closed!</div>
                                                        <div className="text-[9px] text-soft">Meridian Corp · $48K</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* KPI Grid */}
                                            <div className="grid grid-cols-4 gap-2 mb-3">
                                                {[
                                                    { label: 'Revenue', val: `$${kpi.revenueM.toFixed(1)}M`, pct: '+18%', up: true, delay: '0ms' },
                                                    { label: 'Leads', val: `${Math.round(kpi.leads)}`, pct: '+32%', up: true, delay: '90ms' },
                                                    { label: 'Deals Won', val: `${Math.round(kpi.dealsWon)}`, pct: '-4%', up: false, delay: '180ms' },
                                                    { label: 'Pipeline', val: `$${Math.round(kpi.pipelineK)}K`, pct: '+6%', up: true, delay: '270ms' },
                                                ].map((kpi, i) => (
                                                    <div key={i} className="mc animate-kpiPop opacity-0" style={{ animationDelay: kpi.delay }}>
                                                        <div className="text-[9.5px] font-bold text-soft uppercase tracking-wider mb-1"> {kpi.label}</div>
                                                        <div key={`${i}-${kpiTick}`} className="font-display font-extrabold text-[15px] text-ink leading-tight tracking-tight animate-kpiTick">{kpi.val}</div>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <ChevronUp size={9} className={kpi.up ? 'text-green-700' : 'rotate-180 text-red-600'} />
                                                            <span className={`text-[9.5px] font-bold ${kpi.up ? 'text-green-700' : 'text-red-600'}`}> {kpi.pct}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Chart Section */}
                                            <div className="grid gap-3 grid-cols-[1.15fr_0.85fr] mb-3">
                                                <div className="mc">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-[11px] font-bold text-ink">Live Revenue</span>
                                                        <div className="flex items-center gap-1">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0f7a42] animate-blink"></span>
                                                            <span className="text-[9.5px] font-bold text-[#0f7a42]">Streaming</span>
                                                        </div>
                                                    </div>
                                                    <canvas ref={canvasRef} height="62" className="w-full block rounded-md mb-2"></canvas>
                                                    <div className="flex items-end gap-1 h-11 mt-2">
                                                        {[52, 70, 44, 86, 64].map((h, i) => (
                                                            <div key={i} className="flex-1 bg-linear-to-t from-[#dce8ff] to-brand rounded-t-[3px] animate-barRise opacity-0" style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}></div>
                                                        ))}
                                                        <div className="flex-1 h-full bg-linear-to-t from-brand/60 to-brand rounded-t-[3px] shadow-[0_2px_12px_rgba(24,71,240,0.28)] relative overflow-hidden animate-barRise opacity-0" style={{ animationDelay: '300ms' }}>
                                                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/30 animate-progShimmer"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between mt-1 text-[8px] text-soft font-medium">
                                                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
                                                        <span className="text-brand font-bold flex items-center">
                                                            Dec <span className="w-px h-2 bg-brand ml-0.5 animate-blink"></span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mc">
                                                    <div className="flex items-center justify-between mb-2.5">
                                                        <span className="text-[11px] font-bold text-ink">Pipeline</span>
                                                        <span className="text-[9px] font-bold text-brand bg-[#eef1fd] px-1.5 py-0.5 rounded-full">Live</span>
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        {[
                                                            { label: 'Qualified', val: Math.round(pipelineVals[0] || 68), color: 'from-[#4d7aff] to-brand' },
                                                            { label: 'Proposal', val: Math.round(pipelineVals[1] || 44), color: 'from-[#7e5cf7] to-[#5b30e8]' },
                                                            { label: 'Negotiation', val: Math.round(pipelineVals[2] || 28), color: 'from-[#0ba7cc] to-[#0784a8]' },
                                                            { label: 'Closed Won', val: Math.round(pipelineVals[3] || 18), color: 'from-[#1cad5e] to-[#0f7a42]' },
                                                        ].map((item, i) => (
                                                            <div key={i}>
                                                                <div className="flex justify-between text-[9.5px] mb-1 font-medium">
                                                                    <span className="text-soft">{item.label}</span>
                                                                    <span className="text-ink font-bold">{item.val}%</span>
                                                                </div>
                                                                <div className="prog-track h-1.25">
                                                                    <div
                                                                        className={`h-full rounded-full bg-linear-to-r ${item.color} relative overflow-hidden transition-all duration-1000 ease-out`}
                                                                        style={{ width: `${item.val}%` }}
                                                                    >
                                                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent w-[30%] animate-progShimmer"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Activity Feed */}
                                            <div className="mc">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-[11px] font-bold text-ink">Live Activity</span>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-blink"></span>
                                                        <span className="text-[9px] font-bold text-brand">Real-time</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    {feedRows.map((row, idx) => (
                                                        <div key={`${row.initials}-${row.action}-${idx}`} className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#f7f8fb] animate-rowSlide opacity-0" style={{ animationDelay: `${idx * 100}ms` }}>
                                                            <div className={`w-7 h-7 rounded-full bg-linear-to-br ${row.avatarClass} text-white flex items-center justify-center text-[9px] font-bold`}>{row.initials}</div>
                                                            <div className="flex-1">
                                                                <div className="text-[10px] font-bold text-ink leading-tight">{row.name}</div>
                                                                <div className="text-[8.5px] text-soft">{row.action}</div>
                                                            </div>
                                                            <span className={`px-1.5 py-0.5 rounded-full text-[8.5px] font-bold ${row.chipClass}`}>{row.chip}</span>
                                                            <span className="text-[9px] text-soft">Now</span>
                                                        </div>
                                                    ))}
                                                    {/* Typing Row */}
                                                    <div className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#eef1fd] animate-rowSlide opacity-0" style={{ animationDelay: '200ms' }}>
                                                        <div className="w-7 h-7 rounded-full bg-linear-to-br from-brand-accent to-[#9069f8] text-white flex items-center justify-center text-[9px] font-bold">AJ</div>
                                                        <div className="flex-1">
                                                            <div className="text-[10px] font-bold text-ink flex items-center gap-1.5">
                                                                Amir Jafari <span className="text-[8.5px] font-normal text-soft">is typing...</span>
                                                            </div>
                                                            <div className="flex gap-0.5 mt-1">
                                                                <span className="w-1 h-1 bg-brand rounded-full animate-bounce"></span>
                                                                <span className="w-1 h-1 bg-brand rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                                                <span className="w-1 h-1 bg-brand rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                                            </div>
                                                        </div>
                                                        <span className="text-[9.5px] font-bold text-brand">Now</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'erp' && (
                                        <div key="erp-tab" className="animate-fadeIn">
                                            {/* Stat Cards */}
                                            <div className="grid grid-cols-4 gap-2 mb-3">
                                                {[
                                                    { label: 'Inventory', val: '94.2%', sub: 'Optimal', delay: '0ms', color: '#5b30e8' },
                                                    { label: 'Orders', val: '1,284', sub: '+24%', delay: '100ms', color: '#1847f0' },
                                                    { label: 'Suppliers', val: '38', sub: 'Active', delay: '200ms', color: '#0784a8' },
                                                    { label: 'Efficiency', val: '87%', sub: '+12%', delay: '300ms', color: '#0f7a42' },
                                                ].map((stat, i) => (
                                                    <div key={i} className="mc animate-erpStat opacity-0" style={{ animationDelay: stat.delay, borderTop: `2px solid ${stat.color}` }}>
                                                        <div className="text-[9px] font-bold text-soft uppercase tracking-wider mb-1"> {stat.label}</div>
                                                        <div className="font-display font-bold text-[15px] text-ink leading-none">{stat.val}</div>
                                                        <div className="text-[9px] font-bold text-green-700 mt-1">↑ {stat.sub}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Process Flow SVG */}
                                            <div className="mc mb-3">
                                                <div className="text-[11px] font-bold text-ink mb-3">Business Process Flow</div>
                                                <div className="relative h-43">
                                                    <svg width="100%" height="172" viewBox="0 0 520 172" className="overflow-visible">
                                                        {/* Edges */}
                                                        <line x1="88" y1="44" x2="152" y2="44" stroke="#dce3ef" strokeWidth="1.8" className="animate-edgeDraw opacity-0" style={{ animationDelay: '300ms' }} />
                                                        <line x1="242" y1="44" x2="308" y2="44" stroke="#dce3ef" strokeWidth="1.8" className="animate-edgeDraw opacity-0" style={{ animationDelay: '500ms' }} />
                                                        <line x1="398" y1="44" x2="456" y2="44" stroke="#dce3ef" strokeWidth="1.8" className="animate-edgeDraw opacity-0" style={{ animationDelay: '700ms' }} />
                                                        <line x1="197" y1="70" x2="197" y2="106" stroke="#dce3ef" strokeWidth="1.5" className="animate-edgeDraw opacity-0" style={{ animationDelay: '600ms' }} />
                                                        <line x1="353" y1="70" x2="353" y2="106" stroke="#dce3ef" strokeWidth="1.5" className="animate-edgeDraw opacity-0" style={{ animationDelay: '800ms' }} />
                                                        {/* Packets */}
                                                        <circle r="4" fill="#1847f0" className="animate-flowDot" style={{ offsetPath: `path('M88,44 L242,44')` }} />
                                                        <circle r="4" fill="#0784a8" className="animate-flowDot [animation-delay:0.6s]" style={{ offsetPath: `path('M242,44 L398,44')` }} />
                                                        <circle r="4" fill="#16a34a" className="animate-flowDot [animation-delay:1.2s]" style={{ offsetPath: `path('M398,44 L456,44')` }} />
                                                        <circle r="4" fill="#5b30e8" className="animate-flowDot [animation-delay:1.8s]" style={{ offsetPath: `path('M197,70 L197,106')` }} />
                                                        <circle r="4" fill="#0784a8" className="animate-flowDot [animation-delay:2.2s]" style={{ offsetPath: `path('M353,70 L353,106')` }} />
                                                    </svg>

                                                    <div className="pointer-events-none absolute inset-0">
                                                        <div className="absolute left-3 top-5 w-19 h-12 rounded-2.5 bg-[#f2efff] border border-[#cec3fa] text-brand-accent flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0">
                                                            <Briefcase size={13} />
                                                            <span className="text-[8.5px] font-bold">Procurement</span>
                                                        </div>

                                                        <div className="absolute left-38 top-5 w-22.5 h-12 rounded-2.5 bg-[#eef1fd] border border-[#c3ccf8] text-brand flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0" style={{ animationDelay: '200ms' }}>
                                                            <Package size={13} />
                                                            <span className="text-[8.5px] font-bold">Inventory</span>
                                                        </div>

                                                        <div className="absolute left-77 top-5 w-22.5 h-12 rounded-2.5 bg-[#ecfcff] border border-[#a0ecf8] text-[#0784a8] flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0" style={{ animationDelay: '400ms' }}>
                                                            <Sun size={13} />
                                                            <span className="text-[8.5px] font-bold">Production</span>
                                                        </div>

                                                        <div className="absolute left-114 top-5 w-14 h-12 rounded-2.5 bg-[#f0fdf5] border border-[#a7f0c4] text-[#0f7a42] flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0" style={{ animationDelay: '600ms' }}>
                                                            <Truck size={13} />
                                                            <span className="text-[8.5px] font-bold">Dispatch</span>
                                                        </div>

                                                        <div className="absolute left-39.25 top-26.5 w-20 h-10.5 rounded-2.5 bg-[#fff7ed] border border-[#fed7aa] text-[#c2410c] flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0" style={{ animationDelay: '700ms' }}>
                                                            <Wallet size={12} />
                                                            <span className="text-[8.5px] font-bold">Finance</span>
                                                        </div>

                                                        <div className="absolute left-77 top-26.5 w-22.5 h-10.5 rounded-2.5 bg-[#fdf4ff] border border-[#f0abfc] text-[#a21caf] flex flex-col items-center justify-center gap-1 animate-nodeIn opacity-0" style={{ animationDelay: '820ms' }}>
                                                            <UserRound size={12} />
                                                            <span className="text-[8.5px] font-bold">HR</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="mc">
                                                    <div className="text-[11px] font-bold text-ink mb-2">Module Health</div>
                                                    <div className="space-y-2">
                                                        {ERP_HEALTH.map((m, i) => (
                                                            <div key={i}>
                                                                <div className="flex justify-between text-[9px] mb-1">
                                                                    <span className="text-soft font-medium">{m.label}</span>
                                                                    <span className="text-ink font-bold">{m.value}%</span>
                                                                </div>
                                                                <div className="prog-track h-1">
                                                                    <div
                                                                        className={`h-full rounded-full bg-linear-to-r ${m.color} animate-healthFill`}
                                                                        style={{
                                                                            ['--target-w' as string]: `${m.value}%`,
                                                                            animationDelay: `${120 + i * 120}ms`,
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mc">
                                                    <div className="text-[11px] font-bold text-ink mb-2">Live Alerts</div>
                                                    <div className="space-y-1.5">
                                                        <div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded border border-green-100 animate-erpStat opacity-0" style={{ animationDelay: '400ms' }}>
                                                            <Check size={10} className="text-green-600" />
                                                            <span className="text-[9px] font-bold text-ink">PO #2841 approved</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 px-2 py-1 bg-amber-50 rounded border border-amber-100 animate-erpStat opacity-0" style={{ animationDelay: '550ms' }}>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                            <span className="text-[9px] font-bold text-ink">Low stock: SKU-448</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'app' && (
                                        <div key="app-tab" className="animate-fadeIn">
                                            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                                                {/* Phone Mockup */}
                                                <div className="w-full shrink-0 animate-phoneIn opacity-0 md:w-41.5">
                                                    <div className="mx-auto w-full max-w-[250px] animate-phoneFloat sm:max-w-[280px] md:max-w-none">
                                                        <div className="bg-[#0d1120] rounded-7 p-2.5 shadow-[0_20px_60px_rgba(8,13,28,0.22)]">
                                                            <div className="w-13 h-1.25 bg-[#1c2442] rounded-full mx-auto mb-2"></div>
                                                            <div className="bg-[#f7f8fb] rounded-5 overflow-hidden">
                                                                <div className="bg-linear-to-br from-brand to-brand-accent p-3 pt-4 text-white">
                                                                    <div className="flex justify-between items-center mb-3">
                                                                        <div>
                                                                            <div className="text-[8.5px] opacity-70">Good morning,</div>
                                                                            <div className="text-[14px] font-extrabold font-display">Rahul</div>
                                                                        </div>
                                                                        <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center relative">
                                                                            <Bell size={13} />
                                                                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full text-[7px] border border-brand flex items-center justify-center font-bold">3</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bg-white/10 rounded-lg p-2 flex gap-2">
                                                                        <div className="flex-1"><div className="text-[7.5px] opacity-60">Pipeline</div><div className="text-[12px] font-bold">$840K</div></div>
                                                                        <div className="w-px bg-white/20"></div>
                                                                        <div className="flex-1"><div className="text-[7.5px] opacity-60">Tasks</div><div className="text-[12px] font-bold">12</div></div>
                                                                        <div className="w-px bg-white/20"></div>
                                                                        <div className="flex-1"><div className="text-[7.5px] opacity-60">Meetings</div><div className="text-[12px] font-bold">4</div></div>
                                                                    </div>
                                                                </div>
                                                                <div className="p-2.5">
                                                                    <div className="text-[8px] font-bold text-soft uppercase tracking-widest mb-2">Quick Actions</div>
                                                                    <div className="grid grid-cols-4 gap-1.5">
                                                                        {[
                                                                            { label: 'Contacts', tone: 'text-brand bg-[#eef1fd]' },
                                                                            { label: 'Reports', tone: 'text-brand-accent bg-[#f2efff]' },
                                                                            { label: 'Deals', tone: 'text-[#0784a8] bg-[#ecfcff]' },
                                                                            { label: 'Calendar', tone: 'text-[#0f7a42] bg-[#f0fdf5]' },
                                                                        ].map((item, i) => (
                                                                            <div key={item.label} className="animate-screenSwipe opacity-0 text-center" style={{ animationDelay: `${350 + i * 70}ms` }}>
                                                                                <div className={`aspect-square rounded-lg ${item.tone} flex items-center justify-center mb-1`}>
                                                                                    <div className="w-4 h-4 rounded-full border border-current/25"></div>
                                                                                </div>
                                                                                <div className="text-[7px] font-bold text-soft leading-none">{item.label}</div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                    <div className="text-[8px] font-bold text-soft uppercase tracking-widest mt-3 mb-1.5">Recent</div>
                                                                    <div className="space-y-1.5">
                                                                        <div className="rounded-lg border border-[#dce3ef] bg-white p-1.5 flex items-center gap-1.5">
                                                                            <div className="w-5 h-5 rounded-full bg-[#eef1fd] text-brand text-[7px] font-bold flex items-center justify-center">RS</div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="text-[7.5px] font-bold text-ink truncate">Rahul Sharma</div>
                                                                                <div className="text-[6.5px] text-soft truncate">Follow-up due</div>
                                                                            </div>
                                                                            <span className="text-[6.5px] font-bold text-brand">Today</span>
                                                                        </div>
                                                                        <div className="rounded-lg border border-[#d8f2e4] bg-[#f0fdf5] p-1.5 flex items-center gap-1.5">
                                                                            <div className="w-5 h-5 rounded-full bg-[#dcfce7] text-[#0f7a42] text-[9px] font-bold flex items-center justify-center">✓</div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="text-[7.5px] font-bold text-ink truncate">Deal closed</div>
                                                                                <div className="text-[6.5px] text-soft truncate">$48K · Meridian</div>
                                                                            </div>
                                                                            <span className="text-[6.5px] font-bold text-[#0f7a42]">Won!</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-12 h-1 bg-[#dce3ef] rounded-full mx-auto mt-2"></div>
                                                    </div>
                                                </div>

                                                {/* Feature Cards */}
                                                <div className="w-full space-y-2.5 md:flex-1">
                                                    <div className="animate-notifDrop opacity-0 p-3.5 bg-linear-to-br from-brand to-brand-accent rounded-2xl text-white">
                                                        <div className="text-[9px] font-bold opacity-60 uppercase mb-1">Available on</div>
                                                        <div className="font-display font-bold text-[16px] mb-2 tracking-tight">iOS & Android</div>
                                                        <div className="flex gap-2">
                                                            <div className="flex-1 bg-white/20 rounded-md py-1 px-2 flex items-center gap-1.5 text-[9px] font-bold">
                                                                <Star size={10} fill="white" /> App Store
                                                            </div>
                                                            <div className="flex-1 bg-white/20 rounded-md py-1 px-2 flex items-center gap-1.5 text-[9px] font-bold">
                                                                Play Store
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="animate-notifDrop opacity-0 p-3 bg-white border border-[#dce3ef] rounded-2xl" style={{ animationDelay: '180ms' }}>
                                                        <div className="text-[11px] font-bold text-ink mb-2">Live Metrics</div>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            <div className="bg-[#f7f8fb] p-2 rounded-lg">
                                                                <div className="text-[18px] font-extrabold text-ink leading-tight tracking-tight">1,284</div>
                                                                <div className="text-[9px] text-soft font-bold">Active users</div>
                                                            </div>
                                                            <div className="bg-[#f0fdf5] p-2 rounded-lg">
                                                                <div className="text-[18px] font-extrabold text-green-700 leading-tight tracking-tight">+22%</div>
                                                                <div className="text-[9px] text-soft font-bold">This week</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="animate-notifDrop opacity-0 p-3 bg-white border border-[#dce3ef] rounded-2xl" style={{ animationDelay: '260ms' }}>
                                                        <div className="text-[11px] font-bold text-ink mb-2">Push notification</div>
                                                        <div className="rounded-xl border border-[#a7f0c4] bg-[#f0fdf5] p-2.5 flex items-center gap-2.5">
                                                            <div className="w-7 h-7 rounded-full bg-[#dcfce7] text-[#0f7a42] flex items-center justify-center font-bold">✓</div>
                                                            <div>
                                                                <div className="text-[10px] font-bold text-ink">Deal Closed!</div>
                                                                <div className="text-[9px] text-soft">Meridian Corp · $48,000</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="animate-notifDrop opacity-0 p-3 bg-[#fffbeb] border border-[#fde68a] rounded-2xl" style={{ animationDelay: '340ms' }}>
                                                        <div className="flex items-center gap-2">
                                                            <Star size={15} className="text-amber-500" fill="currentColor" />
                                                            <div className="text-[16px] font-extrabold text-ink leading-none tracking-tight">4.9 / 5</div>
                                                        </div>
                                                        <div className="text-[10px] text-soft font-medium mt-1.5">2,400+ App Store reviews</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-fadeIn opacity-0 hidden md:flex flex-col items-center gap-2" style={{ animationDelay: '1000ms' }}>
                <span className="text-[9px] uppercase tracking-widest text-soft/40 font-bold">Scroll</span>
                <div className="w-4.75 h-7.5 rounded-xl border-2 border-[#dce3ef] flex justify-center p-1">
                    <div className="w-1 h-1.5 bg-brand rounded-full animate-sdrop"></div>
                </div>
            </div>
        </section>
    );
}
