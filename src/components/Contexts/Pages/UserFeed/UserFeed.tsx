import { UserProfileSection } from "./UserSection/UserProfile";

interface UserFeedProps {
  userId: string;
}
export const UserFeed: React.FC<UserFeedProps> = ({ userId }) => {
  return (
    <div>
      <h1>UserFeed</h1>
      <UserProfileSection />
    </div>
  );
};
