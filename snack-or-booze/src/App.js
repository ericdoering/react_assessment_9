import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import NotFound from "./NotFound";
import SnackMenu from "./SnackMenu";
import DrinkMenu from "./DrinkMenu";
import FoodItem from "./FoodItem";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <main>
              <Switch>
                  <Route exact path="/snacks">
                      <SnackMenu />
                  </Route>
                  <Route exact path="/drinks">
                      <DrinkMenu />
                  </Route>
                  <Route path="/drink/:id">
                      <FoodItem cantFind="/drinks" />
                  </Route>
                  <Route path="/snack/:id">
                      <FoodItem cantFind="/snacks" />
                  </Route>
                  <Route exact path="/">
                        <Home />
                  </Route>
                  <Route>
                      <NotFound />
                  </Route>
              </Switch>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
