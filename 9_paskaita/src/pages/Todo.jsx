import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setTodo(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{todo.title}</h2>
      <h3 style={{ color: todo.completed ? "green" : "red" }}>
        {todo.completed ? "Completed" : "Not Completed"}
      </h3>
    </div>
  );
};

export default Todo;
