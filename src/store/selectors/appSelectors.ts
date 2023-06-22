import { RootStoreType } from '@/store/store';

export const getStatusSelector = (state: RootStoreType) => state.app.statusApp;
