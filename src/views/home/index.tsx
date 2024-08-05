import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default memo(Home);
