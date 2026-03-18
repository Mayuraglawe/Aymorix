export default function AboutTeam() {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(165deg,#f8fbff_0%,#f3f4ff_45%,#ffffff_100%)] py-20 md:py-24"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-cyan-200/35 blur-3xl" />
                <div className="absolute right-8 top-24 h-56 w-56 rounded-full bg-indigo-200/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-44 w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand/10 to-transparent blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 md:px-16">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 shadow-[0_26px_70px_rgba(16,25,64,0.2)]">
                            <div className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                                Team Story
                            </div>

                            <video
                                className="h-[340px] w-full object-cover md:h-[420px]"
                                src="/Video_Generation_Request%20(1).mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

                            <div className="absolute bottom-4 left-4 right-4 z-20 grid grid-cols-3 gap-3">
                                <div className="rounded-xl border border-white/25 bg-white/15 p-3 text-center text-white backdrop-blur-sm">
                                    <p className="font-display text-xl font-bold leading-none">4+</p>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-100">Projects</p>
                                </div>
                                <div className="rounded-xl border border-white/25 bg-white/15 p-3 text-center text-white backdrop-blur-sm">
                                    <p className="font-display text-xl font-bold leading-none">6</p>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-100">Core Experts</p>
                                </div>
                                <div className="rounded-xl border border-white/25 bg-white/15 p-3 text-center text-white backdrop-blur-sm">
                                    <p className="font-display text-xl font-bold leading-none">99%</p>
                                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-100">Client Trust</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <span className="mb-4 inline-block rounded-full border border-brand/20 bg-brand/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                            About Us
                        </span>

                        <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-ink md:text-6xl">
                            We Build
                            <br />
                            Digital Momentum
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-mid">
                            Aymorix blends product strategy, deep engineering, and AI-first thinking to craft dependable digital systems. We help
                            organizations simplify operations, launch faster, and keep growing with confidence.
                        </p>

                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-soft">Approach</p>
                                <p className="mt-1 text-sm font-semibold text-ink">Outcome-led roadmap and transparent execution</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-soft">Strength</p>
                                <p className="mt-1 text-sm font-semibold text-ink">Cloud-native architecture with AI enhancements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
