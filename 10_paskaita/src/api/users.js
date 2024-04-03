import { API } from "./consts";

// GET API/users
export const fetchUsers = async () => {
  const response = await fetch(`${API}/users`);
  return await response.json();
};

// POST API/users
export const createUser = async (user) => {
  const response = await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

// PUT API/users/1
export const updateUser = async (user) => {
  const response = await fetch(`${API}/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
};

// DELETE API/users/1
export const deleteUser = async (id) => {
  const response = await fetch(`${API}/users/${id}`, { method: "DELETE" });
  return await response.json();
};
