import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((response) => {
        setTodos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleNavigateToNewTodo = () => {
    navigate("/todos/new");
  };

  return (
    <div>
      <h2 style={{ marginLeft: 16, marginRight: 16, display: "inline" }}>
        Do you have more Todos?
      </h2>
      <button onClick={handleNavigateToNewTodo}>Lets create one</button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => navigate(`/todos/${todo.id}`)}
            style={{ color: todo.completed ? "green" : "red" }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
