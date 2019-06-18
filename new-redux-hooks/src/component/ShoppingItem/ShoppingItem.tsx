import React, { FC, useState, Dispatch } from "react";
import "./ShoppingItem.scss";
import { useDispatch } from "react-redux";
import { CartActionInferred } from "../../store/cart/types";
import {
  incrementPrice,
  decrementPrice,
  addItem
} from "../../store/cart/action";

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
    setQuantity(quantity => quantity + 1);
    dispatch(incrementPrice(price));
  };

  const decrement = () => {
    setQuantity(quantity => (quantity > 0 ? quantity - 1 : 0));
    dispatch(decrementPrice(price));
  };

  const addToCart = () => {
    dispatch(addItem({ id, name, price, description, quantity }));
  };

  return (
    <li className="ShoppingItem">
      <div className="ShoppingItem__remover">X</div>
      <div className="ShoppingItem__id">{id}</div>
      <div className="ShoppingItem__name">{name}</div>
      <div className="ShoppingItem__price">€{price}</div>
      <div className="ShoppingItem__description">{description}</div>
      <div className="ShoppingItem__quantity">
        Quantity: <button onClick={decrement}>-</button> {quantity}{" "}
        <button onClick={increment}>+</button>
      </div>
      <button className="ShoppingItem__adder" onClick={addToCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default ShoppingItem;
