import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { useAppDispatch } from "@/store";
import { changeTagNameAction } from "@/store/modules/main";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeTagNameAction(""));
  }, []);

  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default memo(Home);
