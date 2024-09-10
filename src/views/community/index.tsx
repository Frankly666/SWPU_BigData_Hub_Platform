import React, { memo, useLayoutEffect, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { message, Tabs, Modal, Tooltip } from "antd";
import {
  ContainerOutlined,
  SmileOutlined,
  FormOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router";

import CommunityWrapper from "./style";
import { useAppDispatch, useAppSelector } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";
import Moment from "./cpns/moment";
import Essay from "./cpns/essay";
import EditComments from "@/base_ui/editComments";
import { WEB_BASE_URL } from "@/service/config";

interface IProps {
  children?: ReactNode;
}

const Community: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLogin, avatar } = useAppSelector((state) => {
    return {
      isLogin: state.main.isLogin,
      avatar: state.user.avatar
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
  const [isMoment, setIsMoment] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 路由守卫
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
    if (isMoment) showModal();
    else window.open(`${WEB_BASE_URL}/#/editEssay`, "_blank");
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CommunityWrapper>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={690}
        maskClosable={false}
      >
        <EditComments
          minHeight={200}
          isAnimation={false}
          isShowAvatar={false}
          buttonText="发布"
        />
      </Modal>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarExtraContent={
          isMoment ? (
            <Tooltip title="发表动态" color={"blue"} key={"blue"}>
              <FormOutlined
                style={{ fontSize: "17px" }}
                onClick={handlePublish}
              />
            </Tooltip>
          ) : (
            <Tooltip title="写文章" color={"blue"} key={"blue"}>
              <FormOutlined
                style={{ fontSize: "17px" }}
                onClick={handlePublish}
              />
            </Tooltip>
          )
        }
        onTabClick={(key) => {
          setIsMoment(key === "1");
        }}
      />
    </CommunityWrapper>
  );
};

export default memo(Community);
