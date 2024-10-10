import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { useAppDispatch } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";
import { AuroraBackgroundDemo } from "./cpns/HomeShow";

import MainWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeTagNameAction(""));
  }, []);

  return (
    <MainWrapper>
      <AuroraBackgroundDemo />
    </MainWrapper>
  );
};

export default memo(Home);
