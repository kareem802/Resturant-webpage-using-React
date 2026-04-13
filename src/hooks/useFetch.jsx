import { useEffect } from "react";
import { fetchMeals } from "../util/fetchFunctions";

export default function useFetch({ setMealsData }) {
  useEffect(() => {
    async function loadMeals() {
      const response = await fetchMeals();
      setMealsData(await response.json());
    }
    loadMeals();
  }, []);
}
