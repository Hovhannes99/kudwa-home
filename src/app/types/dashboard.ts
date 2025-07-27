import { ChartKindEnum } from "@app/enums";

export interface ChartNestedData {
  type: ChartKindEnum;
  name: string;
  data: Record<string, any>[]
}

export interface ChartsResponses {
  mainDashboard: MainDashboard
  mainDashboardKPIs: MainDashboardKpis
}

export interface MainDashboard {
  period: string
  startDate: string
  endDate: string
  metricDate: string
  dateArray: string[]
  charts: Charts
}

export interface Charts {
  cashAtBank: CashAtBank[]
  expenseSplit: ExpenseSplit[]
  indirectCashflow: (IndirectCashflow | null)[]
  totalRevenuesSplit: TotalRevenuesSplit[]
  profitLossOverview: ProfitLossOverview[]
  salariesSplit: any[]
  ManpowerOperatingExpenses: any[]
}

export interface CashAtBank {
  chartType: string
  name: string
  values: number[]
}

export interface ExpenseSplit {
  chartType: string
  name: string
  values: number
}

export interface IndirectCashflow {
  name: string
  values: number[]
  chartType: string
}

export interface TotalRevenuesSplit {
  chartType: string
  name: string
  values: number
}

export interface ProfitLossOverview {
  chartType: string
  name: string
  values: number[]
}

export interface MainDashboardKpis {
  topKPIs: TopKpi[]
  KPIs: Kpi[]
}

export interface TopKpi {
  name: string
  value: number
  date?: string
  mOm?: number
  type?: string
}

export interface Kpi {
  name: string
  value: number
  mom: number
  prefix: string
}
