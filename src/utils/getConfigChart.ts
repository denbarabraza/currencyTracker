import { Chart, ChartMeta } from 'chart.js';

import { IData } from '@/components/ChartComponent/interfaces';
import { usedColors } from '@/theme/theme';
import { ICurrencyChartResponse } from '@/types/api';

export const getConfigChart = (dataChart: ICurrencyChartResponse[], code: string) => {
  const data: IData = {
    datasets: [
      {
        label: `${code} / USD`,
        data:
          dataChart &&
          dataChart?.map(currencyValue => {
            const { time_close, price_open, price_high, price_low, price_close } =
              currencyValue;

            return {
              x: time_close.slice(0, 10),
              o: price_open,
              h: price_high,
              l: price_low,
              c: price_close,
              s: [price_open, price_close],
            };
          }),
        backgroundColor: (ctx: any) => {
          const {
            raw: { o, c },
          } = ctx;

          return c >= o ? `${usedColors.greenChart}` : `${usedColors.red}`;
        },
        barPercentage: 1,
        maxBarThickness: 20,
        minBarLength: 7,
        borderColor: `${usedColors.black}`,
        borderWidth: 2,
        borderSkipped: false,
      },
    ],
  };
  const options = {
    responsive: true,
    devicePixelRatio: 20,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          offset: true,
        },
      },
      y: {
        stacked: true,
        beginAtZero: false,
        grace: '80%',
        grid: {
          offset: true,
        },
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
        scales: { x, y },
      } = chart;

      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = `${usedColors.black}`;

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

  return { data, options, plugins };
};
