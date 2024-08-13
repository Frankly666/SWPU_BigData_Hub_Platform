import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Space } from "antd";

import IconTextWrapper from "./style";

interface IProps {
  children?: ReactNode;
  icon: React.FC;
  text: string;
}

const IconText: FC<IProps> = (props) => {
  const { icon, text } = props;
  return (
    <IconTextWrapper>
      <Space>
        {React.createElement(icon)}
        {text}
      </Space>
    </IconTextWrapper>
  );
};

export default memo(IconText);
