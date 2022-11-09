import React from "react";
import { MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../../../assets/PhotographerImage/young-stylish-photographer-holds-professional-camera-taking-photos.jpg";

const Profile = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:text-gray-200">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 dark:text-gray-200 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Md Kamrul Hasan
              </p>
            </div>
            <h2 className="max-w-lg dark:text-gray-50 mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hey! I'm Kamrul Hasan
              <br className="hidden md:block" />
              your passionate{" "}
              <span className="inline-block text-deep-purple-accent-400">
                photographer
              </span>
            </h2>
            <p className="dark:text-gray-300 text-gray-700 md:text-lg">
              To get me hired please! Please subscribe and email me! Any kind of
              photography and videography, I'm your trusted partner.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-purple-700 bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Subscribe</span>
              <MdSubscriptions />
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
