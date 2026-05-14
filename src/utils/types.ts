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

  title: string;
  subtitle: string;
  heroDescription?: string;

  category: "Religious" | "Tour" | "VIP" | "Business" | "Adventure";

  duration: string;

  startingPrice: number;

  coverImage: string;

  gallery: string[];

  cities: string[];

  vehiclePricing: Record<string, number>;

  overview: string;

  highlights: string[];

  itinerary: PackageItinerary[];

  inclusions: {
    title: string;
    description: string;
    icon: string;
  }[];

  terms: {
    title: string;
    description: string;
  }[];

  featured?: boolean;
  popular?: boolean;
}
