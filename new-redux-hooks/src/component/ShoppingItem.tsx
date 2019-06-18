import React, { FC } from "react";
import "./ShoppingItem.scss";

export interface ShoppingItemProps {
  id: string;
  name: string;
  price: string;
  description: string;
}

const ShoppingItem: FC<ShoppingItemProps> = ({
  id,
  name,
  price,
  description
}) => {
  return (
    <li className="ShoppingItem">
      <span className="ShoppingItem__id">{id}</span>
      <span className="ShoppingItem__name">{name}</span>
      <span className="ShoppingItem__price">{price}</span>
      <span className="ShoppingItem__description">{description}</span>
    </li>
  );
};

export default ShoppingItem;
