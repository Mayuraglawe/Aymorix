"use client";
import { useEffect, useState } from "react";
import { industries } from "./industriesData";
const industrySvgs = [
  // Healthcare
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><rect x="4" y="4" width="16" height="16" rx="5"/><path d="M12 8v8M8 12h8"/></svg>,
  // Finance
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M3 10h18M7 14h.01M11 14h.01M15 14h.01"/></svg>,
  // E-Commerce
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M6 6V4a2 2 0 0 1 2-2h2"/></svg>,
  // Manufacturing
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 13V7a2 2 0 0 1 2-2h2"/><circle cx="17" cy="17" r="2"/></svg>,
  // Education
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"/><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/></svg>,
  // Logistics
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="7" width="13" height="10" rx="2"/><path d="M16 17h2a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="17.5" cy="17.5" r="1.5"/></svg>
];

export default function IndustriesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMode = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setActiveCard(null);
      }
    };

    updateMode();
    mediaQuery.addEventListener("change", updateMode);
    return () => mediaQuery.removeEventListener("change", updateMode);
  }, []);

  return (
    <section id="industry" className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16 text-center">
        <h2 className="font-display font-extrabold text-[clamp(1.8rem,5vw,2.7rem)] leading-[1.07] tracking-[-0.035em] text-ink mb-4 md:mb-6">
          Industries We Excel In
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-8 md:mb-12 px-2">
          We deliver tailored solutions for a wide range of industries, leveraging deep expertise and modern technology to drive results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {industries.map((industry, idx) => (
            (() => {
              const isActive = isMobile && activeCard === idx;
              return (
            <div
              key={industry.name}
              className="relative group bg-white rounded-xl md:rounded-2xl shadow p-6 md:p-8 flex flex-col items-center overflow-hidden cursor-pointer transition-all duration-200"
              style={{ minHeight: '240px' }}
              onClick={() => {
                if (isMobile) {
                  setActiveCard((prev) => (prev === idx ? null : idx));
                }
              }}
            >
              {/* Blue gradient overlay only on hover, no image */}
              <div className="absolute inset-0 z-10 rounded-xl md:rounded-2xl overflow-hidden pointer-events-none">
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-b from-white/80 via-blue-400/90 to-blue-700/80 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </div>
              {/* SVG Icon with colored circle */}
              <span className="mb-3 md:mb-4 z-20 relative transition-colors duration-300 flex items-center justify-center">
                <span className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-600' : 'bg-[#e0e7ff] group-hover:bg-blue-600'}`}>
                  <span className={`transition-colors duration-300 w-8 h-8 md:w-full md:h-full flex items-center justify-center ${isActive ? 'text-white' : 'text-blue-700 group-hover:text-white'}`}>{industrySvgs[idx]}</span>
                </span>
              </span>
              <div className={`font-bold text-lg md:text-xl mb-2 z-20 relative transition-colors duration-300 text-center ${isActive ? 'text-white' : 'group-hover:text-white'}`}>
                {industry.name}
              </div>
              <div className={`text-sm md:text-base z-20 relative transition-colors duration-300 text-center ${isActive ? 'text-blue-100' : 'text-slate-500 group-hover:text-blue-100'}`}>
                {industry.description}
              </div>
            </div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
