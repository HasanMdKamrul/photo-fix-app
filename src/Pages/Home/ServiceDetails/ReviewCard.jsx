import React from "react";

const ReviewCard = ({ review }) => {
  const { name, reviewText, reviewerImage, email } = review;

  return (
    <div className="p-8 border rounded-lg dark:border-gray-700">
      <p className="leading-loose text-3xl text-yellow-500">{reviewText}</p>

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
