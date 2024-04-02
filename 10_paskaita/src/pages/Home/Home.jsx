import { useState, useEffect } from "react";
import { fetchUsers } from "../../api/users";
import UserList from "./UserList";
import Loader from "../../components/Loader";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Data fetching after 2s
    setTimeout(() => {
      fetchUsers()
        .then((response) => {
          setUsers(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default Home;
