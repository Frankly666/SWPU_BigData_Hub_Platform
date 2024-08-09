import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import TechnologyWrapper from "./style";
import { useAppDispatch } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";

interface IProps {
  children?: ReactNode;
}

const Technology: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeTagNameAction("technology"));
  });
  return <TechnologyWrapper>Technology</TechnologyWrapper>;
};

export default memo(Technology);
