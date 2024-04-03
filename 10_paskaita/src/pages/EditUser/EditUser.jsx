import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchUsers, updateUser } from "../../api/users";
import Loader from "../../components/Loader";
import { ROUTES } from "../../routes/consts";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser(user);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserChange = (event) => {
    // jeigu naudojam vieną state kaip objektą, būtina naudoti name atributą ant inputų
    // ...user nuklonuoja visus parametrus ir perraso i tuos pacius
    // [event.target.name]: event.target.value
    // age: event.target.value
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <div>User not found...</div>;
  }

  return (
    <>
      {/* grįžti atgal, veikia kaip browserio atgal mygtukas */}
      <Link to={-1}>Go back</Link>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <input
          id="surname"
          name="surname"
          placeholder="Surname"
          value={user.surname}
          onChange={handleUserChange}
        />
        <input
          id="age"
          name="age"
          placeholder="Age"
          value={user.age}
          onChange={handleUserChange}
        />
        <button type="submit">Update student</button>
      </form>
    </>
  );
};

export default EditUser;
