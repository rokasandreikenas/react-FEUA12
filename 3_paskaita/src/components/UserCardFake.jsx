import { obj } from "./consts";

const UserCardFake = ({ user, notificationCount = 0 }) => {
  return (
    <div>
      {user.name}
      {user.surname} is {user.age} and has <strong>{notificationCount}</strong>{" "}
      notifications.
    </div>
  );
};

UserCardFake.propTypes = obj;

export default UserCardFake;
