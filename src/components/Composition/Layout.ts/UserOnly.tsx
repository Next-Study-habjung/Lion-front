"use client";

import { Splash } from "@/components/UI/Common/Splash/Splash";
import { useMe } from "@/hooks/common/useMe";
import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface UserOnlyProps {
  fallback?: React.ReactNode;
  eventType?: string;
}

export const UserOnly: React.FC<PropsWithChildren<UserOnlyProps>> = ({
  fallback = <div></div>,
  children,
}) => {
  const { data: me, isLoading: isMeLoading } = useMe();
  console.log(me);
  const isLoading = isMeLoading;

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout">
        {!me && (
          <motion.div
            key="fallback"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {fallback}
          </motion.div>
        )}
        {!!me && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {isLoading && (
          <motion.div
            key="splash"
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
import { log } from "console";
import { animate } from "framer-motion";
import { exit } from "process";
import { ReactNode, FC } from "react";
