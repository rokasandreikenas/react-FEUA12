import axios from "axios";
import { API } from "./consts";

const api = {
  fetch: () => axios.get(`${API}/users`).then((resp) => resp.data),
};

export default api;
