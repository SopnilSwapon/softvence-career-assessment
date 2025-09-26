import AudienceSection from "./components/AudienceSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Services />
      <AudienceSection />
      <Testimonials />
      <FAQSection />
      <Footer />
    </main>
  );
}
