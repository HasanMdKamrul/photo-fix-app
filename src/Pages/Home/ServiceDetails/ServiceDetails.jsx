import React from "react";
import { MdPlayArrow, MdPlayCircle } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { data } = useLoaderData();

  console.log(data);

  const { category, image, description, price, title } = data;

  return (
    <section className="dark:bg-sky-200 dark:hover:bg-sky-300 bg-sky-200 mx-auto container rounded-3xl p-8 hover:bg-sky-300  dark:text-gray-100 mt-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block max-w-sm gap-3 mx-auto rounded-xl sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-sky-500 dark:bg-sky-500">
          <img
            src={image}
            alt=""
            className="object-cover rounded-xl w-full h-64  sm:h-96 lg:col-span-7 dark:bg-sky-600"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl text-gray-50 font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs flex dark:text-gray-900">
              <MdPlayArrow className="text-yellow-400 mr-2" />
              {category}
            </span>
            <p className="text-gray-200 ">{description}</p>
            <span className="flex items-center dark:text-gray-900">
              <MdPlayCircle className="text-yellow-400 mr-2 h-8 w-6" />
              <span className="text-gray-200 mr-2">$ {price}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
