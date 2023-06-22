import { ActionsType, IAppReducer, RequestStatusType } from '@/store/reducers/app/types';

const initialState: IAppReducer = {
  statusApp: 'loading' as RequestStatusType,
  errorApp: null,
  isInitialized: false,
};

export const appReducer = (state = initialState, action: ActionsType): IAppReducer => {
  switch (action.type) {
    case 'APP/SET_STATUS': {
      return { ...state, statusApp: action.payload.statusApp };
    }
    case 'APP/SET_ERROR': {
      return { ...state, errorApp: action.payload.errorApp };
    }
    case 'APP/IS_INITIALIZED': {
      return { ...state, isInitialized: action.payload.value };
    }
    default:
      return state;
  }
};
