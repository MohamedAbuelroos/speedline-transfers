import { pricing } from "../data/pricing";

export const getPrice = (fromCity: string, toCity: string, car: string) => {
  if (fromCity === toCity) {
    return pricing.withinCity[fromCity as keyof typeof pricing.withinCity]?.[
      car as keyof (typeof pricing.withinCity)[keyof typeof pricing.withinCity]
    ];
  }

  const key = `${fromCity}-${toCity}`;
  const reverseKey = `${toCity}-${fromCity}`;

  return (
    pricing.betweenCities[key as keyof typeof pricing.betweenCities]?.[
      car as keyof (typeof pricing.betweenCities)[keyof typeof pricing.betweenCities]
    ] ||
    pricing.betweenCities[reverseKey as keyof typeof pricing.betweenCities]?.[
      car as keyof (typeof pricing.betweenCities)[keyof typeof pricing.betweenCities]
    ]
  );
};
