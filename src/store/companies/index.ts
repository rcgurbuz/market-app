import { IAction, ICompanies, ICompaniesState } from './companies';
import {
  GET_COMPANIES,
  GET_COMPANIES_FAIL,
  GET_COMPANIES_SUCCESS,
} from './types';

const initalState: ICompaniesState = {
  isLoading: false,
  error: undefined,
  companies: undefined,
};

export default function rootReducer(
  state = initalState,
  action: IAction<ICompanies[]>
) {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companies: action.payload,
      };
    case GET_COMPANIES_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
