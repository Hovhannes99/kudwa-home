export interface IReport {
  reportResult: ReportResult
}

export interface ReportField {
  id: number;
  financialReportId?: number;
  name: string;
  type?: string;
  description?: string | null;
  style?: string | null;
  createdAt?: string;
  updatedAt?: string;
  outputs?: unknown[];
  actualData?: unknown[];
  fields?: ReportField[];
  result?: number[];
  quarterlyResult?: number[];
  yearlyResult?: number[];
}
export interface ReportData {
  id: number;
  scenarioId?: number;
  startingDate?: string;
  endingDate?: string;
  createdAt?: string;
  updatedAt?: string;
  profitnLoss: ReportField[];
  metrics?: Record<string, any>;
  computedFields?: Array<Record<string, any>>;
}

export type ViewMode = "monthly" | "quarterly" | "yearly";

export interface ReportState {
  data: ReportData;
  viewMode: ViewMode;
  selectedField: ReportField | null;
}
export interface ReportAccordionProps {
  fields: ReportField[];
  viewMode: ViewMode;
}

  export interface ReportChartProps {
  fields: ReportField[];
  viewMode: ViewMode;
}

export interface ReportResult {
  id: number
  scenarioId: number
  startingDate: string
  endingDate: string
  createdAt: string
  updatedAt: string
  profitnLoss: ProfitnLoss[]
  metrics: Metrics
  computedFields: ComputedField[]
}

export interface ProfitnLoss {
  id: number
  financialReportId: number
  name: string
  type: string
  description: any
  style: any
  createdAt: string
  updatedAt: string
  outputs: any[]
  actualData: any[]
  fields: Field[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface Field {
  id: number
  topLevelFieldId: number
  name: string
  code: any
  uniqueReference: UniqueReference
  order: any
  description: any
  style: any
  fieldType: any
  createdAt: string
  updatedAt: string
  fieldId: any
  outputs: any[]
  actualData: ActualDaum[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
  fields?: Field2[]
}

export interface UniqueReference {
  sheetType: string
  integrationSourceId: number
  sourceType: string
  accountId: string
  accountName: string
  metric: boolean
}

export interface ActualDaum {
  id: number
  topLevelFieldId: any
  fieldId: number
  value: number[]
  codatAccountId: string
  integrationSourceId: number
  source: string
  createdAt: string
  updatedAt: string
}

export interface Field2 {
  id: number
  topLevelFieldId: number
  name: string
  code: any
  uniqueReference: UniqueReference2
  order: any
  description: any
  style: any
  fieldType: any
  createdAt: string
  updatedAt: string
  fieldId: number
  outputs: any[]
  actualData: ActualDaum2[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
  fields?: Field3[]
}

export interface UniqueReference2 {
  sheetType: string
  integrationSourceId: number
  sourceType: string
  accountId: string
  accountName: string
  metric: boolean
}

export interface ActualDaum2 {
  id: number
  topLevelFieldId: any
  fieldId: number
  value: number[]
  codatAccountId: string
  integrationSourceId: number
  source: string
  createdAt: string
  updatedAt: string
}

export interface Field3 {
  id: number
  topLevelFieldId: number
  name: string
  code: any
  uniqueReference: UniqueReference3
  order: any
  description: any
  style: any
  fieldType: any
  createdAt: string
  updatedAt: string
  fieldId: number
  outputs: any[]
  actualData: ActualDaum3[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface UniqueReference3 {
  sheetType: string
  integrationSourceId: number
  sourceType: string
  accountId: string
  accountName: string
  metric: boolean
}

export interface ActualDaum3 {
  id: number
  topLevelFieldId: any
  fieldId: number
  value: number[]
  codatAccountId: string
  integrationSourceId: number
  source: string
  createdAt: string
  updatedAt: string
}

export interface Metrics {
  pnlKeyMetrics: PnlKeyMetrics
}

export interface PnlKeyMetrics {
  id: number
  financialReportId: number
  name: string
  type: string
  description: any
  style: any
  createdAt: string
  updatedAt: string
  outputs: any[]
  actualData: any[]
  fields: Field4[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface Field4 {
  id: number
  topLevelFieldId: number
  name: string
  code: any
  uniqueReference: UniqueReference4
  order: any
  description: any
  style: any
  fieldType: any
  createdAt: string
  updatedAt: string
  fieldId: any
  outputs: any[]
  actualData: ActualDaum4[]
  result: number[]
  totalResult: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  yearlyResult: number[]
  quarterlyResult: number[]
}

export interface UniqueReference4 {
  sheetType: string
  integrationSourceId: any
  sourceType: string
  accountId: any
  accountName: any
  metric: boolean
}

export interface ActualDaum4 {
  id: number
  topLevelFieldId: any
  fieldId: number
  value: number[]
  codatAccountId: any
  integrationSourceId: any
  source: string
  createdAt: string
  updatedAt: string
}

export interface ComputedField {
  result: number[]
  pastMonth: number[]
  yearly: number[]
  quarterly: number[]
  yearlyPastMonth: number[]
  quarterlyPastMonth: number[]
  currentYearActual: number[]
  currentQuarterActual: number[]
  name: string
  totalResult?: number[]
}
