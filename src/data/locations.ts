export const cities = [
  {
    id: "makkah",
    name: "Makkah",
    locations: ["(JED) Jeddah", "Masjid Al Haram", "Aziziyah", "Al Naseem", "Makkah Al Mukarramah"],
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
      "Olaya",
      "King Fahd Road",
      "Riyadh City Center",
    ],
  },
];

export const allLocations = Object.values(cities).flatMap((city) =>
  city.locations.map((loc) => ({
    label: loc,
    cityId: city.id,
  })),
);
