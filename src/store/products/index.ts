import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_TOTAL_PAGES,
} from './types';
import { IAction, IProds, IProdsState } from './products';

const initalState: IProdsState = {
  prods: null,
  isLoading: false,
  error: undefined,
  totalPages: 0,
};

export default function rootReducer(
  state = initalState,
  action: IAction<IProds[]>
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        prods: action.payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case GET_TOTAL_PAGES:
      return {
        ...state,
        isLoading: false,
        totalPages: action.payload,
      };
    default:
      return state;
  }
}
