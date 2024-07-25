import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import UserWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const User: FC<IProps> = () => {
  return <UserWrapper>User</UserWrapper>;
};

export default memo(User);
