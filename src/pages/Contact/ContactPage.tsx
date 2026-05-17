import CTASection from "../Home/Sections/CTASection";
import ContactCardsSection from "./sections/ContactCardsSection";
import ContactFormSection from "./sections/ContactFormSection";
import CoverageSection from "./sections/CoverageSection";
import HeroSection from "./sections/HeroSection";

const ContactPage = () => {
  return (
    <>
      <HeroSection />

      <ContactCardsSection />

      <ContactFormSection />

      <CoverageSection />

      <CTASection />
    </>
  );
};

export default ContactPage;
