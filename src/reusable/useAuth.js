import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AUTH } from "./request";
import toast from "react-hot-toast";

const useAuth = (endpoint, method, actionType, successMessage) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (values) => AUTH(fetch, endpoint, method, values),

    onSuccess: (data) => {
      if (data.message || data.status) {
        if (actionType === "signup") {
          navigate("/login");
        } else if (actionType === "login") {
          localStorage.setItem("userToken", data.token);
          navigate("/home");
        } else if (actionType === "forgetPassword") {
          navigate("/verify-code");
        } else if (actionType === "verify-code") {
          navigate("/reset-password");
        }
      }
      toast.success(successMessage || data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending };
};

export default useAuth;

// email:reusable@gmail.com
// password: 123456
