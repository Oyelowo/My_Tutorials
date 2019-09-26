import { addItem, removeItem, incrementPrice, decrementPrice, deleteProduct, deductItemPrice } from './action';
import { Action } from 'history';

export interface Products {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
}

export interface Basket extends Products {
  readonly quantity: number;
}
export interface ShoppingCartState {
  readonly products: Products[];
  readonly basket: Basket[];
  readonly totalPrice: number;
}

// ACTION CREATORS' TYPES
export interface AddItemAction {
  readonly type: "ADD_ITEM";
  readonly payload: Basket;
} 

export interface removeItemAction {
  readonly type: "REMOVE_ITEM";
  id: string;
}

export interface incrementPriceAction {
  readonly type: "INCREMENT_PRICE";
  productPrice: number;
}

export interface decrementPriceAction {
  readonly type: "DECREMENT_PRICE";
  payload: Basket;
}

export interface removeProductAction {
  type: "DELETE_PRODUCT";
  payload: Products;
}

export interface deductItemPriceAction {
  type: "DEDUCT_ITEM_PRICE";
  id: string;
  productPrice: number;
  quantity: number;
}

export interface deleteProductAction {
  type: "DEDUCT_ITEM_PRICE";
  id: string;
}

export type CartActionTypes =
  | AddItemAction
  | removeItemAction
  | incrementPriceAction
  | decrementPriceAction
  | deductItemPriceAction
  | deleteProductAction;


// INFERRING THE TYPES FROM ACTION CREATORS

  export type CartActionInferred =
  | ReturnType<typeof addItem>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof incrementPrice>
  | ReturnType<typeof decrementPrice>
  | ReturnType<typeof deleteProduct>
  | ReturnType<typeof deductItemPrice>;
