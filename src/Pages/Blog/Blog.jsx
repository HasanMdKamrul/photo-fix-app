import React from "react";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const { data: blogs } = useLoaderData();

  return (
    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 dark:text-gray-50 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Photo Fix
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans dark:text-gray-200 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative dark:text-gray-200">
                To know about the
              </span>
            </span>{" "}
            exiting world of photography, read my blogs.
          </h2>
          <p className="text-base dark:text-gray-400 text-gray-700 md:text-lg">
            The lower section of the blog will give you an insight about the
            most asked questions
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {blogs.slice(0, 2).map((blog) => (
              <div key={blog._id}>
                <p className="mb-4 text-xl dark:text-gray-200 font-medium">
                  {blog.question}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {blog.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {blogs.slice(2, 4).map((blog) => (
              <div key={blog._id}>
                <p className="mb-4 text-xl dark:text-gray-200 font-medium">
                  {blog.question}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {blog.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
