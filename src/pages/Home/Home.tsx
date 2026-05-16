import FleetPreviewSection from "./Sections/FleetPreviewSection";
import HeroSection from "./Sections/HeroSection";
import ServicesSection from "./Sections/ServicesSection";
import PopularTransfersSection from "./Sections/PopularTransfersSection";
import FeaturesSection from "./Sections/FeaturesSection";
import CTASection from "./Sections/CTASection";
import StatsBanner from "./Sections/StatsBanner";
import PartnersSection from "./Sections/PartnersSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <FleetPreviewSection />
      <PopularTransfersSection />
      <FeaturesSection />
      <PartnersSection />
      <CTASection />
    </>
  );
};

export default Home;
