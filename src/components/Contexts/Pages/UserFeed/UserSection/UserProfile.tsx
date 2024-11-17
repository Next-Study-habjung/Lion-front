"use client";
import { User } from "@/service/model/User.model";
import { Avatar } from "@nextui-org/react";
import React, { FC } from "react";

interface UserProfileSectionProps {}
export const UserProfileSection: React.FC<UserProfileSectionProps> = ({}) => {
  return (
    <section className="w-full flex flex-col flex-1 pt-[30px] px-14 pb-[26px]">
      <div className="w-full flex border-1 items-center justify-around">
        <UserRelations
          relations={{ relation: "followers", count: user.followerCount }}
        />
        <UserProfileImage image={user.profileImage} />
        <UserRelations
          relations={{ relation: "followings", count: user.followCount }}
        />
      </div>
    </section>
  );
};
interface UserRelationsProps {
  relations: { relation: "followers" | "followings"; count: number };
}
const UserRelations: FC<UserRelationsProps> = ({ relations }) => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <h3 className="text-lg font-bold">{relations.count}</h3>
      <p className="text-capation text-[10px] leading-3">
        {relations.relation}
      </p>
    </div>
  );
};
interface UserProfileProps {
  image: string;
}
const UserProfileImage: React.FC<UserProfileProps> = ({ image }) => {
  return (
    <div>
      <Avatar src={image} size="lg" />
    </div>
  );
};

const user = new User({
  id: "1",
  name: "홍길동",
  email: "test@test.com",
  followCount: 1,
  followerCount: 1,
  accountName: "test",
  profileImage: "test",
  createdAt: new Date(),
  updatedAt: new Date(),
  userRelations: [],
});
