"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
const heroImages = [
  '/boundary.jpeg',
  '/land1.png',
  '/land2.png',
  '/land3.png',
];
import Link from 'next/link';
import { ArrowRight, Map, Layers, ScanLine } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const capabilities = [
  {
    title: 'Boundary Extraction',
    desc: 'Automatically detect parcel boundaries from satellite and survey imagery.',
    icon: ScanLine,
  },
  {
    title: 'GIS-Ready Output',
    desc: 'Export standardized geometry and metadata for downstream geospatial workflows.',
    icon: Layers,
  },
  {
    title: 'Map Validation',
    desc: 'Compare detected boundaries with existing records and flag inconsistencies.',
    icon: Map,
  },
];

export default function AutomatedLandBoundaryDetectionPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (idx: number) => setActiveSlide(idx);

  return (
    <main className="min-h-screen bg-white text-ink">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_22%,rgba(24,71,240,0.12),transparent_42%),radial-gradient(circle_at_86%_30%,rgba(7,132,168,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#ffffff_76%)]" />

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Geospatial Product
            </span>

            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Automated Land Boundary Detection
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
              A computer-vision powered geospatial system that identifies, validates, and structures land boundaries
              from mixed imagery sources for planning, compliance, and mapping teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#capabilities" className="btn-primary">
                Explore Capabilities <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">98%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Boundary Accuracy</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">4x</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Faster Mapping</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">GIS</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Workflow Ready</p>
              </div>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/70 md:h-[480px]">
            {heroImages.map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`Boundary detection showcase ${idx + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`object-cover transition-all duration-700 absolute inset-0 ${
                  idx === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                }`}
                priority={idx === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 w-6 rounded-full transition-all duration-200 ${
                    idx === activeSlide ? 'bg-brand-accent' : 'bg-slate-300/80'
                  }`}
                  aria-label={`Show image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>




      <section id="capabilities" className="pb-24 md:pb-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="mb-8 md:mb-10">
            <span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              Core Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Precision Mapping at Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mid">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section>
      </section>

      {/* About Us Section (moved to end) */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 border-y border-slate-200">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-ink mb-5 tracking-tight">About Us</h2>
            <p className="text-lg md:text-xl text-mid mb-4">We are a passionate team of geospatial engineers, AI experts, and land management professionals dedicated to transforming land governance through technology. Our mission is to make land records, boundary detection, and compliance effortless, transparent, and accessible for everyone.</p>
            <ul className="list-disc pl-6 text-base text-slate-700 space-y-2">
              <li>Over 10 years of experience in geospatial analytics and AI.</li>
              <li>Trusted by government agencies, landowners, and urban planners.</li>
              <li>Committed to accuracy, security, and user-friendly solutions.</li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-200 bg-white">
              <Image src="/land2.png" alt="Our Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
      {/* Decorative Gradient Footer */}
      <div className="h-32 w-full bg-gradient-to-t from-emerald-100 via-white to-transparent opacity-80 -mb-10" />
      <Footer />
    </main>
  );
}
