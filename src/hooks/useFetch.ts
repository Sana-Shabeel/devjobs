import axios from "axios";
import { useQuery } from "react-query";

export const useFetch = () => {
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get("/api/getJobs");
      return data;
    },
  });
};
