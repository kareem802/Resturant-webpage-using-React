import MealCard from "./MealCard";
import ItemCard from "./MealCard";

export default function MealCards({ mealsData }) {
  return (
    <ul id="meals">
      {mealsData.map((mealData) => (
        <MealCard key={mealData.id} mealData={mealData} />
      ))}
    </ul>
  );
}
