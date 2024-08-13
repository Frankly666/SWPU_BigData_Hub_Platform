import React, { memo, useLayoutEffect, useState, useEffect } from "react";
import type { FC, ReactNode } from "react";
import { message, Tabs } from "antd";
import { ContainerOutlined, SmileOutlined } from "@ant-design/icons";

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
  const [items] = useState([
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
  ]);

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

  return (
    <CommunityWrapper>
      <Tabs defaultActiveKey="1" items={items} />
    </CommunityWrapper>
  );
};

export default memo(Community);
