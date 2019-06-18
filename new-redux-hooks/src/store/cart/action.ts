import { AnyAction } from "redux";
import { Basket } from './types';

export const addItem = (payload: Basket) => (<const>{
    type: "ADD_ITEM",
    payload,
})

export const removeItem = (id: string, productPrice: number, quantity: number) => (<const>{
    type: "REMOVE_ITEM",
    id,
    productPrice,
    quantity
})

export const incrementPrice = (productPrice: number) => (<const>{
    type: "INCREMENT_PRICE",
    productPrice,
})

export const decrementPrice = (productPrice: number) => (<const>{
    type: "DECREMENT_PRICE",
    productPrice,
})



