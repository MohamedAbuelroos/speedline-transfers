import ruhAirport from "../assets/images/RuhAirport.jpg";
import dammamCity from "../assets/images/DammamCity.jpg";
import jedAirport from "../assets/images/JEDAirport.jpg";
import medina from "../assets/images/medina.jpg";
import riyadh from "../assets/images/Riyadh.jpg";
import jeddah from "../assets/images/jeddah.jpg";

const packages = [
  {
    id: "ruh-airport-city",
    fromCity: "riyadh",
    toCity: "riyadh",
    from: "(RUH) Airport",
    to: "Riyadh City Center",
    category: "Airport",
    duration: "40-50 mins",
    distance: "38 km",
    price: { Sedan: 180, SUV: 200, Van: 230, Business: 310, Luxury: 450 },
    image: ruhAirport,
    popular: true,
  },
  {
    id: "jeddah-makkah",
    from: "(JED) Jeddah",
    fromCity: "jeddah",
    toCity: "madinah",
    to: "Makkah Al Mukarramah",
    category: "Religious",
    duration: "1h 15m",
    distance: "95 km",
    price: { Sedan: 300, SUV: 320, Van: 380, Business: 460, Luxury: 550 },
    image: jedAirport,
    popular: true,
  },
  {
    id: "dammam-khobar",
    from: "Dammam City",
    fromCity: "dammam",
    toCity: "dammam",
    to: "Al Khobar",
    category: "City",
    duration: "25 mins",
    distance: "20 km",
    price: { Sedan: 120, SUV: 160, Van: 200, Business: 260, Luxury: 350 },
    image: dammamCity,
  },
  {
    id: "Medina-Makkah",
    from: "(MED) Medina",
    fromCity: "makkah",
    toCity: "medina",
    to: "Makkah Al Mukarramah",
    category: "Religious",
    duration: "4h 25m",
    distance: "450 km",
    price: { Sedan: 180, SUV: 200, Van: 230, Business: 290, Luxury: 380 },
    image: medina,
  },
  {
    id: "Riyadh-Al-Ula",
    from: "Riyadh",
    fromCity: "riyadh",
    toCity: "riyadh",
    to: "Al-Ula Heritage Site",
    category: "City",
    duration: "11h",
    distance: "1100 km",
    price: { Sedan: 2400, SUV: 2700, Van: 3000, Business: 3210, Luxury: 3650 },
    image: riyadh,
  },
  {
    id: "JED-KAEC",
    from: "(JED) Jeddah Airport ",
    fromCity: "jeddah",
    toCity: "jeddah",
    to: "KAEC (Eco City)",
    category: "Airport",
    duration: "1h 10m",
    distance: "105 km",
    price: { Sedan: 420, SUV: 480, Van: 520, Business: 610, Luxury: 690 },
    image: jeddah,
  },
];

export default packages;
