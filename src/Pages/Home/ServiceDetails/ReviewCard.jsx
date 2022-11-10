import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { name, reviewText, reviewerImage, email, rating } = review;

  console.log(rating);

  return (
    <div className="p-8 border rounded-lg dark:border-gray-700">
      <div className="flex items-center">
        <h1 className="text-3xl dark:text-gray-200">Review</h1>
        {[...Array(rating).keys()].map((num) => (
          <FaStar
            key={num}
            className="dark:text-orange-400 text-orange-400 w-6 h-6 ml-2"
          />
        ))}
      </div>
      <p className="leading-loose text-xl text-yellow-500">{reviewText}</p>

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
    </div>
  );
};

export default ReviewCard;
