"use client";
import SlidingReviewSection from "@/components/SlidingReviewSection";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Lightbulb, Sparkles, Users, Wrench } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const heroSlides = ['/zenith_website1.jpeg', '/zenith_website2.jpeg', '/zenith_website3.jpeg'];

const corePillars = [
  {
    title: 'Community Driven',
    description:
      'Built by students, for students',
    icon: Users,
    image: '/zenith_logo.png',
  },
  {
    title: 'Skill Development',
    description:
      'Learn and grow with expert guidance',
    icon: Wrench,
    image: '/zenith_logo.png',
  },
  {
    title: 'Innovation Hub',
    description:
      'Where ideas come to life',
    icon: Lightbulb,
    image: '/zenith_logo.png',
  },
  {
    title: 'Regular Events',
    description:
      'Workshops, competitions, and more',
    icon: CalendarDays,
    image: '/zenith_logo.png',
  },
];

const clubs = [
  {
    name: 'ACHIEVERS',
    focus: 'Higher Studies',
    desc: 'Supports students aiming for academic excellence and future-ready preparation.',
    image: '/Achievers.png',
    tone: 'text-fuchsia-600',
  },
  {
    name: 'ASTER',
    focus: 'Soft Skills',
    desc: 'Focused on communication, leadership, and confidence for personal and professional growth.',
    image: '/aster.png',
    tone: 'text-pink-600',
  },
  {
    name: 'ARTOVERT',
    focus: 'Overall Development',
    desc: 'Promotes creativity and holistic growth through multidisciplinary participation.',
    image: '/artovert.png',
    tone: 'text-emerald-600',
  },
  {
    name: 'ASCEND',
    focus: 'Technical',
    desc: 'Coding and technology-driven club for builders, problem solvers, and innovators.',
    image: '/ascend.png',
    tone: 'text-sky-700',
  },
];

