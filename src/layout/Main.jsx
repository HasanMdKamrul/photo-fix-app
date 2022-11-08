import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <div className="dark:bg-slate-900 min-h-screen">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
