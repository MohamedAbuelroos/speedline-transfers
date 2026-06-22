import { routeDistances } from "../data/distance";

export const getDistance = (fromCity: string, toCity: string) => {
  const key = `${fromCity}-${toCity}`;

  const reverseKey = `${toCity}-${fromCity}`;

  return (
    routeDistances[key] ||
    routeDistances[reverseKey] ||
    "Distance Available On Request"
  );
};
