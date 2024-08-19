import React, { memo, useLayoutEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { Space } from "antd";

import IconTextWrapper from "./style";

interface IProps {
  children?: ReactNode;
  icon: React.FC;
  activeIcon?: React.FC;
  text: string;
  clickFn?: (isActive: boolean) => Promise<boolean>;
  checkInitIsActive?: () => boolean;
}

const IconText: FC<IProps> = (props) => {
  const { icon, text, clickFn, checkInitIsActive, activeIcon } = props;
  const [isActive, setIsActive] = useState(false);
  const [textVar, setTextVar] = useState(text);

  useLayoutEffect(() => {
    if (checkInitIsActive) {
      setIsActive(checkInitIsActive());
    }
  }, []);

  return (
    <IconTextWrapper $isActive={isActive}>
      <Space
        onClick={() => {
          if (clickFn) {
            clickFn(isActive).then((res) => {
              if (isActive) {
                setTextVar((last) => (parseInt(last) - 1).toString());
              } else {
                setTextVar((last) => (parseInt(last) + 1).toString());
              }
              setIsActive(res);
            });
          }
        }}
      >
        {activeIcon && isActive
          ? React.createElement(activeIcon)
          : React.createElement(icon)}
        {textVar}
      </Space>
    </IconTextWrapper>
  );
};

export default memo(IconText);
