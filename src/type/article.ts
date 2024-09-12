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
