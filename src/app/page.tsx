import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
       <main className="w-full bg-white">
        <Navbar/>
      <HeroSection />
      <Services/>
      <Testimonials/>
      {/* <FeaturesSection />
      <UserFeaturesSection />
      <EmployeeFeaturesSection />
      <BusinessOwnerFeaturesSection />
      <TestimonialsSection /> */}
      <FAQSection />
      {/* <DownloadSection /> */}
    </main>
  );
}
