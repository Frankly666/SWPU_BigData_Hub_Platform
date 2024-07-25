import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import HeaderRightWrapper01 from "./style";
import { Button } from "antd";

interface IProps {
  children?: ReactNode;
}

// 未登录状态展示的header右边部分
const HeaderRight: FC<IProps> = () => {
  return (
    <HeaderRightWrapper01>
      <div className="btn">
        <Button style={{ marginRight: "10px" }}>登录</Button>
        <Button type="primary">注册</Button>
      </div>
    </HeaderRightWrapper01>
  );
};

export default memo(HeaderRight);
