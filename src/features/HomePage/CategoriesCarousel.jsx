import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../styles/swiperStyles.css";
import "swiper/css";

// import useCategories from "../Categories/useCategories";
import LoaderIndicator from "../../ui/LoaderIndicator";
import useGetData from "../../reusable/useGetData";
const CategoriesCarousel = () => {
  const { data: categories, isPending } = useGetData(
    "categories",
    "categories",
    "Failed to retrieve categories"
  );

  if (isPending) return <LoaderIndicator />;
  return (
    <Swiper
      pagination={
        (true,
        {
          clickable: true,
        })
      }
      modules={[Pagination]}
      slidesPerView={5}
      breakpoints={breakPoints}
      className="mySwiperTwo mt-[50px] "
    >
      {categories.data?.map((category) => (
        <SwiperSlide key={category._id}>
          <img
            className="object-center object-cover w-[350px] h-[350px]"
            src={category.image}
            alt={category.slug}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategoriesCarousel;

const breakPoints = {
  200: {
    slidesPerView: 1,
  },
  400: {
    slidesPerView: 2,
  },
  700: {
    slidesPerView: 3,
  },
  950: {
    slidesPerView: 4,
  },
  1000: {
    slidesPerView: 5,
  },
};
