import { useQuery } from "@tanstack/react-query";
import { api } from "@/components/api";
import { QUERYKEY } from "@/lib/queryKey/queryKey";

const LION_ACCESS_TOKEN = "LION_ACCESS_TOKEN";

export const useMe = () => {
  const meQuery = useQuery({
    queryKey: [QUERYKEY.AUTH.ME],
    queryFn: async () => {
      const isToken = api.defaults.headers.Authorization;
      if (!isToken) {
        const accessToken = localStorage.getItem(LION_ACCESS_TOKEN);
        if (accessToken) {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
        }
      }
      try {
        const { data } = await api.get("/user/me");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });
  return meQuery;
};
