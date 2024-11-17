import { UserFeed } from "@/components/Contexts/Pages/UserFeed/UserFeed";

export default function Page({
  params: { userId },
}: {
  params: { userId: string };
}) {
  return <UserFeed userId={userId} />;
}
