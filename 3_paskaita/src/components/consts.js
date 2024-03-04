import PropTypes from "prop-types";

export const obj = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
  notificationCount: PropTypes.number,
};
