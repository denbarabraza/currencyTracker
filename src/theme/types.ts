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
}

export enum themeEnum {
  Light = 'light',
  Dark = 'dark',
}

export type LocalStorageKey = 'storedTheme';
