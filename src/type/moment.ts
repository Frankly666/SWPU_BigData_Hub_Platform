export interface IMoment {
  code: number;
  data: Datum[];
}

interface Datum {
  moment_id: number;
  content: string;
  user_id: number;
  createTime: Date;
  comments: Comment[];
  userAvatar: string;
  labels?: Labels;
}

interface Comment {
  id: number | null;
  content: null | string;
  user_id: number | null;
  moment_id: number | null;
  comment_id: null;
  createTime: Date | null;
}

interface Labels {
  moment_id: number;
  label_names: string[];
}
