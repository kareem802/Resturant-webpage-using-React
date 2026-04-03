import { useEffect } from "react";

export default function useFetch({ setMealsData }) {
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) return;
      setMealsData(await response.json());
    };
    fetchMeals();
  }, []);
}
