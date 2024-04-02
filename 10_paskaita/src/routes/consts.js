import Home from "../pages/Home/Home";
import User from "../pages/User/User";

export const ROUTES = {
  HOME: "/",
  USER: "/:id",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.USER,
    Component: User,
  },
];
