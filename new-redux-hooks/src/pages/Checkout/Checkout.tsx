import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { CartActionTypes } from "../../store/cart/types";
import { Dispatch } from "redux";
import { removeItem } from "../../store/cart/action";
import "./Checkout.scss";

const Checkout = () => {
  const { basket, totalPrice } = useSelector(
    (state: AppState) => state.cartReducer
  );
  const dispatch = useDispatch<Dispatch<CartActionTypes>>();
  const deleteItem = (id: string, quantity: number, price: number) => {
    dispatch(removeItem(id));
    dispatch({ type: "DEDUCT_ITEM_PRICE", id, quantity, productPrice: price });
  };

  return (
    <div className="CheckOut">
      <ul>
        {basket.map(({ name, price, quantity, id }) => (
          <li key={id} className="CheckOut__item">
            {quantity} {name} at €{price}
            <button
              className="CheckOut__remove-btn"
              onClick={() => deleteItem(id, quantity, price)}
            >
              Remove From Basket
            </button>
          </li>
        ))}
      </ul>

      <div>Total Price: {totalPrice}</div>
    </div>
  );
};

export default Checkout;
