import { useCurrency } from "../context/CurrencyContext";
import { formatPrice } from "../utils/currency";

export const useCurrencyFormatter = () => {
  const { currency } = useCurrency();

  return (price: number) => formatPrice(price, currency);
};
