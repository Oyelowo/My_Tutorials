import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShoppingCart from "../component/ShoppingCart/ShoppingCart";
import useReactRouter from "use-react-router";
import Checkout from '../component/Checkout/Checkout';

interface IRoutesProps {}
const Routes: FC<IRoutesProps> = () => {
  

  return (
    <Switch>
      <Route path="/cart" component={ShoppingCart} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
