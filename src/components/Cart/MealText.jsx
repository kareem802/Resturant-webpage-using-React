export default function ({ mealName, numberOfTimesOrdered, price }) {
  return (
    <p>
      {mealName} - {numberOfTimesOrdered} x ${price}
    </p>
  );
}
