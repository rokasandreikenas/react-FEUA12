import { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const ref = useRef(null); // {current: null}

  useEffect(() => {
    // pirmo uzkvrovimo metu
    if (ref.current) {
      ref.current.focus(); // sufokusuoja automatiskai inputa
    }
  }, [ref]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo(""); // nuresetinam inuputa
    ref.current.focus(); // sufokusuojam
  };

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={toggleDarkMode}>
        {darkMode ? "Turn on the light" : "Turn off the light"}
      </Button>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder="Todo..."
        />
        <button type="submit">Add item</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
