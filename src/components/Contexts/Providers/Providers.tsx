"use client";
import { queryClient } from "./queryClient";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
interface ProvidersProps {}

export const Providers: React.FC<PropsWithChildren<ProvidersProps>> = ({
  children,
}) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>{children}</NextUIProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};
