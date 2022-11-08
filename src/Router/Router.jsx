import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/allservices",
        element: <AllServices />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:15000/services/${id}`),
      },
      {
        path: "/addservice",
        element: <AddService />,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
