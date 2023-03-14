export interface ICompany {
  id: number;
  name: string;
  companySpending: IChartDataset[];
  companyGains: IChartDataset[];
  clientsSpending: IChartDataset[];
  employeesPerformance: IChartDataset[];
}

export interface IChartDataset {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export enum EChartDataKeys {
  companySpending = "companySpending",
  companyGains = "companyGains",
  clientsSpending = "clientsSpending",
  employeesPerformance = "employeesPerformance",
}

export type ChartDataKeys = keyof typeof EChartDataKeys;
