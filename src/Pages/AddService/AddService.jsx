import React from "react";
import { toast } from "react-toastify";

const AddService = () => {
  const submitHandle = (event) => {
    event.preventDefault();

    const form = event.target;

    const service = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      category: form.category.value,
      image: form.image.value,
    };

    const addService = async () => {
      try {
        const response = await fetch(`http://localhost:15000/createservice`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        });
        const data = await response.json();

        if (data.success) {
          toast.success(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    addService();
  };

  const inputFields = (
    <>
      <div>
        <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
          Title
        </label>
        <input
          name="title"
          id="title"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label
          className="text-gray-700 dark:text-gray-200"
          htmlFor="emailAddress"
        >
          Price
        </label>
        <input
          name="price"
          id="price"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label className="text-gray-700 dark:text-gray-200" htmlFor="password">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label
          className="text-gray-700 dark:text-gray-200"
          htmlFor="passwordConfirmation"
        >
          Category
        </label>
        <input
          name="category"
          id="category"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label
          className="text-gray-700 dark:text-gray-200"
          htmlFor="passwordConfirmation"
        >
          Image
        </label>
        <input
          name="image"
          id="image"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        />
      </div>
    </>
  );

  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-300  rounded-md shadow-md dark:bg-gray-800 my-12 ">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Add Service
      </h2>

      <form onSubmit={submitHandle}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          {inputFields}
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Add Service
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService;
