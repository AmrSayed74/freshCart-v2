import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PUT } from "./request";
import { useNavigate } from "react-router-dom";

const usePutData = (
  key,
  endpoint,
  method,
  errorMessage,
  auth,
  cart,
  successMessage,
  actionType
) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (values) => {
      return PUT(fetch, endpoint, method, values, errorMessage, auth, cart);
    },
    onSuccess: (data) => {
      if (data.token) {
        if (actionType === "reset-password") {
          navigate("/login");
        }
      }

      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: [key] });
      console.log(key);
    },
    onError: () => {
      console.error("Error:", error);
      toast.error(error?.message || errorMessage);
    },
  });

  return { mutate, isPending };
};

export default usePutData;
