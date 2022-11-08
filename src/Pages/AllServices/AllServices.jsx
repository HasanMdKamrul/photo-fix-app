import React, { lazy, Suspense, useEffect, useState } from "react";
import LoadingSkeleton from "../Shared/Navbar/Others/LoadingSkeleton";
// import ServiceCard from "../Home/Services/ServiceCard";

const ServiceCard = lazy(() => import("../Home/Services/ServiceCard"));

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`http://localhost:15000/services`);
        const data = await response.json();
        setServices(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            All Services
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            There are so many excusite services that I provide. I also provide
            complete solutions upon request. Please feel free to contact me if
            you need further information.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3">
            {services.map((service) => (
              <Suspense fallback={<LoadingSkeleton />}>
                <ServiceCard key={service._id} service={service} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
