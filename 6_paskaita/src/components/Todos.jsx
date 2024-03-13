import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]); // pradinė reikšmė masyvas, jeigu ateinantys duomenys bus masyve

  // kai tuščias dependency masyvas tada leidžiamas tiktai vieną kartą, kai komponentas užloadinamas (išrenderinamas).
  useEffect(() => {
    // Load data
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((response) => {
        response.length = 10; // not needed just for testing!!!
        // setTodos arba kitaip setState nustatymas padaro rerender
        setTodos(response);
      })
      .catch((error) => console.error(error));
  }, []);

  // leidžiamas kiekvieno rerenderio metu. kai dependency masyvo nėra (retai sutinkamas)
  useEffect(() => {});

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ color: todo.completed ? "green" : "red" }}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
