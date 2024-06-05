import { Helmet } from "react-helmet";
import Slider from "../../components/Slider/Slider";
import Estates from "../../components/Estates/Estates";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GreenAcres Realty-Home</title>
      </Helmet>
      <Slider />
      <Estates />
    </div>
  );
};

export default Home;
