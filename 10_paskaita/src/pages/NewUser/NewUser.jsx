import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/users";
import { ROUTES } from "../../routes/consts";

const NewUser = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, surname } = event.target;
    const user = { name: name.value, surname: surname.value };
    try {
      await createUser(user);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" />
      <input name="surname" placeholder="Surname" />
      <button type="submit">Create new student</button>
    </form>
  );
};

export default NewUser;
