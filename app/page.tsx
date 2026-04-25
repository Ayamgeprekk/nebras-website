import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import StorySection from '@/components/StorySection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <TrustSection />
      <StorySection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
