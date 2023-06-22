import { ActionsAppType, IAppState, RequestStatusType } from '@/store/reducers/app/types';

const initialState: IAppState = {
  statusApp: 'loading' as RequestStatusType,
  errorApp: null,
};

export const appReducer = (state = initialState, action: ActionsAppType): IAppState => {
  switch (action.type) {
    case 'APP/SET_STATUS': {
      return { ...state, statusApp: action.payload.statusApp };
    }
    case 'APP/SET_ERROR': {
      return { ...state, errorApp: action.payload.errorApp };
    }
    default:
      return state;
  }
};
