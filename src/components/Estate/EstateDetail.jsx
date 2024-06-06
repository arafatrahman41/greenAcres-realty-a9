import { useLoaderData, useParams } from "react-router-dom";
import 'animate.css';

const EstateDetail = () => {
  const lands = useLoaderData();
  const { id } = useParams();
  const land = lands.find((land) => land.id === id);

  return (
    <div className="mt-10 lg:mt-20">
      <div className="block max-w-sm gap-3 mx-auto sm:max-w-full">
        <img
          src={land.image}
          alt=""
          className="object-cover w-full h-64 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold sm:text-4xl animate__animated animate__bounce">
            {land.segment_name}
          </h3>
          <p>{land.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetail;
