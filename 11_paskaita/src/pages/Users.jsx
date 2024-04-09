import { useState, useEffect } from "react";
// import axios from "axios";
import todoApi from "../api/todoApi";
import { fetchUsers } from "../api/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  // simple way
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //       .then((resp) => resp.data)
  //       .then((response) => {
  //         setUsers(response);
  //       })
  //       .catch((error) => console.error(error));
  //   }, []);

  // ASYNS AWAIT Inside useEffect
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetchUsers();
  //         setUsers(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  // IIF version
  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await fetchUsers();
  //         setUsers(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }, []);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    todoApi
      .fetch()
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
