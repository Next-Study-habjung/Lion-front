import { PropsWithChildren } from "react";
import { FieldError } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";

interface ErrorWrapperProps {
  error?: FieldError;
}

export const ErrorWrapper: React.FC<PropsWithChildren<ErrorWrapperProps>> = ({
  error,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </div>
  );
};
