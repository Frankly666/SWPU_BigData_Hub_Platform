import React, { memo, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import {
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  LikeFilled,
  StarFilled,
  MessageFilled,
  DownOutlined
} from "@ant-design/icons";
import { Button } from "antd";

import CommentAddIconTextWrapper from "./style";
import IconText from "../IconText";
import {
  addMomentFavor,
  addMomentLike,
  deleteMomentFavor,
  deleteMomentLike
} from "@/service/modules/moment";
import { useAppSelector } from "@/store";
import { Comment, IMoment } from "@/type/moment";
import EditComments from "@/base_ui/editComments";
import CommentList from "../commentList";
import { publishComment } from "@/service/modules/comment";

interface IProps {
  chidren?: ReactNode;
  item: IMoment;
}

const CommentAddIconText: FC<IProps> = ({ item }) => {
  const [isShowComments, setIsShowComments] = useState(false);
  const { userId, avatar } = useAppSelector((state) => {
    return { userId: state.user.userId, avatar: state.user.avatar };
  });
  const [showMainNum, setShowMainNum] = useState(3);
  const [allComments, addMainComment] = useState(
    item.comments.filter((item) => !item.comment_id && item.id)
  );

  console.log("allComments: ", allComments);

  // 除去子评论的主评论数
  const realCommentCount = useMemo(() => {
    let cnt = 0;
    item.comments.forEach((term) => {
      if (!term.comment_id && term.id) cnt++;
    });
    return cnt.toString();
  }, [item]);

  // 主评论排序
  allComments?.sort((a, b) => {
    const dateA = new Date(a.createTime);
    const dateB = new Date(b.createTime);
    return dateB.getTime() - dateA.getTime();
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
    return userIdList?.includes(userId as number);
  }

  async function handleConfirm(content: string) {
    const { res } = await publishComment(
      content,
      item.moment_id.toString() as string,
      null,
      null
    );

    addMainComment((last) => {
      const tem = [...last];
      tem.unshift(res);
      tem.filter((item) => !item.comment_id && item);
      return tem;
    });
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
            text={realCommentCount}
            key="list-vertical-message"
            setIsShowComments={setIsShowComments}
          />
        </div>
        {isShowComments && (
          <div className="comments">
            <div className="header">评论 {realCommentCount}</div>
            <div className="write_comment_area">
              <EditComments
                minHeight={90}
                minWidth={600}
                avatarSrc={avatar}
                avatarSize={40}
                handleConfirm={handleConfirm}
              />
            </div>
            <div className="commentsList">
              {allComments.slice(0, showMainNum).map((term: Comment, index) => {
                // 找到子评论
                const sons = item.comments.filter((i) => {
                  return term.commentSons?.commentIdArr?.includes(i.id);
                });

                // 按照时间排序, 与主评论不同
                sons.sort((a, b) => {
                  const dateA = new Date(a.createTime);
                  const dateB = new Date(b.createTime);
                  return dateA.getTime() - dateB.getTime();
                });

                return (
                  <div key={index} className="mainComment">
                    <CommentList
                      mainComment={term}
                      sons={sons}
                      momentAuthor={item.user_name as string}
                    />
                  </div>
                );
              })}
              <div className="btn">
                {showMainNum < parseInt(realCommentCount) && (
                  <Button
                    block
                    onClick={() => {
                      if (showMainNum < 15) setShowMainNum(15);

                      // 跳转至完整的详情页
                    }}
                  >
                    查看全部 {realCommentCount} 条评论
                    {showMainNum < 15 && <DownOutlined />}
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </CommentAddIconTextWrapper>
  );
};

export default memo(CommentAddIconText);
