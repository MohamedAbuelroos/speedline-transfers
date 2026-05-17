import { Container, Divider } from "@mui/material";
import ServiceSection from "./Sections/ServiceSection";
import FlightIcon from "@mui/icons-material/Flight";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StandardsSection from "./Sections/StandardsSection";
import CTASection from "./Sections/CTASection";
import airportservice from "../../assets/images/AirService.webp";
import cityTocity from "../../assets/about/CityToCity.webp";
import hourly from "../../assets/images/Hourlly.webp";
import ServicesQuickNav from "./Sections/ServicesQuickNav";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import corporateImage from "../../assets/about/Corporate.webp";

import vipImage from "../../assets/about/VIPService.png";

import eventsImage from "../../assets/about/Umrah.webp";

import StarIcon from "@mui/icons-material/Star";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../../components/common/Seo";

const Services = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 200);
    }
  }, [location]);
  return (
    <>
      <Seo
        title="Our Services | Professional Chauffeur & Airport Transfers Across Saudi Arabia"
        description="Explore SpeedLine Transfers’ range of services — from reliable airport pickups and city-to-city rides to hourly chauffeur bookings. Experience comfort, safety, and professionalism with our premium transportation solutions across Saudi Arabia."
        keywords="Saudi chauffeur services, airport transfers Saudi Arabia, city rides Riyadh, Jeddah transportation, premium travel Saudi Arabia"
      />

      <ServicesQuickNav />

      <Container maxWidth="xl" sx={{ background: "white" }}>
        <ServiceSection
          serviceType="airport"
          title="Airport Transfers"
          description="Start or end your journey with total peace of mind. Our professional chauffeurs track your flight in real-time to ensure they are waiting for you the moment you land."
          image={airportservice}
          features={[
            "60-Min Free Waiting Time",
            "Real-time Flight Tracking",
            "Meet & Greet Service",
            "Fixed Competitive Rates",
            "Luggage Assistance",
            "Punctual Pickups",
          ]}
          icon={<FlightIcon />}
        />

        <Divider />

        <ServiceSection
          serviceType="city"
          title="City to City"
          description="Travel between cities with comfort and reliability. Enjoy smooth long-distance rides with professional drivers and premium vehicles."
          image={cityTocity}
          reverse
          features={[
            "Comfortable Long-Distance Travel",
            "Professional Drivers",
            "Flexible Pickup Times",
            "Fixed Pricing",
            "Air-conditioned Vehicles",
            "Door-to-Door Service",
          ]}
          icon={<LocationPinIcon />}
        />
        <Divider />
        <ServiceSection
          serviceType="hourly"
          title="Hire by the Hour"
          description="Need flexibility? Book a chauffeur by the hour for business meetings, shopping, or city tours."
          image={hourly}
          features={[
            "Flexible Hourly Booking",
            "Multiple Stops Allowed",
            "Locally Knowledgeable",
            "Ideal for Business Trips",
            "City Tours Ready",
            "On-demand Availability",
          ]}
          icon={<QueryBuilderIcon />}
        />
        <Divider />

        <ServiceSection
          serviceType="corporate"
          title="Corporate Travel"
          description="Professional transportation solutions tailored for executives, business meetings, conferences, and corporate clients. Ensure punctuality, comfort, and a seamless experience for your team and guests."
          image={corporateImage}
          reverse
          features={[
            "Executive Chauffeur Service",
            "Business Meeting Transfers",
            "Conference Transportation",
            "Corporate Account Support",
            "Reliable Scheduling",
            "Professional Presentation",
          ]}
          icon={<BusinessCenterIcon />}
        />
        <Divider />

        <ServiceSection
          serviceType="vip"
          title="VIP Transportation"
          description="Experience elevated comfort with our premium VIP transportation services. Perfect for executives, special guests, luxury travel, and clients seeking a first-class journey."
          image={vipImage}
          features={[
            "Premium Luxury Vehicles",
            "Professional Chauffeurs",
            "Private Executive Transfers",
            "Personalized Experience",
            "Maximum Comfort & Privacy",
            "Priority Service",
          ]}
          icon={<StarIcon />}
        />
        <Divider />

        <ServiceSection
          serviceType="events"
          title="Event Transportation"
          description="Reliable group and individual transportation for weddings, conferences, exhibitions, sporting events, and private occasions. We ensure every guest arrives comfortably and on time."
          image={eventsImage}
          reverse
          features={[
            "Wedding Transportation",
            "Conference & Expo Transfers",
            "Group Coordination",
            "Flexible Scheduling",
            "Professional Drivers",
            "Smooth Guest Experience",
          ]}
          icon={<EventSeatIcon />}
        />
      </Container>
      <StandardsSection />
      <CTASection />
    </>
  );
};

export default Services;
