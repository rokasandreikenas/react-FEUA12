import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import NewTodo from "./pages/NewTodo";
import Todo from "./pages/Todo";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/todos/new" element={<NewTodo />} />
        <Route path="/todos/:id" element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
