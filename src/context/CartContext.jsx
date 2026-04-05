import { useState, use, createContext } from "react";

const CartContext = createContext({
  selectedOrders: [],
  totalPrice: 0,
  numberOfOrders: 0,
  addOrder: () => {},
  removeOrder: () => {},
});

export function CartProvider({ children }) {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const addOrder = (orderData) =>
    setSelectedOrders((prev) => {
      const exists = prev.find((o) => o.id === orderData.id);
      return exists
        ? prev.map((o) =>
            o.id === orderData.id
              ? { ...o, timesOrdered: o.timesOrdered + 1 }
              : o,
          )
        : [...prev, { ...orderData, timesOrdered: 1 }];
    });

  const removeOrder = (id) => {
    setSelectedOrders((prevOrders) => {
      const orderExists = prevOrders.find((o) => o.id === id);
      if (!orderExists) throw new Error("This order doesn't exist!");
      return prevOrders
        .map((o) =>
          o.id === id ? { ...o, timesOrdered: o.timesOrdered - 1 } : o,
        )
        .filter((o) => o.timesOrdered > 0);
    });
  };

  const totalPrice = selectedOrders.reduce(
    (acc, currentOrder) =>
      acc + Number(currentOrder.price) * Number(currentOrder.timesOrdered),
    0,
  );

  const numberOfOrders = selectedOrders.reduce(
    (acc, currentOrder) => acc + Number(currentOrder.timesOrdered) * 1,
    0,
  );

  return (
    <CartContext
      value={{
        selectedOrders,
        addOrder,
        removeOrder,
        totalPrice,
        numberOfOrders,
      }}
    >
      {children}
    </CartContext>
  );
}

export function useCart() {
  const ctxt = use(CartContext);
  return ctxt;
}
