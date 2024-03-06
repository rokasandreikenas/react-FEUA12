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

  return (
    <div>
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
    </div>
  );
};

export default App;
