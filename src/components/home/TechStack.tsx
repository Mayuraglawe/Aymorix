'use client';

import { useMemo, useState } from 'react';

type Category = 'Frontend' | 'Backend' | 'Databases' | 'QA' | 'Design' | 'Deployment' | 'AI' | 'Automation';

type TechItem = {
    name: string;
    icon: string;
    category: Category;
};

const categories: Category[] = ['Frontend', 'Backend', 'Databases', 'QA', 'Design', 'Deployment', 'AI', 'Automation'];

const technologies: TechItem[] = [
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Frontend' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Frontend' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'Frontend' },
    { name: 'Svelte', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg', category: 'Frontend' },

    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Backend' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', category: 'Backend' },

    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Databases' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Databases' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Databases' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'Databases' },

    { name: 'Playwright', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg', category: 'QA' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', category: 'QA' },

    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'Design' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', category: 'Design' },

    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Deployment' },
    { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Deployment' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'Deployment' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', category: 'Deployment' },

    { name: 'OpenAI', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg', category: 'AI' },
    { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/langchain.svg', category: 'AI' },
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'AI' },

    { name: 'n8n', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/n8n.svg', category: 'Automation' },
];

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState<Category>('Frontend');

    const filteredItems = useMemo(
        () => technologies.filter((item) => item.category === activeCategory),
        [activeCategory]
    );

    return (
        <section id="tech-stack" className="py-18 md:py-20 bg-white border-y border-slate-200">
            <div className="max-w-screen-xl mx-auto px-6 md:px-16">
                <div className="mb-8 md:mb-10 border-b border-slate-300/70">
                    <div className="flex items-center gap-3 md:gap-5 overflow-x-auto pb-0.5">
                        {categories.map((category) => {
                            const isActive = category === activeCategory;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`relative py-3 px-2 shrink-0 font-display text-sm md:text-[18px] transition-colors ${
                                        isActive ? 'text-ink font-semibold' : 'text-mid hover:text-ink'
                                    }`}
                                >
                                    {category}
                                    <span
                                        className={`absolute left-0 right-0 bottom-0 h-[2px] transition-all ${
                                            isActive ? 'bg-brand-accent' : 'bg-transparent'
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-5 md:gap-x-6 gap-y-7 md:gap-y-9">
                    {filteredItems.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center text-center">
                            <div className="w-full max-w-[170px] aspect-square rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid place-items-center p-7 md:p-8">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-3 md:mt-4 font-display text-base md:text-lg text-ink font-medium">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
