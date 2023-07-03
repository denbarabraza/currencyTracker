import React, { FC, memo, useEffect, useMemo } from 'react';
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
import { useAppSelector } from '@/hooks/useStoreControl';
import { ChartObserver, ChartSubject } from '@/pages/TimeLine/Observer';
import { getPeriodTimeLineSelector } from '@/store/selectors/currencySelectors';
import { periodEnum } from '@/types/period';

import { Container } from './styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart: FC<ILineTest> = memo(({ dataChart, code }) => {
  const period = useAppSelector(getPeriodTimeLineSelector);
  const chartSubject: ChartSubject = useMemo(() => new ChartSubject(), []);

  const chartObserver: ChartObserver = useMemo(() => new ChartObserver(), []);

  useEffect(() => {
    chartSubject.attach(chartObserver);

    if (period === periodEnum.Month) {
      chartSubject.buildChart(dataChart);
    }

    return () => {
      chartSubject.detach(chartObserver);
    };
  }, [chartSubject, chartObserver, period]);

  const data: IData = {
    datasets: [
      {
        label: `${code} / USD`,
        data:
          dataChart &&
          dataChart?.map(currencyValue => {
            return {
              x: currencyValue.time_close.slice(0, 10),
              o: currencyValue.price_open,
              h: currencyValue.price_high,
              l: currencyValue.price_low,
              c: currencyValue.price_close,
              s: [currencyValue.price_open, currencyValue.price_close],
            };
          }),
        backgroundColor: (ctx: any) => {
          const {
            raw: { o, c },
          } = ctx;

          let color;

          if (c >= o) {
            color = 'rgb(75, 192, 192)';
          } else {
            color = 'rgb(255, 26, 104)';
          }

          return color;
        },
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {},
      y: {
        beginAtZero: false,
        grace: '30%',
      },
    },
  };

  const candlestick = {
    id: 'candlestick',
    beforeDatasetDraw(
      chart: Chart,
      args: { index: number; meta: ChartMeta },
    ): boolean | void {
      const {
        ctx,
        data: IDataElem,
        chartArea: { top, bottom, left, right, width },
        scales: { x, y },
      } = chart;

      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(0,0,0,1)';

      data.datasets[0].data.forEach((datapoint: any, index: number) => {
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y,
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.h),
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y,
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.l),
        );
        ctx.stroke();
      });
    },
  };

  const plugins = [candlestick];

  return (
    <Container id='myChart'>
      <Bar data={data} options={options} plugins={plugins} />
    </Container>
  );
});
