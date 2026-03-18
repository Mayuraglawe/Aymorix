"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('introduction');
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-200 py-4 px-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/Aymorix_logo2.png" alt="Aymorix Logo" width={44} height={44} className="rounded-full" priority />
            <span className="text-2xl font-extrabold text-black tracking-tight">Aymorix</span>
          </div>
          <Link href="/" className="text-base text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-12 gap-8">
        {/* Sidebar Navigation */}
        <nav className="md:w-64 w-full bg-white rounded-2xl shadow border border-blue-200 p-6 mb-8 md:mb-0">
          <ul className="space-y-4">
            <li><span className="font-bold text-blue-900">Get started</span>
              <ul className="ml-4 space-y-2">
                <li><button className={`text-blue-700 hover:underline ${activeSection === 'introduction' ? 'font-bold' : ''}`} onClick={() => setActiveSection('introduction')}>Introduction</button></li>
                <li><button className={`text-blue-700 hover:underline ${activeSection === 'quickstart' ? 'font-bold' : ''}`} onClick={() => setActiveSection('quickstart')}>Quickstart</button></li>
              </ul>
            </li>
            <li><span className="font-bold text-blue-900">Guides</span>
              <ul className="ml-4 space-y-2">
                <li><button className={`text-blue-700 hover:underline ${activeSection === 'installation' ? 'font-bold' : ''}`} onClick={() => setActiveSection('installation')}>Installation & Setup</button></li>
                <li><button className={`text-blue-700 hover:underline ${activeSection === 'project-structure' ? 'font-bold' : ''}`} onClick={() => setActiveSection('project-structure')}>Project Structure</button></li>
                <li><button className={`text-blue-700 hover:underline ${activeSection === 'features' ? 'font-bold' : ''}`} onClick={() => setActiveSection('features')}>Core Features</button></li>
              </ul>
            </li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'api' ? 'underline' : ''}`} onClick={() => setActiveSection('api')}>API Reference</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'customization' ? 'underline' : ''}`} onClick={() => setActiveSection('customization')}>Customization</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'faq' ? 'underline' : ''}`} onClick={() => setActiveSection('faq')}>FAQ</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'changelog' ? 'underline' : ''}`} onClick={() => setActiveSection('changelog')}>Changelog</button></li>
            <li><button className={`font-bold text-blue-900 ${activeSection === 'contact' ? 'underline' : ''}`} onClick={() => setActiveSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow-xl border border-blue-200 p-10 md:p-16">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-slate-900 mb-2">Aymorix Documentation</h1>
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
          {activeSection === 'quickstart' && (
            <section id="quickstart" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Quickstart</h2>
              <ul className="list-disc list-inside mb-3">
                <li>Clone the repository from GitHub using <span className="font-mono">git clone</span>.</li>
                <li>Install dependencies with <span className="font-mono">npm install</span> to ensure all required packages are available.</li>
                <li>Configure environment variables in <span className="font-mono">.env</span> for database, API keys, and other settings.</li>
                <li>Run the development server: <span className="font-mono">npm run dev</span> and access the app at <span className="font-mono">localhost:3000</span>.</li>
                <li>For production, use <span className="font-mono">npm run build</span> and <span className="font-mono">npm start</span>.</li>
              </ul>
            </section>
          )}
          {activeSection === 'installation' && (
            <section id="installation" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Installation & Setup</h2>
              <ul className="list-disc list-inside mb-3">
                <li>System requirements: Node.js (v18+), npm (v9+), and a modern browser.</li>
                <li>Clone project: <span className="font-mono">git clone &lt;repo-url&gt;</span> to your local machine.</li>
                <li>Install dependencies: <span className="font-mono">npm install</span> to set up all packages.</li>
                <li>Start server: <span className="font-mono">npm run dev</span> for development, <span className="font-mono">npm run build</span> for production.</li>
                <li>Check <span className="font-mono">README.md</span> for additional setup instructions.</li>
              </ul>
            </section>
          )}
          {activeSection === 'project-structure' && (
            <section id="project-structure" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Project Structure</h2>
              <ul className="list-disc list-inside mb-3">
                <li><span className="font-mono">src/app</span>: Main application pages, including documentation, terms, privacy, and product pages.</li>
                <li><span className="font-mono">src/components</span>: Reusable UI components for layout, branding, and interactive features.</li>
                <li><span className="font-mono">public</span>: Static assets (logo, images, video frames).</li>
                <li><span className="font-mono">package.json</span>: Project metadata, scripts, and dependencies.</li>
                <li><span className="font-mono">README.md</span>: Overview and instructions for contributors.</li>
              </ul>
            </section>
          )}
          {activeSection === 'features' && (
            <section id="features" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Core Features</h2>
              <ul className="list-disc list-inside mb-3">
                <li>Timetable Scheduler: Automate and optimize scheduling for academic and business needs.</li>
                <li>AI Automations: Intelligent workflows for productivity, including reminders and task management.</li>
                <li>Product Showcase: Highlight and manage products with customizable layouts and reviews.</li>
                <li>FAQ and Review Sections: Enhance user engagement and support.</li>
              </ul>
            </section>
          )}
          {activeSection === 'api' && (
            <section id="api" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">API Reference</h2>
              <ul className="list-disc list-inside mb-3">
                <li>Endpoints: <span className="font-mono">/api/contact</span>, <span className="font-mono">/api/products</span>, <span className="font-mono">/api/reviews</span></li>
                <li>Authentication: JWT-based, API keys, and OAuth support.</li>
                <li>Error Handling: Standardized error responses with helpful messages.</li>
                <li>Rate Limiting: Prevent abuse and ensure reliability for all users.</li>
                <li>API documentation available in the docs section.</li>
              </ul>
            </section>
          )}
          {activeSection === 'customization' && (
            <section id="customization" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Customization</h2>
              <ul className="list-disc list-inside mb-3">
                <li>Theme & Branding: Update colors, logo, and fonts in <span className="font-mono">globals.css</span> and <span className="font-mono">layout.tsx</span>.</li>
                <li>Extending Functionality: Add new pages/components in <span className="font-mono">src/app</span> and <span className="font-mono">src/components</span> for custom features.</li>
                <li>Integrations: Connect with third-party APIs and services, such as payment gateways and analytics.</li>
                <li>Responsive design: Ensure compatibility across devices.</li>
              </ul>
            </section>
          )}
          {activeSection === 'faq' && (
            <section id="faq" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">FAQ</h2>
              <ul className="list-disc list-inside mb-3">
                <li><b>How do I reset my password?</b> Use the account settings page or contact support. Password reset emails are sent instantly.</li>
                <li><b>How to add new products?</b> Use the Product Showcase section or API endpoint. You can also bulk upload products via CSV.</li>
                <li><b>How to report a bug?</b> Email <a href="mailto:info@aymorix.com" className="text-blue-600 hover:underline">info@aymorix.com</a> or use the feedback form in the app.</li>
                <li><b>How to customize the theme?</b> Edit <span className="font-mono">globals.css</span> and preview changes live.</li>
              </ul>
            </section>
          )}
          {activeSection === 'changelog' && (
            <section id="changelog" className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-3">Changelog</h2>
              <ul className="list-disc list-inside mb-3">
                <li>v1.0.0: Initial release with core scheduling and product features.</li>
                <li>v1.1.0: Added AI automations, review section, and improved UI.</li>
                <li>v1.2.0: Improved scheduling features, added bulk product upload, and enhanced API documentation.</li>
                <li>v1.2.1: Minor bug fixes and performance improvements.</li>
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
