import React, { useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import VditorPreview from "vditor/dist/method";
import ArticleDetailWrapper from "./style";
import { useParams } from "react-router";
import "vditor/dist/index.css";
import { Anchor } from "antd";

import { getArticleDetail } from "@/service/modules/article";
import { IArticleDetail } from "@/type/article";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

interface IAnchor {
  title: ReactNode;
  key: string;
  href: string;
  children?: IAnchor[];
}

const ArticleDetail: FC<IProps> = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [articleDetail, setArticleDetail] = useState<IArticleDetail | null>(
    null
  );
  const [anchorItems, setAnchorItems] = useState<Array<IAnchor>>([]);
  const previewRef = useRef<HTMLDivElement>(null);

  const { isOutlineFixed } = useAppSelector((state) => {
    return { isOutlineFixed: state.main.isOutlineFixed };
  });

  // 获取数据
  useEffect(() => {
    const fetchArticleDetail = async () => {
      try {
        const res = await getArticleDetail(articleId as string);
        setArticleDetail(res.data);
        document.title = "文章 - " + res.data?.title || "Article Detail";
      } catch (error) {
        console.error("Failed to fetch article detail:", error);
      }
    };

    fetchArticleDetail();

    return () => {
      // 清理工作，例如取消请求
    };
  }, [articleId]);

  // 挂载markdown和目录
  useEffect(() => {
    if (articleDetail && previewRef.current) {
      const markdown = articleDetail.content || "";
      VditorPreview.preview(previewRef.current, markdown, {
        mode: "light"
        // ...其他选项
      });

      setTimeout(() => {
        // 添加锚点
        const headings = previewRef.current?.querySelectorAll(
          "h1, h2, h3, h4, h5, h6"
        );
        const temAnchor: Array<IAnchor> = [];

        const headingMap: { [key: string]: IAnchor } = {};

        let minLevel = Infinity;

        headings?.forEach((heading) => {
          const level = parseInt(heading.tagName.substring(1));
          if (level < minLevel) {
            minLevel = level;
          }
        });

        headings?.forEach((heading) => {
          const id = heading.id;
          const title = heading.textContent || "";
          const level = parseInt(heading.tagName.substring(1));
          console.log("level: ", level);

          const anchorItem: IAnchor = { key: id, title, href: `#${id}` };

          headingMap[level] = anchorItem;

          if (level === minLevel) {
            temAnchor.push(anchorItem);
          } else {
            const parentLevel = level - 1;
            const parentAnchor = headingMap[parentLevel];
            if (parentAnchor) {
              if (!parentAnchor.children) {
                parentAnchor.children = [];
              }
              parentAnchor.children.push(anchorItem);
            }
          }
        });

        console.log("temAnchor: ", temAnchor);

        setAnchorItems(temAnchor);
      }, 200);
    }
  }, [articleDetail]);

  // const handleAnchorClick = (
  //   e: React.MouseEvent<HTMLElement>,
  //   link: { title: ReactNode; href: string }
  // ) => {
  //   e.preventDefault();
  //   const targetElement = document.getElementById(link.href.substring(1));
  //   if (targetElement) {
  //     const headerHeight = 60; // 假设 header 的高度为 60px
  //     const offsetTop =
  //       targetElement.getBoundingClientRect().top +
  //       window.scrollY -
  //       headerHeight;
  //     window.scrollTo({ top: offsetTop, behavior: "smooth" });
  //   }
  // };

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLElement>,
    link: { title: ReactNode; href: string }
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(link.href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ArticleDetailWrapper>
      <div className="left"></div>
      <div className="content">
        <div className="top">
          <h1 className="title">{articleDetail?.title}</h1>
        </div>
        <div id="articleDetail" ref={previewRef} />
      </div>
      <div className="right">
        <div className="userCard"></div>
        {anchorItems.length > 1 && (
          <div
            className="outlineWrap"
            style={{
              position: isOutlineFixed ? "fixed" : "relative",
              top: isOutlineFixed ? "30px" : "0"
            }}
          >
            <div className="outlineHeader">
              <span className="left">目录</span>
              <span className="right"></span>
            </div>
            <Anchor
              items={anchorItems}
              onClick={handleAnchorClick}
              affix={false}
              offsetTop={400}
            />
          </div>
        )}
      </div>
    </ArticleDetailWrapper>
  );
};

export default ArticleDetail;
