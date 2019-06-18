import React, { FC } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ShoppingCart from "../component/ShoppingCart";
import useReactRouter from "use-react-router";

interface IRoutesProps {

}
const Routes: FC<IRoutesProps> = () => {

  const {history} = useReactRouter();


  return (
    <BrowserRouter>
      <Route component={ShoppingCart}/>
    </BrowserRouter>
  );
};



export default Routes;
