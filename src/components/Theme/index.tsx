import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/theme/theme';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setThemeApp } from '@/store/actions/appActions';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { ThemeEnum } from '@/types/themes';
import { getTheme } from '@/utils/localStorage';

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const currentTheme = theme === ThemeEnum.Light ? lightTheme : darkTheme;

  useEffect(() => {
    const themeFromLs = getTheme();

    if (themeFromLs) {
      dispatch(setThemeApp(themeFromLs as ThemeEnum));
    }
  }, [theme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
