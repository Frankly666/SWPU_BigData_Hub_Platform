import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  LikeFilled,
  StarFilled,
  MessageFilled
} from "@ant-design/icons";

import CommentAddIconTextWrapper from "./style";
import IconText from "../IconText";
import {
  addMomentFavor,
  addMomentLike,
  deleteMomentFavor,
  deleteMomentLike
} from "@/service/modules/moment";
import { useAppSelector } from "@/store";
import { IMoment } from "@/type/moment";
import EditComments from "@/base_ui/editComments";
import ShowComments from "@/base_ui/showComments";
import { formatTime } from "@/utils/formatData";

interface IProps {
  chidren?: ReactNode;
  item: IMoment;
}

const CommentAddIconText: FC<IProps> = ({ item }) => {
  const [isShowComments, setIsShowComments] = useState(false);
  const { userId, avatar } = useAppSelector((state) => {
    return { userId: state.user.userId, avatar: state.user.avatar };
  });

  // 处理点击时用户的点赞或者取消点赞的操作
  async function handleIconClick(
    userIdList: Array<number>,
    momentId: number,
    isLike: boolean,
    isActive: boolean
  ): Promise<boolean> {
    if (isActive) {
      // 向后端发送删除请求
      if (isLike) {
        await deleteMomentLike(
          userId?.toString() as string,
          momentId.toString()
        );
      } else {
        await deleteMomentFavor(
          userId?.toString() as string,
          momentId.toString()
        );
      }
      return false;
    }
    if (isLike) {
      await addMomentLike(userId?.toString() as string, momentId.toString());
    } else {
      await addMomentFavor(userId?.toString() as string, momentId.toString());
    }
    return true;
  }

  // 用于初始化展示用户是否点赞
  function userIsExistInList(userIdList: Array<number>): boolean {
    return userIdList.includes(userId as number);
  }

  return (
    <CommentAddIconTextWrapper>
      <div className="wrap">
        <div className="icons">
          <IconText
            icon={LikeOutlined}
            activeIcon={LikeFilled}
            text={item.like.likeCount?.toString()}
            key="list-vertical-like-o"
            clickFn={(isActive) => {
              return handleIconClick(
                item.like.likeUserIdArr as Array<number>,
                item.moment_id,
                true,
                isActive
              );
            }}
            checkInitIsActive={() =>
              userIsExistInList(item.like.likeUserIdArr as Array<number>)
            }
          />
          <IconText
            icon={StarOutlined}
            activeIcon={StarFilled}
            text={item.favor.favorCount?.toString()}
            key="list-vertical-star-o"
            clickFn={(isActive) => {
              return handleIconClick(
                item.favor.favorUserIdArr as Array<number>,
                item.moment_id,
                false,
                isActive
              );
            }}
            checkInitIsActive={() =>
              userIsExistInList(item.favor.favorUserIdArr as Array<number>)
            }
          />
          <IconText
            icon={MessageOutlined}
            activeIcon={MessageFilled}
            text={item.commentsCount?.toString()}
            key="list-vertical-message"
            setIsShowComments={setIsShowComments}
          />
        </div>
        {isShowComments && (
          <div className="comments">
            <div className="header">评论 {item.commentsCount}</div>
            <div className="write_comment_area">
              <EditComments
                minHeight={90}
                minWidth={600}
                avatarSrc={avatar}
                avatarSize={35}
              />
            </div>
            <div className="commentsList">
              {item.comments.map((term, index) => {
                if (term.commentSons) {
                  // 找到子评论
                  const sons = item.comments.filter((i) => {
                    return term.commentSons?.likeCommentIdArr.includes(i.id);
                  });

                  return (
                    <div key={index} className="mainComment">
                      <div className="top">
                        <ShowComments
                          avatarSize={30}
                          avatarSrc={term.userAvatar as string}
                          content={term.content as string}
                          createTime={formatTime(
                            term.createTime?.toString() as string
                          )}
                          userName={term.user_name as string}
                          likeCount={
                            term.commentLike?.likeCount.toString() as string
                          }
                          commentId={term.id?.toString() as string}
                          momentId={term.moment_id?.toString() as string}
                          commentLikeList={
                            term.commentLike?.likeUserIdArr as Array<number>
                          }
                        />
                      </div>
                      <div className="sonList">
                        {sons.map((j, index) => (
                          <div key={index}>{j.content}</div>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return <div key={index}></div>;
                }
              })}
            </div>
          </div>
        )}
      </div>
    </CommentAddIconTextWrapper>
  );
};

export default memo(CommentAddIconText);
