import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  function logoutByRemoveToken() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <div
      className=" flex items-center gap-2 text-3xl cursor-pointer hover:text-stone-600"
      onClick={logoutByRemoveToken}
    >
      <span className="!transition !duration-75">Logout</span>
      <HiArrowRightOnRectangle className="text-4xl !transition !duration-75" />
    </div>
  );
};

export default Logout;
