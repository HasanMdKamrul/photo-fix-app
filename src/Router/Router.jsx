import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import AddService from "../Pages/AddService/AddService";
// import AllServices from "../Pages/AllServices/AllServices";
// import SignIn from "../Pages/Authentication/SignIn";
// import SignUp from "../Pages/Authentication/SignUp";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/ServiceDetails/ServiceDetails";
// import MyReviews from "../Pages/MyReviews/MyReviews";
import LoadingSppiner from "../Pages/Shared/Navbar/Others/LoadingSppiner";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: ErrorPage } = require("../Pages/ErrorPage/ErrorPage");

// ** Lazy-Loading components

const AllServices = lazy(() => import("../Pages/AllServices/AllServices"));
const SignUp = lazy(() => import("../Pages/Authentication/SignUp"));
const SignIn = lazy(() => import("../Pages/Authentication/SignIn"));
const MyReviews = lazy(() => import("../Pages/MyReviews/MyReviews"));

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
            <Suspense fallback={<LoadingSppiner />}>
              <SignUp />
            </Suspense>
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
            <Suspense fallback={<LoadingSppiner />}>
              <SignIn />
            </Suspense>
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
        loader: () => fetch(`https://photo-fix-server.vercel.app/blogs`),
      },
      {
        path: "/update/:id",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || Edit</title>
            </Helmet>
            <PrivateRoute>
              <Update />
            </PrivateRoute>
          </>
        ),
      },
      {
        path: "/allservices",
        element: (
          <>
            <Helmet>
              <title>Photo Fix || All Services</title>
            </Helmet>
            <Suspense fallback={<LoadingSppiner />}>
              <AllServices />
            </Suspense>
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
          fetch(`https://photo-fix-server.vercel.app/services/${id}`),
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
              <Suspense fallback={<LoadingSppiner />}>
                <MyReviews />
              </Suspense>
            </PrivateRoute>
          </>
        ),
      },
    ],
  },
]);

export default router;
