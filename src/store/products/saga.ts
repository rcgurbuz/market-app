import { put, select } from 'redux-saga/effects';
import { services } from '../../services/services';
import { RootState } from '../store';
import { getProductsSuccess, getTotalPages } from './action';
import { IAction, IProds } from './products';

export function* handleGetProducts(action: IAction<IProds[]>): any {
  try {
    const filterState = yield select((state: RootState) => state?.filters);
    const response = yield services.getProductService(filterState);
    const { data } = response;
    yield put(getProductsSuccess(data));
    yield put(getTotalPages(Math.ceil(data.length / 16)));
  } catch (error) {
    console.log(error);
  }
}
