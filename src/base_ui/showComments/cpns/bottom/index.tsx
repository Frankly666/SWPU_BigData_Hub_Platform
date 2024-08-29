import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import BottomWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Bottom: FC<IProps> = () => {
  return <BottomWrapper>Bottom</BottomWrapper>;
};

export default memo(Bottom);
