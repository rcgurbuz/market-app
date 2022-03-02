import { put, select } from 'redux-saga/effects';
import { IProds } from '../products/products';
import { RootState } from '../store';
import { setCartItem } from './actions';
import { IAction } from './basket';

export function* handleAddCart(action: IAction<IProds>): any {
  const { basket } = yield select((state: RootState) => state?.basket);
  const index = basket?.findIndex(
    (elm) => elm?.added === action.payload?.added
  );

  if (index > -1) {
    basket[index].count += 1;
  } else {
    basket.push({ ...action.payload, count: 1 });
  }
  yield put(setCartItem(basket));
}

export function* handleRemoveFromCart(action: IAction<IProds>): any {
  const { basket } = yield select((state: RootState) => state?.basket);
  const index = basket?.findIndex(
    (elm) => elm?.added === action.payload?.added
  );

  if (index > -1 && basket[index].count > 1) {
    basket[index].count -= 1;
  } else {
    basket.splice(index, 1);
  }
  yield put(setCartItem(basket));
}
