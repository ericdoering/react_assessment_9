import React from "react";
import Drink from "./FoodItem";
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import Menu from "./Menu";

function DrinkMenu() {
    const [isLoading, setIsLoading] = useState(true);
    const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <>
    <Menu type="Drink" items={drinks} />
    </>
  )

}

export default DrinkMenu;