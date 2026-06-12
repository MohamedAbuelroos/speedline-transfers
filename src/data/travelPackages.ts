import type { TravelPackage } from "../utils/types";

import reverseCircuit from "../assets/packages/reverse-circuit.webp";
import reverseCircuitTwo from "../assets/packages/reverse-circuit2.png";
import HajPackage from "../assets/packages/HajPackage.webp";
import gmc from "../assets/packages/GMC.webp";
import Chev from "../assets/packages/Chev.webp";
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
      Sedan: 385,
      SUV: 495,
      Van: 699,
      Business: 950,
      Luxury: 1350,
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

    gallery: [gmc, HajPackage, reverseCircuit, Chev],

    cities: ["Jeddah", "Makkah", "Madinah", "Jeddah"],

    vehiclePricing: {
      Sedan: 480,
      SUV: 620,
      Van: 890,
      Business: 1150,
      Luxury: 1450,
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

    gallery: [gmc, HajPackage, reverseCircuit, Chev],

    cities: ["Makkah", "Makkah"],

    vehiclePricing: {
      Sedan: 55,
      SUV: 75,
      Van: 120,
      Business: 350,
      Luxury: 550,
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

    gallery: [gmc, HajPackage, reverseCircuit, Chev],

    cities: ["Madinah", "Makkah", "Jeddah"],

    vehiclePricing: {
      Sedan: 385,
      SUV: 495,
      Van: 699,
      Business: 950,
      Luxury: 1350,
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
      Sedan: 560,
      SUV: 750,
      Van: 1100,
      Business: 1350,
      Luxury: 1600,
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
      Sedan: 120,
      SUV: 160,
      Van: 240,
      Business: 750,
      Luxury: 1200,
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
      Sedan: 65,
      SUV: 90,
      Van: 140,
      Business: 1350,
      Luxury: 1600,
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
      Sedan: 1150,
      SUV: 1450,
      Van: 1950,
      Business: 2450,
      Luxury: 3200,
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
      Sedan: 165,
      SUV: 210,
      Van: 310,
      Business: 750,
      Luxury: 1200,
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
      Sedan: 125,
      SUV: 170,
      Van: 250,
      Business: 1500,
      Luxury: 2200,
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
