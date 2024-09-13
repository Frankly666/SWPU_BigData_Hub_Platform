import React, { useEffect, useState } from "react";
import VditorPreview from "vditor/dist/method";
import ArticleDetailWrapper from "./style";
import { useParams } from "react-router";
import "vditor/dist/index.css";

import { getAritcleDetail } from "@/service/modules/article";
import { IArticleDetail } from "@/type/article";

const ArticleDetail: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [articleDetail, setArticleDetail] = useState<IArticleDetail | null>(
    null
  );

  useEffect(() => {
    getAritcleDetail(articleId as string).then((res: any) => {
      setArticleDetail(res.data);
      // 当 Markdown 内容改变时，重新渲染
      if (res.data && res.data.content) {
        renderMarkdown(res.data.content);
      }
      document.title = res.data?.title;
    });
  }, [articleId]);

  const renderMarkdown = (markdown: string) => {
    const previewElement = document.getElementById("articleDetail"); // 确保你有一个 id 为 "preview" 的元素
    if (previewElement) {
      VditorPreview.preview(previewElement as HTMLDivElement, markdown, {
        mode: "light"
        // ...其他选项
      });
    }
  };

  return (
    <ArticleDetailWrapper>
      <div className="left"></div>
      <div className="content">
        <div className="top"></div>
        <div id="articleDetail">{/* Markdown 内容将在这里渲染 */}</div>
      </div>
      <div className="right">
        <div className="userCard"></div>
        <div className="outline"></div>
      </div>
    </ArticleDetailWrapper>
  );
};

export default ArticleDetail;
