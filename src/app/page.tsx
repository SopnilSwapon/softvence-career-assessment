import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
       <main className="w-full bg-white">
        <Navbar/>
      <HeroSection />
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
