"use client";

import { AuthTitle } from "@/components/UI/Common/Title/AuthTitle";
import { AuthJoinProgress } from "./AuthJoinProgress";
import { FormProvider, useForm } from "react-hook-form";

export const Join = () => {
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="pt-8">
      <FormProvider {...methods}>
        <AuthJoinProgress methods={methods} onSubmit={onSubmit} />
      </FormProvider>
    </div>
  );
};
