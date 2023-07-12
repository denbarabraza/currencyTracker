import { DefaultTheme } from 'styled-components';

import { ITheme, IUsedColors, themeEnum } from '@/theme/types';

export const usedColors: IUsedColors = {
  black: 'rgb(0,0,0)',
  blackOpacity: 'rgba(0,0,0,0.5)',
  white: 'rgb(255,255,255)',
  green: 'rgb(53, 185, 26)',
  greenOpacity: 'rgba(53, 185, 26,0.5)',
  lightGreen: 'rgb(207,241,202)',
  gray: 'rgb(42,42,42)',
  grayOpacity: 'rgba(255,255,255,0.5)',
  grayMoreOpacity: 'rgb(204,204,204)',
  lightGray: 'rgb(140,139,139)',
  red: 'rgb(255, 26, 104)',
  greenChart: 'rgb(75, 192, 192)',
};

const baseTheme: ITheme = {
  colors: {
    fontColor: usedColors.black,
    fontColorOpacity: usedColors.blackOpacity,
    headFootBackground: usedColors.lightGreen,
    mainBackground: usedColors.white,
    modalItemBackground: usedColors.grayOpacity,
    modalContentBackground: usedColors.lightGreen,
    currencyCard: usedColors.lightGreen,
    boxShadow: usedColors.grayMoreOpacity,
    toggleBackground: usedColors.white,
    toggleBackgroundChecked: usedColors.white,
    toggleCircle: usedColors.green,
    toggleBorder: usedColors.green,
  },
  usedColors: { ...usedColors },
  fonts: ['sans-serif', 'Poppins'],
  fontSizes: {
    sm: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '22px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  indentation: {
    i0: 0,
    i5: '5px',
    i10: '10px',
    i20: '20px',
    i30: '30px',
    i40: '40px',
    i50: '50px',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: themeEnum.Light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: themeEnum.Dark,

  colors: {
    ...baseTheme.colors,
    fontColor: usedColors.white,
    fontColorOpacity: usedColors.grayOpacity,
    headFootBackground: usedColors.black,
    mainBackground: usedColors.black,
    modalItemBackground: usedColors.blackOpacity,
    modalContentBackground: usedColors.lightGray,
    currencyCard: usedColors.gray,
    boxShadow: usedColors.grayMoreOpacity,
    toggleBackground: usedColors.green,
    toggleBackgroundChecked: usedColors.green,
    toggleCircle: usedColors.white,
    toggleBorder: usedColors.green,
  },
};
