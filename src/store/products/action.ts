import { IAction, IProds } from './products';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_TOTAL_PAGES,
} from './types';

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSuccess = (prods: IProds[]): IAction<IProds[]> => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: prods,
  };
};

export const getProductsFail = (error: any) => {
  return {
    type: GET_PRODUCTS_FAIL,
    payload: error,
  };
};

export const getTotalPages = (data) => {
  return {
    type: GET_TOTAL_PAGES,
    payload: data,
  };
};
