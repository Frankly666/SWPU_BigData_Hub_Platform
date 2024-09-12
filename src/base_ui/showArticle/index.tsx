import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ShowArticleWrapper from "./style";
import { IArticleOverview } from "@/type/article";
import { removeMarkdownSymbols } from "@/utils/removeMarkdownSymbols";

interface IProps {
  children?: ReactNode;
  articleOverview: IArticleOverview;
}

const ShowArticle: FC<IProps> = ({ articleOverview }) => {
  return (
    <ShowArticleWrapper>
      <div className="left">
        <h3 className="title">{articleOverview.title}</h3>
        <div
          className="content"
          style={{ width: articleOverview.coverId ? "560px" : "700px" }}
        >
          {removeMarkdownSymbols(articleOverview.content)}
        </div>
        <div className="bottom">
          <div className="desc">
            <div className="name">{articleOverview.user_name}</div>
          </div>
          <div className="labels">
            {articleOverview.labels.label_names.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
      {articleOverview.coverId && (
        <div className="right">
          <img src={articleOverview.cover} alt="" />
        </div>
      )}
    </ShowArticleWrapper>
  );
};

export default memo(ShowArticle);
