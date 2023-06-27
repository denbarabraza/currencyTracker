import React, { FC } from 'react';
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
import { formatDate } from '@/utils/formatDate';

import { Container } from './styled';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart: FC<ILineTest> = ({ dataChart, code }) => {
  const labels = dataChart?.map(currencyValue => {
    return formatDate(currencyValue.time_close);
  });

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
  const options = {
    responsive: true,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true,
        grace: 1,
      },
    },
  };

  // Line
  const data: IData = {
    labels,
    datasets: [
      {
        label: `${code} / USD`,
        /* data: dataChart?.map(currencyValue => currencyValue.price_close), */
        data: [
          {
            x: new Date('2023-06-22').setHours(0, 0, 0, 0),
            o: 1.55,
            h: 1.75,
            l: 2,
            c: 2.2,
            s: [1.55, 2.2],
          },
          {
            x: new Date('2023-06-23').setHours(0, 0, 0, 0),
            o: 2.55,
            h: 1.75,
            l: 2,
            c: 3.2,
            s: [2.55, 3.2],
          },
          {
            x: new Date('2023-06-24').setHours(0, 0, 0, 0),
            o: 4.15,
            h: 1.75,
            l: 2,
            c: 5.8,
            s: [4.15, 5.8],
          },
        ],
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

  return (
    <Container>
      <Bar data={data} options={options} />
    </Container>
  );
};
