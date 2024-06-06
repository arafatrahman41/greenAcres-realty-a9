import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estate = ({ land }) => {
  const {
    estate_title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
    id
  } = land;
  return (
    <div className="p-6 border border-[#264025] dark:bg-gray-50 dark:text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover w-full mx-auto h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="text-xs font-medium tracking-widest uppercase dark:text-violet-600">
          {location}
        </span>
        <h2 className="text-2xl font-semibold tracking-wide text-gray-600">
          {estate_title}
        </h2>
      </div>
      <p className="text-gray-400">
        {description.length > 100 ? description.slice(0, 100) : description} <Link to={`/estate/${id}`} className="text-green-700 font-medium">Read More...</Link>
      </p>
      <div className="mt-3 md:flex md:justify-between">
        <div>
          <h4 className="text-xl font-bold text-gray-600 text-left">
            Facilities:
          </h4>
          <ul className="md:text-left text-gray-400">
            {facilities.map((facility) => (
              <p
                key={facility}
                className="border border-[#264025] mt-2 px-3 py-2 text-center text-gray-400"
              >
                {facility}
              </p>
            ))}
          </ul>
        </div>
        <div className="space-y-4 mt-4 md:mt-0">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Price</h2>
            <p className="text-gray-400">{price}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Area</h2>
            <p className="text-gray-400">{area} sq</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Status</h2>
            <p className="text-gray-400">{status}</p>
          </div>
        </div>
      </div>
      <Link
          to={`/estate/${id}`}
          className="relative inline-block text-lg group mt-4"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-500 ease-out border-2 border-[#264025] group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#82896E] group-hover:-rotate-180 ease"></span>
            <span className="relative">View Property</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#82896E] group-hover:mb-0 group-hover:mr-0"></span>
        </Link>
    </div>
  );
};

Estate.propTypes = {
  land: PropTypes.object,
};

export default Estate;
