import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootStoreType } from '@/store/store';

export const useAppSelector: TypedUseSelectorHook<RootStoreType> = useSelector;
