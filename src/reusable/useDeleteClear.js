import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { DELETE } from "./request";

const useDeleteClear = (key, endpoint, method) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (values) => DELETE(fetch, endpoint, method, values),
    onSuccess: (data, values) => {
      console.log(values);
      console.log(values.productId);
      const successMessage = values.productId
        ? "Product removed successfully!"
        : "Cart cleared successfully!";
      console.log(successMessage);
      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: [key] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { mutate, isPending };
};

export default useDeleteClear;
