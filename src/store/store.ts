import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from '@/store/reducers/app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export type RootStoreType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
