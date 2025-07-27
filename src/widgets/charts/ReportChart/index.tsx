import  {FC, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import {ReportChartProps} from "@app/types/report.ts";
import {getDataKey} from "@shared/lib/utils/time.ts";
import {RootState} from "@app/store/store.ts";


const ReportChart:FC<ReportChartProps> = ({ fields, viewMode }) => {
    const { selectedField } = useSelector((state:RootState) => state.report);

    const chartOptions = useMemo(() => {
        const key = getDataKey(viewMode);
        const chartData: any = selectedField ? [selectedField] : fields;

        const categories =
            chartData.length > 0 && Array.isArray(chartData[0][key])
                ? (chartData[0][key]).map((_, i) => `${viewMode} ${i + 1}`)
                : [];

        const series = chartData.map((field:any) => ({
            name: field.name,
            data: Array.isArray(field[key]) ? [...(field[key])] : [],
        }));


        return {
            chart: { type: "line" },
            title: {
                text: selectedField
                    ? `Chart: ${selectedField.name} (${viewMode})`
                    : `Report (${viewMode})`,
            },
            xAxis: { categories: [...categories] },
            yAxis: { title: { text: "Value" } },
            series: [...series],
        };
    }, [fields, viewMode, selectedField]);

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default ReportChart;
