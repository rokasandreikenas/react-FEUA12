import { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [viewers, setViewers] = useState(["Petras x 7 bilietai"]);

  const onSubmit = (event) => {
    event.preventDefault();
    const viewer = `${name} x ${count} bilietai`;
    setViewers((prevValue) => [...prevValue, viewer]); // [string, viewer]
    setName("");
    setCount(1);
    // setViewers([...viewers, viewer]); // [string, viewer]
    // setViewers([viewer, ...viewers, ]); // [viewer, string]
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Forum Cinemas</h1>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Vardas..."
        />
        <input
          className={styles.input}
          type="number"
          value={count}
          onChange={(event) => setCount(Number(event.target.value))}
          placeholder="Bilietų kiekis..."
        />
        <button className={styles.button} type="submit">
          Pirkti bilietus
        </button>
      </form>
      <ul className={styles.list}>
        {viewers.map((viewer) => (
          <li key={viewer} className={styles.listItem}>
            {viewer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
