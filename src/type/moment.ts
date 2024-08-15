export interface IMoment {
  moment_id: number;
  content: string;
  user_id: number;
  createTime: Date;
  comments: Comment[];
  commentsCount: number;
  userAvatar: string;
  labels: Labels;
  like: Like;
  favor: Favor;
  user_name: string | null;
}

interface Comment {
  id: number | null;
  content: null | string;
  user_id: number | null;
  moment_id: number | null;
  comment_id: number | null;
  createTime: Date | null;
  user_name: string | null;
}

interface Favor {
  favorUserIdArr: Array<null | number>;
  favorCount: number;
}

interface Labels {
  moment_id?: number;
  label_names?: string[];
}

export interface Like {
  likeUserIdArr: Array<null | number>;
  likeCount: number;
}
