import { LocalStorageKey, themeEnum } from '@/theme/types';

export const setThemeToLocalStorage = (key: LocalStorageKey, value: themeEnum) => {
  localStorage.setItem(key, value);
};

export const getTheme = () => localStorage.getItem('storedTheme');
