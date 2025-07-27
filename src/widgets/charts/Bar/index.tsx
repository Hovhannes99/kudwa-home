import { ChartNestedData } from '@app/types/dashboard';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface IBarChart {
  title: string
  value: ChartNestedData
  xAxis: Record<string, any>
  exporting: Record<string, any>
}

const BarChart = ({ title, value, ...restOptions }: IBarChart) => {
  const options = {
    chart: {
      type: 'column',
    },
    title: {text: title },
    series: value,
    ...restOptions,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
