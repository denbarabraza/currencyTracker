import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setThemeApp } from '@/store/actions/appActions';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { darkTheme, lightTheme } from '@/theme/theme';
import { themeEnum } from '@/theme/types';
import { getTheme } from '@/utils/localStorage';

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const currentTheme = theme === themeEnum.Light ? lightTheme : darkTheme;

  useEffect(() => {
    const themeFromLs = getTheme();

    if (themeFromLs) {
      dispatch(setThemeApp(themeFromLs as themeEnum));
    }
  }, [theme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
