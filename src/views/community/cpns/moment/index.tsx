import React, { memo, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Avatar, List } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import IconText from "@/components/IconText";
import MomentWrapper from "./style";
import { IMoment } from "@/type/moment";
import {
  addMomentFavor,
  addMomentLike,
  deleteMomentFavor,
  deleteMomentLike,
  getMoments
} from "@/service/modules/moment";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const Moment: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<IMoment>>([]);
  const { userId } = useAppSelector((state) => {
    return { userId: state.user.userId };
  });

  useEffect(() => {
    loadMomentData();
  }, []);

  async function loadMomentData() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await getMoments();
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

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
    <MomentWrapper>
      <List
        loading={loading}
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.moment_id}
            actions={[
              <IconText
                icon={StarOutlined}
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
              />,
              <IconText
                icon={LikeOutlined}
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
              />,
              <IconText
                icon={MessageOutlined}
                text={item.commentsCount?.toString()}
                key="list-vertical-message"
              />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.userAvatar} />}
              title={<a href="https://ant.design">{item.user_name}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </MomentWrapper>
  );
};

export default memo(Moment);
