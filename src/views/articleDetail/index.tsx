import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";

import ArticleDetailWrapper from "./style";
import { useLocation, useParams } from "react-router";

interface IProps {
  children?: ReactNode;
}

const ArticleDetail: FC<IProps> = () => {
  const { articleId } = useParams();
  const [articleDetail, setArticleDetail] = useState<[]>();
  const location = useLocation();
  console.log("location: ", location.pathname);

  return <ArticleDetailWrapper>ArticleDetail</ArticleDetailWrapper>;
};

export default memo(ArticleDetail);
