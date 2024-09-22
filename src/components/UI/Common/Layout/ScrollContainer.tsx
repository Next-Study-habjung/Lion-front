"use client";
import React, { createRef, PropsWithChildren } from "react";
import classNames from "classnames";

interface ScrollContainerProps {
  className?: string;
}

export const scrollRef = createRef<HTMLDivElement>();

export const ScrollContainerLayout: React.FC<
  PropsWithChildren<ScrollContainerProps>
> = ({ children, className }) => {
  return (
    <div
      className={classNames(className, "overflow-y-scroll scrollbar-hide")}
      id="scroll-container"
      ref={scrollRef}
    >
      {children}
    </div>
  );
};
