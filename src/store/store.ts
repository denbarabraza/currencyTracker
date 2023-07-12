import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { appReducer } from '@/store/reducers/app/appReducer';
import { homeReducer } from '@/store/reducers/home/homeReducer';
import { mapReducer } from '@/store/reducers/map/mapReducer';
import { timeLineReducer } from '@/store/reducers/timeLine/timeLineReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  home: homeReducer,
  timeLine: timeLineReducer,
  map: mapReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app', 'home'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
