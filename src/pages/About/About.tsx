import { Box } from "@mui/material";

import HeroSection from "./Sections/HeroSection";
import CompanySection from "./Sections/CompanySection";
import WhyChooseSection from "./Sections/WhyChooseSection";
import TimelineSection from "./Sections/TimelineSection";
import CTASection from "./Sections/CTASection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import FAQSection from "./Sections/FAQSection";

const About = () => {
  return (
    <Box>
      <HeroSection />
      <CompanySection />
      <WhyChooseSection />
      <TimelineSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Box>
  );
};

export default About;
