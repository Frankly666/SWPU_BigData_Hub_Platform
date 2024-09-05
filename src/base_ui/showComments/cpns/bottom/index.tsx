import React, { memo, useMemo, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import {
  LikeOutlined,
  MessageOutlined,
  LikeFilled,
  MessageFilled,
  DashOutlined
} from "@ant-design/icons";
import { Dropdown, type MenuProps } from "antd";

import BottomWrapper from "./style";
import IconText, { IRefProps } from "@/components/IconText";
import {
  addCommentLike,
  deleteComment,
  deleteCommentLike,
  publishComment
} from "@/service/modules/comment";
import { useAppSelector } from "@/store";
import EditComments from "@/base_ui/editComments";
import { Comment, IAddComment, IDeleteFoo } from "@/type/moment";

interface IProps {
  children?: ReactNode;
  time: string;
  addSonComment: IAddComment;
  commentItem: Comment;
  deleteComment: IDeleteFoo;
  mainComment?: Comment;
}

const Bottom: FC<IProps> = ({
  time,
  commentItem,
  addSonComment,
  deleteComment,
  mainComment
}) => {
  const { userId, avatar } = useAppSelector((state) => {
    return {
      userId: state.user.userId,
      avatar: state.user.avatar
    };
  });
  const [isShowComments, setIsShowComments] = useState(false);
  const messageIconRef = useRef<IRefProps>(null);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          rel="noopener noreferrer"
          onClick={() => {
            deleteComment(commentItem.id);
          }}
        >
          删除
        </a>
      )
    }
  ];

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
      commentItem.commentLike!.likeUserIdArr =
        commentItem.commentLike!.likeUserIdArr.filter(
          (item) => item !== parseInt(userId)
        );

      commentItem.commentLike!.likeCount--;
      return false;
    }
    await addCommentLike(userId, momentId, commentId);
    commentItem.commentLike?.likeUserIdArr.push(parseInt(userId));
    commentItem.commentLike!.likeCount++;

    return true;
  }

  // 用于初始化展示用户是否点赞
  function userIsExistInList(commentLikeList: Array<number>): boolean {
    return commentLikeList?.includes(userId as number);
  }

  // 子评论点击提交
  async function handleConfirm(content: string) {
    const commentToCommentId = commentItem.comment_id
      ? commentItem.id?.toString()
      : null;
    const commentId = commentItem.comment_id
      ? commentItem.comment_id.toString()
      : commentItem.id?.toString();

    const { res } = await publishComment(
      content,
      commentItem.moment_id?.toString() as string,
      commentId,
      commentToCommentId
    );

    addSonComment(res);
    messageIconRef.current?.changeText("回复");
  }

  const icons = useMemo(
    () => (
      <>
        <IconText
          icon={LikeOutlined}
          activeIcon={LikeFilled}
          text={
            (commentItem.commentLike?.likeCount.toString() as string) || "0"
          }
          clickFn={(isActive) => {
            return handleIconClick(
              commentItem.commentLike?.likeUserIdArr as Array<number>,
              isActive,
              userId?.toString() as string,
              commentItem.moment_id?.toString() as string,
              commentItem.id?.toString() as string
            );
          }}
          checkInitIsActive={() => {
            return userIsExistInList(
              commentItem.commentLike?.likeUserIdArr as Array<number>
            );
          }}
        />
        <IconText
          icon={MessageOutlined}
          activeIcon={MessageFilled}
          text={"回复"}
          setIsShowComments={setIsShowComments}
          ref={messageIconRef}
        />
      </>
    ),
    [commentItem]
  );

  return (
    <BottomWrapper>
      <div className="wrapper1">
        <div className="time">{time}</div>
        <div className="icon">{icons}</div>
        {userId === commentItem.user_id && (
          <div className="delete">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <DashOutlined />
            </Dropdown>
          </div>
        )}
      </div>
      {isShowComments && (
        <EditComments
          avatarSize={20}
          avatarSrc={avatar}
          isShowAvatar={false}
          isAnimation={false}
          handleConfirm={handleConfirm}
          setIsShowComments={setIsShowComments}
          closeMessage={messageIconRef.current?.setIsActive}
        />
      )}
    </BottomWrapper>
  );
};

export default memo(Bottom);
