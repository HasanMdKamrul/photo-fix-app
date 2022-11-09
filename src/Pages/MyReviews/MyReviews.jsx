import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthProvider";
import { RefreshContext } from "../../contexts/RefreshProvider";
import LoadingSppiner from "../Shared/Navbar/Others/LoadingSppiner";
// import MyReviewCard from "./MyReviewCard";

const MyReviewCard = lazy(() => import("./MyReviewCard"));

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [ownReviews, setOwnReviews] = useState([]);

  const { refresh, setRefresh } = useContext(RefreshContext);

  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure, you want to delete this?");

    if (agree) {
      const deleteReviews = async () => {
        try {
          const response = await fetch(
            `https://photo-fix-server.vercel.app/myreviews/delete/${id}`,
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
    }
  };

  useEffect(() => {
    const ownReviews = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/myreviews?email=${user?.email}`,
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
  }, [user?.email, setRefresh, refresh]);

  return (
    <div>
      <div className="bg-gray-200 min-h-screen dark:bg-gray-900">
        {ownReviews.length === 0 ? (
          <div className="text-5xl dark:text-gray-200 flex justify-center items-center">
            <p className="mt-5">No Reviews Given</p>
          </div>
        ) : (
          <>
            <section>
              <div className="container px-6 py-10  mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
                      Your Reviews about my services
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
                    <Suspense key={review._id} fallback={<LoadingSppiner />}>
                      <MyReviewCard
                        handleDelete={handleDelete}
                        review={review}
                      />
                    </Suspense>
                  ))}
                </section>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
