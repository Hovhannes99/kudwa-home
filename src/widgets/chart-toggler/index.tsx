import { ChartKindEnum, FiltersEnum } from "@app/enums";
import { ChartNestedData } from "@app/types/dashboard";
import { fetchChart } from "@entities/model/dashboard/thunks";
import { useAppDispatch } from "@shared/lib/hook/reduxHooks";
import BarChart from "@widgets/charts/Bar";
import LineChart from "@widgets/charts/Liner";
import PieChart from "@widgets/charts/Pie";

interface ChartType {
  type:  ChartKindEnum;
  value: ChartNestedData;
  dateArray: string[]
  title: string
}

const collection = {
  donut: PieChart,
  bar: BarChart,
  line: LineChart,
  pie: PieChart,
  columnStacked: LineChart
}

export interface SortOneChartProps { title: string, type: string, filter: FiltersEnum  }

const ChartToggler = ({ title, type, value, dateArray }: ChartType) => {
  const dispatch = useAppDispatch()

  function sortOneChart({ title, type, filter }: SortOneChartProps) {
    dispatch(fetchChart({ title, type, filter }))
  }

  const Component = collection[type]

  if(!Component) {
    return null
  }

  return <Component
    title={title}
    value={value}
    xAxis={{
      categories: dateArray,
    }}
    exporting={{
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: [
             {
              text: 'Monthly',
              onclick: function () {
                sortOneChart({title, type, filter: FiltersEnum.monthly })
              },
            },
            {
              text: `Quarterly`,
              onclick: function () {
                sortOneChart({title, type, filter: FiltersEnum.quarterly })
              },
            },
            {
              text: 'Yearly',
              onclick: function () {
                sortOneChart({title, type, filter: FiltersEnum.yearly })
              },
            },
            // 'downloadPDF', // error
            'separator',
            'printChart',
            'downloadPNG',
            'downloadJPEG',
            'downloadSVG',
            'separator',
            'downloadCSV',
            'downloadXLS',
            'separator',
            'viewFullscreen',
          ],
        },
      },
    }}
  />
}
 
export default ChartToggler;
