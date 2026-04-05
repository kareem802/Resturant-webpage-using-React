import { useCart } from "../../context/CartContext";

export default function CartButton({ ...props }) {
  const { numberOfOrders } = useCart();
  return (
    <button {...props}>
      Cart {numberOfOrders !== 0 && `(${numberOfOrders})`}
    </button>
  );
}
