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

interface IProps {
  children?: ReactNode;
}

const HeaderRight: FC<IProps> = () => {
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
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </HeaderRightWrapper02>
  );
};

export default memo(HeaderRight);
