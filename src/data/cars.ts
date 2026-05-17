import hiace from "../assets/images/HiAce.webp";
import xpander from "../assets/images/XPANDER.webp";
import elentra from "../assets/images/elentra.webp";
import toyota from "../assets/images/Toyota.webp";
import Staria from "../assets/images/Staria.webp";
import benz from "../assets/images/BenzEclass.webp";
import GMC from "../assets/images/GMCFleet.webp";

export const cars = [
  {
    id: "mercedes benz e-class",
    name: "Mercedes E-Class",
    category: "Business",
    image: benz,
    passengers: 4,
    bags: 2,
    price: 320,
    hourRate: 190,
  },
  {
    id: "GMC Yukon",
    name: "GMC Yukon",
    category: "SUV",
    image: GMC,
    passengers: 6,
    bags: 4,
    price: 220,
    hourRate: 100,
  },
  {
    id: "Hyundai Staria",
    name: "Hyundai Staria",
    category: "Van",
    image: Staria,
    passengers: 10,
    bags: 8,
    price: 350,
    hourRate: 150,
  },

  {
    id: "Toyota Corolla",
    name: "Toyota Corolla",
    category: "Sedan",
    image: toyota,
    passengers: 3,
    bags: 2,
    price: 120,
    hourRate: 50,
  },
  {
    id: "Lexus LS 500",
    name: "Lexus LS 500",
    category: "Luxury",
    image: elentra,
    passengers: 3,
    bags: 2,
    price: 350,
    hourRate: 250,
  },
  {
    id: "GMC Yukon XL",
    name: "GMC Yukon XL",
    category: "Van",
    image: xpander,
    passengers: 7,
    bags: 5,
    price: 280,
    hourRate: 300,
  },
  {
    id: "toyota hiace",
    name: "Toyota Hiace",
    category: "Van",
    image: hiace,
    passengers: 8,
    bags: 6,
    price: 320,
    hourRate: 350,
  },
  {
    id: "Audi A6",
    name: "Audi A6",
    category: "Business",
    image: elentra,
    passengers: 3,
    bags: 2,
    price: 210,
    hourRate: 370,
  },
];
