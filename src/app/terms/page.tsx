import type { Metadata } from 'next';
import Link from 'next/link';
import { AymorixLogo } from '@/components/AymorixLogo';

export const metadata: Metadata = {
  title: 'Terms of Service — Aymorix',
  description: 'Terms and conditions for using Aymorix products and services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 py-5 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <AymorixLogo size={36} variant="full" color="#0D9488" />
          </Link>
          <Link href="/" className="text-sm text-teal-600 font-medium hover:text-teal-700 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last updated: March 12, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Aymorix website and any of our products or services, you
              agree to be bound by these Terms of Service. If you do not agree, please discontinue
              use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Use of Our Services</h2>
            <p>You agree to use our website and services only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Infringe the rights of others</li>
              <li>Distribute malware or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Violate any applicable local, national, or international law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, icons, and software —
              is the property of Aymorix and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Products & Licensing</h2>
            <p>
              Access to Aymorix products (such as Academic Compass) is governed by separate
              licensing agreements entered into at the time of subscription or purchase. These
              Terms do not grant any licence to use such products unless explicitly agreed upon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Disclaimers</h2>
            <p>
              Our website and services are provided &quot;as is&quot; without warranty of any kind, express
              or implied. Aymorix does not warrant that the website will be available uninterrupted
              or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Aymorix shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of, or
              inability to use, our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to external websites. Aymorix is not responsible for
              the content, privacy practices, or accuracy of any third-party sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Changes to Terms</h2>
            <p>
              Aymorix reserves the right to modify these Terms at any time. Changes will be
              effective immediately upon posting. Continued use of the website after changes
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Contact</h2>
            <p>
              For any questions regarding these Terms, please contact us at{' '}
              <a href="mailto:contact@aymorix.com" className="text-teal-600 hover:underline">contact@aymorix.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 px-6 mt-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Aymorix. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
