import { useEffect } from "react";
import { initKakao } from "kakao-js-sdk";

interface KakaoProviderProps {}

export const KakaoProvider: React.FC<KakaoProviderProps> = () => {
  useEffect(() => {
    (async () => {
      await initKakao("be3d750db33ea41f33ca2b4b9c120f4b");
    })();
  }, []);
  return <div></div>;
};
