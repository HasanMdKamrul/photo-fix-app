import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1613256253718-77ab794998ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80)",
      }}
    >
      <div className="flex items-center justify-center flex-col w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-xl font-semibold h-12 text-sky-400 uppercase lg:text-5xl">
            <Typewriter
              loop
              words={["Capture your amazing memories with me!!!"]}
            />
          </h1>
        </div>
        <Link to="/allservices">
          <button className="w-auto px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
