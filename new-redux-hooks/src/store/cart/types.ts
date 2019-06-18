import { addItem } from "./action";
import { Action } from 'redux';

export interface ShoppingItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface CartState  {
    cart: ShoppingItem[];
}

export interface AddItemAction extends Action {
    payload: ShoppingItem;
}

export type CartActionInferred = ReturnType<typeof addItem>

export type CartActionTypes = AddItemAction