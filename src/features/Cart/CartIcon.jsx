import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
// import useGetCart from "./useGetCart";
import LoaderIndicator from "../../ui/LoaderIndicator";
import useGetData from "../../reusable/useGetData";
const CartIcon = () => {
  // const { cart, isLoading } = useGetCart();
  const { data: cart, isPending: isLoading } = useGetData(
    "cart-items",
    "cart",
    "Failed to get cart items"
  );

  if (isLoading) return <LoaderIndicator />;
  return (
    <Link to="/cart">
      <div className="relative">
        <span className="absolute left-[15px] transition duration-150 rounded-md top-[-17px] bg-[--color-green-600] text-white px-2">
          {cart?.numOfCartItems}
        </span>
        <HiMiniShoppingCart className="text-stone-500 text-5xl hover:text-stone-600 transition" />
      </div>
    </Link>
  );
};

export default CartIcon;
