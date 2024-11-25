import { useState } from "react";
import useGetData from "../../reusable/useGetData";
import usePutData from "../../reusable/usePutData";
import useDeleteClear from "../../reusable/useDeleteClear";
import Button from "./../../ui/Button";
import UiSpinner from "./../../ui/Spinner";
import LoaderIndicator from "../../ui/LoaderIndicator";
import { Spinner } from "flowbite-react";
import { formatCurrency } from "../../utils/helpers";

const CartItems = () => {
  const { data: cart, isPending: isLoading } = useGetData(
    "cart-items",
    "cart",
    "Failed to get cart items"
  );

  const { mutate: updatingProduct } = usePutData(
    "cart-items",
    "cart",
    "PUT",
    "error",
    false,
    true,
    "Product successfully updated"
  );

  const { mutate: removeClear, isPending: isRemovingClearing } = useDeleteClear(
    "cart-items",
    "cart",
    "DELETE"
  );

  const [removingProductId, setRemoveProductId] = useState(null);
  const [isClearing, setIsClearing] = useState(false);
  const [updatingProductId, setUpdatingProductId] = useState(null);

  const handleUpdateProduct = (productId, count) => {
    setUpdatingProductId(productId);
    updatingProduct(
      { productId, count },
      {
        onSettled: () => setUpdatingProductId(null),
      }
    );
  };

  function handleRemove(productId) {
    setRemoveProductId(productId);
    removeClear(
      { productId },
      {
        onSettled: () => setRemoveProductId(null),
      }
    );
  }

  function handleClearCart() {
    setIsClearing(true);
    removeClear(
      {},
      {
        onSettled: () => setIsClearing(false),
      }
    );
  }

  if (isLoading) return <LoaderIndicator />;

  return (
    <>
      {!cart?.data?.products.length ? (
        <div className="text-center mt-[150px]">
          <h1 className="font-extrabold text-7xl text-[--color-green-600]">
            Shopping Cart
          </h1>
          <div className="flex justify-center items-center">
            <img className="w-[400px]" src="images/emptyCart.png" alt="" />
          </div>
          <span className="text-wrap max-w-[500px] inline-block">
            Before proceed to checkout you must add some products to your
            shopping cart. You will find a lot of interesting products on our
            "Home" page.
          </span>
        </div>
      ) : (
        <div>
          <h1 className="font-extrabold text-center text-3xl md:text-5xl text-[--color-green-600]">
            Cart Shopping
          </h1>
          <div className=" my-8 flex flex-col md:flex-row items-start gap-3 md:items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Number of cart items:{" "}
              <span className="text-[--color-green-700]">
                {cart.numOfCartItems}
              </span>
            </h2>
            <h2 className="text-3xl text-end md:text-4xl font-semibold">
              Total Cart Price:
              <span className="text-[--color-green-700]">
                {" "}
                {formatCurrency(cart.data.totalCartPrice)}
              </span>
            </h2>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xlg text-center rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-xl">
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-14 py-3">
                    Q t y
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.data.products.map((product) => (
                  <tr
                    key={product.product.id}
                    className=" text-1xl md:text-3xl bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="p-4 flex items-center justify-center">
                      <img
                        src={product.product.imageCover}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.product.title}
                    </td>
                    <td className="">
                      <div className="flex items-center justify-center">
                        <button
                          disabled={updatingProductId === product.product.id}
                          onClick={() =>
                            handleUpdateProduct(
                              product.product.id,
                              product.count - 1
                            )
                          }
                          className="inline-flex items-center justify-center h-10 w-10  me-3 text-xl font-extrabold text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          {updatingProductId === product.product.id ? (
                            <div>
                              <Spinner
                                aria-label="Large spinner example"
                                size="lg"
                              />
                            </div>
                          ) : (
                            <span className="bg-gray-50 w-28 border border-gray-300 text-gray-900 text-lg font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              {product?.count}
                            </span>
                          )}
                        </div>
                        <button
                          disabled={updatingProductId === product.product.id}
                          onClick={() =>
                            handleUpdateProduct(
                              product.product.id,
                              product.count + 1
                            )
                          }
                          className="inline-flex items-center justify-center h-10 w-10  ms-3 text-xl font-extrabold text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      <Button
                        disabled={
                          isRemovingClearing &&
                          removingProductId === product.product.id
                        }
                        onClick={() => handleRemove(product.product.id)}
                        className="font-medium text-2xl rounded-md p-2 text-white bg-red-600 hover:bg-red-700 duration-150 transition"
                      >
                        {isRemovingClearing &&
                        removingProductId === product.product.id ? (
                          <UiSpinner />
                        ) : (
                          <span>Remove</span>
                        )}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Button
              disabled={isClearing}
              onClick={handleClearCart}
              className="my-12  font-medium text-3xl rounded-md px-6 py-4 text-white bg-red-600 hover:bg-red-700 duration-150 transition"
            >
              {isClearing ? <UiSpinner /> : <span>Clear cart</span>}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
