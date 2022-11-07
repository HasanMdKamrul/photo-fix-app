import React from "react";

const ServiceDetails = () => {
  return (
    <section className="dark:bg-sky-200 dark:hover:bg-sky-300 bg-sky-200 mx-auto container rounded-3xl p-8 hover:bg-sky-300  dark:text-gray-100 mt-12">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="/"
          className="block max-w-sm gap-3 mx-auto rounded-xl sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-sky-500 dark:bg-sky-500"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover rounded-xl w-full h-64  sm:h-96 lg:col-span-7 dark:bg-sky-600"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl text-black font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="text-xs dark:text-gray-900">
              February 19, 2021
            </span>
            <p className="text-black">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServiceDetails;
