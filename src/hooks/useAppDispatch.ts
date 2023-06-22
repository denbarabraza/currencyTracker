import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { RootStoreType } from '@/store/store';

export type RootDispatchThunkType = ThunkDispatch<RootStoreType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<RootDispatchThunkType>();
