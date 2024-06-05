import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import agriculture from "../../assets/agricultural-land.jpg";
import dairy from "../../assets/dairy-farm.jpg";
import forest from "../../assets/forest-land.jpg";
import plantation from "../../assets/plantation-land.jpg";
import ranch from "../../assets/ranch-land.jpg";
import vineyard from "../../assets/vineyard-land.jpg";

const Slider = () => {
  return (
    <div className="my-10 lg:my-16">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-96"
      >
        <SwiperSlide className="relative">
          <img src={agriculture} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Explore the world of Arable Farming</h2>
          <p className="text-lg mt-3">Discover the wonders of cultivating crops, from wheat and corn to fruits and vegetables. Learn about the essential role of arable farms in feeding our communities</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dairy} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Delve into the world of Dairy Farming</h2>
          <p className="text-lg mt-3">Discover the dedication and care behind dairy farming. Learn about the process of producing milk and its significance in our diet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={forest} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Uncover the sustainable management of Forests</h2>
          <p className="text-lg mt-3">Journey through the vital world of forests.  Discover how responsible forestry practices ensure the continued health of these vital ecosystems and provide essential resources.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={plantation} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Explore specialty farms and plantations</h2>
          <p className="text-lg mt-3">Delve into the diversity of land use beyond the familiar. Discover unique farms and plantations dedicated to coffee, nuts, or other specialty crops, highlighting their contributions to our global food system</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ranch} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Immerse yourself in the life of Ranching</h2>
          <p className="text-lg mt-3">Experience the vast landscapes of ranches, where cattle, sheep, and horses roam free. Explore the unique lifestyle and essential role of ranchers in food production</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={vineyard} alt="" />
          <div className="absolute top-32 lg:left-56 md:left-24 text-[#ffffff] md:w-3/4 lg:w-3/5 text-center">
          <h2 className='text-3xl font-semibold'>Where grapes become the essence of wine</h2>
          <p className="text-lg mt-3"> Explore the enchanting world of vineyards. Learn about the meticulous process of growing grapes and crafting delicious wines</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
