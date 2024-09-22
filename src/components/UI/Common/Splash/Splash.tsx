import { images } from "@/assets";
import { CustomImage } from "../Image/CustomImage";

export const Splash = () => {
  return (
    <div className="w-full h-dvh flex flex-col justify-center items-center">
      <CustomImage {...images["splash/full-logo.png"]} />
    </div>
  );
};
