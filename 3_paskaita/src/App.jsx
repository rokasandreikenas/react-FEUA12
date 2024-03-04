import "./App.css";
import Button from "./components/Button";
import Hero from "./components/Hero";
import UserCard from "./components/UserCard";

const App = () => {
  const user = { id: 1, name: "Rokas", surname: "Andreikenas", age: 25 };
  const notifications = { 1: 27 };
  const badUser = { id: 2, name: "Tomas", surname: "Tomauskas", age: "38" };
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Button>Title</Button>
        <Button secondary>Title</Button>
        <Button secondary>
          <div>Title</div>
        </Button>
        <Button>99</Button>
      </div>

      <Hero title="Info hero" subtitle="Info subtitle" color="blue" />
      <Hero title="Hey ho" />
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <br />
      <UserCard user={user} notificationCount={notifications[user.id]} />
      <UserCard
        user={{ name: "Tomas", surname: "Tomauskas", age: 32 }}
        notificationCount={notifications[user.id]}
      />
      <UserCard user={badUser} notificationCount={notifications[badUser.id]} />
    </>
  );
};

export default App;
