import { setErrorApp, setStatusApp, setThemeApp } from '@/store/actions/appActions';
import { ThemeEnum } from '@/types/themes';

export enum RequestStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface IAppState {
  statusApp: RequestStatusType;
  errorApp: string | null;
  currentTheme: ThemeEnum;
}

export type ActionsAppType =
  | ReturnType<typeof setStatusApp>
  | ReturnType<typeof setErrorApp>
  | ReturnType<typeof setThemeApp>;
