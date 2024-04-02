import { API } from "./consts";

export const fetchUsers = async () => {
  const response = await fetch(`${API}/users`);
  return await response.json();
};
