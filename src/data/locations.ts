export const cities = [
  {
    id: "makkah",
    name: "Makkah",
    locations: [
      "(JED) Jeddah",
      "Masjid Al Haram",
      "Aziziyah",
      "Al Naseem",
      "Makkah Al Mukarramah",
    ],
  },
  {
    id: "madinah",
    name: "Madinah",
    locations: ["Madinah Airport", "Masjid Nabawi", "Quba"],
  },
  {
    id: "riyadh",
    name: "Riyadh",
    locations: [
      "(RUH) Airport",
      "Riyadh International Airport",
      "King Khalid international Airport",
    ],
  },
  {
    id: "riyadh-city",
    name: "Riyadh City",
    locations: [
      "Olaya District",
      "Al Sulimaniyah",
      "Al Malaz",
      "Al Murabba",
      "King Fahd Road Area",
      "Al Faisaliah Tower Area",
      "Kingdom Centre Area",
      "Downtown Riyadh",
    ],
  },
  {
    id: "riyadh-north",
    name: "Riyadh North",
    locations: [
      "Al Narjis District",
      "Al Yasmin District",
      "Al Sahafa District",
      "Al Aqiq District",
      "King Abdullah Financial",
      "District (KAFD)",
      "Riyadh Front",
      "Granada Area",
      "Business Gate",
    ],
  },
  {
    id: "riyadh-diriyah",
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
    id: "jeddah",
    name: "Jeddah",
    locations: [
      "(JED) Airport",
      "Jeddah International Airport",
      "King Abdulaziz International Airport",
    ],
  },
];

export const allLocations = Object.values(cities).flatMap((city) =>
  city.locations.map((loc) => ({
    label: loc,
    cityId: city.id,
  })),
);
