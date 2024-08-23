import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import EditEssayWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const EditEssay: FC<IProps> = () => {
  return <EditEssayWrapper>EditEssay</EditEssayWrapper>;
};

export default memo(EditEssay);
