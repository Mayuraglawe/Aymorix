"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Aymorix and who is it for?",
    answer:
      "As a custom software company, Aymorix builds tailored tools like ERPs and apps for colleges, government bodies, and growing businesses.",
  },
  {
    question: "What features does Aymorix offer?",
    answer:
      "We provide custom app development, AI tools, and act as your product designer to scale your operations.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Since we build custom solutions rather than selling boxed items from a computer software store, we offer personalized free demos instead.",
  },
  {
    question: "Can Aymorix integrate with our existing systems?",
    answer:
      "Absolutely. We provide expert computer service to seamlessly integrate our software with your legacy tools and web hosting company.",
  },
  {
    question: "Is Aymorix secure and compliant?",
    answer:
      "Yes, we ensure top-tier data security and compliance for every client, whether you are a local marketing agency or a government department.",
  },
  {
    question: "What kind of software does Aymorix build?",
    answer:
      "We build platforms like college ERPs, campus management sites, and advanced spatial data tools to solve complex operational challenges.",
  },
  {
    question: "Who does Aymorix typically work with?",
    answer:
      "We partner with educational institutions, government bodies, and local businesses to streamline their daily operations and data management.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <section id="faq" className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 max-[600px]:py-10">
      <div className="mb-6 text-center">
        <span className="block text-xs sm:text-sm font-semibold text-green-600 mb-2">FAQ</span>
        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold text-ink mb-4">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-lg md:rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              className="w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 text-left text-sm sm:text-base md:text-lg font-semibold text-ink focus:outline-none hover:bg-slate-50 transition"
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            >
              {faq.question}
              <span className="ml-2 rounded-full bg-slate-100 p-1.5 md:p-2 flex-shrink-0">
                {openIdx === idx ? (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 12H6"/></svg>
                ) : (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 6v12M6 12h12"/></svg>
                )}
              </span>
            </button>
            {openIdx === idx && (
              <div className="px-4 md:px-6 pb-4 text-xs sm:text-sm md:text-base text-mid leading-relaxed border-t border-slate-200">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
