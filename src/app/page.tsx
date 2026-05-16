import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Eligibility from '@/components/Eligibility';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Features />
        <Eligibility />
        <LeadForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
