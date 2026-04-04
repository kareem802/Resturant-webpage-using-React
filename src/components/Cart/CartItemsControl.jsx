export default function CartItemsControl({ timesOrdered }) {
  return (
    <div className="cart-item-actions">
      <button>-</button>
      <p>{timesOrdered}</p>
      <button>+</button>
    </div>
  );
}
