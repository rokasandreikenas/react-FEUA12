import { useState, useCallback, useMemo } from "react";

const expensiveComputation = (count) => {
  let result = [];
  for (let i = 0; i < count * 1000; i++) {
    result.push(i);
  }
  return result;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  console.log("rerendering...");

  // NOT created every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // Created every render
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const array = expensiveComputation(count); // costly
  const memoizedArray = useMemo(() => expensiveComputation(count), [count]); // not costly because useMemo launched only when "count" is changed

  // array first time 300ms / memoizedArray first time 800ms
  // array second time 300ms / memoized second time 0ms (not recomputed)
  // array third time 300 ms / memoized third time 0ms (not recomputed)

  return (
    <div>
      {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </div>
  );
};

export default App;
