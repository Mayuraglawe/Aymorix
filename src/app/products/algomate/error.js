"use client";
export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-ink">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <button className="btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  );
}
