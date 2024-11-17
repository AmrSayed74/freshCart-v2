import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../styles/swiperStyles.css";
import "swiper/css";
const ProductImgSwiper = ({ product }) => {
  const { images } = product;

  return (
    <Swiper
      pagination={
        (true,
        {
          clickable: true,
        })
      }
      modules={[Pagination]}
      className="mySwiperTwo w-full lg:w-[500px]"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img
            className="object-center object-cover w-[350px] h-[370px]"
            src={image}
            alt={image.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductImgSwiper;
