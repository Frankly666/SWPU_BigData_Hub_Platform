import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
}

const Demo: FC<IProps> = () => {
  return <div>Home</div>;
};

export default memo(Demo);
