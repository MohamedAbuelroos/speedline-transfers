import type { BookingData } from "./bookingTypes";

export const sendBookingEmail = async (data: BookingData) => {
  const response = await fetch("/api/send-booking-email", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const text = await response.text();

  let result;

  try {
    result = JSON.parse(text);
  } catch {
    throw new Error("Server returned invalid response");
  }

  if (!response.ok) {
    throw new Error(result?.message || "Failed to send booking email");
  }

  return result;
};
