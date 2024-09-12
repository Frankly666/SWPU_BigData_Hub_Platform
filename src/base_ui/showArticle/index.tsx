import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ShowArticleWrapper from "./style";

interface IProps {
  children?: ReactNode;
}

const ShowArticle: FC<IProps> = () => {
  return (
    <ShowArticleWrapper>
      <div className="left">
        <h2 className="title">hhhhhhhhhhhhh</h2>
        <div className="content">是地方就是离开附件是的封建士大夫</div>
        <div className="bottom">
          <div className="desc">码农</div>
          <div className="labels">后端</div>
        </div>
      </div>
      <div className="right">
        <img src="" alt="" />
      </div>
    </ShowArticleWrapper>
  );
};

export default memo(ShowArticle);
