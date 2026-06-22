import type { TravelPackage } from "../utils/types";

import reverseCircuit from "../assets/packages/reverse-circuit.webp";
import reverseCircuitTwo from "../assets/packages/reverse-circuit2.png";
import HajPackage from "../assets/packages/HajPackage.webp";
import gmc from "../assets/packages/GMC.webp";
import jedAirport from "../assets/packages/jedAirPort.png";
import medAirport from "../assets/packages/medAirport.webp";
import umrahPackage from "../assets/packages/umrahpackage.png";
import makkahZiyarat from "../assets/packages/makkahziyarat.png";
import makkahMadinah from "../assets/packages/makkah-madinah.png";

export const travelPackages: TravelPackage[] = [
  {
    id: "private-umrah-transfer",
    slug: "private-umrah-transfer-package",
    startingPrice: 385,
    category: "Airport",
    coverImage: medAirport,

    gallery: [reverseCircuit, gmc, medAirport, jedAirport],

    cities: ["Jeddah", "Makkah", "Madinah"],

    vehiclePricing: {
      "Economy Sedan": 385,
      "Economy MPV": 495,
      "Economy Van": 699,
      "Business SUV": 950,
      "Business Sedan": 1350,
      "Business Van": 1350,
      "Executive Van": 1350,
      "Economy Minibus": 1350,
    },
    inclusions: [
      {
        icon: "handshake",
      },
      {
        icon: "driver",
      },

      {
        icon: "water",
      },
      {
        icon: "location",
      },
      {
        icon: "support",
      },
    ],
    featured: true,
    popular: true,
  },

  {
    id: "full-umrah-loop",
    slug: "full-umrah-loop-package",
    startingPrice: 480,
    category: "Airport",
    coverImage: umrahPackage,

    gallery: [gmc, HajPackage, reverseCircuit],

    cities: ["Jeddah", "Makkah", "Madinah", "Jeddah"],

    vehiclePricing: {
      "Economy Sedan": 480,
      "Economy MPV": 620,
      "Economy Van": 890,
      "Business SUV": 1150,
      "Business Sedan": 1500,
      "Business Van": 1500,
      "Executive Van": 1500,
      "Economy Minibus": 1500,
    },
    inclusions: [
      {
        icon: "roundtrip",
      },
      {
        icon: "driver",
      },

      {
        icon: "water",
      },
      {
        icon: "location",
      },
    ],
    featured: true,
    popular: true,
  },

  {
    id: "makkah-holy-sites-ziyarat",
    slug: "makkah-holy-sites-ziyarat-package",
    startingPrice: 55,
    category: "Religious",
    coverImage: makkahZiyarat,

    gallery: [gmc, HajPackage, reverseCircuit],

    cities: ["Makkah", "Makkah"],

    vehiclePricing: {
      "Economy Sedan": 55,
      "Economy MPV": 75,
      "Economy Van": 120,
      "Business SUV": 350,
      "Business Sedan": 350,
      "Business Van": 350,
      "Executive Van": 350,
      "Economy Minibus": 350,
    },
    inclusions: [
      {
        icon: "terrain",
      },
      {
        icon: "time",
      },
      {
        icon: "mobile",
      },
      {
        icon: "driver",
      },
    ],
    featured: true,
    popular: true,
  },

  {
    id: "reverse-circuit",
    slug: "reverse-circuit-package",
    startingPrice: 385,
    category: "Airport",
    coverImage: reverseCircuitTwo,

    gallery: [gmc, HajPackage, reverseCircuit],

    cities: ["Madinah", "Makkah", "Jeddah"],

    vehiclePricing: {
      "Economy Sedan": 385,
      "Economy MPV": 495,
      "Economy Van": 699,
      "Business SUV": 950,
      "Business Sedan": 1350,
      "Business Van": 1350,
      "Executive Van": 1350,
      "Economy Minibus": 1350,
    },
    inclusions: [
      {
        icon: "driver",
      },

      {
        icon: "water",
      },
      {
        icon: "location",
      },
    ],
    featured: true,
    popular: false,
  },

  {
    id: "madinah-makkah-roundtrip",
    slug: "madinah-makkah-roundtrip-package",
    category: "Religious",
    startingPrice: 560,

    coverImage: makkahMadinah,

    gallery: [HajPackage],

    cities: ["Madinah", "Makkah", "Madinah"],

    vehiclePricing: {
      "Economy Sedan": 560,
      "Economy MPV": 750,
      "Economy Van": 1100,
      "Business SUV": 1350,
      "Business Sedan": 1500,
      "Business Van": 1500,
      "Executive Van": 1500,
      "Economy Minibus": 1350,
    },

    inclusions: [
      {
        icon: "roundtrip",
      },

      {
        icon: "driver",
      },
      {
        icon: "water",
      },
      {
        icon: "location",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "jeddah-highlights-tour",
    slug: "jeddah-highlights-tour-package",
    category: "Tour",
    startingPrice: 120,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Jeddah", "Jeddah"],

    vehiclePricing: {
      "Economy Sedan": 120,
      "Economy MPV": 160,
      "Economy Van": 240,
      "Business Sedan": 750,
      "Business SUV": 750,
      "Business Van": 750,
      "Executive Van": 750,
      "Economy Minibus": 1350,
    },

    inclusions: [
      {
        icon: "car",
      },

      {
        icon: "water",
      },
      {
        icon: "driver",
      },
    ],

    featured: false,
    popular: true,
  },

  {
    id: "madinah-historical-sightseeing",
    slug: "madinah-historical-sightseeing-package",
    category: "Tour",
    startingPrice: 65,

    coverImage: HajPackage,

    gallery: [HajPackage],

    cities: ["Madinah", "Makkah", "Madinah"],

    vehiclePricing: {
      "Economy Sedan": 65,
      "Economy MPV": 90,
      "Economy Van": 140,
      "Business SUV": 1350,
      "Business Sedan": 1350,
      "Business Van": 1350,
      "Executive Van": 1350,
      "Economy Minibus": 1350,
    },

    inclusions: [
      {
        icon: "time",
      },

      {
        icon: "driver",
      },
      {
        icon: "airconditioning",
      },
      {
        icon: "driver",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "hajj-5day-transport",
    slug: "hajj-5day-transport-package",
    category: "Religious",
    startingPrice: 1150,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Makkah", "Jeddah"],

    vehiclePricing: {
      "Economy Sedan": 1150,
      "Economy MPV": 1450,
      "Economy Van": 1950,
      "Business Sedan": 2450,
      "Business SUV": 2450,
      "Business Van": 2450,
      "Executive Van": 2450,
      "Economy Minibus": 3500,
    },

    inclusions: [
      {
        icon: "support",
      },

      {
        icon: "driver",
      },
      {
        icon: "mobile",
      },
    ],

    featured: false,
    popular: false,
  },

  {
    id: "taif-mountain-day",
    slug: "taif-mountain-day-package",
    category: "Tour",
    startingPrice: 165,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Taif", "Taif"],

    vehiclePricing: {
      "Economy Sedan": 165,
      "Economy MPV": 210,
      "Economy Van": 310,
      "Business Sedan": 750,
      "Business SUV": 750,
      "Business Van": 750,
      "Executive Van": 750,
      "Economy Minibus": 1350,
    },

    inclusions: [
      {
        icon: "driver",
      },

      {
        icon: "location",
      },
      {
        icon: "water",
      },
    ],

    featured: false,
    popular: false,
  },

  {
    id: "riyadh-discovery-tour",
    slug: "riyadh-discovery-tour-package",

    startingPrice: 125,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    category: "Tour",

    cities: ["Riyadh", "Riyadh"],

    vehiclePricing: {
      "Economy Sedan": 125,
      "Economy MPV": 170,
      "Economy Van": 250,
      "Business Sedan": 1500,
      "Business SUV": 1500,
      "Business Van": 1500,
      "Executive Van": 1500,
      "Economy Minibus": 1350,
    },

    inclusions: [
      {
        icon: "driver",
      },

      {
        icon: "car",
      },
      {
        icon: "location",
      },
    ],

    featured: false,
    popular: true,
  },
];
