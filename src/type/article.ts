export interface IFormInfo {
  dragger: any;
  lable: string[];
  category: string;
}

export interface IArticleOverview {
  artcleId: number;
  title: string;
  content: string;
  coverId: number | null;
  cover: string;
  userId: number;
  user_name: string;
  createTime: Date;
  commentsCount: number;
  labels: Labels;
  like: Like;
  favor: Favor;
}

export interface IArticleDetail {
  artcleId: number;
  title: string;
  content: string;
  userId: number;
  user_name: string;
  createTime: Date;
  comments: IComment[];
  commentsCount: number;
  labels: Labels;
  like: Like;
  favor: Favor;
}

export interface IComment {
  id: number;
  userId: number;
  content: string;
  articleId: number;
  commentId: number;
  createTime: Date;
  commentToCommentId: number | null;
  commentToCommentUserName: string | null;
  commentLike: Like;
  userName: string;
  commentSons: commentSons;
}

interface Favor {
  favorUserIdArr: Array<number> | null;
  favorCount: number;
}

interface Labels {
  article_id: number;
  label_names: string[];
}

interface Like {
  likeUserIdArr: Array<number> | null;
  likeCount: number;
}

interface commentSons {
  commentIdArr: Array<null | number>;
  commentCount: number;
}
