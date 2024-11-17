import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { POST } from "./request";

const usePostData = (key, endpoint, method, errorMessage, successMessage) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (values) => {
      console.log(values, key);
      return POST(fetch, endpoint, method, values, errorMessage);
    },
    onError: () => {
      console.error("Error:", error);
      toast.error(error?.message || errorMessage);
    },
    onSuccess: (values) => {
      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: [key] });
      console.log(key);
    },
  });

  return { mutate, isPending };
};

export default usePostData;
