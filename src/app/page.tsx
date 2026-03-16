import Navbar from '@/components/layout/Navbar';
import HeroAnimated from '@/components/home/HeroAnimated';
import Services from '@/components/home/Services';
import ProductShowcase from '@/components/home/ProductShowcase';
import TechStack from '@/components/home/TechStack';
import AboutTeam from '@/components/home/AboutTeam';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroAnimated />
      <Services />
      <ProductShowcase />
      <TechStack />
      <AboutTeam />
      <Footer />
    </main>
  );
}
