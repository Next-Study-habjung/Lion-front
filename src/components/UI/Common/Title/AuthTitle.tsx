import classNames from "classnames";
import { PropsWithChildren } from "react";

interface AuthTitleProps {
  classname?: string;
}
export const AuthTitle: React.FC<PropsWithChildren<AuthTitleProps>> = ({
  children,
  classname,
}) => {
  return (
    <>
      <h1
        className={classNames(
          "font-medium text-2xl text-center w-full",
          classname
        )}
      >
        {children}
      </h1>
    </>
  );
};
