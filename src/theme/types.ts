export interface IUsedColors {
  black: string;
  blackOpacity: string;
  white: string;
  green: string;
  greenOpacity: string;
  lightGreen: string;
  gray: string;
  grayOpacity: string;
  grayMoreOpacity: string;
  lightGray: string;
  red: string;
  greenChart: string;
}

export interface ITheme {
  colors: {
    fontColor: string;
    fontColorOpacity: string;
    headFootBackground: string;
    mainBackground: string;
    modalItemBackground: string;
    modalContentBackground: string;
    currencyCard: string;
    boxShadow: string;
    toggleBackground: string;
    toggleBackgroundChecked: string;
    toggleCircle: string;
    toggleBorder: string;
  };
  usedColors: IUsedColors;
  fonts: string[];
  fontSizes: {
    sm: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  indentation: {
    i0: number;
    i5: string;
    i10: string;
    i20: string;
    i30: string;
    i40: string;
    i50: string;
  };
}

export enum themeEnum {
  Light = 'light',
  Dark = 'dark',
}

export type LocalStorageKey = 'storedTheme';
