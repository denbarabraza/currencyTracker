import { setErrorApp, setInitialized, setStatusApp } from '@/store/actions/appActions';

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface IAppReducer {
  statusApp: RequestStatusType;
  errorApp: string | null;
  isInitialized: boolean;
}

export type ActionsType =
  | ReturnType<typeof setStatusApp>
  | ReturnType<typeof setErrorApp>
  | ReturnType<typeof setInitialized>;
