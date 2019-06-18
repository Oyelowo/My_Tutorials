import { CartState, CartActionTypes } from "./types";

const initialState: CartState = {
  cart: [
    {
      name: "Goodie Bag",
      id: "1",
      price: "€10",
      description: "It is good"
    },
    {
      name: "Chocolate",
      id: "2",
      price: "€40",
      description: "It is choc"
    },
    {
      name: "Milk",
      id: "3",
      price: "€15",
      description: "It is nice!"
    },
    {
      name: "Water",
      id: "4",
      price: "€5",
      description: "It is the best"
    },
    {
      name: "Water",
      id: "5",
      price: "€5",
      description: "It is the best"
    }
  ]
};

const cartReducer = (
  state = initialState,
  { type, payload }: CartActionTypes
): CartState => {
  switch (type) {
    case "ADD_ITEM":
      return { ...state, cart: [...state.cart, payload] };

    default:
      return state;
  }
};

export default cartReducer;
