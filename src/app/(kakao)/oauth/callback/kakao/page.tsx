import { KakaoRedirect } from "@/components/KakaoRedirect";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense>
      <KakaoRedirect />
    </Suspense>
  );
};
export default page;
