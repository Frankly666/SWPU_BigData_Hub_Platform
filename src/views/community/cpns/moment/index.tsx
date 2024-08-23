import React, { memo, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Avatar, List } from "antd";

import MomentWrapper from "./style";
import { IMoment } from "@/type/moment";
import { getMoments } from "@/service/modules/moment";
import { formatTime } from "@/utils/formatData";
import LabelAndTimeDesc from "@/components/labelAndTimeDesc";
import CommentAddIconText from "@/components/CommentAddIconText";

interface IProps {
  children?: ReactNode;
}

const Moment: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<IMoment>>([]);

  useEffect(() => {
    loadMomentData();
  }, []);

  // 加载"动态"列表信息
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
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item
            key={item.moment_id}
            actions={[<CommentAddIconText key={1} item={item} />]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.userAvatar} />}
              title={<a href="https://ant.design">{item.user_name}</a>}
              description={
                <LabelAndTimeDesc
                  lables={item.labels?.label_names as Array<string>}
                  createTime={formatTime(item.createTime.toString())}
                />
              }
            />

            <div className="moment_content">{item.content}</div>
            {/* <img src="" alt="" /> */}
          </List.Item>
        )}
      />
    </MomentWrapper>
  );
};

export default memo(Moment);
