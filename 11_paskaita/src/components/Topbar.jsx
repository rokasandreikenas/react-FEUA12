import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Topbar = () => {
  const { user, isLoggedIn, handleLogin, handleLogOut } =
    useContext(UserContext);

  const handleClickButton = () => {
    isLoggedIn
      ? handleLogOut()
      : handleLogin({ name: "Rokas", email: "rokas@gmail.com" });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 24,
      }}
    >
      <h2>LOGO</h2>
      <nav style={{ display: "flex", gap: 24 }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <div>
        Hello, {isLoggedIn ? user.name : "stranger"}. how are you?{" "}
        <Button onClick={handleClickButton}>
          Log {isLoggedIn ? "out" : "in"}
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
