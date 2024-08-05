import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Spin } from "antd";

import LoadingWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Loading: FC<IProps> = () => {
  return (
    <LoadingWrapper>
      <Spin tip="Loading" size="large"></Spin>
    </LoadingWrapper>
  );
};

export default memo(Loading);
