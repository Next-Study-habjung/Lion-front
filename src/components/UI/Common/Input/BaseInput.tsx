"use client";

import { extendVariants, Input } from "@nextui-org/react";

export const BaseInput = extendVariants(Input, {
  variants: {
    color: {
      AuthInput: {
        inputWrapper: [
          "border-b border-#DBDBDB",
          "focus:border-primary",
          //   "focus:border-blue-500",
          //   "hover:border-gray-500",
          "rounded-none",
          "bg-transparent",
        ],
        input: ["placeholder:text-sm "],
        label: ["text-sm font-medium text-gray-500"],
      },
    },
    size: {
      full: {
        inputWrapper: ["w-full"],
      },
    },
    error: {
      true: {
        inputWrapper: ["border-b border-red-500", "focus:border-red-700"],
      },
    },
  },
  defaultVariants: {
    size: "full",
    color: "AuthInput",
  },
});
