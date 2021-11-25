import { useRoutes } from "react-router-dom";
import Cars from "../views/Cars/Cars";
import Home from "../views/Home/Home";
import User from "../views/User/User";
import Users from "../views/Users/Users";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "users",
      element: <Users />,
      children: [{ path: ":userId", element: <User /> }],
    },
    { path: "cars", element: <Cars /> },
  ]);

  return routes;
};

export default Routes;
