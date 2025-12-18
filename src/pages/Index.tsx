import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import EventCategories from "@/components/EventCategories";
import VendorNetwork from "@/components/VendorNetwork";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProcessSection />
      <EventCategories />
      <VendorNetwork />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
