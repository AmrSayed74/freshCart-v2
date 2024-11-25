import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import useGetData from "../../reusable/useGetData";
import usePostData from "./../../reusable/usePostData";

import SearchBar from "../../ui/SearchBar";
import Button from "../../ui/Button";
import RatingStar from "../../ui/RatingStar";
import Spinner from "../../ui/Spinner";
import { Card } from "flowbite-react";
import { HiOutlineHeart } from "react-icons/hi";

const HomeProducts = () => {
  const [productId, setProductId] = useState(null);
  const { data: products } = useGetData(
    "products",
    "products",
    "Failed to retrieve products"
  );

  const { mutate: addToCartClick, isPending: isAddingToCart } = usePostData(
    "cart-items",
    "cart",
    "POST",
    "Failed to add to cart",
    "Product Successfully added to cart"
  );

  const { mutate: addToWishList, isPending: isAddingToWishlist } = usePostData(
    "wishlist",
    "wishlist",
    "POST",
    "Failed to add to wishlist",
    "Product Successfully added to wishlist"
  );

  function handleAddToCart(productId) {
    setProductId(productId);
    addToCartClick(
      { productId },
      {
        onSettled: () => setProductId(null),
      }
    );
  }

  const navigate = useNavigate();

  // if (isLoading) return <LoaderIndicator />;

  return (
    <div>
      <SearchBar />
      <div className="flex gap-10 flex-wrap items-center justify-center mb-16">
        {products?.data?.map((product) => (
          <Card
            className="max-w-lg cursor-pointer hover:shadow-2xl duration-300 relative transition group "
            key={product.id}
          >
            <div>
              <img
                className="group-hover:blur-[2px] transition duration-500"
                src={product?.imageCover}
                alt={product.title}
              />

              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.category.name}
              </h2>
              <h3 className="line-clamp-1">{product.title}</h3>
              <div className="flex items-center justify-between">
                <div className="mb-5 mt-2.5 flex items-center">
                  <RatingStar />
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xl font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    {product.ratingsAverage}
                  </span>
                </div>

                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(product.price)}
                </span>
              </div>
            </div>

            <div className="flex items-center  gap-10">
              <Button
                disabled={isAddingToCart && productId === product.id}
                onClick={() => handleAddToCart(product.id)}
                className=" flex flex-1 items-center justify-center transition duration-500 rounded-lg bg-[--color-green-600]  px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-[--color-green-700] focus:outline-none focus:ring-4 focus:ring-[--color-green-300] dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                {productId === product.id ? (
                  <Spinner />
                ) : (
                  <span>Add to cart</span>
                )}
              </Button>
              <div className="flex items-center text-center absolute top-[88%] left-[50%] translate-x-[-50%] gap-[18px] opacity-0 z-[-1] group-hover:opacity-100 group-hover:top-[33%] group-hover:z-10 transition-all duration-500">
                <div
                  onClick={() => navigate(`/productDetails/${product.id}`)}
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black/60 cursor-pointer backdrop-blur-lg"
                >
                  <img
                    src="/images/browse.svg"
                    alt="unfavorite"
                    className="w-[40px]"
                  />
                </div>
                <div
                  onClick={() => addToWishList({ productId: product.id })}
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black/60 cursor-pointer backdrop-blur-lg"
                >
                  <img
                    src="/images/favorite.svg"
                    alt="favorite"
                    className="w-[40px]"
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
