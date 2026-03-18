'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="bg-ink text-white py-20 relative overflow-hidden">
            <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
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

            <div className="max-w-7xl mx-auto px-8 md:px-16 mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                {/* Logo & Description */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Link href="/" className="flex items-center gap-3 no-underline">
                            <Image
                                src="/Aymorix_logo2.png"
                                alt="Aymorix logo"
                                width={42}
                                height={42}
                                className="w-10 h-10"
                                priority
                            />
                        </Link>
                        <span className="font-display font-bold text-sm text-white tracking-tight">Aymorix</span>
                    </div>
                    <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                        Empowering businesses with scalable SaaS and intelligent automations.
                    </p>
                    <div className="flex gap-6 mb-6">
                        <a href="https://facebook.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-blue-600/30 w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition">
                            <i className="fab fa-facebook-f text-white text-2xl"></i>
                        </a>
                        <a href="https://twitter.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full bg-blue-600/30 w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition">
                            <i className="fab fa-twitter text-white text-2xl"></i>
                        </a>
                        <a href="https://linkedin.com/company/aymorix" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-blue-600/30 w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition">
                            <i className="fab fa-linkedin-in text-white text-2xl"></i>
                        </a>
                        <a href="https://instagram.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-blue-600/30 w-12 h-12 flex items-center justify-center hover:bg-blue-600 transition">
                            <i className="fab fa-instagram text-white text-2xl"></i>
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="ml-8">
                    <h3 className="font-bold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><Link href="#services"><i className="fas fa-concierge-bell mr-2"></i>Services</Link></li>
                        <li><Link href="#industry"><i className="fas fa-industry mr-2"></i>Industry</Link></li>
                        <li><Link href="#products"><i className="fas fa-box-open mr-2"></i>Products</Link></li>
                        <li><Link href="#techstack"><i className="fas fa-cubes mr-2"></i>Tech Stack</Link></li>
                        <li><Link href="#about"><i className="fas fa-users mr-2"></i>About Us</Link></li>
                        <li><Link href="#faq"><i className="fas fa-question-circle mr-2"></i>FAQ</Link></li>
                    </ul>
                </div>
                {/* Resources */}
                <div>
                    <h3 className="font-bold mb-4 text-white">Resources</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li><Link href="/docs"><i className="fas fa-book mr-2"></i>Documentation</Link></li>
                        <li><Link href="/privacy"><i className="fas fa-shield-alt mr-2"></i>Privacy Policy</Link></li>
                        <li><Link href="/terms"><i className="fas fa-file-contract mr-2"></i>Terms of Service</Link></li>
                    </ul>
                </div>
                {/* Contact Us */}
                <div>
                    <h3 className="font-bold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li><span className="inline-flex items-center"><i className="fas fa-envelope mr-2"></i> hello@aymorix.com</span></li>
                        <li><span className="inline-flex items-center"><i className="fas fa-phone mr-2"></i> +91 7058435485</span></li>
                        <li><span className="inline-flex items-center"><i className="fas fa-map-marker-alt mr-2"></i> Nagpur, Maharashtra, India</span></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-8 md:px-16 mt-8 flex items-center justify-center">
                <div className="text-xs text-slate-500 font-medium">
                    &copy; {new Date().getFullYear()} Aymorix Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
