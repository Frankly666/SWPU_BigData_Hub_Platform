import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Button, Result } from "antd";

import ArticlePublishedWrapper from "./style";
import { useNavigate } from "react-router";

interface IProps {
  children?: ReactNode;
}

const ArticlePublished: FC<IProps> = () => {
  const navigate = useNavigate();
  return (
    <ArticlePublishedWrapper>
      <Result
        status="success"
        title="成功发布文章!"
        subTitle="快去文章页面查看一下吧~"
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => {
              navigate("/community");
            }}
          >
            返回首页
          </Button>
        ]}
      />
    </ArticlePublishedWrapper>
  );
};

export default memo(ArticlePublished);
