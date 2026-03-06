'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AymorixLogo } from '@/components/AymorixLogo';
import {
  GraduationCap,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  Users,
  Globe,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Menu,
  X,
  Code,
  Cpu,
  BarChart3,
  Layers,
  CheckCircle2,
  Star,
  ArrowUpRight,
} from 'lucide-react';

/* ─── Navbar ──────────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-teal-500/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <AymorixLogo size={42} variant="full" color="#0D9488" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-600 font-medium text-[15px] hover:text-teal-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            className="ml-2 px-5 py-2.5 bg-teal-600 text-white rounded-full text-sm font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Our Products
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-slate-100 px-6 pb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-slate-600 font-medium hover:text-teal-600"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            className="mt-3 block text-center px-5 py-2.5 bg-teal-600 text-white rounded-full text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Our Products
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Hero Section ────────────────────────────────────────────────── */

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background — deep navy */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0A1628] to-[#021A1A]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13,148,136,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)',
          y,
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-teal-400" />
            <span className="text-sm text-teal-300 font-medium">Building the Future of Education Technology</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Innovating{' '}
          <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Software
          </span>
          <br />
          for Tomorrow
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Aymorix is a technology company crafting intelligent software products
          that transform how institutions operate, learn, and grow.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#products"
            className="group px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg hover:bg-teal-700 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 flex items-center gap-2"
          >
            Explore Our Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-white/30" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── About Section ───────────────────────────────────────────────── */

function AboutSection() {
  const stats = [
    { value: '2025', label: 'Founded' },
    { value: '1+', label: 'Products Shipped' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">About Aymorix</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Technology that{' '}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                empowers
              </span>{' '}
              institutions
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Aymorix is a forward-thinking software company dedicated to building
              intelligent, scalable products for the education sector and beyond.
              We believe great software should simplify complexity and unlock potential.
            </p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our flagship product, <strong className="text-slate-800">Academic Compass</strong>,
              is revolutionizing how colleges manage timetables, curriculum, and academic operations —
              powered by smart automation and a deep understanding of institutional needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 text-center border border-slate-200/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-teal-600">{s.value}</div>
                <div className="mt-2 text-sm font-medium text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products Section ────────────────────────────────────────────── */

function ProductsSection() {
  const features = [
    'AI-Powered Timetable Scheduling',
    'NEP 2020 Curriculum Management',
    'Multi-Role Dashboards',
    'Real-Time Notifications',
    'Conflict-Free Scheduling',
    'Assignment & Assessment System',
  ];

  return (
    <section id="products" className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Products</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">Flagship Product</h2>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-[#0A1628] to-[#020617] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-600/10 to-transparent pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <GraduationCap size={16} className="text-teal-400" />
                <span className="text-sm text-teal-300 font-medium">Education Technology</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Academic Compass</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A comprehensive academic management platform that empowers colleges to
                effortlessly manage timetables, track curriculum, and streamline operations —
                all in one intelligent system.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Learn More
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <CheckCircle2 size={20} className="text-teal-400 shrink-0" />
                  <span className="text-white font-medium">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-500 text-lg">
            More products coming soon. <span className="text-teal-600 font-medium">Stay tuned.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Services Section ────────────────────────────────────────────── */

function ServicesSection() {
  const services = [
    {
      icon: <Code size={28} />,
      title: 'Custom Software Development',
      desc: 'Tailored solutions built from the ground up to match your business requirements and workflows.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'AI & Automation',
      desc: 'Intelligent automation that eliminates repetitive tasks and optimizes decision-making processes.',
    },
    {
      icon: <Layers size={28} />,
      title: 'SaaS Product Design',
      desc: 'End-to-end product design and development for scalable, cloud-native SaaS applications.',
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Data Analytics',
      desc: 'Transform raw data into actionable insights with custom dashboards and reporting tools.',
    },
    {
      icon: <Shield size={28} />,
      title: 'Security & Compliance',
      desc: 'Enterprise-grade security with role-based access, encryption, and regulatory compliance.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Cloud Infrastructure',
      desc: 'Scalable cloud architecture designed for performance, reliability, and cost efficiency.',
    },
  ];

  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">What We Do</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that help organizations modernize, automate, and scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/50 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-14 h-14 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us Section ──────────────────────────────────────────────── */

function WhyUsSection() {
  const reasons = [
    {
      icon: <Zap size={24} />,
      title: 'Cutting-Edge Technology',
      desc: 'We use the latest frameworks — Next.js, React, TypeScript, AI — to build fast, modern, and future-proof products.',
    },
    {
      icon: <Users size={24} />,
      title: 'Domain Expertise',
      desc: 'Deep understanding of education systems, NEP 2020 requirements, and institutional workflows.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise-Grade Security',
      desc: 'Role-based access control, real-time monitoring, and data protection that meets industry standards.',
    },
    {
      icon: <Star size={24} />,
      title: 'Quality First',
      desc: 'Every product is built with rigorous testing, clean architecture, and attention to user experience.',
    },
  ];

  return (
    <section id="why-us" className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Why Aymorix</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">Why Choose Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="flex gap-5 p-8 rounded-2xl bg-white border border-slate-200/50 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                {r.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="py-28 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the growing number of colleges using Aymorix products to modernize
            their academic operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="group px-8 py-4 bg-white text-teal-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─────────────────────────────────────────────── */

function ContactSection() {
  const contactInfo = [
    { icon: <Mail size={20} />, label: 'contact@aymorix.com' },
    { icon: <Phone size={20} />, label: '+91 XXXXX XXXXX' },
    { icon: <MapPin size={20} />, label: 'India' },
  ];

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Contact</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Have a project in mind? Want to learn more about our products?
              We&apos;d love to hear from you.
            </p>

            <div className="space-y-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-slate-600 font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <AymorixLogo size={36} variant="full" color="#5EEAD4" />
            <p className="mt-4 text-slate-400 leading-relaxed text-sm">
              Building intelligent software products that transform how institutions operate and grow.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-400/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Academic Compass</a></li>
              <li><span className="text-slate-600 text-sm">More coming soon...</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Aymorix. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Designed &amp; Built with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ───────────────────────────────────────────────────── */

export default function AymorixHomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <WhyUsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
