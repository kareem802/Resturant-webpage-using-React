export const fetchMeals = async () => {
  const response = await fetch("http://localhost:3000/meals");
  if (!response.ok) throw new Error("Failed to fetch meals data");
  return response;
};

export const fetchOrders = async (orders, credintials) => {
  const orderData = {
    items: orders,
    customer: {
      name: credintials.fullName,
      email: credintials.email,
      street: credintials.street,
      "postal-code": credintials.postalCode,
      city: credintials.city,
    },
  };
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) throw new Error("Failed to fetch meals data");
  return response;
};
