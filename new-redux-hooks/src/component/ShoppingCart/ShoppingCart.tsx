import React, { Dispatch } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { CartActionTypes } from "../../store/cart/types";
import "./ShoppingCart.scss";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cart: items, totalPrice, basket } = useSelector(
    (state: AppState) => state.cartReducer
  );
  const dispatch = useDispatch<Dispatch<CartActionTypes>>();

  return (
    <div className="ShoppingCart">
      <Link to="/checkout">
        <button style={{ padding: 10, margin: "auto", display: "flex" }}>
          Checkout Items
        </button>
      </Link>
      <div>Total Price: {totalPrice}</div>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map(el => (
          <ShoppingItem key={el.id} {...el} />
        ))}
      </ul>

      <div>
        <h1>My basket</h1>
        {basket.map(({ quantity, name }) => (
          <div>
            {name}: {quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
