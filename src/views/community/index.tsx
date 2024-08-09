import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import CommunityWrapper from "./style";
import { useAppDispatch } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";

interface IProps {
  children?: ReactNode;
}

const Community: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeTagNameAction("community"));
  }, []);

  return <CommunityWrapper>Community</CommunityWrapper>;
};

export default memo(Community);
