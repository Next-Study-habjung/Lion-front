import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const usePan = () => {
  const stiffness = 700;
  const damping = 100;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });
  const accumulateMovement = useRef(0);
  const [panning, setPanning] = useState(false);

  const clearEvents = () => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    document.removeEventListener("pointercancel", onPointerUp);
    document.removeEventListener("pointerleave", onPointerUp);
  };

  const onPointerDown = () => {
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerUp);
    document.addEventListener("pointerleave", onPointerUp);
  };

  const onPointerMove = (event: PointerEvent) => {
    accumulateMovement.current += Math.abs(event.movementX) + Math.abs(event.movementY);
    if (accumulateMovement.current > 15) {
      setPanning(true);
    }
    x.set(x.get() + event.movementX);
    y.set(y.get() + event.movementY);
  };

  const onPointerUp = () => {
    clearEvents();
    setPanning(false);
  };

  const set = (_x: number, _y: number) => {
    x.set(_x);
    y.set(_y);
  };

  return {
    x: springX,
    y: springY,
    panning,
    set,
    onPointerDown,
  };
};
