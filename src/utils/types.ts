export type Car = {
  id: string;
  name: string;
  category: string;
  image: string;
  passengers: number;
  bags: number;
  price: number;
  hourRate: number;
};

export interface PackageItinerary {
  day: string;
  title: string;
  route: string;
  activities: string[];
}

export interface TravelPackage {
  id: string;

  slug: string;

  startingPrice: number;

  coverImage: string;

  gallery: string[];

  cities: string[];

  inclusions: {
    icon: string;
  }[];

  vehiclePricing: Record<string, number>;

  featured?: boolean;

  popular?: boolean;
}

export interface PackageTranslation {
  title: string;

  subtitle: string;

  category: string;

  duration: string;

  overview: string;

  highlights: string[];

  itinerary: {
    day: string;
    title: string;
    route: string;
    activities: string[];
  }[];

  inclusions: {
    title: string;
    description: string;
  }[];

  terms: {
    title: string;
    description: string;
  }[];
}
