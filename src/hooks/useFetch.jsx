import { useEffect } from "react";
import { fetchMeals } from "../util/fetchFunctions";

export default function useFetch({ setMealsData }) {
  useEffect(() => {
    async function loadMeals() {
      response = await fetchMeals();
      setMealsData(await response.json());
    }
    loadMeals();
  }, []);
}
