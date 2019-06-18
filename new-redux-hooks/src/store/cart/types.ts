import { addItem, removeItem, incrementPrice, decrementPrice } from "./action";
import { Action } from "redux";

export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Basket extends ShoppingItem {
  quantity: number;
}
export interface CartState {
  cart: ShoppingItem[];
  basket: Basket[];
  totalPrice: number;
}

export interface AddItemAction {
  type: "ADD_ITEM";
  payload: Basket;
}

export interface removeItemAction {
  type: "REMOVE_ITEM";
  id: string;
  productPrice: number;
  quantity: number;
}

export interface incrementPriceAction {
  type: "INCREMENT_PRICE";
  productPrice: number;
}

export interface decrementPriceAction {
  type: "DECREMENT_PRICE";
  payload: Basket;
}

export type CartActionInferred =
  | ReturnType<typeof addItem>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof incrementPrice>
  | ReturnType<typeof decrementPrice>;

export type CartActionTypes =
  | AddItemAction
  | removeItemAction
  | incrementPriceAction
  | decrementPriceAction;
