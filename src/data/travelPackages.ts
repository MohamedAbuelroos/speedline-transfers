import type { TravelPackage } from "../utils/types";

import reverseCircuit from "../assets/packages/reverse-circuit.webp";
import HajPackage from "../assets/packages/HajPackage.webp";
import gmc from "../assets/packages/GMC.webp";
import Chev from "../assets/packages/Chev.webp";

export const travelPackages: TravelPackage[] = [
  {
    id: "reverse-circuit",
    slug: "reverse-circuit-madinah-jeddah",
    startingPrice: 385,

    coverImage: reverseCircuit,

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
      {
        icon: "support",
      },
    ],
    featured: true,
    // popular: true,
  },

  {
    id: "spiritual-journey",
    slug: "spiritual-journey-package",

    startingPrice: 520,

    coverImage: HajPackage,

    gallery: [HajPackage],

    cities: ["Jeddah", "Makkah", "Madinah"],

    vehiclePricing: {
      Sedan: 520,
      SUV: 650,
      Van: 850,
      Business: 1200,
      Luxury: 1500,
    },

    inclusions: [
      {
        icon: "car",
      },

      {
        icon: "location",
      },
      {
        icon: "support",
      },
      {
        icon: "driver",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "umrah-express",
    slug: "umrah-express-package",

    startingPrice: 290,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Jeddah", "Makkah"],

    vehiclePricing: {
      Sedan: 290,
      SUV: 385,
      Van: 520,
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
        icon: "car",
      },
      {
        icon: "location",
      },
    ],

    featured: false,
    popular: true,
  },

  {
    id: "vip-umrah",
    slug: "vip-umrah-experience",

    startingPrice: 990,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Jeddah", "Makkah", "Madinah"],

    vehiclePricing: {
      Sedan: 990,
      SUV: 1200,
      Van: 1500,
      Business: 2000,
      Luxury: 3000,
    },

    inclusions: [
      {
        icon: "car",
      },

      {
        icon: "support",
      },
      {
        icon: "location",
      },
      {
        icon: "driver",
      },
    ],

    featured: true,
    popular: true,
  },

  {
    id: "riyadh-discovery",
    slug: "riyadh-discovery-tour",

    startingPrice: 740,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["Riyadh"],

    vehiclePricing: {
      Sedan: 740,
      SUV: 900,
      Van: 1200,
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
      {
        icon: "support",
      },
    ],

    featured: false,
    popular: true,
  },

  {
    id: "alula-heritage",
    slug: "alula-heritage-experience",

    startingPrice: 1450,

    coverImage: reverseCircuit,

    gallery: [reverseCircuit],

    cities: ["AlUla"],

    vehiclePricing: {
      Sedan: 1450,
      SUV: 1800,
      Van: 2200,
      Business: 2800,
      Luxury: 3500,
    },
    inclusions: [
      {
        icon: "location",
      },

      {
        icon: "car",
      },
      {
        icon: "driver",
      },
      {
        icon: "support",
      },
    ],

    featured: true,
  },
];
