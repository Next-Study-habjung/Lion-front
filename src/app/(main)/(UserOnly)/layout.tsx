import { BeforeLogin } from "@/components/Composition/Pages/Login/BeforeLogin";
// import { BottomNav } from "@/components/UI/Common/BottomNav/BottomNav";
// import { Header } from "@/components/UI/Common/Header/Header";
import { UserOnly } from "@/components/Composition/Layout.ts/UserOnly";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UserOnly fallback={<BeforeLogin />}>
        <div className="relative">
          {/* <Header /> */}
          {children}
          {/* <BottomNav /> */}
        </div>
      </UserOnly>
    </>
  );
}
import { ReactNode } from "react";
