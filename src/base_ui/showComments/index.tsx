import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";

import ShowCommentsWrapper from "./style";
import Bottom from "./cpns/bottom";

interface IProps {
  children?: ReactNode;
  avatarSrc: string;
  avatarSize: number;
  content: string;
  createTime: string;
  userName: string;
  likeCount: string;
  momentId: string;
  commentId: string;
  commentLikeList: Array<number>;
  commentSonsCount: string;
  isSon?: boolean;
  commentToCommentUserName?: string;
  author: string;
}

const ShowComments: FC<IProps> = ({
  avatarSrc,
  avatarSize,
  content,
  createTime,
  userName,
  likeCount,
  momentId,
  commentId,
  commentLikeList,
  commentSonsCount,
  isSon = false,
  commentToCommentUserName,
  author
}) => {
  const authorLabel = useMemo(() => {
    return <span className="author">作者</span>;
  }, []);

  return (
    <ShowCommentsWrapper $avatarSize={avatarSize}>
      <div className="left">
        <img src={avatarSrc} />
      </div>
      <div className="right">
        {isSon ? (
          <>
            <div className="header">
              <div className="content">
                {userName}
                {userName === author ? authorLabel : ""}

                {commentToCommentUserName
                  ? " 回复 " + commentToCommentUserName
                  : ""}
                {commentToCommentUserName === author ? authorLabel : ":"}
                {content}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header">
              <div className="userName">
                {userName}
                {userName === author ? authorLabel : ""}
              </div>
              <div className="label"></div>
            </div>
            <div className="content">{content}</div>
          </>
        )}
        <Bottom
          time={createTime}
          likeCount={likeCount}
          momentId={momentId}
          commentId={commentId}
          commentLikeList={commentLikeList}
          commentSonsCount={commentSonsCount}
        />
      </div>
    </ShowCommentsWrapper>
  );
};

export default memo(ShowComments);
