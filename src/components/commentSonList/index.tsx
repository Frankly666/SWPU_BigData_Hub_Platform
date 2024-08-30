import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";

import CommentSonListWrapper from "./style";
import { Comment } from "@/type/moment";
import ShowComments from "@/base_ui/showComments";
import { formatTime } from "@/utils/formatData";

interface IProps {
  children?: ReactNode;
  sons: Array<Comment>;
  momentAuthor: string;
}

const CommentSonList: FC<IProps> = ({ sons, momentAuthor }) => {
  const [showNum, setShowNum] = useState(3);

  return (
    <CommentSonListWrapper>
      {sons.slice(0, showNum).map((term, index) => (
        <div className="wrap1" key={index}>
          <ShowComments
            isSon={true}
            commentToCommentUserName={term.commentToCommentUserName as string}
            author={momentAuthor}
            avatarSize={25}
            avatarSrc={term.userAvatar as string}
            content={term.content as string}
            createTime={formatTime(term.createTime?.toString() as string)}
            userName={term.user_name as string}
            likeCount={term.commentLike?.likeCount.toString() as string}
            commentId={term.id?.toString() as string}
            momentId={term.moment_id?.toString() as string}
            commentLikeList={term.commentLike?.likeUserIdArr as Array<number>}
            commentSonsCount={
              term.commentSons?.commentCount.toString() as string
            }
          />
        </div>
      ))}
      {showNum < sons.length && (
        <div
          className="more"
          onClick={() => {
            setShowNum(sons.length);
          }}
        >
          查看全部 {sons.length.toString()} 条评论 {<DownOutlined />}
        </div>
      )}
    </CommentSonListWrapper>
  );
};

export default memo(CommentSonList);
