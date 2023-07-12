import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { darkTheme, lightTheme } from '@/theme/theme';
import { themeEnum } from '@/theme/types';

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(getThemeSelector);
  const currentTheme = theme === themeEnum.Light ? lightTheme : darkTheme;

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
