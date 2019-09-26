import React, {
  ReactChildren,
  useState,
  createContext,
  SetStateAction,
  useReducer,
  useMemo
} from "react";
import { shoppingCartReducer, ShoppingStateProps, ShoppingActionProps } from '../reducers/shoppingcart-reducer';

const initialState = { cart: [], item: { id: 4, name: "Rice", user: "lowo" } };

export const ShoppingContext = createContext({});

const ShoppingCartProvider = ({ children }: any) => {
  const [cartState, cartDispatch] = useReducer(
    shoppingCartReducer,
    initialState
  );

  const globalState = useMemo(()=>({
    cartState,
    cartDispatch}), [cartState,cartDispatch]);
  return (
    <ShoppingContext.Provider value={{cartState, cartDispatch}}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingCartProvider;
