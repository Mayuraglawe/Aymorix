import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Activity, ClipboardCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'AI-Assisted Screening',
    desc: 'Detect potential allergy risks earlier with guided analysis and confidence scoring.',
    icon: Activity,
  },
  {
    title: 'Clinical Workflow Ready',
    desc: 'Capture patient context, allergy history, and reports in one streamlined interface.',
    icon: ClipboardCheck,
  },
  {
    title: 'Reliable & Auditable',
    desc: 'Maintain transparent decision trails with structured outputs for review and compliance.',
    icon: ShieldCheck,
  },
];

export default function AllergyDetectionAppPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(24,71,240,0.12),transparent_42%),radial-gradient(circle_at_84%_26%,rgba(7,132,168,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#ffffff_76%)]" />

        <div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-10 px-8 md:px-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Healthcare Product
            </span>

            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Allergy Detection App
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
              An AI-powered clinical support application that helps identify allergy risks faster,
              standardize screening, and improve decision confidence for healthcare teams.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#features" className="btn-primary">
                Explore Features <ArrowRight size={14} strokeWidth={2} />
              </Link>
              <Link href="/" className="btn-ghost">
                Back to Home
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">95%+</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Screening Confidence</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">2x</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Faster Review</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-2xl font-extrabold text-ink">24/7</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Availability</p>
              </div>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-blue-100/70 md:h-[480px]">
            <Image
              src="/allergy1.png"
              alt="Allergy detection app interface"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="features" className="pb-24 md:pb-28">
        <div className="mx-auto max-w-screen-xl px-8 md:px-16">
          <div className="mb-8 md:mb-10">
            <span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              Key Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Built for Clinical Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mid">{feature.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-100 py-20 mt-10">
        <div className="mx-auto max-w-screen-lg px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 w-full flex justify-center">
              <div className="flex flex-col items-center">
                <Image
                  src="/allergy.jpg"
                  width={520}
                  height={370}
                  alt="Allergy Detection App screenshot"
                  className="rounded-2xl shadow-xl border-4 border-white mb-8"
                />
                <Image
                  src="/allergy1.png"
                  width={520}
                  height={370}
                  alt="Allergy Detection App interface"
                  className="rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <span className="inline-block rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pink-700 mb-2">About the App</span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl mb-4">Allergy Detection App: Your Smart Allergy Assistant</h2>
              <p className="text-base md:text-lg text-mid mb-4">
                The Allergy Detection App empowers healthcare professionals and patients with fast, reliable, and AI-powered allergy screening. Its intuitive interface and advanced algorithms analyze ingredient lists, flag potential allergens, and provide clear guidance for safe consumption. Whether in a clinic or at home, our product helps you make informed decisions and avoid risky ingredients.
              </p>
              <ul className="list-disc pl-5 text-mid text-sm md:text-base mb-4">
                <li>Instant ingredient analysis and allergen detection</li>
                <li>Clear risk warnings and safe ingredient highlights</li>
                <li>Designed for both clinical and personal use</li>
                <li>Modern, user-friendly interface</li>
              </ul>
              <div className="mt-4">
                <p className="text-base text-soft">Want to know more or collaborate? <Link href="/contact" className="underline text-blue-700 hover:text-pink-600 transition">Contact Us</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
