import type { TravelPackage } from "../utils/types";

import reverseCircuit from "../assets/packages/reverse-circuit.png";
import HajPackage from "../assets/packages/HajPackage.png";
// import umrahExpress from "../assets/packages/umrah-express.png";
// import vipUmrah from "../assets/packages/vip-umrah.png";
// import riyadhTour from "../assets/packages/riyadh-tour.png";
// import alulaTour from "../assets/packages/alula-tour.png";
import elentra from "../assets/images/elentra.png";
import suv from "../assets/images/XPANDER.webp";
import van from "../assets/images/HiAce.png";
import gmc from "../assets/packages/GMC.png";

export const travelPackages: TravelPackage[] = [
  {
    id: "reverse-circuit",
    slug: "reverse-circuit-madinah-jeddah",

    title: "The Reverse Circuit",
    subtitle:
      "Religious transfer experience from Madinah to Jeddah via Makkah.",

    category: "Religious",

    duration: "3 Days / 2 Nights",

    startingPrice: 385,

    coverImage: reverseCircuit,

    gallery: [gmc, HajPackage, reverseCircuit, HajPackage],

    cities: ["Madinah", "Makkah", "Jeddah"],

    vehicleTypes: [
      {
        name: "Standard Sedan",
        capacity: "3 Pax / 3 Bags",
        price: 385,
        image: elentra,
      },
      {
        name: "MPV / SUV",
        capacity: "5 Pax / 5 Bags",
        price: 495,
        image: gmc,
      },
      {
        name: "Luxury Van",
        capacity: "10 Pax / 10 Bags",
        price: 699,
        image: van,
      },
    ],

    overview:
      "Experience a premium spiritual transfer package across the holy cities of Saudi Arabia with professional chauffeurs and luxury vehicles.",

    highlights: [
      "Airport meet & greet",
      "Complimentary Miqat stop",
      "Private chauffeur service",
      "Luxury air-conditioned vehicles",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Transfer",
        route: "MED Airport → Madinah Hotel",
        activities: ["Airport pickup", "Meet & greet", "Luxury hotel transfer"],
      },
      {
        day: "Day 2",
        title: "Intercity Journey",
        route: "Madinah → Makkah",
        activities: ["Miqat stop", "Private intercity transfer"],
      },
      {
        day: "Day 3",
        title: "Departure",
        route: "Makkah Hotel → JED Airport",
        activities: ["Hotel pickup", "Airport dropoff"],
      },
    ],

    inclusions: [
      {
        title: "Professional Driver",
        description:
          "Licensed English and Arabic speaking drivers with extensive regional experience.",
        icon: "driver",
      },

      {
        title: "Premium Refreshments",
        description:
          "Complimentary chilled bottled water provided during all transfers.",
        icon: "water",
      },

      {
        title: "Miqat Stop Included",
        description:
          "Optional complimentary Miqat stop during intercity religious journeys.",
        icon: "location",
      },

      {
        title: "24/7 Customer Support",
        description:
          "Dedicated support team available before and during your trip.",
        icon: "support",
      },
    ],

    terms: [
      {
        title: "Airport Waiting Time",
        description:
          "Includes 60 minutes of complimentary waiting time at MED Airport arrivals.",
      },

      {
        title: "Ramadan Pricing Policy",
        description:
          "A 35% surcharge may apply during the final 10 days of Ramadan due to peak demand.",
      },

      {
        title: "Route Modifications",
        description:
          "Additional route changes or extra stops may affect the final booking price.",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "spiritual-journey",
    slug: "spiritual-journey-package",

    title: "Spiritual Journey",
    subtitle:
      "Comfortable spiritual journey connecting the holy cities with premium transfers.",

    category: "Religious",

    duration: "4 Days / 3 Nights",

    startingPrice: 520,

    coverImage: HajPackage,

    gallery: [HajPackage],

    cities: ["Jeddah", "Makkah", "Madinah"],

    vehicleTypes: [
      {
        name: "Standard Sedan",
        capacity: "3 Pax / 3 Bags",
        price: 520,
        image: elentra,
      },
      {
        name: "SUV",
        capacity: "5 Pax / 5 Bags",
        price: 650,
        image: gmc,
      },
      {
        name: "Luxury Van",
        capacity: "10 Pax / 10 Bags",
        price: 850,
        image: van,
      },
    ],

    overview:
      "Enjoy a peaceful and comfortable spiritual package designed for families and pilgrims.",

    highlights: [
      "Professional chauffeurs",
      "Private city transfers",
      "Luxury vehicles",
      "Flexible pickup timing",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jeddah",
        route: "JED Airport → Makkah",
        activities: ["Airport assistance", "Private transfer"],
      },
      {
        day: "Day 2",
        title: "Holy Journey",
        route: "Makkah → Madinah",
        activities: ["Miqat stop", "VIP highway transfer"],
      },
    ],

    inclusions: [
      {
        title: "Luxury Transportation",
        description:
          "Private luxury vehicles maintained to premium hospitality standards.",
        icon: "car",
      },

      {
        title: "Airport Pickup Service",
        description:
          "Professional airport meet & greet with direct hotel transfer.",
        icon: "location",
      },

      {
        title: "24/7 VIP Support",
        description:
          "Dedicated support team available throughout the package duration.",
        icon: "support",
      },

      {
        title: "Dedicated Driver",
        description:
          "Professional chauffeur available for scheduled transfers and standby service.",
        icon: "driver",
      },
    ],

    terms: [
      {
        title: "Advance Reservation",
        description:
          "Advance booking confirmation is required due to limited premium vehicle availability.",
      },

      {
        title: "Seasonal Pricing",
        description:
          "Additional Ramadan or Hajj season surcharges may apply during high-demand periods.",
      },

      {
        title: "Cancellation Policy",
        description:
          "Cancellation requests must be submitted at least 48 hours before the service date.",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "umrah-express",
    slug: "umrah-express-package",

    title: "Umrah Express",
    subtitle:
      "Fast and seamless Umrah transportation experience with premium comfort.",

    category: "Religious",

    duration: "2 Days / 1 Night",

    startingPrice: 290,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Jeddah", "Makkah"],

    vehicleTypes: [
      {
        name: "Sedan",
        capacity: "3 Pax / 3 Bags",
        price: 290,
        image: elentra,
      },
      {
        name: "SUV",
        capacity: "5 Pax / 5 Bags",
        price: 360,
        image: gmc,
      },
    ],

    overview:
      "Designed for quick Umrah visits with smooth airport-to-hotel transportation.",

    highlights: [
      "Fast booking confirmation",
      "Professional drivers",
      "Meet & greet",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        route: "JED Airport → Makkah",
        activities: ["Airport pickup", "Hotel transfer"],
      },
    ],

    inclusions: [
      {
        title: "Private Transfer",
        description:
          "Comfortable private transportation between all scheduled destinations.",
        icon: "car",
      },

      {
        title: "Complimentary Water",
        description: "Cold bottled water provided during the tour experience.",
        icon: "water",
      },

      {
        title: "Air-Conditioned Vehicles",
        description:
          "Modern air-conditioned fleet ensuring passenger comfort in all weather conditions.",
        icon: "car",
      },

      {
        title: "Flexible Scheduling",
        description:
          "Flexible pickup coordination depending on guest itinerary requirements.",
        icon: "support",
      },
    ],

    terms: [
      {
        title: "Availability Policy",
        description:
          "All bookings remain subject to vehicle and driver availability at confirmation time.",
      },

      {
        title: "Tour Duration",
        description:
          "Additional waiting hours beyond the scheduled duration may incur extra charges.",
      },
    ],

    featured: false,
    popular: true,
  },

  {
    id: "vip-umrah",
    slug: "vip-umrah-experience",

    title: "VIP Umrah Experience",
    subtitle: "Exclusive VIP transportation and concierge-style Umrah package.",

    category: "VIP",

    duration: "5 Days / 4 Nights",

    startingPrice: 990,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Jeddah", "Makkah", "Madinah"],

    vehicleTypes: [
      {
        name: "Business SUV",
        capacity: "5 Pax / 5 Bags",
        price: 990,
        image: gmc,
      },
      {
        name: "Luxury GMC",
        capacity: "6 Pax / 6 Bags",
        price: 1350,
        image: van,
      },
    ],

    overview:
      "A premium luxury Umrah package tailored for VIP guests and families.",

    highlights: [
      "Luxury fleet",
      "VIP meet & greet",
      "Personalized service",
      "Executive chauffeurs",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "VIP Arrival",
        route: "JED Airport → Makkah",
        activities: ["Luxury airport reception", "Executive transfer"],
      },
    ],

    inclusions: [
      {
        title: "Luxury Fleet",
        description:
          "Premium luxury SUVs and executive vehicles for VIP transportation.",
        icon: "car",
      },

      {
        title: "Premium Assistance",
        description:
          "Priority customer support and travel coordination throughout the service.",
        icon: "support",
      },

      {
        title: "Priority Pickup",
        description:
          "Fast-track airport and hotel pickup coordination for VIP guests.",
        icon: "location",
      },

      {
        title: "Professional Chauffeurs",
        description:
          "Highly trained chauffeurs experienced in executive travel services.",
        icon: "driver",
      },
    ],

    terms: [
      {
        title: "VIP Service Conditions",
        description:
          "VIP transportation services are subject to dedicated operational policies and availability.",
      },

      {
        title: "Vehicle Upgrades",
        description:
          "Vehicle upgrades may be offered depending on operational availability.",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "riyadh-discovery",
    slug: "riyadh-discovery-tour",

    title: "Riyadh Discovery Tour",
    subtitle:
      "Discover the modern capital of Saudi Arabia with a luxury guided experience.",

    category: "Tour",

    duration: "3 Days / 2 Nights",

    startingPrice: 740,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Riyadh"],

    vehicleTypes: [
      {
        name: "SUV",
        capacity: "5 Pax / 5 Bags",
        price: 740,
        image: suv,
      },
      {
        name: "Luxury Van",
        capacity: "10 Pax / 10 Bags",
        price: 980,
        image: van,
      },
    ],

    overview:
      "Explore Riyadh landmarks, culture, and modern attractions with private transportation.",

    highlights: [
      "City sightseeing",
      "Luxury transportation",
      "Flexible schedule",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "City Tour",
        route: "Riyadh Downtown",
        activities: ["Boulevard visit", "Historical landmarks"],
      },
    ],

    inclusions: [
      {
        title: "Private Driver",
        description:
          "Dedicated private chauffeur throughout the scheduled package duration.",
        icon: "driver",
      },

      {
        title: "Luxury Vehicles",
        description:
          "Modern luxury vehicles equipped for long-distance comfort.",
        icon: "car",
      },

      {
        title: "Flexible Pickup",
        description:
          "Customizable pickup timing depending on guest itinerary needs.",
        icon: "location",
      },

      {
        title: "Travel Coordination",
        description:
          "Continuous support and transfer coordination during the journey.",
        icon: "support",
      },
    ],

    terms: [
      {
        title: "Tickets Exclusion",
        description:
          "Entry tickets and attraction fees are not included in the package pricing.",
      },

      {
        title: "Route Timing",
        description:
          "Travel timing may vary depending on traffic and operational conditions.",
      },
    ],

    featured: false,
    popular: true,
  },

  {
    id: "alula-heritage",
    slug: "alula-heritage-experience",

    title: "AlUla Heritage Experience",
    subtitle: "Luxury desert and heritage exploration package in AlUla.",

    category: "Adventure",

    duration: "4 Days / 3 Nights",

    startingPrice: 1450,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["AlUla"],

    vehicleTypes: [
      {
        name: "Luxury SUV",
        capacity: "5 Pax / 5 Bags",
        price: 1450,
        image: suv,
      },
      {
        name: "Premium Van",
        capacity: "10 Pax / 10 Bags",
        price: 1800,
        image: van,
      },
    ],

    overview:
      "Experience the beauty of AlUla with premium transportation and unforgettable scenery.",

    highlights: [
      "Desert exploration",
      "Heritage attractions",
      "Luxury transportation",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Exploration",
        route: "AlUla Airport → Heritage Sites",
        activities: ["Airport pickup", "Guided exploration"],
      },
    ],

    inclusions: [
      {
        title: "Airport Transfers",
        description:
          "Private airport transportation with professional meet & greet service.",
        icon: "location",
      },

      {
        title: "Luxury SUV Fleet",
        description:
          "Executive SUVs optimized for family and VIP transportation.",
        icon: "car",
      },

      {
        title: "Professional Drivers",
        description:
          "Experienced multilingual chauffeurs trained for hospitality services.",
        icon: "driver",
      },

      {
        title: "24/7 Assistance",
        description:
          "Operational support available before and during the trip.",
        icon: "support",
      },
    ],

    terms: [
      {
        title: "Weather Conditions",
        description:
          "Schedules and routes may occasionally be adjusted due to weather or road conditions.",
      },

      {
        title: "Operational Delays",
        description:
          "Unexpected operational delays may affect pickup timing during peak travel periods.",
      },
    ],

    featured: true,
    popular: true,
  },
];
