"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('introduction');
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-200 py-3 md:py-4 px-4 sm:px-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Image src="/Aymorix_logo2.png" alt="Aymorix company logo - AI workflow platform" width={44} height={44} className="rounded-full" priority />
            <span className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Aymorix</span>
          </div>
          <Link href="/" className="text-sm md:text-base text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 gap-6 md:gap-8">
        {/* Sidebar Navigation */}
        <nav className="md:w-64 w-full bg-white rounded-2xl shadow border border-blue-200 p-5 md:p-6 mb-6 md:mb-0">
          <ul className="space-y-4">
            <li><button className={`font-bold text-blue-900 ${activeSection === 'introduction' ? 'underline' : ''}`} onClick={() => setActiveSection('introduction')}>Introduction</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'features' ? 'underline' : ''}`} onClick={() => setActiveSection('features')}>Features</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'faq' ? 'underline' : ''}`} onClick={() => setActiveSection('faq')}>FAQ</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'contact' ? 'underline' : ''}`} onClick={() => setActiveSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-xl border border-blue-200 p-5 sm:p-8 md:p-16">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">Aymorix Documentation</h1>
            <p className="text-slate-500 mb-8">Last updated: March 18, 2026</p>
          </div>
          {activeSection === 'introduction' && (
            <section id="introduction" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Introduction</h2>
              <p>Aymorix is a comprehensive platform designed to empower organizations and individuals with intelligent automation, advanced scheduling, and business optimization tools. Our mission is to simplify complex workflows, enhance productivity, and enable seamless digital transformation for businesses of all sizes.</p>
              <p className="mt-4">With Aymorix, you can automate repetitive tasks, manage timetables efficiently, and showcase products or services in a modern, user-friendly interface. The platform leverages AI-driven features to deliver smart automations, actionable insights, and robust integrations with third-party services.</p>
              <p className="mt-4">Key benefits include:</p>
              <ul className="list-disc list-inside mb-3">
                <li>Streamlined scheduling for academic, business, and personal use</li>
                <li>AI-powered automations to reduce manual effort</li>
                <li>Customizable product showcase and management</li>
                <li>Secure, scalable, and easy-to-use interface</li>
                <li>Integration with popular tools and APIs</li>
              </ul>
              <p className="mt-4">This documentation provides step-by-step guides, API references, customization options, troubleshooting tips, and FAQs to help you get the most out of Aymorix. Whether you are a developer, administrator, or end user, you'll find resources to support your journey with our platform.</p>
            </section>
          )}
          {activeSection === 'features' && (
            <section id="features" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Core Features of Aymorix</h2>
              <ul className="list-disc list-inside mb-3">
                <li><b>Smart Timetable Scheduler:</b> Automate, optimize, and visualize schedules for academic, business, and personal needs with drag-and-drop and conflict detection.</li>
                <li><b>AI-Powered Automations:</b> Intelligent workflows for reminders, task management, notifications, and repetitive process automation.</li>
                <li><b>Product & Service Showcase:</b> Customizable layouts, reviews, ratings, and bulk upload for products/services. Modern UI for easy browsing and management.</li>
                <li><b>Advanced Analytics:</b> Actionable insights, usage statistics, and performance dashboards to help decision-making.</li>
                <li><b>Integration Hub:</b> Connect with popular tools, APIs, payment gateways, and third-party services for seamless workflow.</li>
                <li><b>Secure & Scalable Platform:</b> User authentication, data privacy, and scalable infrastructure for organizations of any size.</li>
                <li><b>Customizable Themes:</b> Personalize colors, branding, and layouts to match your organization’s identity.</li>
                <li><b>User Engagement:</b> Built-in FAQ, review, and feedback sections to support and engage users.</li>
                <li><b>Live Support & Feedback:</b> Integrated live chat and feedback forms for real-time assistance and suggestions.</li>
              </ul>
            </section>
          )}
          {activeSection === 'faq' && (
            <section id="faq" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">FAQ</h2>
              <ul className="list-disc list-inside mb-3">
                <li><b>How do I reset my password?</b> Use the account settings page or contact support. Password reset emails are sent instantly.</li>
                <li><b>How to report a bug?</b> Email <a href="mailto:info@aymorix.com" className="text-blue-600 hover:underline">info@aymorix.com</a> or use the feedback form in the app.</li>
              </ul>
            </section>
          )}
          {activeSection === 'contact' && (
            <section id="contact" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact</h2>
                <ul className="list-disc list-inside">
                  <li>Email: info@aymorix.com (response within 24 hours)</li>
                  <li>Address: Aymorix Technologies, Nagpur, Maharashtra, India</li>
                  <li>Support: Live chat available on weekdays, 10am–6pm IST</li>
                  <li>Feedback: Use the feedback form in the app for suggestions</li>
                </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
