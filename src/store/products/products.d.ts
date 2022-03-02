import { Action } from 'redux';

export interface IProds {
  added: number;
  description: string;
  itemType: string;
  manufacturer: string;
  name: string;
  price: number;
  slug: string;
  tags: string[];
  count: number;
}

export interface IProdsState {
  prods?: IProds[] | null;
  isLoading: boolean;
  error?: string;
  totalPages: number;
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
