import Main from "../layouts/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import LogIn from "../pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      }
    ],
  },
]);

export default router;
