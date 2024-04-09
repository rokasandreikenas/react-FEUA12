import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext({
  user: {},
  isLoggedIn: false,
  handleLogin: () => {},
  handleLogOut: () => {},
}); // sukuriamas context su default type values

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // pradine reiksmšmė yra null, nes useris yra atjungtas

  const isLoggedIn = !!user; // null arba {...} => true arba false

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, handleLogin, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
