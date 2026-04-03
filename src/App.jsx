import { useState } from "react";

import Header from "./components/Header.jsx";
import useFetch from "./hooks/useFetch.jsx";
import MealCards from "./components/MealCards.jsx";

function App() {
  const [mealsData, setMealsData] = useState([]);
  useFetch({ setMealsData });
  return (
    <>
      <Header />
      <MealCards mealsData={mealsData} />
    </>
  );
}

export default App;
