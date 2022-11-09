import React, { useContext, useState } from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Switch from "react-switch";
import { toast } from "react-toastify";
import logo from "../../../assets/Logo/1.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ThemeContext } from "../../../contexts/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        <Link to="/" className="flex items-center p-2">
          <span className="w-20 flex justify-center items-center">
            <img src={logo} alt="" />
            <p className="text-lg font-extrabold">PhotoFix</p>
          </span>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">{navItems}</ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {user && user?.uid ? (
            <MdLogout onClick={handlelogout} />
          ) : (
            <Link to="/signin">
              <MdLogin />
            </Link>
          )}

          <Switch
            className="ml-5"
            onChange={() => toggleTheme()}
            checked={theme}
          />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-4 lg:hidden"
        >
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
          <ul className="items-stretch hidden space-x-3 lg:flex">{navItems}</ul>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full ">
            <div className="p-5 bg-white dark:bg-slate-900 border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    aria-label="Home"
                    title="Home"
                    className="inline-flex items-center"
                  >
                    <img
                      className="w-6 h-6 dark:bg-gray-200"
                      src={logo}
                      alt=""
                    />
                    <span className="ml-2 text-xl font-bold tracking-wide dark:text-gray-200 text-gray-800 uppercase">
                      PhotoFix
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      className="w-5 dark:text-gray-200 text-gray-600"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">{navItems}</ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
