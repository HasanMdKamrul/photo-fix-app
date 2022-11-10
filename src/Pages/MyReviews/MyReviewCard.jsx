import React, { useContext } from "react";
import { FaEdit, FaStar } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../contexts/ServicesProvider";

const MyReviewCard = ({ review, handleDelete }) => {
  const { _id, name, reviewText, reviewerImage, email, serviceId, rating } =
    review;

  const { services } = useContext(ServicesContext);

  const serviceFound = services?.find((svr) => svr._id === serviceId);

  return (
    <div className="p-8 border border-gray-300 hover:bg-sky-300 dark:hover:bg-sky-800 rounded-lg dark:border-gray-700">
      <h1 className="text-3xl font-extrabold text-cyan-700 dark:text-gray-200">
        {serviceFound?.title}
      </h1>
      <div className="flex items-center">
        <h1 className="text-xl text-blue-900 dark:text-gray-200">Rating -</h1>
        {[...Array(rating).keys()].map((num) => (
          <FaStar
            key={num}
            className="dark:text-orange-400 font-extrabold text-orange-400 w-6 h-6 ml-2"
          />
        ))}
      </div>
      <p className="leading-loose text-lg text-sky-600">
        Your Review - <span className="text-blue-500">{reviewText}</span>
      </p>

      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
          src={reviewerImage}
          alt=""
        />

        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">
            {name}
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {email}
          </span>
        </div>
      </div>
      <div className="my-5">
        <Link to={`/update/${_id}`}>
          <button className="px-6 py-2 mr-2  font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <span className="flex justify-center items-center">
              <FaEdit />
              Edit
            </span>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          <span className="flex justify-center items-center">
            <MdDelete />
            Delete
          </span>
        </button>
      </div>
    </div>
  );
};

export default MyReviewCard;
