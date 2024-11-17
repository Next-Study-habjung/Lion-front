import { Login } from "@/components/Composition/Pages/Login/BeforeLogin";
import { EmptyFeed } from "@/components/UI/Empty/EmptyFeed";

export default function Home() {
  return (
    <main className="w-full h-full">
      {/* <Login /> */}
      <EmptyFeed />
    </main>
  );
}
