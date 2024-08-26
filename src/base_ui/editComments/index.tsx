import React, { memo, useRef, useState } from "react";
import type { FC, ReactNode } from "react";

import EditCommentsWrapper from "./style";

interface IProps {
  children?: ReactNode;
  avatarSrc: string;
  minHeight: number;
  minWidth: number;
  avatarSize: number;
}

const EditComments: FC<IProps> = ({
  avatarSrc,
  minHeight,
  minWidth,
  avatarSize
}) => {
  const [rightHeight, setRightHeight] = useState("0");
  const [border, setBorder] = useState("white");
  const [bgc, setBgc] = useState("#f2f3f5");
  const [isListen, setIsListen] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <EditCommentsWrapper
      $minHeight={minHeight}
      $minWidth={minWidth}
      $avatarSize={avatarSize}
    >
      <div className="left">
        <img src={avatarSrc} />
      </div>
      <div
        className="right"
        style={{
          height: rightHeight,
          borderColor: border,
          backgroundColor: bgc
        }}
        onClick={() => {
          inputRef.current?.focus();
        }}
        onMouseEnter={() => {
          if (isListen) setBgc("#e4e6eb");
        }}
        onMouseLeave={() => {
          if (isListen) setBgc("#f2f3f5");
        }}
      >
        <input
          ref={inputRef}
          onFocus={() => {
            setRightHeight("200px");
            setBgc("white");
            setBorder("#1e80ff");
            setIsListen(false);
          }}
          onBlur={() => {
            setRightHeight("0");
            setBgc("#f2f3f5");
            setBorder("white");
            setIsListen(true);
          }}
          placeholder="友善交流"
        ></input>
      </div>
    </EditCommentsWrapper>
  );
};

export default memo(EditComments);
