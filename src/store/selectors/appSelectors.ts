import { RootStoreType } from '@/store/types';

export const getStatusSelector = (state: RootStoreType) => state.app.statusApp;
export const getThemeSelector = (state: RootStoreType) => state.app.currentTheme;
export const getModalStatusSelector = (state: RootStoreType) => state.app.isModalOpen;
