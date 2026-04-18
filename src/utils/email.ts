import emailjs from "@emailjs/browser";

export const sendCustomerEmail = (data: any) => {
  return emailjs.send(
    "service_8f6zrib",
    "template_t2kj2xw",
    {
      name: data.name,
      email: data.email,
      from: data.from,
      to: data.to,
      date: new Date(data.date).toLocaleDateString(),
      time: new Date(data.time).toLocaleTimeString(),
      carName: data.car?.name,
      carCategory: data?.car?.category,
      Luggages: data?.car?.bags,
      booking_id: data.bookingId,
      Taxes: data.price * 0.03,
      price: data.price,
      totalprice: data.price * 0.03 + data.price,
      type:
        data.type === "airport"
          ? "Airport Transfer"
          : data.type === "city"
            ? "City Transfer"
            : "Hourly Service",
      totalPax: data.adults + data?.children + data?.infants,
      roundTrip: data?.roundTrip,
      notes: data?.notes,
      returnDate: new Date(data?.returnDate).toLocaleDateString(),
      returnTime: new Date(data?.returnTime).toLocaleTimeString(),
    },
    "wUuDHnAdxnvKRi9Jg",
  );
};

export const sendCompanyEmail = (data: any) => {
  return emailjs.send(
    "service_8f6zrib",
    "template_vsoymlr",
    {
      name: data.name,
      phone: data.phone,
      email: data.email,
      from: data.from,
      to: data.to,
      date: new Date(data.date).toLocaleDateString(),
      time: new Date(data.time).toLocaleTimeString(),
      booking_id: data.bookingId,
      pickupDetails: data?.pickupDetails,
      dropoffDetails: data?.dropoffDetails,
      flightNumber: data?.flightNumber,
      returnDate: new Date(data?.returnDate).toLocaleDateString(),
      returnTime: new Date(data?.returnTime).toLocaleTimeString(),
      notes: data?.notes,
      bags: data?.car?.bags,
      carCategory: data?.car?.category,
      carName: data?.car?.name,
      price: data.price,
      type:
        data.type === "airport"
          ? "Airport Transfer"
          : data.type === "city"
            ? "City Transfer"
            : "Hourly Service",
      adults: data.adults,
      children: data?.children,
      infants: data?.infants,
      roundTrip: data?.roundTrip,
    },
    "wUuDHnAdxnvKRi9Jg",
  );
};
