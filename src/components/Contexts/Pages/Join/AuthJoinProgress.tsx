"use client";

import { AuthTitle } from "@/components/UI/Common/Title/AuthTitle";
import { AuthInput } from "@/components/UI/Join/AuthInput";
import { useForm } from "react-hook-form";

interface AuthJoinProgressProps {
  methods: any;
  onSubmit: any;
}

export const AuthJoinProgress: React.FC<AuthJoinProgressProps> = ({
  methods,
  onSubmit,
}) => {
  const { control, handleSubmit, watch } = methods;
  const password = watch("비밀번호");

  return (
    <div className="px-8">
      <AuthTitle classname="mb-10">이메일로 회원가입</AuthTitle>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div>
          <AuthInput
            name="이메일"
            placeholder="이메일 주소를 입력해주세요."
            type="email"
            rules={{ required: "이메일 주소를 입력해주세요." }}
          />
        </div>
        <div>
          <AuthInput
            name="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            rules={{ required: "비밀번호를 입력해주세요." }}
          />
        </div>
        <div>
          <AuthInput
            name="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            rules={{
              required: "비밀번호를 다시 입력해주세요.",
              validate: (value: string) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            }}
          />
        </div>
        <button type="submit" className="">
          회원가입
        </button>
      </form>
    </div>
  );
};
