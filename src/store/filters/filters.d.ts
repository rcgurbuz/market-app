export interface IFilterState {
  _sort: string;
  _order: string;
  manufacturer: string[];
  tags: string[];
  itemType: string;
}

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
export interface IActionBrands extends Action<string> {
  type: string;
  payload: string;
  error?: boolean;
  meta?: any;
}

export type IActions = IAction | IActionBrands;
