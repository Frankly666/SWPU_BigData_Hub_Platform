import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";

import ShowCommentsWrapper from "./style";
import Bottom from "./cpns/bottom";
import { Comment } from "@/type/moment";

interface IProps {
  children?: ReactNode;
  avatarSize: number;
  createTime: string;
  isSon?: boolean;
  author: string;
  commentItem: Comment;
}

const ShowComments: FC<IProps> = ({
  avatarSize,
  createTime,
  isSon = false,
  author,
  commentItem
}) => {
  const authorLabel = useMemo(() => {
    return <span className="author">作者</span>;
  }, []);

  return (
    <ShowCommentsWrapper $avatarSize={avatarSize}>
      <div className="left">
        <img src={commentItem.userAvatar?.toString()} />
      </div>
      <div className="right">
        {isSon ? (
          <>
            <div className="header">
              <div className="content">
                {commentItem.user_name}
                {commentItem.user_name === author ? authorLabel : ""}

                {commentItem.commentToCommentUserName
                  ? " 回复 " + commentItem.commentToCommentUserName
                  : ""}
                {commentItem.commentToCommentUserName === author
                  ? authorLabel
                  : " : "}
                {commentItem.content}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header">
              <div className="userName">
                {commentItem.user_name}
                {commentItem.user_name === author ? authorLabel : ""}
              </div>
              <div className="label"></div>
            </div>
            <div className="content">{commentItem.content}</div>
          </>
        )}
        <Bottom
          time={createTime}
          likeCount={commentItem.commentLike?.likeCount.toString() as string}
          momentId={commentItem.moment_id?.toString() as string}
          commentId={commentItem.comment_id?.toString() as string}
          commentLikeList={
            commentItem.commentLike?.likeUserIdArr as Array<number>
          }
          commentSonsCount={
            commentItem.commentSons?.commentCount.toString() as string
          }
        />
      </div>
    </ShowCommentsWrapper>
  );
};

export default memo(ShowComments);
