import { createContext, useState } from "react";
import PropTypes from "prop-types";

// export const ThemeContext = createContext(); // another way to export

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
}); // sukuriam context instance

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // value = {darkMode: false, toggleDarkMode: () => void}
  // viską ką atiduodam į value, galime pasiekti per useContext
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
// export default ThemeProvider // another way to export
