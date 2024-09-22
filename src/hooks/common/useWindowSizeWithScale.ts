import { useEffect, useState } from "react";
import { useScale } from "./useScale";

export const useWindowSizeWithScale = () => {
    const { scale } = useScale();
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {
        width: windowSize.width / scale,
        height: windowSize.height / scale,
    };
};
