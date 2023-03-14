import axios from "axios";
import { Endpoints } from "../typescript/enums/endpoints";
import { User } from "../typescript/types/users-types";

//Get users list axios request
export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    `${process.env.API_BASE_URL}${Endpoints.USERS}`
  );
  return response.data.output;
};
