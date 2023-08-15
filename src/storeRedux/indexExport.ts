import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { iAccountStateReducer } from './account/reducers';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { setAuthToken } from '../helpers';
import { iOrderStateReducer } from './order/reducers';
import { iOrderDetailStateReducer } from './orderDetail/reducers';
import { iProductStateReducer } from './product/reducers';
import { iPopupStateReducer } from './popup/reducers';

const strNameBatBuocTrungVoiTenBienNeuKoThiBiLogoutLienTuc = "iStateAccountGlobal";
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [strNameBatBuocTrungVoiTenBienNeuKoThiBiLogoutLienTuc],
};

const rootReducer = combineReducers({
  iStateAccountGlobal: iAccountStateReducer,
  iStateOrderGlobal: iOrderStateReducer,
  iStateOrderDetailGlobal: iOrderDetailStateReducer,
  iStateProductGlobal: iProductStateReducer,
  iStatePopupGlobal: iPopupStateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type typeAppState = ReturnType<typeof rootReducer>;

// export default function configureStore() {
//   const middlewares = [thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares);

//   return createStore(rootReducer, composeEnhancers(middlewareEnhancer));
// }

const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  return createStore(persistedReducer, composeEnhancers(middlewareEnhancer));
};

const store = configureStore();
const persistedStore = persistStore(store);

let currentState = store.getState() as typeAppState;

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState() as typeAppState;
  // if the token changes set the value in localStorage and axios headers
  if (previousState.iStateAccountGlobal.strToken !== currentState.iStateAccountGlobal.strToken) {
    const token = currentState.iStateAccountGlobal.strToken;
    if (token) {
      setAuthToken(token);
    }
  }
});

export { store, persistedStore };