import { takeLatest } from 'redux-saga/effects';
import { handleAddCart, handleRemoveFromCart } from './basket/saga';
import { ADD_TO_CART, REMOVE_FROM_CART } from './basket/types';
import { handleGetCompanies } from './companies/saga';
import { GET_COMPANIES } from './companies/types';
import { handleGetProducts } from './products/saga';
import { GET_PRODUCTS } from './products/types';
import { handleGetTags } from './tags/saga';
import { GET_TAGS } from './tags/types';

export function* watchHome() {
  yield takeLatest(GET_PRODUCTS, handleGetProducts);
  yield takeLatest(GET_COMPANIES, handleGetCompanies);
  yield takeLatest(GET_TAGS, handleGetTags);
  yield takeLatest(ADD_TO_CART, handleAddCart);
  yield takeLatest(REMOVE_FROM_CART, handleRemoveFromCart);
}
