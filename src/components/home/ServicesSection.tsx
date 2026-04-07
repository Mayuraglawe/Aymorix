"use client";

import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    id: 1,
    code: "01",
    label: "Core Product",
    name: "Core Product Engineering",
    tagline: "For established companies struggling with tech debt or messy data, we modernize your core product and make it future-proof.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: "#2C5FD4",
    accentBg: "#EEF3FF",
    services: [
      {
        title: "Full-Stack Web Development",
        description: "End-to-end development of lightning-fast, highly secure web applications using Next.js and Node.js — platforms that scale seamlessly.",
        tech: ["Next.js", "Node.js", "PostgreSQL"],
        image: "/Full Stack.jpg",
        imageAlt: "Full-stack web development service",
      },
      {
        title: "Custom Mobile App Development",
        description: "Native and cross-platform mobile experiences engineered for performance. Intuitive iOS and Android applications that keep your users engaged.",
        tech: ["React Native", "Swift", "Kotlin"],
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&w=600&q=80",
        imageAlt: "Mobile app UI on smartphone",
      },
      {
        title: "SaaS MVP Development",
        description: "Turn your concept into a market-ready product in weeks. We architect MVPs using agile methodologies and Supabase so founders launch fast and secure funding.",
        tech: ["Supabase", "Agile", "CI/CD"],
        image: "/saas.jpg",
        imageAlt: "SaaS MVP development service",
      },
      {
        title: "UI/UX & Interactive Design",
        description: "Digital experiences that convert. We bridge aesthetics and usability, delivering wireframes, high-fidelity prototypes, and user-centric interfaces.",
        tech: ["Figma", "Framer", "Tailwind"],
        image: "/ui_ux.jpg",
        imageAlt: "UI and UX interactive design service",
      },
    ],
  },
  {
    id: 2,
    code: "02",
    label: "AI & Automation",
    name: "AI & Intelligent Automation",
    tagline: "For teams drowning in repetitive work, we automate your business processes and unlock new levels of efficiency.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    accent: "#14B8A6", // teal
    accentBg: "#E0FCF7", // light teal
    services: [
      {
        title: "Enterprise Workflow Automation",
        description: "Eliminate manual data entry and human error. We build complex n8n and API workflows that connect your CRM, email, and internal databases.",
        tech: ["n8n", "Zapier", "REST APIs"],
        image: "/database architecture2.jpg",
        imageAlt: "Enterprise workflow automation service",
      },
      {
        title: "Computer Vision & ML Integration",
        description: "Give your software the ability to see and learn. Python-driven ML modules including YOLO and object detection for analytics and quality control.",
        tech: ["Python", "YOLO", "TensorFlow"],
        image: "/ml.jpg",
        imageAlt: "AI and machine learning integration service",
      },
      {
        title: "Algorithmic Optimization & Solvers",
        description: "From routing algorithms to CP-SAT scheduling, we build the mathematical engines that run deep beneath your software.",
        tech: ["CP-SAT", "OR-Tools", "Python"],
        image: "/algorithm.jpg",
        imageAlt: "Algorithmic optimization and solver systems service",
      },
    ],
  },
  {
    id: 3,
    code: "03",
    label: "Cloud & Data",
    name: "Cloud & Data Architecture",
    tagline: "For businesses with scattered data and legacy systems, we unify your data and move you to the cloud.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    accent: "#0891B2",
    accentBg: "#E8F7FB",
    services: [
      {
        title: "API Development & Ecosystem Integration",
        description: "We build secure, RESTful APIs to ensure your custom apps communicate perfectly with payment gateways, CRMs, and legacy systems.",
        tech: ["REST", "GraphQL", "OAuth"],
        image: "/api.jpg",
        imageAlt: "API development and ecosystem integration service",
      },
      {
        title: "Database Architecture & Migration",
        description: "We design scalable PostgreSQL architectures and handle zero-downtime migrations to modern cloud environments.",
        tech: ["PostgreSQL", "AWS", "Redis"],
        image: "/migration.jpg",
        imageAlt: "Database architecture and migration service",
      },
      {
        title: "Legacy System Modernization",
        description: "We audit slow, aging software and rebuild it using contemporary frameworks, improving load speeds, security compliance, and user retention.",
        tech: ["Refactoring", "Docker", "CI/CD"],
        image: "/legacy.jpg",
        imageAlt: "Legacy system modernization service",
      },
    ],
  },
  {
    id: 4,
    code: "04",
    label: "Specialized",
    name: "Specialized Engineering",
    tagline: "For organizations with unique needs, we build custom solutions that give you a competitive edge.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    accent: "#059669",
    accentBg: "#E8FAF4",
    services: [
      {
        title: "IoT & Edge Hardware Integration",
        description: "We develop software that interfaces directly with edge devices, microcontrollers, and sensor networks like Raspberry Pi for real-time monitoring.",
        tech: ["Raspberry Pi", "MQTT", "Edge AI"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=compress&w=600&q=80",
        imageAlt: "Modern IoT devices and edge hardware integration",
      },
      {
        title: "Custom Dashboards & Business Intelligence",
        description: "We build custom admin panels and interactive data visualization dashboards so leadership can track KPIs, user behavior, and revenue in real-time.",
        tech: ["D3.js", "Recharts", "WebSockets"],
        image: "/BI2.jpg",
        imageAlt: "Business intelligence dashboard service",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activePillar, setActivePillar] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = pillars[activePillar];

  // Auto-advance service every 3 seconds
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveService((prevService) => {
        // We'll use the latest values of activePillar and activeService
        let nextService = prevService + 1;
        let nextPillar = activePillar;
        if (nextService >= pillars[activePillar].services.length) {
          nextService = 0;
          nextPillar = activePillar + 1;
          if (nextPillar >= pillars.length) nextPillar = 0;
          setActivePillar(nextPillar);
        }
        return nextService;
      });
    }, 2500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activePillar]);

  const service = current.services[activeService];

  const switchPillar = (idx: number) => {
    if (idx === activePillar) return;
    setAnimating(true);
    setImgLoaded(false);
    setTimeout(() => {
      setActivePillar(idx);
      setActiveService(0);
      setAnimating(false);
    }, 220);
  };

  const switchService = (idx: number) => {
    if (idx === activeService) return;
    setAnimating(true);
    setImgLoaded(false);
    setTimeout(() => {
      setActiveService(idx);
      setAnimating(false);
    }, 180);
  };

  return (
    <section id="services" className="bg-[#EEF1F8] py-20 md:py-24 max-[600px]:py-14 font-sans">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-[600px]:mb-8">
          <span className="inline-block bg-indigo-100 text-blue-700 text-xs font-semibold tracking-widest uppercase rounded-full px-4 py-2 mb-4">Our Services</span>
          <h2 className="font-display font-extrabold text-[clamp(1.8rem,3.5vw,2.7rem)] leading-[1.07] tracking-[-0.035em] text-ink mb-3">Custom Engineering Solutions</h2>
          <p className="text-base md:text-lg max-[600px]:text-sm text-slate-500 max-w-xl mx-auto">We build scalable, cloud-native applications tailored to accelerate your growth.</p>
        </div>

        {/* Pillar Tabs */}
        <div className="flex flex-wrap justify-center max-[600px]:justify-stretch gap-3 mb-8 max-[600px]:mb-6">
          {pillars.map((p, idx) => {
            const isActive = activePillar === idx;
            return (
              <button
                key={p.id}
                className={`flex items-center gap-2 px-6 py-2 max-[600px]:w-full max-[600px]:justify-start rounded-lg font-semibold text-sm shadow-sm border transition-all duration-150 ` +
                  (isActive
                    ? `text-white shadow-md`
                    : `bg-white text-slate-600 border-slate-200 hover:border-[${p.accent}] hover:text-[${p.accent}]`)
                }
                style={isActive ? { background: p.accent, borderColor: p.accent } : {}}
                onClick={() => switchPillar(idx)}
              >
                <span className="w-6 h-6 flex items-center justify-center" style={{ color: isActive ? '#fff' : p.accent }}>{p.icon}</span>
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Main Card */}
        <div className="rounded-3xl max-[600px]:rounded-2xl bg-white shadow-xl grid grid-cols-1 md:grid-cols-[260px_1fr_340px] min-h-[520px] max-[600px]:min-h-0 overflow-hidden">
          {/* Service List */}
          <div className="border-b md:border-b-0 md:border-r border-slate-100 flex flex-col">
            <div className="px-6 pt-8 pb-4 border-b border-slate-100 hidden md:block">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: current.accent }}>Pillar {current.code}</div>
              <div className="text-xs font-bold text-slate-900">{current.name}</div>
            </div>
            <div className="flex-1">
              {current.services.map((s, idx) => (
                <button
                  key={idx}
                  className={`flex items-center gap-3 w-full px-6 max-[600px]:px-4 py-4 text-left border-l-4 transition-all duration-150 ${activeService === idx ? 'bg-slate-50' : 'border-transparent hover:bg-slate-50'}`}
                  style={activeService === idx ? { borderLeftColor: current.accent } : {}}
                  onClick={() => switchService(idx)}
                >
                  <span className="w-2.5 h-2.5 rounded-full mr-2" style={{ background: current.accent }}></span>
                  <span className="font-bold text-sm text-slate-900 leading-snug">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Service Card */}
          <div className="flex flex-col p-8 max-[600px]:p-5">
            <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: current.accent }}>Pillar {current.code}</div>
            <div className="text-xs font-bold text-slate-900 mb-2">{current.name}</div>
            <h3 className="text-2xl md:text-3xl max-[600px]:text-xl font-extrabold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-500 text-base max-[600px]:text-sm mb-2">{service.description}</p>
            {/* Tech stack display - moved just below description */}
            {service.tech && (
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-700 mr-2">Tech:</span>
                {service.tech.map((t, i) => (
                  <span
                    key={t}
                    className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded mr-2 mb-1 border border-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {/* CTA Button remains at the bottom */}
            <button
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 max-[600px]:w-full rounded-lg shadow transition-all duration-150 text-base max-[600px]:text-sm"
              style={{ background: current.accent }}
            >
              Let's build your next project
            </button>
          </div>

          {/* Image Panel */}
          <div className="relative flex flex-col min-h-[320px] max-[600px]:min-h-[240px] bg-gradient-to-b from-slate-100 to-slate-200">
            <div className="flex-1 relative overflow-hidden">
              <img
                key={service.image}
                src={service.image}
                alt={service.imageAlt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 text-white">
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Currently Viewing</div>
                <div className="text-base font-bold leading-tight">{service.title}</div>
              </div>
            </div>
            <div className="flex h-16 border-t border-slate-100 bg-slate-50">
              {current.services.map((s, idx) => (
                <button
                  key={idx}
                  className={`flex-1 relative overflow-hidden group ${activeService === idx ? '' : ''}`}
                  onClick={() => switchService(idx)}
                  title={s.title}
                >
                  <img src={s.image} alt={`${s.title} service - Aymorix`.trim()} className="w-full h-full object-cover filter group-hover:brightness-110 group-hover:saturate-110 transition" />
                  <div className={`absolute inset-0 ${activeService === idx ? '' : 'bg-slate-900/10'}`} />
                  <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white drop-shadow">{String(idx + 1).padStart(2, '0')}</span>
                  {activeService === idx && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" style={{ background: current.accent }} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
