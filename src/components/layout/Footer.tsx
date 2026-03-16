'use client';

export default function Footer() {
    return (
        <footer id="contact" className="bg-ink text-white py-20 relative overflow-hidden">
            <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                {/* Left: Contact Information */}
                <div className="max-w-md">
                    <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 text-brand-accent text-xs font-semibold tracking-wide uppercase mb-6">
                        Contact
                    </span>
                    <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-5">
                        Let's Build Together
                    </h2>
                    <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                        Ready to completely optimize your school timetables or need custom enterprise software? We are here to help. Reach out.
                    </p>
                    <div className="space-y-4">
                        <div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Office</div>
                            <div className="text-[15px] font-medium text-slate-300">Nagpur, Maharashtra, India</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</div>
                            <a href="mailto:hello@aymorix.com" className="text-[15px] font-medium text-white hover:text-brand-accent transition">
                                hello@aymorix.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Interested In</label>
                            <select className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none appearance-none transition">
                                <option>Algomate</option>
                                <option>Custom SaaS Development</option>
                                <option>General AI Integration</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition resize-none"
                                placeholder="Tell us about your project or use case..."
                            ></textarea>
                        </div>
                        <button className="w-full bg-brand hover:bg-brand-accent text-white font-semibold py-3.5 rounded-lg text-sm transition tracking-wide flex items-center justify-center gap-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-8 md:px-16 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                            <path d="M4 4l12 12m0-12L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className="font-display font-bold text-sm text-white tracking-tight">Aymorix</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                    &copy; {new Date().getFullYear()} Aymorix Technologies. All rights reserved.
                </div>
                <div className="flex gap-4 text-xs font-semibold text-slate-400">
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
