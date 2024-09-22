"use client";
import { useScaleLayout } from "@/hooks/common/useScaleLayout";
import { useWindowSize } from "@/hooks/common/useWindowSize";
import classNames from "classnames";
import React, { PropsWithChildren } from "react";

interface ScreenHeightProps {
  min?: boolean;
  max?: boolean;
  just?: boolean;
  className?: string;
}

export const ScreenHeight: React.FC<PropsWithChildren<ScreenHeightProps>> = ({
  min,
  max,
  just,
  children,
  className,
}) => {
  const { scale } = useScaleLayout();
  const { height } = useWindowSize();
  const screenHeight = height / scale;

  return (
    <div
      style={{
        minHeight: min ? screenHeight : undefined,
        maxHeight: max ? screenHeight : undefined,
        height: just || (!min && !max && !just) ? screenHeight : undefined,
      }}
      className={classNames(className)}
    >
      {children}
    </div>
  );
};
