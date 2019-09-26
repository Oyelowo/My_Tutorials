import React, { useContext } from "react";
import { ShoppingContext } from "../global_state/context_providers/ShoppingCartProvider";

const Home = () => {
  const shoppingValue = useContext(ShoppingContext);
  let { cartState, cartDispatch } = shoppingValue;

  return (
    <div>
      {item.id}

      <ul>{cart && cart.map(({ name }) => <li key={Math.random()}>{name}</li>)}</ul>

      <button onClick={() => cartDispatch()}>
        Add Item
      </button>
    </div>
  );
};

export default Home;
