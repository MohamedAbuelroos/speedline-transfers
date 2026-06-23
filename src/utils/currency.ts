export const currencyRates = {
  USD: 1,
  SAR: 3.75,
  EUR: 0.86,
};

export const currencySymbols = {
  USD: "$",
  SAR: "SAR",
  EUR: "€",
};

export const convertPrice = (
  price: number,
  currency: keyof typeof currencyRates,
) => {
  return Math.round(price * currencyRates[currency]);
};

export const formatPrice = (
  price: number | null | undefined,
  currency: keyof typeof currencyRates,
) => {
  if (!price) return "Custom Quote";

  return `${currencySymbols[currency]} ${convertPrice(price, currency)}`;
};
