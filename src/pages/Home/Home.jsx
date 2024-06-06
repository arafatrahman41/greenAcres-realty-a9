import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import Estate from "../../components/Estate/Estate";

const Home = () => {
  const lands = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>GreenAcres Realty-Home</title>
      </Helmet>
      <Slider />
      <div className="text-center my-10 md:my-20">
            <div>
            <h2 className="text-3xl font-bold text-gray-600 animate__animated animate__heartBeat animate__slow">Our Lands Estates</h2>
            <p className="md:w-4/5 mx-auto text-gray-400 mt-3">Discover a variety of prime land properties, including fertile agricultural lands, expansive livestock ranches, state-of-the-art dairy farms, scenic vineyards, majestic forest lands, and historic tea plantations. Each estate offers unique opportunities and facilities tailored for agriculture, livestock, viticulture, conservation, and more. Find your perfect property today and invest in the future of land</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    lands.map(land => <Estate key={land.id} land={land}></Estate>)
                }
            </div>
        </div>
    </div>
  );
};

export default Home;
