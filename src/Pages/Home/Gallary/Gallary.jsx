import React, { useEffect, useState } from "react";
import { PhotoView } from "react-photo-view";
import photo1 from "../../../assets/Gallary/groom-holds-bride-s-hands-where-are-two-wedding-rings.jpg";
import photo2 from "../../../assets/Gallary/wedding-couple-france.jpg";

const Gallary = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await fetch(
          `https://photo-fix-server.vercel.app/photos`
        );
        const data = await response.json();
        console.log(data);
        setPhotos(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadPhotos();
  }, []);

  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          My Recent Works
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Some of my favorites, Please have a look on them. How vibrant, serene
          and marvalous they are. This gallary is full of rich colors.
        </p>
      </div>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <PhotoView src={photo1}>
            <img
              src={photo1}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
          </PhotoView>
          {photos.map((image) => (
            <PhotoView key={image?._id} src={image?.photo}>
              <img
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                src={image?.photo}
              />
            </PhotoView>
          ))}
          <PhotoView src={photo2}>
            <img
              src={photo2}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </PhotoView>
        </div>
      </section>
    </div>
  );
};

export default Gallary;
