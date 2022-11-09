import React from "react";
import { MdFeedback } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateReview = ({ data }) => {
  const { _id } = data;

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
              <button
                type="button"
                title="Rate 1 stars"
                aria-label="Rate 1 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 dark:text-yellow-500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 2 stars"
                aria-label="Rate 2 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 dark:text-yellow-500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 3 stars"
                aria-label="Rate 3 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 dark:text-yellow-500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 4 stars"
                aria-label="Rate 4 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 dark:text-yellow-500"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Rate 5 stars"
                aria-label="Rate 5 stars"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-10 h-10 dark:text-gray-600"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-full">
            <textarea
              defaultValue={data.reviewText}
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
