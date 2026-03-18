"use client";
import Navbar from '@/components/layout/Navbar';
import HeroAnimated from '@/components/home/HeroAnimated';
import Services from '@/components/home/Services';
import ProductShowcase from '@/components/home/ProductShowcase';
import WhatWeDeliver from '@/components/home/WhatWeDeliver';
import TechStrip from '@/components/TechStrip';
import FAQSection from '@/components/FAQSection';
import AboutTeam from '@/components/home/AboutTeam';
import Footer from '@/components/layout/Footer';
import SlidingReviewSection from '@/components/SlidingReviewSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroAnimated />
      <Services />
      <WhatWeDeliver />
      <ProductShowcase />
      <div className="my-12" />
      <div id="technologies">
        <TechStrip />
      </div>
      <SlidingReviewSection />
      <AboutTeam />
      <FAQSection />
      <Footer />
    </main>
  );
}
