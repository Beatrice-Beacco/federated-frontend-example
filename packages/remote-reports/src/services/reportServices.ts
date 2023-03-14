import axios from "axios";
import { Endpoints } from "../typescript/enums/endpoints";
import { ReportFormData } from "../typescript/types/report-types";

export const submitReport = (reportData: ReportFormData) => {
  return axios.post(
    `${process.env.API_BASE_URL}${Endpoints.REPORT}`,
    reportData
  );
};
