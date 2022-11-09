import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSppiner from "../../Shared/Navbar/Others/LoadingSppiner";
// import ServiceCard from "./ServiceCard";

const ServiceCard = lazy(() => import("./ServiceCard"));

const Services = () => {
  const [services, setServices] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/services?limit=3`
        );
        const data = await response.json();
        setRefresh(!refresh);
        if (data.success) {
          setServices(data?.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, [refresh, setRefresh]);

  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <section>
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Services
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            There are so many excusite services that I provide. I also provide
            complete solutions upon request. Please feel free to contact me if
            you need further information.
          </p>
          <div className="grid grid-cols-1 gap-2 mt-8 xl:mt-16 md:grid-cols-2 lg:md:grid-cols-2  xl:grid-cols-3">
            {services?.map((service) => (
              <Suspense key={service._id} fallback={<LoadingSppiner />}>
                <ServiceCard service={service} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center p-5">
        <Link to="/allservices">
          <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
