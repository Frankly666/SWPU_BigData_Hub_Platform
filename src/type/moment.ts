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

export interface Comment {
  id: number;
  content: null | string;
  user_id: number | null;
  moment_id: number | null;
  comment_id: number | null;
  createTime: Date;
  user_name: string | null;
  commentLike: Like | null;
  commentSons: commentSons | null;
  userAvatar: string | null;
  commentToCommentId: number | null;
  commentToCommentUserName: string | null;
}

interface Favor {
  favorUserIdArr: Array<null | number>;
  favorCount: number;
}

interface Labels {
  moment_id?: number;
  label_names?: string[];
}

interface Like {
  likeUserIdArr: Array<null | number>;
  likeCount: number;
}

interface commentSons {
  commentIdArr: Array<null | number>;
  commentCount: number;
}

export type IAddComment = (comment: Comment) => void;
export type IDeleteFoo = (id: number) => void;
