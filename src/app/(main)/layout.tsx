import { Toaster } from "react-hot-toast";
import { ScaleLayout } from "@/components/UI/Common/Layout/ScaleLayout";
import { ScreenHeight } from "@/components/UI/Common/Layout/ScreenHeight";
import { ScrollContainerLayout } from "@/components/UI/Common/Layout/ScrollContainer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScaleLayout>
      <ScrollContainerLayout>
        <ScreenHeight>
          {/* <UserOnly></UserOnly> */}
          <div>
            {children}
            <Toaster position="bottom-center" />
          </div>
        </ScreenHeight>
      </ScrollContainerLayout>
    </ScaleLayout>
  );
}
