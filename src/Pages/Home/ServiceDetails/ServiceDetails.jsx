import React, { useContext, useEffect, useState } from "react";
import { MdPlayArrow, MdPlayCircle } from "react-icons/md";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import CreateReview from "./CreateReview";
import ReviewCard from "./ReviewCard";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const { category, image, description, price, title, _id } = data;
  const [refresh, setRefresh] = useState(false);

  const location = useLocation();

  const { user } = useContext(AuthContext);

  // console.log(data);

  // console.log(reviews);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch(`http://localhost:15000/reviews`);
        const data = await response.json();
        if (data.success) {
          const serviceSpecificReviews = data.data.filter(
            (review) => review.serviceId === _id
          );
          setReviews(serviceSpecificReviews);
        }
      } catch (error) {}
    };

    loadReviews();
  }, [_id, refresh]);

  return (
    <div>
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
      <section>
        <h1 className="text-5xl dark:text-gray-200 text-center text-black font-extrabold mt-5 ">
          Reviews
        </h1>
        {reviews.length === 0 ? (
          <h1 className="text-5xl text-center dark:text-gray-200">
            No Reviews Found
          </h1>
        ) : (
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <div className="mt-6 md:flex md:items-center md:justify-between">
                <div>
                  <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                    What our clients are saying
                  </h1>

                  <div className="flex mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                  </div>
                </div>

                <div className="flex justify-between mt-8 md:mt-0">
                  <button className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                {reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </section>
            </div>
          </section>
        )}
      </section>
      {user && user?.uid ? (
        <section>
          <h1 className="text-5xl dark:text-gray-200 text-center text-black font-extrabold mt-5 ">
            Give me feedback
          </h1>
          <CreateReview setRefresh={setRefresh} refresh={refresh} id={_id} />
        </section>
      ) : (
        <h1 className="text-5xl dark:text-gray-200 p-12 text-center text-black font-extrabold mt-5 ">
          Please{" "}
          <Link
            className="text-blue-600"
            to="/signin"
            state={{ from: location }}
            replace
          >
            login
          </Link>{" "}
          to give your feedback
        </h1>
      )}
    </div>
  );
};

export default ServiceDetails;
