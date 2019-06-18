import { AnyAction } from "redux";
import { ShoppingItem } from './types';

export const addItem = (payload: ShoppingItem) => (<const>{
    type: "ADD_ITEM",
    payload,
})



