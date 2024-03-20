import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NewTodo.module.css";

const NewTodo = () => {
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false, userId: 1 }),
    };

    fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
      .then((resp) => resp.json())
      .then(() => {
        navigate("/todos");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2 style={{ marginLeft: 16 }}>Create new Todo</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title..."
          disabled={isLoading}
        />

        <button type="submit" disabled={isLoading} className={styles.button}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
