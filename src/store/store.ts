import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { appReducer } from '@/store/reducers/app/appReducer';
import { ActionsAppType } from '@/store/reducers/app/types';
import { currencyReducer } from '@/store/reducers/currency/currencyReducer';
import { ActionsCurrencyType } from '@/store/reducers/currency/types';
import { mapReducer } from '@/store/reducers/map/mapReducer';

const rootReducer = combineReducers({
  app: appReducer,
  currency: currencyReducer,
  map: mapReducer,
});

export type RootActionsType = ActionsAppType | ActionsCurrencyType;
export type RootStoreType = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStoreType,
  unknown,
  RootActionsType
>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
