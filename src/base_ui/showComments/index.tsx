import React, { memo } from "react";
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
  commentLikeList
}) => {
  return (
    <ShowCommentsWrapper $avatarSize={avatarSize}>
      <div className="left">
        <img src={avatarSrc} />
      </div>
      <div className="right">
        <div className="header">
          <div className="userName">{userName}</div>
          <div className="label"></div>
        </div>
        <div className="content">{content}</div>
        <Bottom
          time={createTime}
          likeCount={likeCount}
          momentId={momentId}
          commentId={commentId}
          commentLikeList={commentLikeList}
        />
      </div>
    </ShowCommentsWrapper>
  );
};

export default memo(ShowComments);
