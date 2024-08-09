import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "antd";

import HeaderWrapper from "./style";
import BigdataSvg from "../../assets/svg/bigdataSvg";
import HeaderRight01 from "./cpns/header-right-01";
import HeaderDropDown from "./cpns/header-dropDown";
import { useAppDispatch, useAppSelector } from "@/store";
import HeaderRight02 from "./cpns/header-right-02";
import { ITags } from "@/type/users";
import { changeTagNameAction } from "@/store/modules/main";

interface IProps {
  children?: ReactNode;
}

const header: FC<IProps> = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toHome = () => {
    navigate("/home");
    dispatch(changeTagNameAction(""));
  };

  const { isLogin, tagName } = useAppSelector((state) => {
    return { isLogin: state.main.isLogin, tagName: state.main.tagName };
  });

  const handleTagName = (tagName: ITags) => {
    navigate(`/${tagName}`);
    dispatch(changeTagNameAction(tagName));
  };

  return (
    <HeaderWrapper className="wrapper01" $tagName={tagName}>
      <div className={classNames("left")}>
        <div className="icon" onClick={toHome}>
          <BigdataSvg size="30"></BigdataSvg>
          <h1>SWPU BigDataHub</h1>
        </div>
        <HeaderDropDown />
        <Button
          type="text"
          className="community"
          onClick={() => {
            handleTagName("community");
          }}
        >
          交流社区
        </Button>
        <Button
          type="text"
          className="technology"
          onClick={() => {
            handleTagName("technology");
          }}
        >
          技术中心
        </Button>
      </div>

      {/* 左边部分需要根据用户的登陆情况来进行切换 */}
      <div className="right">
        {isLogin ? <HeaderRight02 /> : <HeaderRight01 />}
      </div>
    </HeaderWrapper>
  );
});

export default header;
