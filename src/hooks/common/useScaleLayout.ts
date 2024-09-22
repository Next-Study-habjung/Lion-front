import {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { useScale } from "./useScale";

export const useScaleLayout = ({
  maxScale = 1.5,
  width = 360,
}: {
  width?: number;
  maxScale?: number;
} = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { scale, setScale } = useScale();

  const setContentBodyScale = useCallback(() => {
    const { innerWidth } = window;
    const scale = innerWidth / width;
    setScale(Math.min(maxScale, scale));
    setIsLoading(false);
  }, [maxScale, setScale, width]);

  useEffect(() => {
    setContentBodyScale();
    window.addEventListener("resize", setContentBodyScale);
    return () => {
      window.removeEventListener("resize", setContentBodyScale);
    };
  }, [setContentBodyScale]);

  useEffect(() => {
    if (isLoading) {
      setContentBodyScale();
    }
  }, [isLoading, setContentBodyScale]);

  return {
    ref,
    scale,
    isLoading,
    setContentBodyScale,
  };
};
