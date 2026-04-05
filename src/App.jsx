import { useState } from "react";

import Header from "./components/Header.jsx";
import useFetch from "./hooks/useFetch.jsx";
import MealCards from "./components/MealCards.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
function App() {
  const [mealsData, setMealsData] = useState([]);
  useFetch({ setMealsData });
  return (
    <CartProvider>
      <ModalProvider>
        <Header />
      </ModalProvider>
      <MealCards mealsData={mealsData} />
    </CartProvider>
  );
}

export default App;
