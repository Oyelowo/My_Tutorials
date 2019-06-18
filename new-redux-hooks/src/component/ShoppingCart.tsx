import React, { Dispatch } from "react";
import ShoppingItem from "./ShoppingItem";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/rootReducer";
import { CartActionTypes } from "../store/cart/types";
import { addItem } from "../store/cart/action";

const ShoppingCart = () => {
  const items = useSelector((state: AppState) => state.cartReducer.cart);
  const dispatch = useDispatch<Dispatch<CartActionTypes>>();

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {items.map(el => (
        <ShoppingItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default ShoppingCart;
