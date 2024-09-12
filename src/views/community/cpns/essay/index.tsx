import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import EssayWrapper from "./style";
import ShowArticle from "@/base_ui/showArticle";

interface IProps {
  children?: ReactNode;
}

const Essay: FC<IProps> = () => {
  return (
    <EssayWrapper>
      <ShowArticle />
      <ShowArticle />
    </EssayWrapper>
  );
};

export default memo(Essay);
