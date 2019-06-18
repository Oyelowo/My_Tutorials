import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store/rootReducer";
import { CartActionTypes } from '../../store/cart/types';
import { Dispatch } from "redux";
import { removeItem } from '../../store/cart/action';

const Checkout = () => {
  const { basket } = useSelector((state: AppState) => state.cartReducer);
 const dispatch = useDispatch<Dispatch<CartActionTypes>>()
  const deleteItem = (id: string, productPrice: number, quantity: number) => {
      dispatch(removeItem(id, productPrice, quantity))
  }
  
  return (
    <div>
      <ul>
        {basket.map(({ name, price, quantity , id}) => (
          <li>
            {name}:{price}: Quantity:{quantity}
            <button onClick={()=>deleteItem(id, price, quantity)}>Delete Me</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
