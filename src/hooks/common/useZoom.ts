import { useMotionValue } from "framer-motion";
import React, { useRef, useState } from "react";

export const useZoom = () => {
  const DISTANCE_NOT_PINCHING = -1;
  const MINIMUM_SCALE = 0.75;
  const MAXIMUM_SCALE = 1.5;
  const scale = useMotionValue(1);
  const isPinching = useRef(false);
  const distance = useRef(DISTANCE_NOT_PINCHING);
  const [zooming, setZooming] = useState(false);

  const initializeEvents = () => {
    document.removeEventListener("touchmove", onPinchMove);
    document.removeEventListener("touchend", onPinchEnd);
  };

  const zoomIn = (percentage = 0.1) => {
    scale.set(Math.min(scale.get() + percentage, MAXIMUM_SCALE));
  };

  const zoomOut = (percentage = 0.1) => {
    scale.set(Math.max(scale.get() - percentage, MINIMUM_SCALE));
  };

  const onPinchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 2) return;
    isPinching.current = true;
    setZooming(true);
    const [touch1, touch2] = Array.from(e.touches);
    distance.current = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
    document.addEventListener("touchmove", onPinchMove);
    document.addEventListener("touchend", onPinchEnd);
  };

  const onWheelStart = (e: React.WheelEvent) => {
    let timer: NodeJS.Timeout | undefined;
    if (!timer) {
      timer = setTimeout(() => {
        if (e.deltaY > 0) {
          zoomIn();
        } else {
          zoomOut();
        }
        timer = undefined;
      }, 20);
    }
  };

  const onPinchMove = (e: TouchEvent) => {
    if (!isPinching.current) return;
    const [touch1, touch2] = Array.from(e.touches);
    const currentDistance = Math.hypot(
      touch2.clientX - touch1.clientX,
      touch2.clientY - touch1.clientY,
    );
    const delta = currentDistance - distance.current;
    if (delta > 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  const onPinchEnd = () => {
    isPinching.current = false;
    setZooming(false);
    distance.current = DISTANCE_NOT_PINCHING;
    initializeEvents();
  };

  return { zooming, scale, onPinchStart, onWheelStart, zoomIn, zoomOut };
};
