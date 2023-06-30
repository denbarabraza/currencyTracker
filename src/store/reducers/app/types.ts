import { setErrorApp, setStatusApp, setThemeApp } from '@/store/actions/appActions';
import { themeEnum } from '@/theme/types';

export enum RequestStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface IAppState {
  statusApp: RequestStatusType;
  errorApp: string | null;
  currentTheme: themeEnum;
}

export type ActionsAppType =
  | ReturnType<typeof setStatusApp>
  | ReturnType<typeof setErrorApp>
  | ReturnType<typeof setThemeApp>;
