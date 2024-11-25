//! In Case If I Want To Combine POST Function and AUTH Function From request.js file

/*import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { POSTAUTH } from "./request";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const usePostAuth = (
  key,
  endpoint,
  method,
  actionType,
  errorMessage,
  successMessage,
  auth,
  cart
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (values) => {
      console.log(values, key);
      return POSTAUTH(
        fetch,
        endpoint,
        method,
        values,
        errorMessage,
        auth,
        cart
      );
    },
    onError: (data) => {
      toast.error(data?.message || errorMessage);
    },
    onSuccess: (data, values) => {
      console.log(values);
      console.log(data);
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
      toast.success(successMessage);
      // toast.success(successMessage);
      // console.log(successMessage);
      queryClient.invalidateQueries({ queryKey: [key] });
      console.log(key);
    },
  });

  return { mutate, isPending };
};

export default usePostAuth;
*/
