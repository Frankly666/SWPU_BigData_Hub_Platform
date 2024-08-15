import React, { memo, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Avatar, List } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import IconText from "@/components/IconText";
import MomentWrapper from "./style";
import { IMoment } from "@/type/moment";
import { getMoments } from "@/service/modules/moment";

interface IProps {
  children?: ReactNode;
}

const Moment: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<IMoment>>([]);

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
              />,
              <IconText
                icon={LikeOutlined}
                text={item.like.likeCount?.toString()}
                key="list-vertical-like-o"
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
