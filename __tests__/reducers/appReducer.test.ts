import { setErrorApp, setStatusApp, setThemeApp } from '@/store/actions/appActions';
import { appReducer } from '@/store/reducers/app/appReducer';
import { RequestStatusType } from '@/store/reducers/app/types';
import { themeEnum } from '@/theme/types';

describe('appReducer', () => {
  test('should handle APP/SET_STATUS', () => {
    const status = RequestStatusType.Loading;
    const action = setStatusApp(status);
    const newState = appReducer(undefined, action);

    expect(newState.statusApp).toEqual(status);
  });

  test('should handle APP/SET_ERROR', () => {
    const error = 'Something went wrong';
    const action = setErrorApp(error);
    const newState = appReducer(undefined, action);

    expect(newState.errorApp).toEqual(error);
  });

  test('should handle APP/SET_THEME', () => {
    const theme = themeEnum.Dark;
    const action = setThemeApp(theme);
    const newState = appReducer(undefined, action);

    expect(newState.currentTheme).toEqual(theme);
  });
});

describe('setStatusApp', () => {
  test('should create an action to set the app status', () => {
    const status = RequestStatusType.Succeeded;
    const expectedAction = {
      type: 'APP/SET_STATUS',
      payload: { statusApp: status },
    };

    expect(setStatusApp(status)).toEqual(expectedAction);
  });
});

describe('setErrorApp', () => {
  test('should create an action to set the app error', () => {
    const error = 'Something went wrong';
    const expectedAction = {
      type: 'APP/SET_ERROR',
      payload: { errorApp: error },
    };

    expect(setErrorApp(error)).toEqual(expectedAction);
  });
});

describe('setThemeApp', () => {
  test('should create an action to set the app theme', () => {
    const theme = themeEnum.Light;
    const expectedAction = {
      type: 'APP/SET_THEME',
      payload: { theme },
    };

    expect(setThemeApp(theme)).toEqual(expectedAction);
  });
});
