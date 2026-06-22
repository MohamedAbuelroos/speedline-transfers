export const sendContactEmail = async (data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) => {
  const response = await fetch("/api/send-contact-email", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.message || "Failed to send contact email");
  }

  return result;
};
