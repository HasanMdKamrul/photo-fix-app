import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateReview from "./UpdateReview";

const Update = () => {
  const [updatedData, setUpdatedData] = useState({});
  // const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const loadSignleReview = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/update/${id}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setUpdatedData(data.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    loadSignleReview();
  }, [id]);

  return (
    <section>
      <h1 className="text-5xl dark:text-gray-200 text-center text-black font-extrabold mt-5 ">
        Update Your feedback
      </h1>
      <UpdateReview data={updatedData} />
    </section>
  );
};

export default Update;
