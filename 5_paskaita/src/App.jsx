import { useState } from "react";

const App = () => {
  //     state  setState         initialValue = 0
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedName, setLoggedName] = useState("guest");
  // let count = 0;
  return (
    <div>
      <p>My count is {count}</p>
      <button
        onClick={() => {
          if (count < 9) {
            setCount(count + 1);
          } else {
            setErrorMessage(
              "STOP! Tu isidejei pakankai prekiu, palik ir kitiem :)"
            );
          }
        }}
      >
        Increase count
      </button>
      <button onClick={() => setCount(count - 1)}>Decrease count</button>
      <button onClick={() => setCount(0)}>Reset count</button>
      {errorMessage && <p>{errorMessage}</p>}
      <br />
      <br />
      Hello {loggedName}, how are you today?
      <button
        onClick={() =>
          setLoggedName(loggedName === "guest" ? "Rokas Andreikenas" : "guest")
        }
      >
        {loggedName === "guest" ? "Login" : "Log out"}
      </button>
    </div>
  );
};

export default App;
