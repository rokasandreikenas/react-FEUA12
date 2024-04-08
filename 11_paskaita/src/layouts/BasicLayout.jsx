import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BasicLayout = ({ children }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      style={{ minHeight: "100vh", background: darkMode ? "black" : "white" }}
    >
      {children}
    </div>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicLayout;
