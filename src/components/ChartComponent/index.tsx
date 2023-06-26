import React, { FC, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { ILineTest } from '@/components/ChartComponent/interface';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getDataChartSelector } from '@/store/selectors/currencySelectors';
import { ICurrencyDayResponse } from '@/types/api';
import { formatDate } from '@/utils/formatDate';

import { Container } from './styled';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const LineTest: FC<ILineTest> = ({ dataChart }) => {
  const labels = dataChart?.map(currencyValue => {
    return formatDate(currencyValue.time_close);
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Currency in USD',
        data: dataChart?.map(currencyValue => currencyValue.price_close),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Container>
      <Line data={data} />
    </Container>
  );
};
