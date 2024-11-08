"use client";
import { FC } from "react";
import { CustomImage } from "../Image/CustomImage";
import { images } from "@/assets";
import { BaseButton } from "../Button/BaseButton";
import { useRouter } from "next/navigation";

export const Error: FC = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex flex-1 bg-white">
      <div className="flex flex-col justify-center items-center w-full gap-5">
        <CustomImage
          {...images["error/icon-404.png"]}
          className="w-[158px] aspect-square mb-2.5"
        />
        <p className="text-sm font-400 text-capation">
          페이지를 찾을 수 없습니다.
        </p>
        <BaseButton
          color="primary"
          className="text-white rounded-full font-medium text-sm h-auto py-3 px-6"
          onClick={() => router.back()}
        >
          이전 페이지
        </BaseButton>
      </div>
    </div>
  );
};
