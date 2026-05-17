import FleetPreviewSection from "./Sections/FleetPreviewSection";
import HeroSection from "./Sections/HeroSection";
import ServicesSection from "./Sections/ServicesSection";
import PopularTransfersSection from "./Sections/PopularTransfersSection";
import FeaturesSection from "./Sections/FeaturesSection";
import CTASection from "./Sections/CTASection";
import StatsBanner from "./Sections/StatsBanner";
import PartnersSection from "./Sections/PartnersSection";
import Seo from "../../components/common/Seo";
const Home = () => {
  return (
    <>
      <Seo
        title="SpeedLine Transfers | Airport & Chauffeur Transfers in Saudi Arabia"
        description="Book reliable airport transfers, city-to-city rides, hourly chauffeur services, and premium transportation across Saudi Arabia."
        keywords="Saudi airport transfer, chauffeur service Saudi Arabia, Riyadh transfer, Jeddah airport transfer, Makkah transfer"
      />
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
