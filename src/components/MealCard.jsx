import { useCart } from "../context/CartContext";

export default function MealCard({ mealData }) {
  const { selectedOrders, addOrder } = useCart();
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${mealData.image}`}
          alt={`${mealData.name} photo`}
        />
        <h3>{mealData.name}</h3>
        <p className="meal-item-price">{`$${mealData.price}`}</p>
        <p className="meal-item-description">{mealData.description}</p>
        <button
          className="button"
          onClick={() => {
            return addOrder(mealData);
          }}
        >
          Add to Cart
        </button>
      </article>
    </li>
  );
}
