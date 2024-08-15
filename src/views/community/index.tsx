import React, { memo, useLayoutEffect, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { message, Tabs, Modal, Tooltip } from "antd";
import {
  ContainerOutlined,
  SmileOutlined,
  FormOutlined
} from "@ant-design/icons";

import CommunityWrapper from "./style";
import { useAppDispatch, useAppSelector } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";
import { useNavigate } from "react-router";
import Moment from "./cpns/moment";
import Essay from "./cpns/essay";

interface IProps {
  children?: ReactNode;
}

const Community: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLogin } = useAppSelector((state) => {
    return {
      isLogin: state.main.isLogin
    };
  });
  const items = useMemo(
    () => [
      {
        key: "1",
        label: "动态",
        children: <Moment />,
        icon: <SmileOutlined />
      },
      {
        key: "2",
        label: "文章",
        children: <Essay />,
        icon: <ContainerOutlined />
      }
    ],
    []
  );
  const [isShowPublish, setIsShowPublish] = useState(false);

  useLayoutEffect(() => {
    dispatch(changeTagNameAction("community"));
    try {
      if (!isLogin) {
        message.warning("请先登录后查看!");
        navigate("/home");
      }
    } catch (err) {
      console.log("err: ", err);
    }
  }, []);

  function handlePublish() {
    setIsShowPublish(true);
  }

  return (
    <CommunityWrapper>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarExtraContent={
          <Tooltip
            title="Share your idea or experience"
            color={"blue"}
            key={"blue"}
          >
            <FormOutlined
              style={{ fontSize: "17px" }}
              onClick={handlePublish}
            />
          </Tooltip>
        }
      />
      <Modal
        title="发表动态或文章"
        style={{ top: 20 }}
        open={isShowPublish}
        onOk={() => setIsShowPublish(false)}
        onCancel={() => setIsShowPublish(false)}
        maskClosable={false}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </CommunityWrapper>
  );
};

export default memo(Community);
