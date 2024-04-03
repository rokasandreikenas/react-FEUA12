import { useState, useEffect } from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { fetchUsers, deleteUser } from "../../api/users";
import UserList from "./UserList";
import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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

  const handleEditUser = (id) => {
    const path = generatePath(ROUTES.EDIT_USER, { id });
    navigate(path);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <button onClick={() => navigate(ROUTES.NEW_USER)}>
        Create new student
      </button>
      <UserList
        users={users}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default Home;
