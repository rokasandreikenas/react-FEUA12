import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import BasicLayout from "./layouts/BasicLayout";
import Topbar from "./components/Topbar";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Topbar />
        <Routes>
          <Route
            path="/"
            element={
              <BasicLayout>
                <Home />
              </BasicLayout>
            }
          />
        </Routes>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
