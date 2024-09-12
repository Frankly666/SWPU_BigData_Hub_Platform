import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import EssayWrapper from "./style";
import { IArticleOverview } from "@/type/article";
import { getAritcleList } from "@/service/modules/article";
import ShowArticle from "@/base_ui/showArticle";

interface IProps {
  children?: ReactNode;
}

const Essay: FC<IProps> = () => {
  const [articleList, setArticleList] = useState<Array<IArticleOverview>>([]);

  useEffect(() => {
    getAritcleList().then((res) => {
      setArticleList(res.data);
    });
  }, []);

  return (
    <EssayWrapper>
      {articleList.map((item) => {
        return <ShowArticle key={item.artcleId} articleOverview={item} />;
      })}
    </EssayWrapper>
  );
};

export default memo(Essay);
