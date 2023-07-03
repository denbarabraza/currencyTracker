import React, { FC, memo, useCallback } from 'react';

import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  ToggleSlider,
} from '@/components/ThemeToggle/styled';
import { useAppDispatch } from '@/hooks/useStoreControl';
import {
  setDataForChart,
  setDayTimeLine,
  setPeriodTimeLine,
} from '@/store/actions/currencyActions';
import { periodEnum } from '@/types/period';

import { IPeriodToggle } from './interface';

export const PeriodToggle: FC<IPeriodToggle> = memo(({ open, period }) => {
  const dispatch = useAppDispatch();

  const handleToggleChange = useCallback(() => {
    const currentPeriod = period === periodEnum.Day ? periodEnum.Month : periodEnum.Day;

    if (period === periodEnum.Day) {
      dispatch(setDayTimeLine(null));
    }
    dispatch(setDataForChart(null));
    dispatch(setPeriodTimeLine(currentPeriod));
  }, [period]);

  return (
    <ToggleContainer open={open || false}>
      {period === periodEnum.Month ? 'Month' : 'Day'}
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={period !== periodEnum.Day}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='periodToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
