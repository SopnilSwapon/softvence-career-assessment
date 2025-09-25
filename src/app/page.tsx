import FAQSection from "./components/FAQSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
       <main className="w-full bg-white">
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
