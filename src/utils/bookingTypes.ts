import type { Car, TravelPackage } from "./types";

export type ServiceType = "airport" | "city" | "hourly" | "package";

export type BookingData = {
  bookingId: string;

  type: ServiceType | "";

  packageData: TravelPackage | null;

  from: string;
  fromCity: string;

  to: string;
  toCity: string;

  date: string;
  time: string;

  returnDate: string;
  returnTime: string;

  roundTrip?: boolean;

  hours?: number;

  flightNumber?: string;

  pickupDetails?: string;
  dropoffDetails?: string;

  stops: string[];

  adults: number;
  children: number;
  infants: number;

  car: Car | null;

  price: number | Record<string, number> | null;
  currency?: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

export type BookingStepProps = {
  bookingData: BookingData;

  setBookingData: React.Dispatch<React.SetStateAction<BookingData>>;

  onNext?: () => void;

  onBack?: () => void;
};

export type HandleBookingChange = (
  field: keyof BookingData,
  value: any,
) => void;

export type StopFunctions = {
  stops: string[];

  addStop: () => void;

  updateStop: (index: number, value: string) => void;

  removeStop: (index: number) => void;
};

export type TransferFormProps = {
  bookingData: BookingData;

  handleChange: HandleBookingChange;
};

export type TransferFormWithStopsProps = TransferFormProps & StopFunctions;

export type OptionalDetailsProps = TransferFormProps & {
  openOptional: boolean;

  setOpenOptional: React.Dispatch<React.SetStateAction<boolean>>;
};
