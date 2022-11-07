import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";

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
        path: "/allservices",
        element: <AllServices />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:15000/services/${id}`),
      },
    ],
  },
]);

export default router;
