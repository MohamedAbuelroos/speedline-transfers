import Seo from "../../components/common/Seo";
import CTASection from "../Home/Sections/CTASection";
import ContactCardsSection from "./sections/ContactCardsSection";
import ContactFormSection from "./sections/ContactFormSection";
import CoverageSection from "./sections/CoverageSection";
import HeroSection from "./sections/HeroSection";

const ContactPage = () => {
  return (
    <>
      <Seo
        title="Contact SpeedLine Transfers | Book Chauffeur & Airport Services in Saudi Arabia"
        description="Get in touch with SpeedLine Transfers for premium airport transfers, chauffeur bookings, and city rides across Saudi Arabia. Contact us today to book your ride or inquire about our services."
        keywords="contact SpeedLine Transfers, Saudi airport transfer booking, chauffeur contact Saudi Arabia, Riyadh airport transfers, Jeddah chauffeur services"
      />

      <HeroSection />

      <ContactCardsSection />

      <ContactFormSection />

      <CoverageSection />

      <CTASection />
    </>
  );
};

export default ContactPage;
