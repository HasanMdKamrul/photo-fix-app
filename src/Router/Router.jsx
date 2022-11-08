import { Helmet } from "react-helmet-async";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/SignUp";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Update from "../Pages/Update/Update";
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
        element: (
          <>
            <Helmet>
              <title>Photo Fix</title>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/home",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || Home</title>
            </Helmet>
            <Home />
          </>
        ),
      },
      {
        path: "/signup",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || SignUp</title>
            </Helmet>
            <SignUp />
          </>
        ),
      },
      {
        path: "/signin",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || SignIn</title>
            </Helmet>
            <SignIn />
          </>
        ),
      },
      {
        path: "/blog",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || Blog</title>
            </Helmet>
            <Blog />
          </>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || Edit</title>
            </Helmet>
            <Update />
          </>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:15000/update/${params.id}`),
      },
      {
        path: "/allservices",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || All Services</title>
            </Helmet>
            <AllServices />
          </>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || ServiceDetails</title>
            </Helmet>
            <ServiceDetails />
          </>
        ),
        loader: ({ params: { id } }) =>
          fetch(`http://localhost:15000/services/${id}`),
      },
      {
        path: "/addservice",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || AddService</title>
            </Helmet>
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || MyReviews</title>
            </Helmet>
            <PrivateRoute>
              <MyReviews />
            </PrivateRoute>
          </>
        ),
      },
    ],
  },
]);

export default router;
