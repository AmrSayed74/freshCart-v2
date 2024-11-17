import { useQuery } from "@tanstack/react-query";
import { GET } from "./request";
const useGetData = (key, endpoint, errorMessage, id) => {
  const { data, isPending } = useQuery({
    queryKey: [key, id].filter(Boolean),
    // queryKey: id ? [key, id] : [key],

    queryFn: () => GET(fetch, endpoint, errorMessage, id ? id : null),
  });

  return { data, isPending };
};

export default useGetData;
