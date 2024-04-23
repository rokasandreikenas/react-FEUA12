import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import FormikField from "./FormikField";

const API = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  const response = await axios.get(API);
  return await response.data;
};

const createTodo = async (newTodo) => {
  const response = await axios.post(API, newTodo);
  return await response.data;
};

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTodos();
        setTodos(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo list</h1>
      <Formik
        initialValues={{ title: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.title) {
            errors.title = "Do not leave it empty sir";
          }

          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            const newTodo = { userId: 1, completed: false, ...values };
            const response = await createTodo(newTodo);
            setTodos((prevTodos) => [response, ...prevTodos]);
            resetForm();
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikField name="title" placeholder="Title" />
            <button type="submit" disabled={isSubmitting}>
              Add todo
            </button>
          </Form>
        )}
      </Formik>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
