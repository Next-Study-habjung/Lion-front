export interface UserArgs {
  _id: string;
  username: string;
  accountname: string;
  intro: string;
  image: string;
  isfollow: boolean;
  following: UserArgs[];
  follower: UserArgs[];
  followingCount: number;
  followerCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  id: string;
  intro: string;
  accountname: string;
  username: string;
  following: { followingCount: number; following: UserArgs[] };
  follower: { followerCount: number; follower: UserArgs[] };
  profileImage: string;
  constructor({
    _id,
    followerCount,
    followingCount,
    image,
    intro,
    accountname,
    username,
  }: UserArgs) {
    this.id = _id;
    this.intro = intro;
    this.username = username;
    this.accountname = accountname;
    this.profileImage = image;
    this.following = { followingCount: followingCount, following: [] };
    this.follower = { followerCount: followerCount, follower: [] };
  }
}
