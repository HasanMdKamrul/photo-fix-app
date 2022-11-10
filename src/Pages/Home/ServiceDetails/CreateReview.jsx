import React, { useContext, useState } from "react";
import { MdFeedback } from "react-icons/md";
import ReactStars from "react-rating-stars-component";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";

const CreateReview = ({ id, setRefresh, refresh }) => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.text.value);

    const review = {
      name: user?.displayName,
      email: user?.email,
      reviewerImage: user?.photoURL,
      reviewText: event.target.text.value,
      serviceId: id,
      rating: rating,
    };

    const sendReview = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/createreview`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(review),
          }
        );

        const data = await response.json();

        if (data.success) {
          setRefresh(!refresh);
          event.target.reset();
          toast.success("Your Review has been added");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    sendReview();
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex justify-center items-center my-5">
      <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  bg-gray-200 dark:bg-gray-700 dark:text-gray-100">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center">How was your experience?</span>
            <div className="flex space-x-3">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={60}
                activeColor="#ffd700"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex  flex-col w-full">
            <textarea
              required
              name="text"
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
            ></textarea>
            <button
              type="submit"
              className="py-4 my-8 flex justify-center items-center font-semibold rounded-md dark:text-gray-900 bg-violet-400 dark:bg-violet-400"
            >
              <MdFeedback className="w-8 h-8  mr-2" />
              Leave feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReview;
