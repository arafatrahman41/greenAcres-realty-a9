import { useLoaderData, useParams } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EstateDetail = () => {
  const lands = useLoaderData();
  const { id } = useParams();
  const land = lands.find((land) => land.id === id);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-10 lg:mt-20">
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full">
        <img
          src={land.image}
          alt=""
          className="object-cover w-full h-64 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2">
          <div className=" flex items-center justify-between">
            <h3 className="text-2xl font-semibold sm:text-4xl animate__animated animate__bounce">
              {land.segment_name}
            </h3>
            <p className="text-xl font-bold text-red-500 bg-base-200 px-4 py-2 animate__animated animate__swing">
              {land.status}
            </p>
          </div>
          <p>{land.description}</p>
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-6 mt-8">
              <div className="bg-base-300 px-4 py-2 h-40 w-64 text-center rounded-3xl flex flex-col justify-center items-center" data-aos="zoom-in">
                <p className="text-xl font-semibold">
                  Price: <span className="text-red-500">${land.price}</span>
                </p>
                <p className="text-xl font-semibold">Area: {land.area} sq</p>
                <p className="text-xl font-semibold">
                  Location: {land.location}
                </p>
              </div>
              <div className="text-xl font-medium bg-base-300 px-4 py-2 w-64 text-center rounded-3xl" data-aos="zoom-in">
                {land.facilities.map((facility) => (
                  <p key={facility}>{facility}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetail;
