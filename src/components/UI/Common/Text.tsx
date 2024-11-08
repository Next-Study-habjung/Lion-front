import classNames from "classnames";
import { ComponentProps, ReactElement } from "react";

//title 16 700 20
//h1 18 700 22
//caption1 14 500 17
//caption2 12 400 14
//caption3 10 400 12

type TextProps =
  | ({
      variant?: "t1" | "t2" | "t3" | "t4";
    } & ComponentProps<"h2" | "h3" | "h4" | "h5">)
  | ({
      variant?: "b1" | "b2" | "b3";
    } & ComponentProps<"p">)
  | ({
      variant?: "h1" | "h2" | "h3";
    } & ComponentProps<"h2" | "h3" | "h4">)
  | ({
      variant?: "h4" | "h5";
    } & ComponentProps<"h5" | "h6">)
  | ({
      variant?: "c1";
    } & ComponentProps<"small">);

export const TEXT_VARIANTS = {
  t1: "text-[30px] font-normal font-['ELAND'] leading-normal",
  t2: "text-[24px] font-normal font-['ELAND'] leading-normal",
  t3: "text-[22px] font-normal font-['ELAND'] leading-normal",
  t4: "text-[20px] font-normal font-['ELAND'] leading-normal",
  // t3: "text-3xl font-normal font-['HSSaemaul'] leading-9",
  h1: "text-2xl font-bold font-['Pretendard'] leading-normal",
  h2: "text-xl font-bold font-['Pretendard'] leading-normal",
  h3: "text-base font-bold font-['Pretendard'] leading-[24px]",
  h4: "text-sm font-semibold font-['Pretendard'] leading-[21px]",
  h5: "text-xs font-semibold font-['Pretendard'] leading-normal",
  b1: "text-lg font-medium font-['Pretendard'] leading-normal",
  b2: "text-base font-normal font-['Pretendard'] leading-normal",
  b3: "text-sm font-normal font-['Pretendard'] leading-snug",
  c1: "text-xs font-normal font-['Pretendard'] leading-[1.6]",
  // c2: "text-[10px] font-normal font-['Pretendard-Regular'] leading-[1.4]",
};

export const Text: React.FC<TextProps> = ({
  variant = "b2",
  className,
  ...props
}) => {
  const Tag = (
    ["t", "h"].includes(variant[0]) ? `h${Number(variant[1]) + 1}` : "p"
  ) as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames(TEXT_VARIANTS[variant], className, "break-keep")}
      {...(props as any)}
    />
  );
};
import { FC } from "react";
