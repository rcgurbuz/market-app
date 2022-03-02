import { Action } from 'redux';
import { IProds } from '../products/products';

export interface IBasketState {
  basket: IProds[];
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
