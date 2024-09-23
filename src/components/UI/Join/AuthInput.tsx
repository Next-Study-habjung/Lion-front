import { Controller, useFormContext } from "react-hook-form";
import { ErrorWrapper } from "../Common/Input/ErrorWrapper";
import { Input } from "@nextui-org/react";
import classNames from "classnames";

interface JoinInputProps {
  name: string;
  placeholder: string;
  type: string;
  rules: object;
}

export const AuthInput: React.FC<JoinInputProps> = ({
  name,
  placeholder,
  type,
  rules = {},
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="input-group">
      <Controller
        {...props}
        name={name}
        rules={rules}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <ErrorWrapper error={error}>
            <Input
              isRequired
              {...field}
              id={name}
              placeholder={placeholder}
              type={type}
              label={name}
              variant="underlined"
              color="primary"
              classNames={{
                input: classNames("placeholder:text-[12px]"),
              }}
            />
          </ErrorWrapper>
        )}
      />
    </div>
  );
};
