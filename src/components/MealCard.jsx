export default function MealCard({ mealData, ...props }) {
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
        <button className="button">Add to Cart</button>
      </article>
    </li>
  );
}
