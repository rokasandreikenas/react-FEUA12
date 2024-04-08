import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./Button.css";

const Button = ({ children, ...rest }) => {
  const { darkMode } = useContext(ThemeContext); // useContext - importas is react, ThemeContext importas is ./contexts
  return (
    <button
      className={`button ${darkMode ? "dark" : ""} `}
      {...rest}
      //   style={{
      //     background: darkMode ? "black" : "white",
      //     color: darkMode ? "white" : "black",
      //   }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
