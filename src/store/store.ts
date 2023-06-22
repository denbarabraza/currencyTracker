import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from '@/store/reducers/app/appReducer';
import { currencyReducer } from '@/store/reducers/currency/currencyReducer';

const rootReducer = combineReducers({
  app: appReducer,
  currency: currencyReducer,
});

export type RootStoreType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
