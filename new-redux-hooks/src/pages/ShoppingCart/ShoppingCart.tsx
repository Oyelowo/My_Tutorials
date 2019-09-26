import React from "react";
import ShoppingItem from "../../component/ShoppingItem/ShoppingItem";
import { useSelector } from "react-redux";
import { AppState } from "../../store/rootReducer";
import "./ShoppingCart.scss";
import useReactRouter from "use-react-router";


const ShoppingCart = () => {
  const { products, totalPrice, basket } = useSelector(
    (state: AppState) => state.cartReducer
  );

  const { history } = useReactRouter();

  return (
    <div className="ShoppingCart">
      <button
        onClick={() => history.push("/checkout")}
        className="ShoppingCart__checkout-btn"
      >
        Checkout Items
      </button>

      <div className="ShoppingCart__price">Total Price: €{totalPrice}</div>
      <ul className="ShoppingCart__items">
        {products.map(el => (
          <ShoppingItem key={el.id} {...el} />
        ))}
      </ul>

      <div>
        <h1>My basket</h1>
        {basket.map(({ quantity, name, id }) => (
          <div key={id}>
            {name}: {quantity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