export default function ZenithPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCoreCard, setActiveCoreCard] = useState<number | null>(null);
  const [activeClubCard, setActiveClubCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateMode = () => {
      setIsMobile(mediaQuery.matches);
      if (!mediaQuery.matches) {
        setActiveCoreCard(null);
        setActiveClubCard(null);
      }
    };

    updateMode();
    mediaQuery.addEventListener('change', updateMode);
    return () => mediaQuery.removeEventListener('change', updateMode);
  }, []);

  return (
    <main className="min-h-screen bg-white text-ink">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(24,71,240,0.12),transparent_40%),radial-gradient(circle_at_85%_28%,rgba(7,132,168,0.17),transparent_42%),linear-gradient(180deg,#f5fbff_0%,#ffffff_78%)]" />

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mid">
            <Sparkles size={13} />
            Welcome to ZENITH
          </span>

          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                DRIVEN BY PASSION, BUILT FOR EXCELLENCE
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
                A Initiative driven by the students, For the students
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#zenith-clubs" className="btn-primary">
                  Explore Clubs <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <Link href="#zenith-events" className="btn-ghost">
                  View Events
                </Link>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-extrabold text-ink">314+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Active Members</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-extrabold text-ink">22+</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Events Conducted</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-extrabold text-ink">4</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Specialized Clubs</p>
                </div>
              </div>
            </div>

            <div>
              <div className="relative h-[360px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900 shadow-2xl shadow-blue-100/70 md:h-[500px]">
                {heroSlides.map((slide, idx) => (
                  <Image
                    key={slide}
                    src={slide}
                    alt={`Zenith hero showcase ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={`object-cover object-top transition-all duration-700 ${
                      idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    priority={idx === 0}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050916]/52 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  Zenith Gallery
                </div>

                <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-white/15 px-3 py-2 text-white backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">Slide</p>
                  <p className="text-sm font-bold">{activeSlide + 1} / {heroSlides.length}</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={`thumb-${slide}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`relative h-16 overflow-hidden rounded-xl border transition-all md:h-20 ${
                      idx === activeSlide
                        ? 'border-brand shadow-[0_0_0_2px_rgba(24,71,240,0.18)]'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    aria-label={`Show Zenith image ${idx + 1}`}
                  >
                    <Image
                      src={slide}
                      alt={`Zenith thumbnail ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 33vw, 15vw"
                      className="object-cover object-top"
                    />
                    <span className={`absolute inset-0 transition-colors ${idx === activeSlide ? 'bg-transparent' : 'bg-slate-950/18'}`}></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-18 md:pb-22">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="mb-7 md:mb-10">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              What is Zenith?
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Unique Features of Zenith
            </h2>
            <p className="mt-4 max-w-5xl text-base leading-relaxed text-mid md:text-lg">
              Zenith Forum embodies excellence; it&apos;s a platform that fosters curiosity, nurtures talent, and inspires the pursuit of
              excellence. At Zenith, imagination finds its highest peak. Built for the students, by the students; it&apos;s where ideas spark,
              skills grow, and connections turn into opportunities. Here, you don&apos;t just attend college-you experience it. Join Zenith
              today, and be part of the journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {corePillars.map((card, idx) => {
              const Icon = card.icon;
              const isActive = isMobile && activeCoreCard === idx;
              return (
                <article
                  key={card.title}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition ${isActive ? '-translate-y-1 shadow-lg' : 'shadow-sm hover:-translate-y-1 hover:shadow-lg'}`}
                  onClick={() => {
                    if (isMobile) {
                      setActiveCoreCard((prev) => (prev === idx ? null : idx));
                    }
                  }}
                >
                  <div className={`pointer-events-none absolute inset-0 z-0 transition-all duration-500 ease-out ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                    <Image
                      src="/zenith_logo.png"
                      alt="Zenith logo feature preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#072a57]/75 via-[#0f4b86]/65 to-[#0c698f]/70" />
                  </div>

                  <div className={`relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-brand group-hover:bg-white/20 group-hover:text-white'}`}>
                    <Icon size={20} />
                  </div>
                  <h2 className={`relative z-10 mt-4 font-display text-2xl font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-ink group-hover:text-white'}`}>{card.title}</h2>
                  <p className={`relative z-10 mt-3 text-sm leading-relaxed transition-colors ${isActive ? 'text-blue-100' : 'text-mid group-hover:text-blue-100'}`}>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section>
      </section>

      <section id="zenith-clubs" className="pb-20 md:pb-24">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="mb-8 md:mb-10">
            <span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              Our Specialized Clubs
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Choose Your Path
            </h2>
            <p className="mt-3 max-w-3xl text-base text-mid md:text-lg">
              Join like-minded peers and build your profile in technical, academic, and creative domains.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {clubs.map((club, idx) => {
              const isActive = isMobile && activeClubCard === idx;
              return (
              <article
                key={club.name}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition ${isActive ? '-translate-y-1 shadow-lg' : 'shadow-sm hover:-translate-y-1 hover:shadow-lg'}`}
                onClick={() => {
                  if (isMobile) {
                    setActiveClubCard((prev) => (prev === idx ? null : idx));
                  }
                }}
              >
                <div className={`pointer-events-none absolute inset-0 z-0 transition-all duration-500 ease-out ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                  <Image
                    src={club.image}
                    alt={`${club.name} club preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#072a57]/75 via-[#0f4b86]/65 to-[#0c698f]/70" />
                </div>

                <div className="relative z-10 flex items-start gap-3">
                  <div className={`relative h-11 w-11 overflow-hidden rounded-xl border transition-colors ${isActive ? 'border-white/30 bg-white/20' : 'border-slate-200 bg-slate-50 group-hover:border-white/30 group-hover:bg-white/20'}`}>
                    <Image
                      src={club.image}
                      alt={`${club.name} logo`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors ${isActive ? 'text-white' : `group-hover:text-white ${club.tone}`}`}>{club.name}</p>
                    <h3 className={`mt-1 font-display text-xl font-bold tracking-tight transition-colors ${isActive ? 'text-white' : 'text-ink group-hover:text-white'}`}>{club.focus}</h3>
                  </div>
                </div>

                <p className={`relative z-10 mt-5 text-sm leading-relaxed transition-colors ${isActive ? 'text-blue-100' : 'text-mid group-hover:text-blue-100'}`}>{club.desc}</p>
                <p className={`relative z-10 mt-4 text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-brand group-hover:text-white'}`}>Learn More</p>
              </article>
            )})}
          </div>
        </div>
      </section>

      <section id="zenith-events" className="pb-24 md:pb-28">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#f3f9ff_100%)] p-8 shadow-sm md:p-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Events & Workshops
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                  Learn, Build, and Grow Together
                </h2>
                <p className="mt-4 text-base leading-relaxed text-mid md:text-lg">
                  Zenith hosts regular events, workshops, and collaborative forums to turn learning into action and build a stronger campus community.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="#" className="btn-primary">
                    Join Zenith Today <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                  <Link href="/" className="btn-ghost">
                    Back to Home
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">Community Snapshot</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-extrabold text-ink">4</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Specialized Clubs</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-extrabold text-ink">314+</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Members</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-extrabold text-ink">22+</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Events Conducted</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-2xl font-extrabold text-ink">11+</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-soft">Forum Posts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
