import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import AboutSection from "@/components/ui/about-section";
import FeaturesSection from "@/components/ui/features-section";
import ServicesGrid from "@/components/ui/services-grid";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}
