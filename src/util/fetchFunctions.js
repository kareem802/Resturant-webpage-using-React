export const fetchMeals = async () => {
  const response = await fetch("http://localhost:3000/meals");
  if (!response.ok) throw new Error("Failed to fetch meals data");
  return response;
};

export const fetchOrders = async (orders, credentials) => {
  const orderData = {
    order: {
      items: orders,
      customer: {
        name: credentials.name,
        email: credentials.email,
        street: credentials.street,
        "postal-code": credentials.postalCode,
        city: credentials.city,
      },
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
