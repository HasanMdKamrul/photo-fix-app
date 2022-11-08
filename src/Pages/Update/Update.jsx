import React from "react";
import { useLoaderData } from "react-router-dom";
import UpdateReview from "./UpdateReview";

const Update = () => {
  const { data } = useLoaderData();

  return (
    <section>
      <h1 className="text-5xl dark:text-gray-200 text-center text-black font-extrabold mt-5 ">
        Update Your feedback
      </h1>
      <UpdateReview data={data} />
    </section>
  );
};

export default Update;
