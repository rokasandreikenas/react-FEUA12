import "./App.css";
import Button from "./components/Button";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Button>Title</Button>
        <Button secondary>Title</Button>
      </div>

      <Hero title="Info hero" subtitle="Info subtitle" color="blue" />
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
      <div>App</div>
    </>
  );
};

export default App;
