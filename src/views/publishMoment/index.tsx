import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import PublishMomentWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const PublishMoment: FC<IProps> = () => {
  return <PublishMomentWrapper>PublishMoment</PublishMomentWrapper>;
};

export default memo(PublishMoment);
