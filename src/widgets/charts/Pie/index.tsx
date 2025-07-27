import { memo } from 'react'
import { ChartNestedData } from '@app/types/dashboard';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface IPieChart {
  title: string
  value: ChartNestedData
  xAxis: Record<string, any>
  exporting: Record<string, any>
}

const PieChart = ({ title, value, ...restOptions }: IPieChart) => {
  const options = {
    chart: { type: 'pie' },
    plotOptions: { pie: { innerSize: '50%' } },
    title: { text: title },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    ...restOptions,
    series: [
      {
        name: 'Expense Split',
        colorByPoint: true,
        data: structuredClone(value),
      }
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default memo(PieChart);
