import React from "react";

const ReviewCard = ({ review }) => {
  const { name, reviewText, reviewerImage, email } = review;

  return (
    <div class="p-8 border rounded-lg dark:border-gray-700">
      <p class="leading-loose text-gray-500 dark:text-gray-400">{reviewText}</p>

      <div class="flex items-center mt-8 -mx-2">
        <img
          class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
          src={reviewerImage}
          alt=""
        />

        <div class="mx-2">
          <h1 class="font-semibold text-gray-800 dark:text-white">{name}</h1>
          <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
