import type { BookingData } from "./bookingTypes";

export const sendBookingEmail = async (data: BookingData) => {
  const response = await fetch("/api/send-booking-email", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "Failed to send booking email");
  }

  return result;
};
