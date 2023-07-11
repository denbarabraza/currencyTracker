import React, { FC, memo, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart,
  Chart as ChartJS,
  ChartMeta,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { IData, ILineTest } from '@/components/ChartComponent/interface';
import { ChartObserver, Subject } from '@/components/ChartObserver';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getPeriodTimeLineSelector } from '@/store/selectors/homeSelectors';
import { periodEnum } from '@/types/period';
import { getConfigChart } from '@/utils/getConfigChart';

import { Container } from './styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart: FC<ILineTest> = memo(({ dataChart, code }) => {
  const period = useAppSelector(getPeriodTimeLineSelector);

  const data = getConfigChart(dataChart, code);

  useEffect(() => {
    const subject = new Subject(dataChart);
    const observer = new ChartObserver(subject);

    if (period === periodEnum.Month && dataChart) {
      subject.processData();
    }

    return () => {
      observer.unsubscribe();
    };
  }, [period]);

  return (
    <Container data-cy='barChat' data-testid='barChat'>
      <Bar data={data.data} options={data.options} plugins={data.plugins} />
    </Container>
  );
});
