import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { PUT } from "./request";

const usePutData = (
  key,
  endpoint,
  method,
  errorMessage,
  auth,
  cart,
  successMessage
) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (values) => {
      // console.log(values, key);
      return PUT(fetch, endpoint, method, values, errorMessage, auth, cart);
    },
    onSuccess: (values) => {
      console.log(values);
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
