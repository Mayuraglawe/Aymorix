'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Mail, Phone, MapPin, X } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
    const [status, setStatus] = useState<'' | 'loading' | 'success' | 'error'>('');
    const [formData, setFormData] = useState({ fullName: '', email: '', program: 'Algomate', message: '', honeypot: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const names = formData.fullName.trim().split(' ');
        const firstName = names[0] || '';
        const lastName = names.slice(1).join(' ') || ' ';

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email: formData.email,
                    program: formData.program,
                    message: formData.message,
                    honeypot: formData.honeypot
                }),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ fullName: '', email: '', program: 'Algomate', message: '', honeypot: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };
    return (
        <footer id="contact" className="bg-ink text-white py-20 relative overflow-hidden">
            <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
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
                            <a href="mailto:info@aymorix.com" className="text-[15px] font-medium text-white hover:text-brand-accent transition">
                                info@aymorix.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg text-sm text-center">
                                Message sent successfully! We will get back to you shortly.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-sm text-center">
                                Failed to send message. Please try again.
                            </div>
                        )}
                        {/* Honeypot field - visually hidden */}
                        <div className="hidden" aria-hidden="true">
                            <label>Leave this field empty</label>
                            <input
                                type="text"
                                name="honeypot"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.honeypot}
                                onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                    className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Interested In</label>
                            <select
                                value={formData.program}
                                onChange={(e) => setFormData(prev => ({ ...prev, program: e.target.value }))}
                                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none appearance-none transition"
                            >
                                <option>Algomate</option>
                                <option>Custom SaaS Development</option>
                                <option>General AI Integration</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-400 mb-2 tracking-tight">Message</label>
                            <textarea
                                rows={4}
                                required
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-sm text-white focus:ring-2 focus:ring-brand-accent outline-none transition resize-none"
                                placeholder="Tell us about your project or use case..."
                            ></textarea>
                        </div>
                        <button
                            disabled={status === 'loading'}
                            className="w-full bg-brand hover:bg-brand-accent disabled:opacity-70 disabled:hover:bg-brand text-white font-semibold py-3.5 rounded-lg text-sm transition tracking-wide flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-20 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
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
                    <div className="flex flex-wrap gap-4 mb-6">
                        {/* <a href="https://facebook.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <Facebook size={20} className="text-white" />
                        </a> */}
                        <a href="https://x.com/aymorix_tech" target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/aymorix-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <Linkedin size={20} className="text-white" />
                        </a>
                        {/* <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <Instagram size={20} className="text-white" />
                        </a> */}
                        {/* <a href="https://youtube.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <Youtube size={20} className="text-white" />
                        </a> */}
                        {/* <a href="https://github.com/aymorix" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full bg-slate-800 border border-slate-700 w-11 h-11 flex items-center justify-center hover:bg-brand hover:border-brand transition-colors">
                            <Github size={20} className="text-white" />
                        </a> */}
                    </div>
                </div>
                {/* Quick Links */}
                <div className="md:ml-8">
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
                            <li><Link href="/documentation"><i className="fas fa-book mr-2"></i>Documentation</Link></li>
                        <li><Link href="/privacy"><i className="fas fa-shield-alt mr-2"></i>Privacy Policy</Link></li>
                        <li><Link href="/terms"><i className="fas fa-file-contract mr-2"></i>Terms of Service</Link></li>
                    </ul>
                </div>
                {/* Contact Us */}
                <div>
                    <h3 className="font-bold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li><span className="inline-flex items-center"><Mail size={16} className="mr-3" /> info@aymorix.com</span></li>
                        <li><span className="inline-flex items-center"><Phone size={16} className="mr-3" /> +91 7058435485</span></li>
                        <li><span className="inline-flex items-center"><MapPin size={16} className="mr-3" /> Nagpur, Maharashtra, India</span></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mt-8 flex items-center justify-center">
                <div className="text-xs text-slate-500 font-medium">
                    &copy; {new Date().getFullYear()} Aymorix Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
