import React, { FC, memo, useCallback } from 'react';

import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  ToggleSlider,
} from '@/components/ThemeToggle/styled';
import { useAppDispatch } from '@/hooks/useStoreControl';
import { setPeriodTimeLine } from '@/store/actions/currencyActions';
import { PeriodEnum } from '@/types/period';

import { IPeriodToggle } from './interface';

export const PeriodToggle: FC<IPeriodToggle> = memo(({ open, period }) => {
  const dispatch = useAppDispatch();

  const handleToggleChange = useCallback(() => {
    const currentPeriod = period === PeriodEnum.Day ? PeriodEnum.Month : PeriodEnum.Day;

    dispatch(setPeriodTimeLine(currentPeriod));
  }, [period]);

  return (
    <ToggleContainer open={open || false}>
      {period === PeriodEnum.Month ? 'Month' : 'Day'}
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={period !== PeriodEnum.Day}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='periodToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
