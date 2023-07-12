import { ActionsAppType, IAppState, RequestStatusType } from '@/store/reducers/app/types';
import { themeEnum } from '@/theme/types';

const initialState: IAppState = {
  statusApp: RequestStatusType.Idle,
  errorApp: null,
  currentTheme: themeEnum.Light,
  isModalOpen: false,
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
    case 'APP/SET_MODAL_STATUS': {
      return { ...state, isModalOpen: action.payload.isOpen };
    }
    default:
      return state;
  }
};
