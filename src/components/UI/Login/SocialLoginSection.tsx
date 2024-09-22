import { motion } from "framer-motion";
import { scrollRef } from "../Common/Layout/ScrollContainer";
import { SocialLoginButton } from "../Common/Button/SocialLoginButton";
import { PropsWithChildren } from "react";
import { Button } from "@nextui-org/react";

interface SocialLoginSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SocialLoginSection: React.FC<SocialLoginSectionProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {isOpen && (
        <motion.div className="fixed inset-0 flex justify-center items-end">
          <motion.div
            className="bg-white rounded-t-[20px] shadow-lg pt-12"
            style={{ width: 360, height: 280 }}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            ref={scrollRef}
          >
            <div className="px-8 h-full">
              <div className="flex flex-col gap-2.5">
                {SocialLoginContent.map((item, index) => (
                  <SocialLoginButton
                    key={index}
                    className={item.color}
                    icon={item.icon}
                  >
                    {item.title}
                  </SocialLoginButton>
                ))}
              </div>
              <div className="flex w-full justify-center items-center mt-5">
                <StringButton>이메일로 로그인</StringButton>
                <div className="border-1 border-r-[#C4C4C4] h-3 ml-3" />
                <StringButton>회원가입</StringButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

const StringButton: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Button className="bg-transparent text-[12px] text-[#767676] w-fit px-0">
      <span className="grow w-fit">{children}</span>
    </Button>
  );
};

const SocialLoginContent = [
  {
    title: "카카오톡 계정으로 로그인",
    color: "border-[#F2C94C]",
    icon: "kakao.png",
  },
  {
    title: "구글 계정으로 로그인",
    color: "border-[#767676]",
    icon: "google.png",
  },
  {
    title: "페이스북 계정으로 로그인",
    color: "border-[#2D9CDB]",
    icon: "facebook.png",
  },
];
