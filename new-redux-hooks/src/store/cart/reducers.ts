import { availableProducts } from '../../data/products';
import {
  ShoppingCartState,
  CartActionInferred,
  AddItemAction
} from "./types";

const initialState: ShoppingCartState = {
  products: availableProducts,
  basket: [],
  totalPrice: 0
};

const updateItem = (state: ShoppingCartState, action: AddItemAction): ShoppingCartState => {
  const { basket } = state;
  const { payload } = action;

  const itemIsInBasket = !!basket.find(item => item.id === payload.id);
  let updatedBasket;
  if (itemIsInBasket) {
    updatedBasket = basket.map(item => (item.id === payload.id ? payload : item));
  } else {
    updatedBasket = [...basket, payload];
  }

  return { ...state, basket: updatedBasket };
};

const cartReducer = ( state = initialState, action: CartActionInferred ): ShoppingCartState => {

  const {  totalPrice, basket, products } = state;
  switch (action.type) {
    case "ADD_ITEM":
      return updateItem(state, action);

    case "REMOVE_ITEM":
      const updatedBasket = basket.filter(({ id }) => !(id === action.id));
      return {
        ...state,
        basket: updatedBasket,
      };

      case "DEDUCT_ITEM_PRICE":
        return {
          ...state,
          totalPrice: totalPrice - (action.productPrice * action.quantity)
        }

      case "DELETE_PRODUCT":
        const updatedProduct = products.filter(({ id }) => !(id === action.id));
        return {
          ...state,
          products: updatedProduct,
        };

    case "INCREMENT_PRICE":
      const newPrice = totalPrice + action.productPrice;
      return { ...state, totalPrice: newPrice };

    case "DECREMENT_PRICE":
      const updatedPrice = totalPrice > 0 ? totalPrice - action.productPrice : 0;
      return { ...state, totalPrice: updatedPrice };

    default:
      return state;
  }
};

export default cartReducer;
