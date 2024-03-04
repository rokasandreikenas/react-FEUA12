import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ secondary, small, children }) => {
  return (
    <button
      className={`button ${secondary ? "secondary" : ""} ${
        small ? "small" : ""
      }`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
