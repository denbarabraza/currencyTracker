import { RequestStatusType } from '@/store/reducers/app/types';
import { themeEnum } from '@/theme/types';

export const setStatusApp = (statusApp: RequestStatusType) => {
  return {
    type: 'APP/SET_STATUS',
    payload: {
      statusApp,
    },
  } as const;
};

export const setErrorApp = (errorApp: string | null) => {
  return {
    type: 'APP/SET_ERROR',
    payload: {
      errorApp,
    },
  } as const;
};

export const setThemeApp = (theme: themeEnum) => {
  return {
    type: 'APP/SET_THEME',
    payload: {
      theme,
    },
  } as const;
};
