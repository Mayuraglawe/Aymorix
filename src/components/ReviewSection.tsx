"use client";

const reviews = [
  {
    name: "Dr. Sharma",
    text: "Aymorix's platform has transformed our scheduling process. The automation and analytics are top-notch!",
    role: "Dean, Academic Affairs"
  },
  {
    name: "Ms. Patel",
    text: "The real-time collaboration features make faculty coordination seamless. Highly recommended!",
    role: "Faculty Coordinator"
  },
  {
    name: "Prof. Singh",
    text: "We saw a significant reduction in conflicts and manual errors. The support team is excellent.",
    role: "Head of Department"
  }
];

export default function ReviewSection() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <div className="mb-6 text-center">
        <span className="block text-sm font-semibold text-blue-600 mb-2">Reviews</span>
        <h2 className="text-3xl font-extrabold text-ink mb-4">What Our Users Say</h2>
      </div>
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div key={idx} className="rounded-xl border border-slate-200 bg-white shadow-sm p-6">
            <div className="text-lg font-semibold text-ink mb-2">{review.text}</div>
            <div className="text-sm text-mid">- {review.name}, {review.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
