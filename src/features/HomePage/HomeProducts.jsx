import { useNavigate } from "react-router-dom";

import SearchBar from "../../ui/SearchBar";
import LoaderIndicator from "../../ui/LoaderIndicator";
import Button from "../../ui/Button";
import RatingStar from "../../ui/RatingStar";
import { HiOutlineHeart } from "react-icons/hi";
import { Card } from "flowbite-react";
import { formatCurrency } from "../../utils/helpers";

import useGetData from "../../reusable/useGetData";
import usePostData from "./../../reusable/usePostData";
import { useState } from "react";
import Spinner from "../../ui/Spinner";

const HomeProducts = () => {
  const [productId, setProductId] = useState(null);
  const { data: products, isPending: isLoading } = useGetData(
    "products",
    "products",
    "Failed to retrieve products"
  );

  const { mutate: addToCartClick, isPending } = usePostData(
    "cart-items",
    "cart",
    "POST",
    "Failed to add to cart",
    "Product Successfully added to cart"
  );
  console.log(isPending);
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

  if (isLoading) return <LoaderIndicator />;

  return (
    <div>
      <SearchBar />
      <div className="flex gap-10 flex-wrap items-center justify-center mb-16">
        {products.data?.map((product) => (
          <Card
            className="max-w-lg cursor-pointer hover:shadow-2xl duration-300 transition "
            key={product.id}
          >
            <div onClick={() => navigate(`/productDetails/${product.id}`)}>
              <img src={product?.imageCover} alt={product.title} />

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
                disabled={isPending && productId === product.id}
                onClick={() => handleAddToCart(product.id)}
                className=" flex flex-1 items-center justify-center transition duration-500 rounded-lg bg-[--color-green-600]  px-5 py-2.5 text-center text-2xl font-medium text-white hover:bg-[--color-green-700] focus:outline-none focus:ring-4 focus:ring-[--color-green-300] dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                {productId === product.id ? (
                  <Spinner />
                ) : (
                  <span>Add to cart</span>
                )}
              </Button>
              <span className="text-5xl cursor-pointer">
                <HiOutlineHeart className="" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
