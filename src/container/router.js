import React from "react";
import { Route, Switch } from "react-router-dom";
import { PanPizza } from "../components/routes/panpizza";
// import Login from "./../components/Login";
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/panpizza" component={PanPizza} />
      {/* <Route exact path="/" component={Login} />
      <Route path="/burger" component={BurgerType} />
      <Route path="/pizza" component={PizzaType} />
      <Route path="/softdrinks" component={SoftDrinkType} /> */}
    </Switch>
  );
};
