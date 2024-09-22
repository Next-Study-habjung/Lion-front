"use client";

import { extendVariants, Button } from "@nextui-org/react";

export const BaseButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      main: "text-white bg-primary",
      disabled: "text-white bg-secondary",
      white: "text-black bg-white",
    },
    isDisabled: {
      true: "cursor-not-allowed",
    },
    size: {
      large: "w-full h-11 py-3 px-6 text-sm font-medium",
      midium: "w-[120px] h-8 py-2 px-4 text-sm font-medium",
      "midium-small": "w-[90px] h-8 py-1 px-2 text-sm font-medium",
      small: "w-14 h-7 py-2 px-4 text-[12px] font-normal",
    },
    radius: {
      full: "rounded-full",
    },
    border: {
      gray: "border-1 border-#DBDBDB",
    },
  },
  defaultVariants: {},
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
    },
  ],
});
