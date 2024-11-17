import CategoriesCarousel from "./CategoriesCarousel";
import HomeCarousel from "./HomeCarousel";
import HomeProducts from "./HomeProducts";

const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <CategoriesCarousel className="h-[350px] container-fluid" />
      <HomeProducts />
    </>
  );
};

export default HomePage;
