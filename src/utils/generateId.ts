export const generateBookingId = () => {
  return "SL-" + Math.random().toString(36).substring(2, 8).toUpperCase();
};