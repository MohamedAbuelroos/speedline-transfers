import { Box } from "@mui/material";

import HeroSection from "./Sections/HeroSection";
import CompanySection from "./Sections/CompanySection";
import WhyChooseSection from "./Sections/WhyChooseSection";
import ServicesSection from "./Sections/ServicesSection";
import TimelineSection from "./Sections/TimelineSection";
import StatsBanner from "./Sections/StatsBanner";
import CTASection from "./Sections/CTASection";

const About = () => {
  return (
    <Box>
      <HeroSection />
      <CompanySection />
      <WhyChooseSection />
      <ServicesSection />
      <TimelineSection />
      <StatsBanner />
      <CTASection />
    </Box>
  );
};

export default About;
