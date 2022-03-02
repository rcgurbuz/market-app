import { IProds } from '../products/products';
import { IAction } from './basket';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEM } from './types';

export const addToCart = (item: IProds): IAction<IProds> => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const setCartItem = (item: IProds): IAction<IProds> => {
  return {
    type: SET_CART_ITEM,
    payload: item,
  };
};

export const removeFromCart = (item: IProds): IAction<IProds> => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};
