// Add this directive for Next.js 14+ client component
"use client";
import React from 'react';
import Image from 'next/image';

const techStack = [
  { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Neon', icon: '/neon.png' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'n8n', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
];

export default function TechStrip() {
  return (
    <div className="overflow-hidden w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto mb-8 px-4 sm:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2">Technologies We Use</h2>
        <p className="text-base md:text-lg text-mid">Our platform is built on modern, scalable, and secure technologies.</p>
      </div>
      <div className="relative w-full">
        <div className="animate-marquee flex gap-12 w-max">
          {Array(3).fill(techStack).flat().map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center min-w-[108px] sm:min-w-[120px]">
              <div className="h-16 w-16 flex items-center justify-center">
                <img src={tech.icon} alt={tech.name} width={64} height={64} />
              </div>
              <span className="mt-2 text-base font-semibold text-ink">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
