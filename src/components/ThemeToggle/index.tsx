import React, { FC, memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setThemeApp } from '@/store/actions/appActions';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { ThemeEnum } from '@/types/themes';
import { setThemeToLocalStorage } from '@/utils/localStorage';

import { IThemeToggle } from './interface';
import { ToggleContainer, ToggleInput, ToggleLabel, ToggleSlider } from './styled';

export const ThemeToggle: FC<IThemeToggle> = memo(({ open }) => {
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;

    setThemeToLocalStorage('storedTheme', rulesTheme);
    dispatch(setThemeApp(rulesTheme));
  }, [theme]);

  return (
    <ToggleContainer open={open || false}>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme !== ThemeEnum.Light}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='themeToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
