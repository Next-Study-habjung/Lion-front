"use client";

import { CustomImage } from "@/components/UI/Common/Image/CustomImage";
import { images } from "@/assets";
import { useWindowSizeWithScale } from "@/hooks/common/useWindowSizeWithScale";
import { useDisclosure } from "@nextui-org/react";
import { SocialLoginSection } from "@/components/UI/Login/SocialLoginSection";

export const Login = () => {
  const { height } = useWindowSizeWithScale();
  const bottomSheet = useDisclosure({ defaultOpen: true });
  return (
    <>
      <div
        className="flex flex-col items-center bg-primary w-full"
        style={{ minHeight: height }}
      >
        <CustomImage
          {...images["login/login-simbol.png"]}
          className="w-[144px] aspect-square mt-28"
        />
      </div>
      <SocialLoginSection
        isOpen={bottomSheet.isOpen}
        onClose={bottomSheet.onClose}
      />
    </>
  );
};
