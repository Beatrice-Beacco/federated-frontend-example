export interface ReportFormData {
  type: ReportType;
  title: string;
  description: string;
}

export type ReportType = "bug" | "missing_feature" | "layout_error" | "other";
