
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Aymorix',
  description: 'Aymorix Privacy Policy for website, products, and services.'
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-blue-200 py-3 md:py-4 px-4 sm:px-6 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <Image src="/Aymorix_logo2.png" alt="Aymorix company logo - privacy policy page" width={44} height={44} className="rounded-full" priority />
            <span className="text-xl md:text-2xl font-extrabold text-black tracking-tight">Aymorix</span>
          </div>
          <Link href="/" className="text-sm md:text-base text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-5 sm:p-8 md:p-16">
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
            <p className="text-slate-500 mb-8">Last updated: March 18, 2026</p>
          </div>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p>Aymorix may collect personal information you provide (name, email, contact details, company, job title, and any info submitted through forms) and information collected automatically (IP address, browser, device info, pages viewed, cookies).</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Respond to your inquiry or request</li>
              <li>Process applications or registrations</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against illegal activity or threats</li>
              <li>Send marketing communications (with consent)</li>
              <li>Analyze trends and understand user interactions</li>
            </ul>
            <p>We do not sell, trade, or share your personal data with third parties for marketing purposes.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Storage</h2>
            <p>Personal data is stored securely and retained only as long as necessary for the purposes outlined or as required by law.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies</h2>
            <p>We use cookies and similar technologies to enhance user experience, analyze usage, and support marketing. You can manage cookie preferences in your browser.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Services</h2>
            <p>We may use trusted service providers to help operate our services. These providers are contractually bound to maintain privacy and data security. We may share data where required by law or legal process.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Your Rights</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Access, correct, or update your information</li>
              <li>Request deletion ("right to be forgotten")</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent for marketing</li>
            </ul>
            <p>To exercise your rights, email us at <a href="mailto:info@aymorix.com" className="text-blue-600 hover:underline">info@aymorix.com</a>.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Retention of Data</h2>
            <p>We retain personal information only as long as necessary for the purposes outlined or as required by law. When no longer needed, data will be deleted, anonymized, or securely stored.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Children’s Privacy</h2>
            <p>Our services are not intended for children under 16. We do not knowingly collect data from anyone under this age. If you believe we hold information about a child under 16, contact us for removal.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Links to Third-Party Websites</h2>
            <p>Our services may link to third-party sites. These have their own privacy policies; Aymorix is not responsible for their content or practices.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Data Security</h2>
            <p>We implement organizational, technical, and administrative safeguards to protect personal data. However, no system is completely secure.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy for legal, technical, or business reasons. The "Last Updated" date will be revised. Material changes may be communicated via our website or other means.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Contact Us</h2>
            <p>If you have questions or wish to exercise your privacy rights, contact us:</p>
            <ul className="list-disc list-inside">
                <li>Email: info@aymorix.com</li>
                <li>Address: Aymorix Technologies, Nagpur, Maharashtra, India</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
