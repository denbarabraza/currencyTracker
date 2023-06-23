import { setErrorApp, setStatusApp } from '@/store/actions/appActions';

export enum RequestStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface IAppState {
  statusApp: RequestStatusType;
  errorApp: string | null;
}

export type ActionsAppType =
  | ReturnType<typeof setStatusApp>
  | ReturnType<typeof setErrorApp>;
