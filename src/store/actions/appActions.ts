import { RequestStatusType } from '@/store/reducers/app/types';

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
export const setInitialized = (value: boolean) => {
  return {
    type: 'APP/IS_INITIALIZED',
    payload: {
      value,
    },
  } as const;
};
