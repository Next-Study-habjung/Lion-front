"use client";

import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {}

export const CustomImage: React.FC<CustomImageProps> = ({
  alt,
  fill,
  ...props
}) => {
  if (fill) {
    delete props.width;
    delete props.height;
  }
  delete (props as any).blurHeight;
  delete (props as any).blurWidth;
  return <Image {...props} fill={fill} alt={alt ?? props.src} />;
};
