
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions — Aymorix',
  description: 'Full Academic Compass Terms and Conditions for Aymorix users.',
};



export default function TermsOfService() {
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
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-blue-200 p-10 md:p-16">
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-slate-900 mb-2">Terms and Conditions</h1>
            <p className="text-slate-500 mb-8">Last updated: March 18, 2026</p>
          </div>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Site Terms and Conditions</h2>
            <p>Hello and welcome to Aymorix! We’re excited to have you explore our website and platform. These Terms and Conditions are here to help you understand how our site operates, how your information is handled, and how you can use our services responsibly.</p>
            <p>These terms apply to your use of this website (the “Site”), including all services, software, and content provided by Aymorix Technologies. By accessing and using the Site, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy.</p>
            <p>Our mission at Aymorix is to empower organizations and individuals with intelligent automation and business optimization tools. We hope you find inspiration and value in the resources and features we offer. If you have questions or need support, please reach out using the “Contact” section.</p>
            <p>Your continued use of the Site means you accept these Terms and our Privacy Policy, including how we collect, use, and protect your information. If you have any objections, please discontinue use of the Site.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Eligibility</h2>
            <p>You must be at least 16 years old to use Aymorix. If you are representing an organization, you must have the authority to bind that entity to these Terms.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Account Registration & Security</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Provide accurate, complete information during registration.</li>
              <li>Maintain confidentiality of your credentials.</li>
              <li>Notify Aymorix immediately of unauthorized access or security breaches.</li>
              <li>You are responsible for all activities under your account.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Services Provided</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Software-as-a-Service (SaaS) platform for automation, scheduling, and business optimization.</li>
              <li>AI-driven features, integrations, and analytics.</li>
              <li>Support and maintenance as described in documentation.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. User Responsibilities</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Use Aymorix for lawful purposes only.</li>
              <li>Comply with all applicable laws, regulations, and company policies.</li>
              <li>Do not misuse, abuse, or attempt to disrupt the platform.</li>
              <li>Do not upload malicious code, viruses, or harmful content.</li>
              <li>Do not attempt unauthorized access to other accounts or systems.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Acceptable Use Policy</h2>
            <ul className="list-disc list-inside mb-3">
              <li>No harassment, hate speech, or abusive behavior.</li>
              <li>No infringement of intellectual property or privacy rights.</li>
              <li>No reverse engineering, decompiling, or unauthorized modification.</li>
              <li>No excessive use that may degrade service for others.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Payment & Subscription</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Some features may require payment or subscription.</li>
              <li>Fees are non-refundable unless otherwise stated.</li>
              <li>Failure to pay may result in suspension or termination of services.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">8. Intellectual Property</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Aymorix, its logo, software, and content are owned by Aymorix Technologies.</li>
              <li>Users retain ownership of their original content uploaded to the platform.</li>
              <li>By uploading content, you grant Aymorix a license to use, display, and distribute it as needed for service delivery.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">9. Data Privacy & Security</h2>
            <ul className="list-disc list-inside mb-3">
              <li>We collect and process data as described in our Privacy Policy.</li>
              <li>Data is protected using industry-standard security measures.</li>
              <li>We do not sell user data to third parties.</li>
              <li>Users are responsible for safeguarding their own data and credentials.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">10. Third-Party Services</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Aymorix may integrate with third-party services (e.g., payment gateways, analytics).</li>
              <li>We are not responsible for the content, privacy, or practices of third-party sites.</li>
              <li>Use of third-party services is subject to their own terms and policies.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">11. Service Availability & Maintenance</h2>
            <ul className="list-disc list-inside mb-3">
              <li>We strive for high availability but do not guarantee uninterrupted access.</li>
              <li>Maintenance, updates, or outages may occur without prior notice.</li>
              <li>We are not liable for downtime or loss of data during maintenance.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">12. Limitation of Liability</h2>
            <ul className="list-disc list-inside mb-3">
              <li>Aymorix is not liable for indirect, incidental, consequential, or punitive damages.</li>
              <li>Use the platform at your own risk.</li>
              <li>Our total liability is limited to the amount paid by you for the service.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">13. Termination</h2>
            <ul className="list-disc list-inside mb-3">
              <li>We may suspend or terminate your account for violation of these Terms.</li>
              <li>You may terminate your account at any time by contacting support.</li>
              <li>Upon termination, your access to the platform will cease.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">14. Changes to Terms</h2>
            <ul className="list-disc list-inside mb-3">
              <li>We may update these Terms for legal, technical, or business reasons.</li>
              <li>The "Last Updated" date will be revised.</li>
              <li>Material changes may be communicated via our website or email.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">15. Governing Law</h2>
            <ul className="list-disc list-inside mb-3">
              <li>These Terms are governed by the laws of India.</li>
              <li>Any disputes will be resolved in the courts of Nagpur, Maharashtra, India.</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">16. Contact Information</h2>
            <ul className="list-disc list-inside">
                <li>Email: info@aymorix.com</li>
                <li>Address: Aymorix Technologies, Nagpur, Maharashtra, India</li>
                <li>Support: Live chat available weekdays, 10am–6pm IST</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
