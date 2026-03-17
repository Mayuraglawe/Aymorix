import Image from 'next/image';
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
  return (
    <main className="min-h-screen bg-white text-ink">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_22%,rgba(24,71,240,0.12),transparent_42%),radial-gradient(circle_at_86%_30%,rgba(7,132,168,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#ffffff_76%)]" />

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-8 md:px-16 lg:grid-cols-[1.05fr_0.95fr]">
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
            <Image
              src="/boundary.jpeg"
              alt="Automated land boundary detection interface"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="capabilities" className="pb-24 md:pb-28">
        <div className="mx-auto max-w-screen-xl px-8 md:px-16">
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

      <Footer />
    </main>
  );
}
