import React, { memo, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { Avatar, List, Popconfirm, message } from "antd";
import { DeleteTwoTone, QuestionCircleOutlined } from "@ant-design/icons";

import MomentWrapper from "./style";
import { IMoment } from "@/type/moment";
import { deleteMoment, getMoments } from "@/service/modules/moment";
import { formatTime } from "@/utils/formatData";
import LabelAndTimeDesc from "@/components/labelAndTimeDesc";
import CommentAddIconText from "@/components/commentAddIconText";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const Moment: FC<IProps> = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<IMoment>>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const { userId } = useAppSelector((state) => {
    return {
      userId: state.user.userId
    };
  });

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

  // 删除动态的操作
  async function handleDeleteMoment(momentId: number) {
    await deleteMoment(momentId);

    messageApi.open({
      type: "success",
      content: "成功删除动态!"
    });

    setData((last) => {
      return last.filter((item) => item.moment_id !== momentId);
    });
  }

  return (
    <MomentWrapper>
      {contextHolder}
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
            <div className="content">
              <div className="moment_content">{item.content}</div>
            </div>
            {item.user_id === userId && (
              <div className="delete">
                <Popconfirm
                  title="delete"
                  description="你确定删除此条评论吗?"
                  icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  okText="确认"
                  cancelText="取消"
                  onConfirm={() => {
                    handleDeleteMoment(item.moment_id);
                  }}
                >
                  <DeleteTwoTone />
                </Popconfirm>
              </div>
            )}
            {/* <img src="" alt="" /> */}
          </List.Item>
        )}
      />
    </MomentWrapper>
  );
};

export default memo(Moment);
