export type LocationItem = {
  label: string;

  cityId: string;
};

export type CityGroup = {
  id: string;

  name: string;

  locations: string[];
};

export const cities: CityGroup[] = [
  {
    id: "ruh-airport",

    name: "RUH Airport",

    locations: ["(RUH) Airport", "King Khalid International Airport"],
  },

  {
    id: "riyadh-center",

    name: "Riyadh City Center",

    locations: [
      "Olaya District",
      "Al Sulimaniyah",
      "Al Malaz",
      "Al Murabba",
      "King Fahd Road Area",
      "Al Faisaliah Tower Area",
      "Kingdom Centre Area",
      "Downtown Riyadh",
      "Al Khalidiyah",
    ],
  },

  {
    id: "riyadh-north",

    name: "North Riyadh",

    locations: [
      "Al Narjis District",
      "Al Yasmin District",
      "Al Sahafa District",
      "Al Aqiq District",
      "King Abdullah Financial District (KAFD)",
      "Riyadh Front",
      "Granada Area",
      "Business Gate",
    ],
  },

  {
    id: "diriyah",

    name: "Diriyah",

    locations: [
      "Diriyah (At-Turaif District)",
      "Al Bujairi Terrace",
      "Wadi Hanifah Area",
      "Diriyah Gate Project",
      "Al Ammariyah",
    ],
  },

  {
    id: "jed-airport",

    name: "JED Airport",

    locations: ["(JED) Airport", "King Abdulaziz International Airport"],
  },

  {
    id: "jeddah-city",

    name: "Jeddah City",

    locations: [
      "Al Hamra District",
      "Al Rawdah",
      "Al Zahra",
      "Al Salamah",
      "Al Andalus",
      "Al Shati (Corniche Area)",
      "Jeddah Corniche",
      "Red Sea Mall Area",
      "King Abdulaziz Road",
    ],
  },

  {
    id: "makkah-hotels",

    name: "Makkah Hotels",

    locations: [
      "Masjid Al Haram",
      "Ajyad",
      "Misfalah",
      "Aziziyah",
      "Al Naseem",
      "Al Shawqiyah",
      "Jabal Omar",
      "Clock Tower",
      "Kudai Area",
    ],
  },

  {
    id: "makkah-railway",

    name: "Makkah Railway Station",

    locations: ["Makkah Railway Station", "Haramain Train Station Makkah"],
  },

  {
    id: "med-airport",

    name: "MED Airport",

    locations: ["Prince Mohammad Bin Abdulaziz Airport", "Madinah Airport"],
  },

  {
    id: "madinah-hotels",

    name: "Madinah Hotels",

    locations: [
      "Masjid Nabawi",
      "Quba Area",
      "Al Aridh",
      "Al Iskan",
      "King Fahd District",
      "Airport Road Area",
      "Al Salam District",
    ],
  },

  {
    id: "madinah-railway",

    name: "Madinah Railway Station",

    locations: ["Madinah Railway Station", "Haramain Train Station Madinah"],
  },

  {
    id: "kaec",

    name: "KAEC",

    locations: [
      "Bay La Sun Area",
      "Al Murooj District",
      "Industrial Valley",
      "KAEC Beach Area",
      "Royal Greens Golf & Country Club",
    ],
  },
];

export const allLocations = cities.flatMap((city) =>
  city.locations.map((loc) => ({
    label: loc,
    cityId: city.id,
  })),
);
