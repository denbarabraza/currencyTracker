import { RootStoreType } from '@/store/store';

export const getStatusSelector = (state: RootStoreType) => state.app.statusApp;
export const getThemeSelector = (state: RootStoreType) => state.app.currentTheme;
