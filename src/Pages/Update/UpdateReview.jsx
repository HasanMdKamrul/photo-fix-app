import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateReview = ({ data }) => {
  const { _id, rating } = data;

  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewText = event.target.text.value;

    const updateData = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/update/${_id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ reviewText }),
          }
        );

        const data = await response.json();

        if (data.success) {
          toast.success(data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    updateData();
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-800 mt-5 bg-gray-200   dark:text-gray-100">
        <div className="flex flex-col  items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="flex space-x-3">
              {[...Array(rating).keys()].map((num) => (
                <FaStar key={num} className="w-12 h-12 text-orange-400" />
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <textarea
              defaultValue={data?.reviewText}
              name="text"
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-600"
            ></textarea>

            <button
              type="submit"
              className="py-4 my-8 flex justify-center items-center font-semibold rounded-md dark:text-gray-900 bg-violet-400 dark:bg-violet-400"
            >
              <MdFeedback className="w-8 h-8  mr-2" />
              Update feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
