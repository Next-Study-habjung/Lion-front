import { Button } from "@nextui-org/react";
import { CustomImage } from "../Image/CustomImage";
import { images } from "@/assets";
import { PropsWithChildren } from "react";
import classNames from "classnames";
interface SocialLoginButtonProps {
  onClick?: () => void;
  className?: string;
  icon?: string;
}

export const SocialLoginButton: React.FC<
  PropsWithChildren<SocialLoginButtonProps>
> = ({ className, icon, onClick, children }) => {
  return (
    <Button
      className={classNames(
        "w-full h-11 py-3 px-6 text-sm font-normal border-1 justify-start items-center",
        className
      )}
      radius="full"
      variant="bordered"
      startContent={
        <CustomImage
          {...images[`login/${icon}`]}
          className="w-6 aspect-square"
        />
      }
    >
      <span className="grow text-center">{children}</span>
    </Button>
  );
};
