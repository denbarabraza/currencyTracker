import { DefaultTheme } from 'styled-components';

import { ITheme } from '@/types/ITheme';
import { ThemeEnum } from '@/types/themes';

const baseTheme: ITheme = {
  colors: {
    fontColor: 'rgb(0,0,0)',
    fontColorOpacity: 'rgba(0,0,0,0.5)',
    headFootBackground: 'rgb(207,241,202)',
    mainBackground: 'rgb(255,255,255)',
    modalItemBackground: 'rgba(222,224,222, 0.6)',
    modalContentBackground: 'rgb(255,255,255)',
    currencyCard: 'rgb(207,241,202)',
    boxShadow: 'rgb(198,210,195)',
    toggleBackground: 'rgb(255,255,255)',
    toggleBackgroundChecked: 'rgb(255,255,255)',
    toggleCircle: 'rgb(53, 185, 26)',
    toggleBorder: 'rgb(53, 185, 26)',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    fontColor: 'rgb(255,255,255)',
    fontColorOpacity: 'rgba(255,255,255,0.5)',
    headFootBackground: 'rgb(0,0,0)',
    mainBackground: 'rgb(0,0,0)',
    modalItemBackground: 'rgba(0,0,0,0.6)',
    modalContentBackground: 'rgb(140,139,139)',
    currencyCard: 'rgb(42,42,42)',
    boxShadow: 'rgb(229,228,232)',
    toggleBackground: 'rgb(53, 185, 26)',
    toggleBackgroundChecked: 'rgb(53, 185, 26)',
    toggleCircle: 'rgb(255,255,255)',
    toggleBorder: 'rgb(53, 185, 26)',
  },
};
