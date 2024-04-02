import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUsers } from "../../api/users";
import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Data fetching after 2s
    setTimeout(() => {
      fetchUsers()
        .then((response) => {
          const foundUser = response.find((user) => user.id === +id);
          setUser(foundUser);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 2000);
  }, [id]);

  return (
    <div>
      <Link to={ROUTES.HOME}>Go back</Link>
      <h1>User information</h1>
      {isLoading && <Loader />}
      {!isLoading && !user && (
        <div>
          <strong>User not found</strong>
        </div>
      )}
      {!isLoading && user && (
        <div>
          {user.name} {user.surname}
        </div>
      )}

      {/* {isLoading ? (
        <Loader />
      ) : user ? (
        <div>
          {user.name} {user.surname}
        </div>
      ) : (
        <div>
          <strong>User not found</strong>
        </div>
      )} */}
    </div>
  );
};

export default User;
