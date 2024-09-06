import React, { memo, useMemo } from "react";
import type { FC, ReactNode } from "react";
import type { MenuProps } from "antd";
import { Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined
} from "@ant-design/icons";

import HeaderRightWrapper02 from "./style";
import { useNavigate } from "react-router";
import { LOGIN_TOKEN, REMEMBER } from "@/global/constant";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const HeaderRight: FC<IProps> = () => {
  const { avatar } = useAppSelector((state) => {
    return {
      avatar: state.user.avatar
    };
  });

  const navigate = useNavigate();
  const items = useMemo(() => {
    const tem: MenuProps["items"] = [
      {
        key: "1",
        label: (
          <a target="_blank" rel="noopener noreferrer" onClick={handleSettings}>
            帐号及设置
          </a>
        ),
        icon: <SettingOutlined />
      },
      {
        type: "divider"
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" onClick={handleLogOut}>
            退出登录
          </a>
        ),
        key: "3",
        icon: <LogoutOutlined />
      }
    ];

    return tem;
  }, []);

  function handleLogOut() {
    if (localStorage.getItem(REMEMBER)) {
      localStorage.removeItem(LOGIN_TOKEN);
    } else {
      localStorage.clear();
    }
    window.location.reload();
  }

  function handleSettings() {
    navigate("/user");
  }
  return (
    <HeaderRightWrapper02>
      <Dropdown menu={{ items }} placement="bottom">
        <Avatar
          size={40}
          style={{ backgroundColor: "#1677ff" }}
          icon={<UserOutlined />}
          src={avatar}
        />
      </Dropdown>
    </HeaderRightWrapper02>
  );
};

export default memo(HeaderRight);
