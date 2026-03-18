import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Brain, CalendarCheck2, CheckCircle2, Cpu, GraduationCap, Workflow } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TechStrip from '@/components/TechStrip';

const capabilityCards = [
  {
    title: 'Smart Timetable Engine',
    description:
      'Hybrid optimization algorithms generate conflict-free schedules across classes, faculty, and rooms.',
    icon: CalendarCheck2,
    image: '/timetable.png',
  },
  {
    title: 'Workflow Automation',
    description:
      'Automate recurring academic planning tasks and reduce manual intervention across departments.',
    icon: Workflow,
    image: '/screen.png',
  },
  {
    title: 'AI-Assisted Decisions',
    description:
      'Use predictive insights to model timetable scenarios before finalizing operational changes.',
    icon: Brain,
    image: '/zenith.png',
  },
];

export default function AlgomatePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Navbar />

      <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(24,71,240,0.12),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(7,132,168,0.14),transparent_40%),linear-gradient(180deg,#f7fbff_0%,#ffffff_75%)]" />

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mid">
            Algomate Platform
          </span>

          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Smarter Scheduling for Academic Operations
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mid md:text-lg">
                Algomate helps institutions build intelligent, conflict-free timetables in minutes. It combines automation, optimization,
                and AI guidance to improve planning speed and quality.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#contact" className="btn-primary">
                  Book a Free Demo <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <Link href="#about-algomate" className="btn-ghost">
                  Watch Algomate in Action
                </Link>
              </div>

              <div className="mt-8 flex max-w-xl flex-wrap gap-3">
                <div className="cursor-default rounded-xl border-[1.5px] border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-[2px] hover:border-brand-accent/40 hover:shadow-lg">
                  <div className="font-display text-[22px] font-bold tracking-tight text-ink">SIH 2025</div>
                  <div className="mt-1 text-[11.5px] font-medium text-soft">Winners</div>
                </div>
                <div className="cursor-default rounded-xl border-[1.5px] border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-[2px] hover:border-brand-accent/40 hover:shadow-lg">
                  <div className="font-display text-[22px] font-bold tracking-tight text-ink">Hybrid AI</div>
                  <div className="mt-1 text-[11.5px] font-medium text-soft">Driven Engine</div>
                </div>
                <div className="cursor-default rounded-xl border-[1.5px] border-slate-200 bg-white px-4 py-3 transition-all hover:-translate-y-[2px] hover:border-brand-accent/40 hover:shadow-lg">
                  <div className="font-display text-[22px] font-bold tracking-tight text-ink">NEP 2020</div>
                  <div className="mt-1 text-[11.5px] font-medium text-soft">Compliant</div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl border border-blue-100 bg-[linear-gradient(165deg,#eaf5ff_0%,#dff0ff_45%,#f7fbff_100%)] p-4 shadow-2xl shadow-blue-100/80 md:p-5">
              <div className="relative h-[360px] overflow-hidden rounded-2xl border border-blue-100 bg-white md:h-[480px]">
                <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-blue-100 bg-gradient-to-r from-[#2d79be] to-[#4f8ccf] px-4 py-3 text-white md:px-5">
                  <div className="text-sm font-semibold md:text-base">Timetable Scheduler - AI powered</div>
                  <div className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-bold text-emerald-950">No Conflicts</div>
                </div>

                <div className="absolute left-3 right-3 top-[58px] flex gap-2 md:left-4 md:right-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="flex-1 rounded-lg border border-blue-100 bg-blue-50 py-2 text-center text-xs font-semibold text-blue-700 md:text-sm">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="absolute left-3 right-3 top-[108px] bottom-3 grid grid-cols-[56px_1fr] gap-2 md:left-4 md:right-4 md:grid-cols-[66px_1fr]">
                  <div className="space-y-4 pt-2 text-[11px] font-semibold text-slate-400 md:space-y-6 md:text-xs">
                    <p>9-10</p>
                    <p>10-11</p>
                    <p>11-12</p>
                    <p>2-3</p>
                  </div>

                  <div className="relative rounded-xl border border-blue-100 bg-[linear-gradient(180deg,#f8fbff_0%,#f3f9ff_100%)]">
                    <div className="absolute left-[3%] top-[8%] w-[18%] rounded-xl bg-[#5a8fc8] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Math</p>
                      <p className="text-[10px] text-blue-100">Dr. Sharma</p>
                    </div>
                    <div className="absolute left-[25%] top-[8%] w-[18%] rounded-xl bg-[#6eaecf] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Physics</p>
                      <p className="text-[10px] text-blue-100">Dr. Rao</p>
                    </div>
                    <div className="absolute left-[58%] top-[8%] w-[18%] rounded-xl bg-[#5f9bbc] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">CS Lab</p>
                      <p className="text-[10px] text-blue-100">Prof. Singh</p>
                    </div>
                    <div className="absolute left-[83%] top-[8%] w-[14%] rounded-xl bg-[#4d78b4] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">English</p>
                      <p className="text-[10px] text-blue-100">Ms. Patel</p>
                    </div>

                    <div className="absolute left-[20%] top-[35%] w-[18%] rounded-xl bg-[#5f89bc] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Data Str.</p>
                      <p className="text-[10px] text-blue-100">Dr. Mehta</p>
                    </div>
                    <div className="absolute left-[41%] top-[35%] w-[18%] rounded-xl bg-[#5f9bbc] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Networks</p>
                      <p className="text-[10px] text-blue-100">Prof. Ali</p>
                    </div>
                    <div className="absolute left-[74%] top-[35%] w-[18%] rounded-xl bg-[#79b7c2] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Algebra</p>
                      <p className="text-[10px] text-blue-100">Dr. Kumar</p>
                    </div>

                    <div className="absolute left-[3%] top-[61%] w-[16%] rounded-xl bg-[#6eaecf] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">OS Lab</p>
                      <p className="text-[10px] text-blue-100">Dr. Sharma</p>
                    </div>
                    <div className="absolute left-[58%] top-[61%] w-[18%] rounded-xl bg-[#5f9bbc] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">DBMS</p>
                      <p className="text-[10px] text-blue-100">Prof. Das</p>
                    </div>
                    <div className="absolute left-[83%] top-[61%] w-[14%] rounded-xl bg-[#6f9fb8] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">Stats</p>
                      <p className="text-[10px] text-blue-100">Dr. Rao</p>
                    </div>

                    <div className="absolute left-[41%] top-[84%] w-[18%] rounded-xl bg-[#5d87bb] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">SE</p>
                      <p className="text-[10px] text-blue-100">Prof. Singh</p>
                    </div>
                    <div className="absolute left-[74%] top-[84%] w-[16%] rounded-xl bg-[#79b7c2] px-2 py-2 text-white shadow-sm">
                      <p className="text-[11px] font-bold">AI/ML</p>
                      <p className="text-[10px] text-blue-100">Dr. Mehta</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 rounded-2xl bg-[#3f87ab] px-3 py-2 text-white shadow-lg">
                  <p className="text-[10px] font-semibold uppercase tracking-wide">AI Ready</p>
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-[#265fa7] px-4 py-2 text-xs font-bold text-white shadow-lg">
                  NEP 2020
                </div>
              </div>

              <div className="pointer-events-none absolute -left-4 top-10 hidden w-36 rounded-2xl border border-blue-200 bg-white/95 p-3 shadow-xl md:block">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-soft">Smart Classroom</p>
                <p className="mt-1 text-sm font-bold text-ink">Live Session Sync</p>
                <p className="mt-1 text-xs font-medium text-mid">Attendance + timetable connected</p>
              </div>

              <div className="pointer-events-none absolute -right-4 bottom-14 hidden w-36 rounded-2xl border border-cyan-200 bg-cyan-50/95 p-3 shadow-xl md:block">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-700">AI Suggestion</p>
                <p className="mt-1 text-sm font-bold text-cyan-900">Room Shuffle</p>
                <p className="mt-1 text-xs font-medium text-cyan-800/80">+14% utilization today</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {capabilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute inset-0 z-0 translate-y-[-100%] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                    <Image
                      src={card.image}
                      alt={`${card.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#072a57]/75 via-[#0f4b86]/65 to-[#0c698f]/70" />
                  </div>

                  <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h2 className="relative z-10 mt-4 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-white">
                    {card.title}
                  </h2>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-mid transition-colors group-hover:text-blue-100">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section>
      </section>

        {/* Academic Compass Pro Feature Card Section - moved after feature cards */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
            <div className="rounded-3xl bg-[linear-gradient(135deg,#f5faff_0%,#dbeafe_60%,#e7f0fa_100%)] shadow-xl flex flex-col md:flex-row gap-10 items-center border border-transparent">
              <div className="flex-1 min-w-[260px] p-8 md:p-12">
                <span className="inline-block mb-3 rounded-full border border-blue-300 bg-blue-300/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-700">ADVANCED TECHNOLOGY</span>
                <h2 className="font-display text-4xl font-extrabold tracking-tight text-blue-900 mb-4">Algomate</h2>
                <p className="text-lg text-blue-700 mb-6 max-w-md">Unlock advanced features for academic management with enhanced AI, analytics, and real-time collaboration tools.</p>
                <Link href="https://algomate.aymorix.com/" className="inline-flex items-center gap-2 rounded-full bg-blue-500 text-white px-6 py-3 font-semibold shadow-md hover:bg-blue-600 transition text-lg">Request Demo <ArrowRight size={18} /></Link>
              </div>
              <div className="flex-1 min-w-[260px] p-8 md:p-12">
                <ul className="space-y-4">
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> Real-Time Analytics</li>
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> AI-Driven Insights</li>
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> Secure Cloud Storage</li>
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> Faculty Collaboration</li>
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> Customizable Dashboards</li>
                  <li className="rounded-xl bg-blue-100 px-6 py-4 text-blue-900 font-medium flex items-center gap-3 shadow-sm text-lg"><CheckCircle2 size={22} className="text-emerald-400" /> Advanced Scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      <section className="pb-24 md:pb-28" id="about-algomate">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
          <div className="mb-6 md:mb-8">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              About Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              About Algomate
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(160deg,#ffffff_0%,#f3f9ff_100%)] p-7 shadow-sm md:p-10">
            <article className="group relative mb-7 overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm md:mb-8">
              <div className="relative h-48 w-full md:h-64">
                <Image
                  src="/screen.png"
                  alt="Algomate dashboard preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06224b]/88 via-[#0f3b75]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-100">Hover Insight</p>
                  <p className="mt-1 text-sm font-bold text-white md:text-base">Algomate Mission in Action</p>
                  <p className="mt-1 text-xs text-blue-100 md:text-sm">AI-driven scheduling that frees educators from manual planning and keeps classrooms running smarter.</p>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div>
                <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  Our Mission
                </span>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                  Empowering Education Through Technology
                </h2>

                <p className="mt-5 text-base leading-relaxed text-mid md:text-lg">
                  Algomate helps educational institutions simplify academic scheduling with technology that works as hard as educators do,
                  so teachers can focus on teaching and inspiring students.
                </p>

                <p className="mt-4 text-base leading-relaxed text-mid md:text-lg">
                  Built by educators and technologists, Algomate turns weeks of manual timetable planning into minutes through AI-powered
                  automation, smarter faculty coordination, and better resource use.
                </p>

                <div className="mt-6 space-y-2">
                  <div className="flex items-start gap-2 text-sm font-medium text-blue-900">
                    <CheckCircle2 size={17} className="mt-0.5 text-blue-600" />
                    AI-Powered Intelligence
                  </div>
                  <div className="flex items-start gap-2 text-sm font-medium text-blue-900">
                    <CheckCircle2 size={17} className="mt-0.5 text-blue-600" />
                    NEP 2020 Compliant
                  </div>
                  <div className="flex items-start gap-2 text-sm font-medium text-blue-900">
                    <CheckCircle2 size={17} className="mt-0.5 text-blue-600" />
                    99.9% Uptime Guarantee
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 self-start">
                <article className="rounded-2xl border border-blue-200 bg-white p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Cpu size={18} />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">Intelligent Automation</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mid">From faculty allocation to room mapping, Algomate handles complex planning automatically.</p>
                </article>

                <article className="rounded-2xl border border-blue-200 bg-white p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ink">Built for Educators</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mid">Designed with real academic workflows so staff can spend more time on teaching outcomes.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
