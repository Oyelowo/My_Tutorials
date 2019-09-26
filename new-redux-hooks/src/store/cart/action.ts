import { Basket } from "./types";

export const addItem = (payload: Basket) =>
  ({
    type: "ADD_ITEM",
    payload
  } as const);

export const removeItem = (
  id: string
) =>
  ({
    type: "REMOVE_ITEM",
    id
  } as const);

export const deleteProduct = (id: string) =>
  ({
    type: "DELETE_PRODUCT",
    id
  } as const);

export const incrementPrice = (productPrice: number) =>
  ({
    type: "INCREMENT_PRICE",
    productPrice
  } as const);

export const decrementPrice = (productPrice: number) =>
  ({
    type: "DECREMENT_PRICE",
    productPrice
  } as const);

export const deductItemPrice = (id: string, productPrice: number, quantity: number) =>
  ({
    type: "DEDUCT_ITEM_PRICE",
    id,
    productPrice,
    quantity
  } as const);
