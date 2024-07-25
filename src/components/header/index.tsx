import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import HeaderWrapper from "./style";
import BigdataSvg from "../../assets/svg/bigdataSvg";

interface IProps {
  children?: ReactNode;
}

const header: FC<IProps> = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home");
  };

  return (
    <HeaderWrapper>
      <div className={classNames("right")} onClick={toHome}>
        <BigdataSvg size="30"></BigdataSvg>
        <h1>SWPU BigDataHub</h1>
      </div>
      <div className="left">左边</div>
    </HeaderWrapper>
  );
};

export default memo(header);
