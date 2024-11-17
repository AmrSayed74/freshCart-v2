import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "../../styles/swiperStyles.css";

const HomeCarousel = () => {
  return (
    <div className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:h-[600px] items-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={(true, { clickable: true })}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img
            className="object-cover lg:object-fill w-full h-[350px] lg:h-[600px] "
            src="images/image1.jpg"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover lg:object-fill w-full h-[350px] lg:h-[600px] "
            src="images/image2.jpg"
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover lg:object-fill w-full h-[350px] lg:h-[600px] "
            src="images/image3.jpg"
            alt="..."
          />
        </SwiperSlide>
      </Swiper>

      <div className=" flex-col flex w-full  lg:w-auto lg:h-[600px]">
        <img
          src="images/image5.jpg"
          alt=""
          className="w-full h-[150px] lg:h-[300px] object-cover"
        />
        <img
          src="images/image4.jpg"
          alt=""
          className="w-full h-[150px] lg:h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default HomeCarousel;
