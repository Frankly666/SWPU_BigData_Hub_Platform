import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import {
  LikeOutlined,
  MessageOutlined,
  LikeFilled,
  MessageFilled
} from "@ant-design/icons";

import BottomWrapper from "./style";
import IconText from "@/components/IconText";
import { addCommentLike, deleteCommentLike } from "@/service/modules/comment";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
  time: string;
  likeCount: string;
  momentId: string;
  commentId: string;
  commentLikeList: Array<number>;
}

const Bottom: FC<IProps> = ({
  time,
  likeCount,
  momentId,
  commentId,
  commentLikeList
}) => {
  const { userId, avatar } = useAppSelector((state) => {
    return { userId: state.user.userId, avatar: state.user.avatar };
  });

  // 处理点击时用户的点赞或者取消点赞的操作
  async function handleIconClick(
    commentLikeList: Array<number>,
    isActive: boolean,
    userId: string,
    momentId: string,
    commentId: string
  ): Promise<boolean> {
    if (isActive) {
      // 向后端发送删除请求
      await deleteCommentLike(userId, momentId, commentId);

      return false;
    }
    await addCommentLike(userId, momentId, commentId);

    return true;
  }

  // 用于初始化展示用户是否点赞
  function userIsExistInList(commentLikeList: Array<number>): boolean {
    return commentLikeList.includes(userId as number);
  }

  return (
    <BottomWrapper>
      <div className="time">{time}</div>
      <div className="main">
        <div className="icon">
          <IconText
            icon={LikeOutlined}
            activeIcon={LikeFilled}
            text={likeCount}
            clickFn={(isActive) => {
              return handleIconClick(
                commentLikeList,
                isActive,
                userId?.toString() as string,
                momentId,
                commentId
              );
            }}
            checkInitIsActive={() => {
              return userIsExistInList(commentLikeList);
            }}
          />
          <div className="space" style={{ width: "30px" }}></div>
          <IconText
            icon={MessageOutlined}
            activeIcon={MessageFilled}
            text={likeCount}
          />
        </div>
      </div>
    </BottomWrapper>
  );
};

export default memo(Bottom);
