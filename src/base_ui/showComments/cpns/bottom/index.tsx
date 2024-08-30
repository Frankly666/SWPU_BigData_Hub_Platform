import React, { memo, useState } from "react";
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
import EditComments from "@/base_ui/editComments";

interface IProps {
  children?: ReactNode;
  time: string;
  likeCount: string;
  momentId: string;
  commentId: string;
  commentLikeList: Array<number>;
  commentSonsCount: string;
}

const Bottom: FC<IProps> = ({
  time,
  likeCount,
  momentId,
  commentId,
  commentLikeList,
  commentSonsCount
}) => {
  const { userId, avatar } = useAppSelector((state) => {
    return { userId: state.user.userId, avatar: state.user.avatar };
  });
  const [isShowComments, setIsShowComments] = useState(false);

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
    return commentLikeList?.includes(userId as number);
  }

  return (
    <BottomWrapper>
      <div className="wrapper1">
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
            <div className="space" style={{ width: "25px" }}></div>
            <IconText
              icon={MessageOutlined}
              activeIcon={MessageFilled}
              text={commentSonsCount || "0"}
              setIsShowComments={setIsShowComments}
            />
          </div>
        </div>
      </div>
      {isShowComments && (
        <EditComments
          avatarSize={20}
          avatarSrc={avatar}
          isShowAvatar={false}
          isAnimation={false}
        />
      )}
    </BottomWrapper>
  );
};

export default memo(Bottom);
