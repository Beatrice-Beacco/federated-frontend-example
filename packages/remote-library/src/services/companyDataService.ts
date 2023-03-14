import axios from "axios";
import { Endpoints } from "../typescript/enums/endpoints";
import { ICompany } from "../typescript/types/company-data-types";

//Get users list axios request
export const getCompanyData = async (companyId: number): Promise<ICompany> => {
  const response = await axios.get(
    `${process.env.API_BASE_URL}${Endpoints.COMPANY}${companyId}/`
  );
  return response.data.output;
};
