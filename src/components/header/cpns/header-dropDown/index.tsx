import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import HeaderDropDownWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        BigData后台管理系统
      </a>
    )
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        BigData考勤系统
      </a>
    )
    // disabled: true
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Frankly个人博客
      </a>
    ),
    icon: <SmileOutlined />

    // disabled: true
  }
];

const HeaderDropDown: FC<IProps> = () => {
  return (
    <HeaderDropDownWrapper>
      <Dropdown menu={{ items }} placement="bottom">
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            团队产品
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </HeaderDropDownWrapper>
  );
};

export default memo(HeaderDropDown);
