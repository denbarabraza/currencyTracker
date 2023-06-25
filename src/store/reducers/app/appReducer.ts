import { ActionsAppType, IAppState, RequestStatusType } from '@/store/reducers/app/types';
import { ThemeEnum } from '@/types/themes';

const initialState: IAppState = {
  statusApp: RequestStatusType.Idle,
  errorApp: null,
  currentTheme: ThemeEnum.Light,
};

export const appReducer = (state = initialState, action: ActionsAppType): IAppState => {
  switch (action.type) {
    case 'APP/SET_STATUS': {
      return { ...state, statusApp: action.payload.statusApp };
    }
    case 'APP/SET_ERROR': {
      return { ...state, errorApp: action.payload.errorApp };
    }
    case 'APP/SET_THEME': {
      return {
        ...state,
        currentTheme: action.payload.theme,
      };
    }
    default:
      return state;
  }
};
