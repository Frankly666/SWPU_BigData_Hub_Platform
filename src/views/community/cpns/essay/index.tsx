import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import EssayWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Essay: FC<IProps> = () => {
  return <EssayWrapper></EssayWrapper>;
};

export default memo(Essay);
