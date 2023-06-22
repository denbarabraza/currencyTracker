import { useDispatch } from 'react-redux';

import { store } from '@/store/store';

export type RootDispatchThunkType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<RootDispatchThunkType>();
