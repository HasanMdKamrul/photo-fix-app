import React, { useEffect, useState } from "react";
import ServiceCard from "../Home/Services/ServiceCard";

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
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            All Services
          </h1>

          <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            There are so many excusite services that I provide. I also provide
            complete solutions upon request. Please feel free to contact me if
            you need further information.
          </p>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-3 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
