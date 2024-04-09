import axios from "axios";
import { API } from "./consts";

export const fetchUsers = async () => {
  const response = await axios.get(`${API}/users`);

  return await response.data;
};
