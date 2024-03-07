import PropTypes from "prop-types";
import { getUserFullname } from "../../utils/user";
import styles from "./UserCard.module.css";

const UserCard = ({ user }) => {
  return (
    <div className={styles.card}>
      <img
        src={user.image}
        alt={getUserFullname(user)}
        className={styles.userImage}
      />
      <div className={styles.userInfo}>
        <h2>{getUserFullname(user)}</h2>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
