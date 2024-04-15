import { useReducer } from "react";

const initialValues = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
};

export default ReducerDemo;
