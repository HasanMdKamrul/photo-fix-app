import React, { lazy, Suspense, useEffect, useState } from "react";
import LoadingSppiner from "../Shared/Navbar/Others/LoadingSppiner";
// import ServiceCard from "../Home/Services/ServiceCard";

const ServiceCard = lazy(() => import("../Home/Services/ServiceCard"));

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(3);

  const numberOfPages = Math.ceil(count / dataPerPage);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/allservices?size=${dataPerPage}&&currentPage=${currentPage}`
        );
        const data = await response.json();

        setServices(data?.data);
        setCount(data?.count);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, [dataPerPage, currentPage]);

  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            All Services
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            There are so many excusite services that I provide. I also provide
            complete solutions upon request. Please feel free to contact me if
            you need further information.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {services?.map((service) => (
              <Suspense key={service._id} fallback={<LoadingSppiner />}>
                <ServiceCard service={service} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
      <h1 className="flex justify-center items-center text-gray-200 font-semibold">
        Currently On : {currentPage + 1}
      </h1>
      <div class="flex justify-center items-center mb-5">
        <button
          onClick={() => {
            if (currentPage > 0) {
              setCurrentPage(currentPage - 1);
            }
          }}
          class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          Previous
        </button>
        {[...Array(numberOfPages).keys()].map((number) => (
          <button
            onClick={() => setCurrentPage(number)}
            key={number}
            class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          class="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
        >
          Next
        </button>
        <select onChange={(e) => setDataPerPage(e.target.value)}>
          <option selected value="3">
            3
          </option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  );
};

export default AllServices;
