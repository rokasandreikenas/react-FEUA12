import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import BasicLayout from "./layouts/BasicLayout";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Users from "./pages/Users";

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
          <Route
            path="/users"
            element={
              <BasicLayout>
                <Users />
              </BasicLayout>
            }
          />
        </Routes>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
