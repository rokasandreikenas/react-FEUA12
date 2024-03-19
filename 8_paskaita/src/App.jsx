import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 32,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about-us">About us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
