import { useCart } from "../../context/CartContext";

export default function CartItemsControl({ order }) {
  const { addOrder, removeOrder } = useCart();
  return (
    <div className="cart-item-actions">
      <button onClick={() => removeOrder(order.id)}>-</button>
      <p>{order.timesOrdered}</p>
      <button onClick={() => addOrder(order)}>+</button>
    </div>
  );
}
