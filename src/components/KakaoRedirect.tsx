"use client";

import { useCallback, useEffect } from "react";
import { useKakaoAuth } from "./useKakaoAuth";
import { useRouter, useSearchParams } from "next/navigation";

export const KakaoRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authCode = searchParams.get("code");
  const { data, isFetched } = useKakaoAuth(authCode);

  const postMessage = useCallback(() => {
    sessionStorage.setItem("kakaoAuth", JSON.stringify(data ?? "{}"));
    const beforeUrl = sessionStorage.getItem("before_url");
    if (beforeUrl) {
      router.push(beforeUrl);
    } else {
      router.push("/");
    }
  }, [router, data]);

  useEffect(() => {
    if (isFetched) {
      postMessage();
    }
  }, [isFetched, postMessage]);

  return <div>카카오 로그인</div>;
};
