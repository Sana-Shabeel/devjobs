import axios from "axios";
import { useQuery } from "react-query";

export const useFetch = (url: string) => {
  return useQuery({
    // queryKey: ["job", jobId],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    },
  });
};
