import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Tag } from "antd";

import LabelAndTimeDescWrapper from "./style";

interface IProps {
  children?: ReactNode;
  createTime: string;
  lables: Array<string>;
}

const LabelAndTimeDesc: FC<IProps> = ({ createTime, lables }) => {
  return (
    <LabelAndTimeDescWrapper>
      <div className="content">
        <div className="label">
          {lables?.map((item, index) => {
            return (
              <Tag bordered={false} color="geekblue" key={index}>
                {item}
              </Tag>
            );
          })}
        </div>
        <div className="desc">{createTime}</div>
      </div>
    </LabelAndTimeDescWrapper>
  );
};

export default memo(LabelAndTimeDesc);
