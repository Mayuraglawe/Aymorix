"use client";
import { useState, useEffect } from "react";

const reviews = [
    {
      name: "Parent of Allergy-Prone Student",
      company: "Allergy Detection App",
      text: "The Allergy Detection App gave us peace of mind. It's fast, reliable, and easy to use. Highly recommended for anyone managing allergies!",
      highlight: "Peace of Mind",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
      rating: 5
    },
  {
    name: "A College Administrator",
    company: "Algomate (ERP Software)",
    text: "Algomate made our admin work so much easier. The team’s ongoing support has been a lifesaver for our staff. Glad we switched!",
    highlight: "Ongoing Support",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
    rating: 5
  },
  {
    name: "College Student Union / Activities Director",
    company: "Zenith (Clubs Management Site)",
    text: "Zenith keeps all our college clubs organized and running smoothly. The site never crashes, even during busy weeks. Their event tips helped a lot!",
    highlight: "Campus Life Solution",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4
  },
  {
    name: "Official from MRSAC",
    company: "Landparser App",
    text: "Landparser handles our spatial data perfectly. Setup was smooth, and the dashboards make reporting easy. Very stable software!",
    highlight: "Professional Dashboards",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 5
  }
];

export default function ReviewCards() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(2);
  const maxSlide = Math.ceil(reviews.length / reviewsPerSlide);
  const visibleReviews = reviews.slice(slideIdx * reviewsPerSlide, (slideIdx + 1) * reviewsPerSlide);

  useEffect(() => {
    const updateSlides = () => {
      const nextReviewsPerSlide = window.innerWidth < 640 ? 1 : 2;
      setReviewsPerSlide(nextReviewsPerSlide);
      setSlideIdx((prev) => {
        const nextMaxSlide = Math.ceil(reviews.length / nextReviewsPerSlide);
        return prev >= nextMaxSlide ? 0 : prev;
      });
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIdx((prev) => (prev < maxSlide - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 2600 1200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <polygon points="0,0 1200,0 900,1200 0,1200" fill="#dbeafe" />
          <polygon points="2600,0 1800,0 2200,1200 2600,1200" fill="#f1f5f9" />
          <polygon points="700,0 2100,0 1900,1200 1100,1200" fill="#e0e7ef" />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="font-display font-extrabold text-[clamp(1.75rem,5vw,2.8rem)] text-ink tracking-tight text-center mb-2">Testimonial</h2>
        <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8 text-black font-semibold">
          Hear from our happy users and discover how Aymorix made a difference for them.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-center items-stretch">
          {visibleReviews.map((review, idx) => (
            <div key={idx} className="flex h-full w-full flex-col items-center rounded-2xl border border-slate-200 bg-white/90 shadow-lg p-4 sm:p-6 md:p-8">
              <div className="mb-3 sm:mb-4 flex items-center justify-center">
                <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-md bg-blue-100 text-blue-700 text-xl sm:text-2xl md:text-3xl font-bold">
                  {review.name.trim().charAt(0)}
                </div>
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold text-ink mb-2 text-center leading-relaxed">{review.text}</div>
              <div className="flex items-center mt-2 scale-90 sm:scale-100">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < (review.rating || 0) ? 'text-yellow-400' : 'text-slate-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
                <span className="ml-2 text-xs sm:text-sm text-slate-500">{review.rating}.0</span>
              </div>
              <div className="text-xs sm:text-sm text-mid mb-1 text-center">{review.name}</div>
              <div className="text-[11px] sm:text-xs text-slate-500 mb-1 text-center">{review.company}</div>
              <div className="text-[11px] sm:text-xs font-bold text-green-600 text-center">{review.highlight}</div>
            </div>
          ))}
        </div>
        {/* Sliding line indicator */}
        <div className="flex justify-center mt-5 sm:mt-6">
          <div className="relative w-36 sm:w-48 md:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${100 / maxSlide}%`, left: `${(100 / maxSlide) * slideIdx}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
