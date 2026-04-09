"use client";
import ServicesSection from '@/components/home/ServicesSection';
import Navbar from '@/components/layout/Navbar';
import HeroAnimated from '@/components/home/HeroAnimated';
import Services from '@/components/home/Services';
import ProductShowcase from '@/components/home/ProductShowcase';
import IndustriesSection from '@/components/home/IndustriesSection';
import WhatWeDeliver from '@/components/home/WhatWeDeliver';
import TechStrip from '@/components/TechStrip';
import FAQSection from '@/components/FAQSection';
import AboutTeam from '@/components/home/AboutTeam';
import Footer from '@/components/layout/Footer';
import SlidingReviewSection from '@/components/SlidingReviewSection';

// this need to add to for change to deploy
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroAnimated />
      {/* <Services /> removed as per user request */}
      <ServicesSection />
      <IndustriesSection />
      <WhatWeDeliver />
      <ProductShowcase />
      <div className="my-12" />
      <TechStrip />
      <SlidingReviewSection />
      <FAQSection />
      <AboutTeam />
      <Footer />
    </main>
  );
}
