export type EmailBookingData = {
  bookingId: string;

  type?: string;

  name: string;

  email: string;

  phone?: string;

  from: string;

  to: string;

  fromCity?: string;

  toCity?: string;

  date?: string;

  time?: string;

  returnDate?: string;

  returnTime?: string;

  roundTrip?: boolean;

  flightNumber?: string;

  pickupDetails?: string;

  dropoffDetails?: string;

  notes?: string;

  hours?: number;

  stops?: string[];

  adults?: number;

  children?: number;

  infants?: number;

  price: number;

  car?: {
    name?: string;

    category?: string;

    bags?: number;
  } | null;

  packageData?: {
    id?: string;
  } | null;
};
