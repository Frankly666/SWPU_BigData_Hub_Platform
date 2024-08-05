import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "antd";

import HeaderWrapper from "./style";
import BigdataSvg from "../../assets/svg/bigdataSvg";
import HeaderRight01 from "./cpns/header-right-01";
import HeaderDropDown from "./cpns/header-dropDown";
import { useAppSelector } from "@/store";
import HeaderRight02 from "./cpns/header-right-02";

interface IProps {
  children?: ReactNode;
}

const header: FC<IProps> = memo(() => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/home");
  };

  const { isLogin } = useAppSelector((state) => {
    return { isLogin: state.main.isLogin };
  });

  return (
    <HeaderWrapper className="wrapper01">
      <div className={classNames("left")}>
        <div className="icon" onClick={toHome}>
          <BigdataSvg size="30"></BigdataSvg>
          <h1>SWPU BigDataHub</h1>
        </div>
        <HeaderDropDown />
        <Button type="text">交流社区</Button>
        <Button type="text">技术中心</Button>
      </div>

      {/* 左边部分需要根据用户的登陆情况来进行切换 */}
      <div className="right">
        {isLogin ? <HeaderRight02 /> : <HeaderRight01 />}
      </div>
    </HeaderWrapper>
  );
});

export default header;
