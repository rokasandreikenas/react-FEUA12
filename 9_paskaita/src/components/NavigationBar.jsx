import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        gap: 16,
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/todos/new">New Todo</Link>
    </nav>
  );
};

export default NavigationBar;
