import { setErrorApp, setStatusApp } from '@/store/actions/appActions';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface IAppState {
  statusApp: RequestStatusType;
  errorApp: string | null;
}

export type ActionsAppType =
  | ReturnType<typeof setStatusApp>
  | ReturnType<typeof setErrorApp>;
