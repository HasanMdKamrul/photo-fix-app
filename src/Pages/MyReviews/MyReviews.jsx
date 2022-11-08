import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import { RefreshContext } from "../../contexts/RefreshProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [ownReviews, setOwnReviews] = useState([]);

  const { refresh, setRefresh } = useContext(RefreshContext);

  const handleDelete = (id) => {
    const deleteReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/myreviews/delete/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();

        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    deleteReviews();
  };

  useEffect(() => {
    const ownReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:15000/myreviews?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const data = await response.json();

        if (data.success) {
          setOwnReviews(data.data);
        } else {
          setRefresh(!refresh);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    ownReviews();
  }, [user?.email, setRefresh, refresh, logOut, loading]);

  console.log(user?.email);

  return (
    <>
      {ownReviews.length === 0 ? (
        <h1 className="text-5xl dark:text-gray-200 text-center my-12">
          No Reviews Given
        </h1>
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="mt-6 md:flex md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                  Your Reviews about our services
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
              {ownReviews.map((review) => (
                <MyReviewCard
                  handleDelete={handleDelete}
                  key={review._id}
                  review={review}
                />
              ))}
            </section>
          </div>
        </section>
      )}
    </>
  );
};

export default MyReviews;
