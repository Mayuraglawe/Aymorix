import type { Metadata } from 'next';
import Link from 'next/link';
import { AymorixLogo } from '@/components/AymorixLogo';

export const metadata: Metadata = {
  title: 'Privacy Policy — Aymorix',
  description: 'How Aymorix collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: March 12, 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>
              When you submit the contact form on our website, we collect your first name, last name,
              email address, area of interest, and the message you provide. We do not collect any
              information automatically beyond standard web server logs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to your inquiry or request</li>
              <li>Provide information about our products and services</li>
              <li>Improve our offerings based on feedback</li>
            </ul>
            <p className="mt-3">We do not sell, trade, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Storage</h2>
            <p>
              Contact form submissions are stored securely on our servers. We retain this data only
              as long as necessary to fulfil the purpose for which it was collected, or as required
              by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies</h2>
            <p>
              Our website does not use tracking cookies. We may use essential session cookies to
              ensure the site functions correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
            <p>
              We use Google Fonts to display typography on this site. Google may collect certain
              usage data when fonts are loaded. Please refer to{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                Google&apos;s Privacy Policy
              </a>{' '}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:contact@aymorix.com" className="text-teal-600 hover:underline">contact@aymorix.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated date. Continued use of our website constitutes acceptance of any
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Contact</h2>
            <p>
              For any privacy-related questions, please contact us at{' '}
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
