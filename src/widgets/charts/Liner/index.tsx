import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


interface ILineChart {
  title: string;
  value: any;
  xAxis: Record<string, any>;
  exporting: Record<string, any>
}

const LineChart = ({ title, value, ...restOptions }: ILineChart) => {
  const options = {
    title: { text: title },
    series: value,

    ...restOptions,
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChart;
