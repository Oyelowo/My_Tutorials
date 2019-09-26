import React, { FC, useState } from "react";
import "./ShoppingItem.scss";
import { useDispatch } from "react-redux";
import { CartActionInferred } from "../../store/cart/types";
import { decrementPrice, addItem, incrementPrice } from '../../store/cart/action';
import { Dispatch } from "redux";

export interface ShoppingItemProps {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity?: number;
}

const ShoppingItem: FC<ShoppingItemProps> = ({
  id,
  name,
  price,
  description
}) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch<Dispatch<CartActionInferred>>();

  const increment = () => {
    setQuantity((quantity: number) => quantity + 1);
    dispatch(incrementPrice(price));
    //dispatch({ type: "INCREMENT_PRICE", productPrice: price });
  };

  const decrement = () => {
    setQuantity((quantity: number) => (quantity > 0 ? quantity - 1 : 0));
    dispatch(decrementPrice(price));

    const isLast = quantity === 1;
    if (isLast) {
      dispatch({ type: "REMOVE_ITEM", id });
    }
  };

  const addToCart = () =>
    dispatch(addItem({ id, name, price, description, quantity }));

  const deleteProduct = () => {
    dispatch({ type: "DELETE_PRODUCT", id });
    dispatch({ type: "REMOVE_ITEM", id });
    dispatch({ type: "DEDUCT_ITEM_PRICE", id, quantity, productPrice: price });
  };

  return (
    <li className="ShoppingItem">
      <div className="ShoppingItem__remover" onClick={deleteProduct}>
        X
      </div>
      <div className="ShoppingItem__id">{id}</div>
      <div className="ShoppingItem__name">{name}</div>
      <div className="ShoppingItem__price">€{price}</div>
      <div className="ShoppingItem__description">{description}</div>
      <div className="ShoppingItem__quantity">
        Quantity: <button onClick={decrement}>-</button> {quantity}{" "}
        <button onClick={increment}>+</button>
      </div>

      <button
        className="ShoppingItem__add-btn"
        onClick={addToCart}
        disabled={quantity === 0}
      >
        Add to Cart
      </button>
    </li>
  );
};

export default ShoppingItem;
