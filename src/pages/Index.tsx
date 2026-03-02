import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ExperienceSection from "@/components/ExperienceSection";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <ExperienceSection />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
