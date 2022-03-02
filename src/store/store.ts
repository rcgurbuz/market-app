import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

//reducers
import basketReducer from './basket';
import companyReducer from './companies';
import productReducer from './products';
import filterReducer from './filters';

import tagReducer from './tags';

//saga watch
import { watchHome } from './saga';

//merge reducer with combineReducers()
const rootReducer = combineReducers({
  companies: companyReducer,
  products: productReducer,
  basket: basketReducer,
  filters: filterReducer,
  tags: tagReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

//global store for app

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchHome);

export default store;
