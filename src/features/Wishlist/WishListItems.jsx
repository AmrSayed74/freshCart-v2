import { Card, Spinner } from "flowbite-react";
import useGetData from "../../reusable/useGetData";
import LoaderIndicator from "./../../ui/LoaderIndicator";
import { formatCurrency } from "../../utils/helpers";
import RatingStar from "../../ui/RatingStar";
import { HiHeart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useDeleteClear from "../../reusable/useDeleteClear";
import usePostData from "../../reusable/usePostData";

const WishListItems = () => {
  const { data: WishlistItems, isPending } = useGetData(
    "wishlist",
    "wishlist",
    "error"
  );
  console.log(WishlistItems);
  const { mutate: removeItem, isPending: isRemoving } = useDeleteClear(
    "wishlist",
    "wishlist",
    "DELETE"
  );

  const { mutate: addToCartClick, isPending: isAddingToCart } = usePostData(
    "cart-items",
    "cart",
    "POST",
    "Failed to add to cart",
    "Product Successfully added to cart"
  );

  const navigate = useNavigate();

  if (isPending || isRemoving || isAddingToCart) return <LoaderIndicator />;
  return (
    <>
      <h1 className="font-extrabold text-center mb-4 text-6xl text-[--color-green-600]">
        Wishlist Items
      </h1>
      {!WishlistItems?.data.length ? (
        <div className="mt-[90px] md:mt-[0px] flex items-center justify-center">
          <img src="/images/emptyWishlist.png" alt="emptyWishlist" />
        </div>
      ) : (
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {WishlistItems?.data.map((item) => (
            <Card
              key={item.id}
              className="max-w-md hover:shadow-2xl duration-500 transition relative group"
            >
              <div className="flex items-center justify-center">
                {isPending ? (
                  <div className="flex items-center justify-center h-[200px]">
                    <Spinner size="2xl" className="w-[50px]" />
                  </div>
                ) : (
                  <img
                    className="w-[250px] cursor-pointer group-hover:blur-[2px] transition duration-500"
                    src={item?.imageCover}
                    alt={item.title}
                  />
                )}
              </div>
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.category.name}
              </h2>
              <div className="flex items-center justify-between">
                <h3 className="line-clamp-1 text-[--color-green-600]">
                  {item.title}
                </h3>
                <div className="mb-5 mt-2.5 flex items-center">
                  <RatingStar />
                  <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xl font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                    {item.ratingsAverage}
                  </span>
                </div>
              </div>
              <h3 className="line-clamp-1 ">{item.brand.name}</h3>
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white ">
                  {formatCurrency(item.price)}
                </h3>
                <span>
                  <HiHeart className="text-5xl cursor-pointer text-red-700" />
                </span>
              </div>
              <div className="flex items-center justify-evenly text-center absolute top-[88%] left-[40px] gap-[18px] opacity-0 z-[-1] group-hover:opacity-100 group-hover:top-[33%] group-hover:z-10 transition-all duration-500">
                <div
                  onClick={() => addToCartClick({ productId: item.id })}
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black/60 cursor-pointer backdrop-blur-lg"
                >
                  <img
                    src="/images/addtocart.svg"
                    alt="unfavorite"
                    className="w-[40px]"
                  />
                </div>
                <div
                  onClick={() => navigate(`/productDetails/${item.id}`)}
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black/60 cursor-pointer backdrop-blur-lg"
                >
                  <img
                    src="/images/browse.svg"
                    alt="unfavorite"
                    className="w-[40px]"
                  />
                </div>
                <div
                  onClick={() => removeItem({ productId: item.id })}
                  className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-black/60 cursor-pointer backdrop-blur-lg"
                >
                  <img
                    src="/images/unfavorite.svg"
                    alt="unfavorite"
                    className="w-[40px]"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default WishListItems;
