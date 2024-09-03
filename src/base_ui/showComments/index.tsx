import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";

import ShowCommentsWrapper from "./style";
import Bottom from "./cpns/bottom";
import { Comment, IAddComment, IDeleteFoo } from "@/type/moment";

interface IProps {
  children?: ReactNode;
  avatarSize: number;
  createTime: string;
  isSon?: boolean;
  author: string;
  commentItem: Comment;
  addSonComment: IAddComment; // 局部刷新刚刚发表的动态的函数
  deleteComment: IDeleteFoo;
}

const ShowComments: FC<IProps> = ({
  avatarSize,
  createTime,
  isSon = false,
  author,
  commentItem,
  addSonComment,
  deleteComment
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
          addSonComment={addSonComment}
          commentItem={commentItem}
          deleteComment={deleteComment}
        />
      </div>
    </ShowCommentsWrapper>
  );
};

export default memo(ShowComments);
