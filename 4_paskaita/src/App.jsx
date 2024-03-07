// Conditional rendering
// .map()

import DisplayName from "./components/DisplayName";
import Greeting from "./components/Greeting";
import VacationBox from "./components/VacationBox";

const App = () => {
  const name = "Rokas";
  const isShortName = name.length <= 5 ? "is short name" : "is long name"; // ternary

  const checkIsShortName = () => {
    if (name.length <= 5) {
      return <h1>is short name</h1>;
    } else {
      return <h1>is long name</h1>;
    }
  };

  const checkGreeting = (name) => {
    if (!name) {
      return <div>Hello guest, please log in first.</div>;
    }

    return <div>Hello {name}, how are you today?</div>;
  };

  const vacationDays = 7;

  const users = [
    { name: "Rokas", surname: "Andreikenas", vacationDays: 7 },
    { name: "Tomas", surname: "Andreikenas", vacationDays: -5 },
    { name: "Rimas", surname: "Andreikenas", vacationDays: 20 },
    { surname: "Andreikenas", vacationDays: 7 },
    { name: "Tadas", surname: "Andreikenas", vacationDays: 0 },
  ];

  const namesBlock = users.map((user, index) => (
    <li key={index}>
      {index}.{user.name}
    </li>
  ));

  // map returns a new array with the results of the function,
  // while forEach does not return anything and only modifies the original array
  const names = users.map((user) => user.name); // ['Rokas']
  const namesV2 = users.forEach((user) => user.name); // undefined
  console.log(names);
  console.log(namesV2);
  const fruits = ["Apple", "Banana", "Kiwi", "Apple"];

  const getNames = () => {
    const names = [];

    users.forEach((user) => user.name && names.push(user.name));

    return names;
  };

  return (
    <div>
      <p>Shopping list:</p>
      <ol>
        {fruits.map((fruit, index) => (
          <li key={`${fruit}_${index}`}>{fruit}</li>
        ))}
      </ol>

      <ul>{namesBlock}</ul>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <br />
      <br />
      {isShortName}
      <br />
      {checkIsShortName()}

      <Greeting name={name} />
      <br />
      <Greeting />

      {checkGreeting()}
      {checkGreeting(name)}

      <DisplayName name={name} />
      <DisplayName name="Tadukas" />
      <VacationBox name="Romas" count={0} />
      <VacationBox name="Tadukas" count={-2} />
      <VacationBox name={name} count={vacationDays} />
      <VacationBox name="Rimas" count={24} />
      <VacationBox count={4} />
      <br />
      <br />
      {users.map((user) => (
        <VacationBox
          key={`${user.name} ${user.surname}`}
          name={`${user.name || ""} ${user.surname}`}
          count={user.vacationDays}
        />
      ))}
    </div>
  );
};

export default App;
