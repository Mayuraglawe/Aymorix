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

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Navbar Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

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
      className={`fixed top-0 inset-x-0 z-[1000] transition-colors duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
                <a href="#" aria-label="Aymorix home" className="hover:opacity-80 transition-opacity">
          <AymorixLogo size={36} variant="full" color={scrolled ? "#14B8A6" : "#0F172A"} />
        </a>

        {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-semibold text-[15px] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full ${scrolled ? 'text-slate-300 hover:text-teal-400' : 'text-slate-800 hover:text-slate-950'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            className="ml-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]"
          >
            Our Products
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className={`md:hidden p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg transition-colors ${scrolled ? 'text-white' : 'text-slate-800'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-[#0F172A] border-t border-slate-800 px-6 pb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-3 text-slate-300 font-medium hover:text-teal-400"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            className="mt-3 block text-center px-5 py-2.5 bg-teal-500 text-white rounded-full text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Our Products
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Hero Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e6e6e4]">
      {/* Hand-drawn / paper sketch style background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="w-[150vw] h-full"
          animate={{ x: ["0%", "-33.3%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
            duration: 80,
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1465809873722-b4bf7208d2b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Sketch style landscape"
            className="w-full h-full object-cover grayscale contrast-125 sepia-[.10] opacity-60 mix-blend-multiply origin-center"
          />
        </motion.div>

        {/* Gradient transition to the dark mode below */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#0F172A]"></div>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.07] hero-grid" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/10 border border-slate-900/10 backdrop-blur-sm mb-8 shadow-sm">
            <Sparkles size={14} className="text-teal-600" />
            <span className="text-sm text-slate-800 font-bold uppercase tracking-widest">Building the Future of Education Technology</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.05] mb-6 tracking-tight drop-shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Innovating{' '}
          <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Software
          </span>
          <br />
          for Tomorrow
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-700 mb-10 leading-relaxed font-medium"
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
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="group px-8 py-4 bg-teal-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-teal-700 transition-colors hover:shadow-teal-600/30 flex items-center gap-2"
          >
            Explore Our Products
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-4 border-2 border-slate-800 text-slate-800 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-2"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} className="text-slate-800/40" />
        </motion.div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ About Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function useCountUp(target: number, duration = 1.8, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

function StatCard({ value, label }: { value: string; label: string }) {
  const [ref, inView] = [
    useState<HTMLDivElement | null>(null),
    useState(false),
  ];
  const divRef = (el: HTMLDivElement | null) => {
    if (el && !ref[0]) {
      ref[1](el);
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { inView[1](true); observer.disconnect(); } },
        { threshold: 0.5 }
      );
      observer.observe(el);
    }
    (ref as unknown as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  // Parse numeric part + suffix
  const numMatch = value.match(/^(\d+)(.*)/);
  const target = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch ? numMatch[2] : value;
  const isNumeric = !!numMatch && !/\//.test(value); // skip "24/7"

  const count = useCountUp(target, 1.8, inView[0]);

  return (
    <motion.div
      ref={divRef as unknown as React.RefObject<HTMLDivElement>}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-slate-800/50 rounded-2xl p-8 text-center border border-slate-800 hover:shadow-xl hover:shadow-teal-500/10 cursor-default"
    >
      <div className="text-3xl lg:text-4xl font-extrabold text-teal-400">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="mt-2 text-sm font-medium text-slate-400">{label}</div>
    </motion.div>
  );
}

function AboutSection() {
  const stats = [
    { value: '2025', label: 'Founded' },
    { value: '1+', label: 'Products Shipped' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-16 lg:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">About Aymorix</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Technology that{' '}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                empowers
              </span>{' '}
              institutions
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              Aymorix is a forward-thinking software company dedicated to building
              intelligent, scalable products for the education sector and beyond.
              We believe great software should simplify complexity and unlock potential.
            </p>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Our flagship product, <strong className="text-slate-200">Academic Compass</strong>,
              is revolutionizing how colleges manage timetables, curriculum, and academic operations Ã¢â‚¬â€
              powered by smart automation and a deep understanding of institutional needs.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-64 lg:h-auto lg:row-span-2 col-span-2 lg:col-span-1 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aymorix Team Collaboration"
                className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent mix-blend-multiply rounded-2xl pointer-events-none"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 col-span-2 lg:col-span-1">
              {stats.map((s, i) => (
                <StatCard key={i} value={s.value} label={s.label} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Products Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

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
    <section id="products" className="py-16 lg:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Our Products</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Flagship Product</h2>
        </motion.div>

        <motion.div
          className="relative bg-gradient-to-br from-[#0A1628] to-[#020617] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-600/10 to-transparent pointer-events-none" />

          {/* New Image Wrapper */}
          <div className="w-full h-64 lg:h-96 relative overflow-hidden bg-slate-900 border-b border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Academic Compass Dashboard" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                <GraduationCap size={16} className="text-teal-400" />
                <span className="text-sm text-teal-300 font-medium">Education Technology</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Academic Compass</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A comprehensive academic management platform that empowers colleges to
                effortlessly manage timetables, track curriculum, and streamline operations Ã¢â‚¬â€
                all in one intelligent system.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors hover:shadow-lg hover:shadow-teal-500/25"
              >
                Learn More
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                  }}
                  whileHover={{ x: 5, backgroundColor: "rgba(20, 184, 166, 0.05)" }}
                  className="flex items-center gap-3 bg-[#0F172A]/5 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/5 cursor-default transition-colors"
                >
                  <CheckCircle2 size={20} className="text-teal-400 shrink-0" />
                  <span className="text-white font-medium">{f}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-400 text-lg">
            More products coming soon. <span className="text-teal-400 font-medium">Stay tuned.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Services Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

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
    <section id="services" className="py-16 lg:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">What We Do</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Services</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We deliver end-to-end technology solutions that help organizations modernize, automate, and scale.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 cursor-default transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-900/40 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Why Us Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function WhyUsSection() {
  const reasons = [
    {
      icon: <Zap size={24} />,
      title: 'Cutting-Edge Technology',
      desc: 'We use the latest frameworks Ã¢â‚¬â€ Next.js, React, TypeScript, AI Ã¢â‚¬â€ to build fast, modern, and future-proof products.',
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
    <section id="why-us" className="py-16 lg:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Why Aymorix</span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">Why Choose Us</h2>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-5 p-8 rounded-2xl bg-[#0F172A] border border-slate-800 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-900/40 text-teal-400 flex items-center justify-center shrink-0">
                {r.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{r.title}</h3>
                <p className="text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ CTA Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function CTASection() {
  return (
    <section className="py-16 lg:py-28 bg-[#615C5B] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 cta-grid" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the growing number of colleges using Aymorix products to modernize
            their academic operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="group px-8 py-4 bg-teal-500 text-white rounded-full font-bold text-lg hover:bg-teal-600 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-400 text-white rounded-full font-semibold text-lg hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Contact Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function ContactSection() {
  const contactInfo = [
    { icon: <Mail size={20} />, label: 'contact@aymorix.com', href: 'mailto:contact@aymorix.com' },
    { icon: <Phone size={20} />, label: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: <MapPin size={20} />, label: 'India', href: null },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    program: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const inputClass =
    'w-full px-5 py-4 rounded-xl bg-[#0F172A] border-2 border-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setStatusMsg(data.message);
        setFormData({ firstName: '', lastName: '', email: '', program: '', message: '' });
      } else {
        setStatus('error');
        setStatusMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-28 bg-slate-800/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-teal-400 uppercase tracking-widest">Contact Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Let&apos;s build something <span className="text-teal-400">great</span> together
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Have a project in mind or want to learn more about our products?
              Our team is ready to help you transform your vision into reality.
            </p>

            <div className="space-y-6 mb-10">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#0F172A] shadow-sm border border-slate-800 text-teal-400 flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-slate-300 text-lg font-semibold hover:text-teal-400 transition-colors">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-lg font-semibold">{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="relative h-48 w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-800">
               <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Aymorix Office"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#0F172A] p-8 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Success banner */}
            {status === 'success' && (
              <motion.div
                className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-700"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{statusMsg}</p>
              </motion.div>
            )}

            {/* Error banner */}
            {status === 'error' && (
              <motion.div
                className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <X size={20} className="shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{statusMsg}</p>
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name *"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="First Name"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name *"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  aria-label="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                aria-label="Email Address"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="program" className="sr-only">Interested In</label>
              <select
                id="program"
                name="program"
                aria-label="Area of interest"
                value={formData.program}
                onChange={handleChange}
                className={`${inputClass} cursor-pointer`}
              >
                <option value="">Interested In... (optional)</option>
                <option value="Academic Compass">Academic Compass</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="AI & Automation">AI &amp; Automation</option>
                <option value="SaaS Product Design">SaaS Product Design</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project... *"
                required
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                aria-label="Your Message"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              disabled={status === 'loading'}
              className="w-full px-8 py-4 bg-teal-500 text-white rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors hover:shadow-2xl hover:shadow-teal-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Footer Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

function Footer() {
  return (
    <footer className="bg-[#020617] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2 pr-4">
            <AymorixLogo size={36} variant="full" color="#818CF8" />
            <p className="mt-6 text-slate-400 leading-relaxed text-[15px] max-w-sm">
              Building intelligent software products that transform how institutions operate, scale, and grow.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { Icon: Twitter,  href: 'https://twitter.com/aymorix',          label: 'Aymorix on Twitter' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/aymorix', label: 'Aymorix on LinkedIn' },
                { Icon: Github,   href: 'https://github.com/aymorix',           label: 'Aymorix on GitHub' },
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0F172A]/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-teal-500 hover:border-teal-500 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">Academic Compass</a></li>
              <li><span className="text-slate-300 text-[15px] font-medium">More coming soon...</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="/privacy" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-slate-400 hover:text-teal-400 text-[15px] font-medium transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Aymorix. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
            <span>Designed &amp; Built with</span>
            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Main Page Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ */

export default function AymorixHomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#0F172A]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}




