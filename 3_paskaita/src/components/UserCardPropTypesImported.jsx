import UserCardFake from "./UserCardFake";
import { obj } from "./consts";

const UserCardPropTypesImported = ({ user, notificationCount = 0 }) => {
  // user = {name: "Rokas", surname: "Andreikenas", age: 25}
  // notificationCount = 8
  return (
    <div>
      {user.name}
      {user.surname} is {user.age} and has <strong>{notificationCount}</strong>{" "}
      notifications.
      <UserCardFake user={user} notificationCount={notificationCount} />
    </div>
  );
};

UserCardPropTypesImported.propTypes = obj;

export default UserCardPropTypesImported;
