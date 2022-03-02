import { IProds } from './../products/products';
import { IAction, IBasketState } from './basket';
import { SET_CART_ITEM } from './types';

const initalState: IBasketState = {
  basket: [],
};

export default function rootReducer(
  state = initalState,
  action: IAction<IProds[]>
) {
  switch (action.type) {
    case SET_CART_ITEM:
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
}
