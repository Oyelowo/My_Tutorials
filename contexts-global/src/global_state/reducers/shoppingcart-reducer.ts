export interface ItemProp {
  id: number;
  name: string;
  user: string;
}

export type Cart = Array<ItemProp>;

export interface ShoppingCartProps {
  cart: Cart;
  item: ItemProp;
  addItem: (item: ItemProp) => void;
}

export interface ShoppingStateProps {
  cart: Cart;
  item: ItemProp;
}

export interface ShoppingActionProps {
  type: "ADD_ITEM";
  item: ItemProp;
}

export const shoppingCartReducer = (
  state: ShoppingStateProps,
  { type, item }: ShoppingActionProps
) => {
  switch (type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, item]
      };

    default:
      return state;
  }
};
