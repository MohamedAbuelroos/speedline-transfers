import { Box } from "@mui/material";

import HeroSection from "./Sections/HeroSection";
import CompanySection from "./Sections/CompanySection";
import WhyChooseSection from "./Sections/WhyChooseSection";
import TimelineSection from "./Sections/TimelineSection";
import CTASection from "./Sections/CTASection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import FAQSection from "./Sections/FAQSection";
import Seo from "../../components/common/Seo";

const About = () => {
  return (
    <Box>
      <Seo
        title="About SpeedLine Transfers | Trusted Chauffeur & Airport Services in Saudi Arabia"
        description="Learn about SpeedLine Transfers — a reliable transportation company offering professional chauffeur services, airport transfers, and city rides across Saudi Arabia. Discover our mission to deliver comfort, safety, and trust in every journey."
        keywords="about SpeedLine Transfers, Saudi chauffeur company, airport transfer Saudi Arabia, professional drivers KSA, trusted transport service"
      />
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
