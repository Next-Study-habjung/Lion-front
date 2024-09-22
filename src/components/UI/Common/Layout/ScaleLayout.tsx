"use client";

import { useScaleLayout } from "@/hooks/common/useScaleLayout";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { useWindowSize } from "@/hooks/common/useWindowSize";
import { Splash } from "../Splash/Splash";

interface ScaleLayoutProps {
  min?: boolean;
  max?: boolean;
  just?: boolean;
  className?: string;
}

export const ScaleLayout: React.FC<PropsWithChildren<ScaleLayoutProps>> = ({
  children,
  min,
  max,
  just,
  className,
}) => {
  const { ref, scale, isLoading } = useScaleLayout();
  const { height } = useWindowSize();
  const screenHeight = height / scale;

  return (
    <>
      <div
        ref={ref}
        id="content-body"
        className="mx-auto relative bg-white h-dvh"
        style={{
          width: 360,
          transform: `scale(${scale})`,
          transformOrigin: scale > 1 ? "top center" : "top left",
          minHeight: min ? screenHeight : undefined,
          maxHeight: max ? screenHeight : undefined,
          height: just || (!min && !max && !just) ? screenHeight : undefined,
        }}
      >
        {children}
      </div>
      <AnimatePresence initial={false}>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white fixed inset-0 z-50"
          >
            <Splash />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
