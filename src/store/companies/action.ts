import { IAction, ICompanies } from './companies';
import {
  GET_COMPANIES,
  GET_COMPANIES_FAIL,
  GET_COMPANIES_SUCCESS,
} from './types';

export const getCompanies = () => {
  return {
    type: GET_COMPANIES,
  };
};

export const getCompaniesSuccess = (
  companies: ICompanies[]
): IAction<ICompanies[]> => {
  return {
    type: GET_COMPANIES_SUCCESS,
    payload: companies,
  };
};

export const getCompaniesFail = (error: any) => {
  return {
    type: GET_COMPANIES_FAIL,
    payload: error,
  };
};
