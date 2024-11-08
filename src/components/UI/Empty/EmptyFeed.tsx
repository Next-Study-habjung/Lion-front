"use client";

import { images } from "@/assets";
import { CustomImage } from "../Common/Image/CustomImage";
import { BaseButton } from "../Common/Button/BaseButton";

interface EmptyFeedProps {}
export const EmptyFeed: React.FC<EmptyFeedProps> = ({}) => {
  return (
    <div className="flex flex-1 w-full h-full">
      <div className="w-full flex flex-col justify-center items-center grow gap-5">
        <CustomImage
          {...images["logo/symbol-logo-gray.png"]}
          className="w-[100px] aspect-square"
        />
        <p className="text-capation text-sm">유저를 검색해 팔로우 해보세요!</p>
        <BaseButton
          color="primary"
          className="h-auto rounded-full py-3 px-8 text-sm font-medium"
          onClick={() => {}}
        >
          검색하기
        </BaseButton>
      </div>
    </div>
  );
};
