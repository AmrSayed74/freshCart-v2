import { useParams } from "react-router-dom";
import ProductImgSwiper from "./ProductImgSwiper";
import useGetData from "../../reusable/useGetData";
import usePostData from "../../reusable/usePostData";
import Button from "../../ui/Button";
import LoaderIndicator from "../../ui/LoaderIndicator";
import { formatCurrency } from "../../utils/helpers";
import RatingStar from "../../ui/RatingStar";
import Spinner from "../../ui/Spinner";
import { HiOutlineHeart } from "react-icons/hi";

const ProductsDetailsByID = () => {
  const { productId } = useParams();

  const { data: product, isPending: isLoading } = useGetData(
    "product",
    "products",
    "Failed to retrieve product",
    productId
  );
  console.log(product);
  const { mutate: addToCartClick, isPending } = usePostData(
    "cart-items",
    "cart",
    "POST",
    "Failed to add to cart",
    "Product Successfully added to cart "
  );
  const { mutate: addToWishList, isPending: isAddingToWishlist } = usePostData(
    "wishlist",
    "wishlist",
    "POST",
    "Failed to add to wishlist",
    "Product Successfully added to wishlist"
  );

  if (isLoading) return <LoaderIndicator />;

  const { title, description, price, ratingsAverage } = product.data || {};

  return (
    <div className="flex-column md:flex items-center justify-between p-5 gap-16 xl:gap-0 ">
      {isLoading ? <Spinner /> : <ProductImgSwiper product={product.data} />}
      <div className="flex-1 text-center md:text-start mt-10 md:mt-0 ">
        <h1 className="font-semibold mb-5 text-5xl">{title}</h1>
        <p>{description}</p>

        <div className="m-auto mb-12 md:mb-12 md:m-0 md:mt-12 flex items-center justify-between mt-10 sm:w-[400px] lg:w-[550px]">
          <span>{formatCurrency(price)}</span>
          <div className="flex items-center justify-center">
            <RatingStar />
            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-1.5 text-xl font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
              {ratingsAverage}
            </span>
          </div>
        </div>

        <div className="m-auto mt:12 flex gap-12 md:m-0 sm:w-[400px] lg:w-[550px]">
          <Button
            disabled={isPending}
            onClick={() => addToCartClick({ productId: product.data.id })}
            className="flex items-center justify-center flex-1 transition duration-500 rounded-lg bg-[--color-green-600]  px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-[--color-green-700] focus:outline-none focus:ring-4 focus:ring-[--color-green-300] dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            {isPending ? <Spinner /> : <span>+ Add to cart</span>}
          </Button>
          <div
            onClick={() => addToWishList({ productId: product.data.id })}
            className=" cursor-pointer "
          >
            <img
              src="/images/favorite.svg"
              alt="favorite"
              className="w-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsByID;
