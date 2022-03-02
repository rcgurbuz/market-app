import { put } from 'redux-saga/effects';
import { services } from '../../services/services';
import { getCompaniesFail, getCompaniesSuccess } from './action';
import { IAction, ICompanies } from './companies';

export function* handleGetCompanies(action: IAction<ICompanies[]>): any {
  try {
    const response = yield services.getCompanyService();
    const { data } = response;
    yield put(getCompaniesSuccess(data));
  } catch (error) {
    yield put(getCompaniesFail(error));
  }
}
