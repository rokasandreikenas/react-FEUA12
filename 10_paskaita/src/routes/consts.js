import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import NewUser from "../pages/NewUser/NewUser";
import EditUser from "../pages/EditUser/EditUser";

export const ROUTES = {
  HOME: "/",
  USER: "/:id",
  NEW_USER: "/new",
  EDIT_USER: "/:id/edit",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
  },
  {
    path: ROUTES.NEW_USER,
    Component: NewUser,
  },
  {
    path: ROUTES.EDIT_USER,
    Component: EditUser,
  },
  {
    path: ROUTES.USER,
    Component: User,
  },
];
