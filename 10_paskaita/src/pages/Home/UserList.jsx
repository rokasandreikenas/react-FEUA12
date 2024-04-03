import PropTypes from "prop-types";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "../../routes/consts";

const UserList = ({ users, handleEditUser, handleDeleteUser }) => {
  // ROUTES.USER = /:id
  // generatePath("/:id", {id: 1}) => /1

  // ROUTES.USER_ORDER_CONFIG = /:id/orders/:orderId
  // generatePath(/:id/orders/:orderId, {id: 1, orderId: 147}) => /1/orders/147 (good way)
  // `/${user.id}/orders/${user.orderId}` (not very good way)

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={generatePath(ROUTES.USER, { id: user.id })}>
            {user.name} {user.surname}
          </Link>
          <button
            onClick={() => handleEditUser(user.id)}
            style={{ marginLeft: 16 }}
          >
            Edit
          </button>
          <span
            onClick={() => handleDeleteUser(user.id)}
            style={{ marginLeft: 16, color: "red" }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  handleEditUser: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserList;
