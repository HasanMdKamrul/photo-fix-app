import React, { useContext } from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { toast } from "react-toastify";
import logo from "../../../assets/Logo/1.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ThemeContext } from "../../../contexts/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { user, logOut } = useContext(AuthContext);

  const handlelogout = async () => {
    try {
      await logOut();
      toast.success("User logged out");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navItems = (
    <>
      <li className="flex">
        <NavLink
          rel="noopener noreferrer"
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-violet-400 border-violet-400 dark:text-violet-400 dark:border-violet-400"
              : "flex items-center px-4 -mb-0 border-b-0 dark:border-transparent text-dark  dark:text-white "
          }
        >
          Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          rel="noopener noreferrer"
          to="/allservices"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-violet-400 border-violet-400 dark:text-violet-400 dark:border-violet-400"
              : "flex items-center px-4 -mb-0 border-b-0 dark:border-transparent text-dark  dark:text-white "
          }
        >
          Services
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          rel="noopener noreferrer"
          to="/myreviews"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-violet-400 border-violet-400 dark:text-violet-400 dark:border-violet-400"
              : "flex items-center px-4 -mb-0 border-b-0 dark:border-transparent text-dark  dark:text-white "
          }
        >
          My Reviews
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          rel="noopener noreferrer"
          to="/addservice"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-violet-400 border-violet-400 dark:text-violet-400 dark:border-violet-400"
              : "flex items-center px-4 -mb-0 border-b-0 dark:border-transparent text-dark  dark:text-white "
          }
        >
          Add Service
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          rel="noopener noreferrer"
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-violet-400 border-violet-400 dark:text-violet-400 dark:border-violet-400"
              : "flex items-center px-4 -mb-0 border-b-0 dark:border-transparent text-dark  dark:text-white "
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="p-4 dark:bg-gray-800 bg-sky-50 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <span className="w-20 flex justify-center items-center">
            <img src={logo} alt="" />
            <p className="text-lg font-extrabold">PhotoFix</p>
          </span>
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">{navItems}</ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user && user?.uid ? (
            <MdLogout onClick={handlelogout} />
          ) : (
            <MdLogin />
          )}

          <Switch
            className="ml-5"
            onChange={() => toggleTheme()}
            checked={theme}
          />
        </div>

        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
