import { ThunkAction } from 'redux-thunk';

import { ActionsAppType } from '@/store/reducers/app/types';
import { ActionsCurrencyType } from '@/store/reducers/currency/types';
import { rootReducer } from '@/store/store';

export type RootActionsType = ActionsAppType | ActionsCurrencyType;
export type RootStoreType = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStoreType,
  unknown,
  RootActionsType
>;
