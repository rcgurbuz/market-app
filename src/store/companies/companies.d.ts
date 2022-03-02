import { Action } from 'redux';

export interface ICompanies {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}

export interface ICompaniesState {
  isLoading: boolean;
  error?: string;
  companies?: ICompanies[];
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
