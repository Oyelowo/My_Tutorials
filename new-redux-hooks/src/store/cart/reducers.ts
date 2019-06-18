import {
  CartState,
  CartActionTypes,
  CartActionInferred,
  Basket,
  AddItemAction
} from "./types";

const initialState: CartState = {
  cart: [
    {
      name: "Goodie Bag",
      id: "1",
      price: 10,
      description: "It is good"
    },
    {
      name: "Chocolate",
      id: "2",
      price: 40,
      description: "It is choc"
    },
    {
      name: "Milk",
      id: "3",
      price: 15,
      description: "It is nice!"
    },
    {
      name: "Water",
      id: "4",
      price: 5,
      description: "It is the best"
    },
    {
      name: "Water",
      id: "5",
      price: 5,
      description: "It is the best"
    }
  ],
  basket: [],
  totalPrice: 0
};

const updateItem = (state: CartState, action: AddItemAction): CartState => {
  const [{ basket }, { payload }] = [state, action];
  let updatedBasket;
  const isPresent = !!basket.find(el => el.id === payload.id);

  if (isPresent) {
    updatedBasket = basket.map(el => (el.id === payload.id ? payload : el));
  } else {
    updatedBasket = [...basket, payload];
  }

  return { ...state, basket: updatedBasket };
};

const cartReducer = (
  state = initialState,
  action: CartActionInferred
): CartState => {
  const { cart, totalPrice, basket } = state;
  switch (action.type) {
    case "ADD_ITEM":
      return updateItem(state, action);

    case "REMOVE_ITEM":
      const updatedBasket = basket.filter(({ id }) => !(id === action.id));
      return {
        ...state,
        totalPrice: totalPrice - (action.productPrice * action.quantity),
        basket: updatedBasket,
      };

    case "INCREMENT_PRICE":
      const newPrice = totalPrice + action.productPrice;
      return { ...state, totalPrice: newPrice };

    case "DECREMENT_PRICE":
      const newPriced = totalPrice > 0 ? totalPrice - action.productPrice : 0;
      return { ...state, totalPrice: newPriced };

    default:
      return state;
  }
};

export default cartReducer;
