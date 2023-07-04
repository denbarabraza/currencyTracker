import React, { FC, memo, useEffect } from 'react';

import { IChartObserver } from '@/components/ChartObserver/interface';
import { Container, PopUpItem } from '@/components/ChartObserver/style';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getPeriodTimeLineSelector } from '@/store/selectors/homeSelectors';
import { periodEnum } from '@/types/period';

export const ChartObserver: FC<IChartObserver> = memo(
  ({ showPopUp, onChangeShowPopUp }) => {
    const period = useAppSelector(getPeriodTimeLineSelector);

    useEffect(() => {
      let timerId: any;

      if (period === periodEnum.Month) {
        onChangeShowPopUp(true);
        timerId = setTimeout(() => {
          onChangeShowPopUp(false);
        }, 3000);
      }

      return () => {
        if (timerId) {
          clearInterval(timerId);
        }
      };
    }, [period, onChangeShowPopUp]);

    return showPopUp ? (
      <Container>
        <PopUpItem>
          The chart for the past month has been successfully constructed
        </PopUpItem>
      </Container>
    ) : null;
  },
);
