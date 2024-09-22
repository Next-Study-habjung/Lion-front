import { api } from "./api";
import { queryClient } from "./Contexts/Providers/queryClient";
import { useQuery } from "@tanstack/react-query";

export const ACCESS_TOKEN_KEY = "accessToken";
export const REFRESH_TOKEN_KEY = "refreshToken";

const fetchAuth = async (code: string | null, provider: string) => {
  if (code && provider) {
    const response = await api.post(`/oauth/signin/${provider}`, {
      code,
      redirect_uri: getRedirectUrl(),
    });
    if (response.data.isUserSignedUp) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.tokens.accessToken}`;

      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.tokens.accessToken);
      localStorage.setItem(
        REFRESH_TOKEN_KEY,
        response.data.tokens.refreshToken
      );

      queryClient.invalidateQueries({
        queryKey: ["USER_QUERY_ME"],
      });
    }

    return response.data;
  }
  throw new Error("Code or provider is missing");
};

export const useKakaoAuth = (code: string | null) => {
  return useQuery({
    queryKey: ["kakaoAuth", code],
    queryFn: async () => await fetchAuth(code, "kakao"),
  });
};

export const getRedirectUrl = () => {
  return `${location.origin}/oauth/callback/kakao`;
};
