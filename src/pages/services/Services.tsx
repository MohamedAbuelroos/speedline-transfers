import { Container, Divider } from "@mui/material";
import HeaderSection from "./Sections/HeaderSection";
import ServiceSection from "./Sections/ServiceSection";
import FlightIcon from "@mui/icons-material/Flight";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import StandardsSection from "./Sections/StandardsSection";
import CTASection from "./Sections/CTASection";
import airportservice from "../../assets/images/AirService.jpg";
import cityTocity from "../../assets/images/CityToCity.jpg";
import hourly from "../../assets/images/Hourlly.jpg";

const Services = () => {
  return (
    <>
      <HeaderSection />

      <Container>
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
      </Container>
      <StandardsSection />
      <CTASection />
    </>
  );
};

export default Services;
