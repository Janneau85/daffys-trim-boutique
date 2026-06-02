import Header from "@/components/Header";
import heroImage from "@/assets/realistic-pomeranian.jpg";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-clip">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <TreatmentsSection />
          <ReviewsSection />
          <FAQSection />
          <InstagramSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
