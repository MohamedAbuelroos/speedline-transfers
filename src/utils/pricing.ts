import { pricing } from "../data/pricing";

export const getPrice = (fromCity: string, toCity: string, car: string) => {
  if (!fromCity || !toCity || !car) {
    return null;
  }

  const key = `${fromCity}-${toCity}`;

  const reverseKey = `${toCity}-${fromCity}`;

  return (
    pricing.routePricing[key as keyof typeof pricing.routePricing]?.[
      car as keyof (typeof pricing.routePricing)[keyof typeof pricing.routePricing]
    ] ||
    pricing.routePricing[reverseKey as keyof typeof pricing.routePricing]?.[
      car as keyof (typeof pricing.routePricing)[keyof typeof pricing.routePricing]
    ] ||
    null
  );
};
