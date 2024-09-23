interface ErrorMessageProps {
  children?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p className="text-danger w-full pl-[10px] break-keep">{children}</p>;
};
