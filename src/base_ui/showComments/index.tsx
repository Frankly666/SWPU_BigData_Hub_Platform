import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ShowCommentsWrapper from "./style";
import Bottom from "./cpns/bottom";

interface IProps {
  children?: ReactNode;
  avatarSrc: string;
  avatarSize: number;
}

const ShowComments: FC<IProps> = ({ avatarSrc, avatarSize }) => {
  return (
    <ShowCommentsWrapper $avatarSize={avatarSize}>
      <div className="left">
        <img src={avatarSrc} />
      </div>
      <div className="right">
        <div className="contents"></div>
        <Bottom />
      </div>
    </ShowCommentsWrapper>
  );
};

export default memo(ShowComments);
