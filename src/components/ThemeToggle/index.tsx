import React, { FC, memo, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setThemeApp } from '@/store/actions/appActions';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { themeEnum } from '@/theme/types';

import { IThemeToggle } from './interface';
import { ToggleContainer, ToggleInput, ToggleLabel, ToggleSlider } from './styled';

export const ThemeToggle: FC<IThemeToggle> = memo(({ open }) => {
  const theme = useAppSelector(getThemeSelector);
  const dispatch = useAppDispatch();
  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === themeEnum.Light ? themeEnum.Dark : themeEnum.Light;

    dispatch(setThemeApp(rulesTheme));
  }, [dispatch, theme]);

  return (
    <ToggleContainer open={open || false}>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme !== themeEnum.Light}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='themeToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
