import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import HeaderRightWrapper02 from "./style";

interface IProps {
  children?: ReactNode;
}

const HeaderRight: FC<IProps> = () => {
  return <HeaderRightWrapper02>HeaderRight</HeaderRightWrapper02>;
};

export default memo(HeaderRight);
