import React from "react";
import { PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { image, description, category, title, _id, service_id, price } =
    service;

  return (
    <div class="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
      <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
          <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            {title}
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description?.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>

        <PhotoView src={image}>
          <img
            class="object-cover w-full h-48 mt-2"
            src={image}
            alt="NIKE AIR"
          />
        </PhotoView>

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 class="text-lg font-bold text-white">${price}</h1>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
