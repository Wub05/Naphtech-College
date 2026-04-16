const BASE_URL = import.meta.env.VITE_API_URL;

export const sendContactForm = async (formData) => {
  const response = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Failed to send message");
  }

  return response.json();
};
