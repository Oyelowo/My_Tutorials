import React, { FC } from "react";
import {  Route, Switch } from "react-router-dom";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Checkout from '../pages/Checkout/Checkout';

interface IRoutesProps {}
const Routes: FC<IRoutesProps> = () => {
  

  return (
    <Switch>
      <Route path="/" exact component={ShoppingCart} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
