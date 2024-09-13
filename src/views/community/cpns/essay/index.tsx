import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

import EssayWrapper from "./style";
import { IArticleOverview } from "@/type/article";
import { getAritcleList } from "@/service/modules/article";
import ShowArticle from "@/base_ui/showArticle";
import { WEB_BASE_URL } from "@/service/config";

interface IProps {
  children?: ReactNode;
}

const Essay: FC<IProps> = () => {
  const [articleList, setArticleList] = useState<Array<IArticleOverview>>([]);

  function toDetailPage(articleId: number) {
    window.open(`${WEB_BASE_URL}/#/articleDetail/${articleId}`, "_blank");
  }

  useEffect(() => {
    getAritcleList().then((res) => {
      setArticleList(res.data);
    });
  }, []);

  return (
    <EssayWrapper>
      {articleList.map((item) => {
        return (
          <div
            key={item.artcleId}
            onClick={() => {
              toDetailPage(item.artcleId);
            }}
          >
            <ShowArticle articleOverview={item} />
          </div>
        );
      })}
    </EssayWrapper>
  );
};

export default memo(Essay);
