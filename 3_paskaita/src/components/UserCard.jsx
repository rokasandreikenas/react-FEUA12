import PropTypes from "prop-types";

const UserCard = ({ user, notificationCount = 0 }) => {
  // user = {name: "Rokas", surname: "Andreikenas", age: 25}
  // notificationCount = 8
  return (
    <div>
      {user.name}
      {user.surname} is {user.age} and has <strong>{notificationCount}</strong>{" "}
      notifications.
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  notificationCount: PropTypes.number,
};

export default UserCard;
