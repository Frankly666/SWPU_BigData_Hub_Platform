export interface IUserAccount {
  name: string;
  password: string;
}

export interface IFormMessage {
  username: string;
  password: string;
  remember: boolean;
}

export type ITags = "community" | "technology" | "";

export interface IUserInfo {
  name: string;
  password: string;
  realName: string;
  gender: "male" | "female";
  phone: string | null;
  email: string | null;
  hobby: string | null;
  avatarId: number | null;
}
