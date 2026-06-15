import hiace from "../assets/images/HiAce.png";
import xpander from "../assets/images/XPANDER.png";
// import elentra from "../assets/images/elentra.webp";
import toyota from "../assets/images/Toyota.webp";
import Staria from "../assets/images/Staria.webp";
import v250 from "../assets/images/v250.png";
import benz from "../assets/images/BenzEclass.webp";
import GMC from "../assets/images/GMCFleet.webp";
import coaster from "../assets/images/coaster.png";

export const cars = [
  {
    id: "mercedes benz e-class",
    name: "Mercedes E-Class",
    category: "Business Sedan",
    image: benz,
    passengers: 4,
    bags: 2,
    price: 320,
    hourRate: 190,
  },
  {
    id: "GMC Yukon",
    name: "GMC Yukon",
    category: "Business SUV",
    image: GMC,
    passengers: 6,
    bags: 4,
    price: 220,
    hourRate: 100,
  },

  {
    id: "Toyota Corolla",
    name: "Toyota Corolla",
    category: "Economy Sedan",
    image: toyota,
    passengers: 3,
    bags: 2,
    price: 25,
    hourRate: 50,
  },
  {
    id: "Hyundai Staria",
    name: "Hyundai Staria",
    category: "Economy Van",
    image: Staria,
    passengers: 10,
    bags: 8,
    price: 350,
    hourRate: 150,
  },
  {
    id: "mercedes van",
    name: "Mercedes Van",
    category: "Business Van",
    image: v250,
    passengers: 10,
    bags: 8,
    price: 350,
    hourRate: 150,
  },

  {
    id: "mitsubishi xpander",
    name: "Mitsubishi Xpander",
    category: "Economy MPV",
    image: xpander,
    passengers: 7,
    bags: 5,
    price: 280,
    hourRate: 300,
  },

  {
    id: "toyota hiace",
    name: "Toyota Hiace",
    category: "Executive Van",
    image: hiace,
    passengers: 10,
    bags: 8,
    price: 320,
    hourRate: 350,
  },

  {
    id: "toyota coaster",
    name: "Toyota Coaster",
    category: "Economy minibus",
    image: coaster,
    passengers: 20,
    bags: 20,
    price: 1350,
    hourRate: 250,
  },

  // {
  //   id: "Lexus LS 500",
  //   name: "Lexus LS 500",
  //   category: "Luxury",
  //   image: elentra,
  //   passengers: 3,
  //   bags: 2,
  //   price: 350,
  //   hourRate: 250,
  // },

  // {
  //   id: "Audi A6",
  //   name: "Audi A6",
  //   category: "Business",
  //   image: elentra,
  //   passengers: 3,
  //   bags: 2,
  //   price: 210,
  //   hourRate: 370,
  // },
];
