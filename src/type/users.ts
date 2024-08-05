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
