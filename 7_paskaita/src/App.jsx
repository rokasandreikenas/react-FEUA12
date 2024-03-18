import { useState } from "react";
import "./App.css";

// onClick - paspaudus
// onMouseOver - užvedus pelyte
// onMouseLeave - patraukus pelyte
// onChange - kai pasikeičia įvestas tekstas

const App = () => {
  const [hovering, setHovering] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [fullName, setFullName] = useState("");
  const [salary, setSalary] = useState(750);

  const onSubmit = (event) => {
    event.preventDefault(); // padeda išvengti refresho
    alert(`${fullName} salary is ${salary}$`);
  };

  return (
    <div>
      <button onClick={() => alert("Rokas")}>Click me</button>
      <button
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        Hover me
      </button>
      <div
        className="box"
        style={{ backgroundColor: hovering ? "red" : "green" }}
      />
      <br />
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name..."
      />
      <input
        type="number"
        value={age}
        onChange={(event) => setAge(event.target.value)}
        placeholder="Enter your age..."
      />
      <h2>
        My name is {name} and I am {age}y old.
      </h2>
      <br />
      <br />
      {/* Tas pats */}
      {/* <form onSubmit={(event) => onSubmit(event)}> */}
      <form onSubmit={onSubmit}>
        <h2>Registration form</h2>
        <p>Please fill all fields to get best help in the country</p>
        <br />
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block" }}>Full Name</label>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block" }}>Salary</label>
          <input
            type="number"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default App;
