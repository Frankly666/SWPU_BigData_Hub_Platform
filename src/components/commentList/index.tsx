import React, { memo, useLayoutEffect, useMemo, useState } from "react";
import type { FC, ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";
import { message } from "antd";

import CommentListWrapper from "./style";
import { Comment } from "@/type/moment";
import ShowComments from "@/base_ui/showComments";
import { formatTime } from "@/utils/formatData";
import { deleteComment } from "@/service/modules/comment";

interface IProps {
  children?: ReactNode;
  allComments: Array<Comment>;
  mainComment: Comment;
  momentAuthor: string;
  setAllComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

const CommentList: FC<IProps> = ({
  allComments,
  momentAuthor,
  mainComment,
  setAllComments
}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [showNum, setShowNum] = useState(2);
  const [allSons, setSon] = useState<Array<Comment>>([]);

  useLayoutEffect(() => {
    setSon(
      allComments
        .filter((i) => {
          return mainComment.id === i.comment_id;
        })
        .sort((a, b) => {
          const dateA = new Date(a.createTime);
          const dateB = new Date(b.createTime);
          return dateA.getTime() - dateB.getTime();
        })
    );
  }, [allComments, mainComment]);

  function addSonComment(comment: Comment) {
    setShowNum(allSons.length + 1);
    setAllComments((last) => [...last, comment]);
    messageApi.open({
      type: "success",
      content: "回复成功!"
    });
  }

  // 删除评论的操作
  function handleDleteComment(commentId: number) {
    deleteComment(commentId);
    setAllComments((last) => {
      return last.filter((item) => item.id !== commentId);
    });

    messageApi.open({
      type: "success",
      content: "成功删除此条评论!"
    });
  }

  return (
    <CommentListWrapper>
      {contextHolder}
      <div className="top">
        <ShowComments
          author={momentAuthor}
          avatarSize={25}
          createTime={formatTime(mainComment.createTime?.toString() as string)}
          commentItem={mainComment}
          addSonComment={addSonComment}
          deleteComment={handleDleteComment}
        />
      </div>
      <div className="sons">
        {allSons.slice(0, showNum).map((term, index) => (
          <div className="wrap1" key={mainComment.id}>
            <ShowComments
              isSon={true}
              author={momentAuthor}
              avatarSize={25}
              createTime={formatTime(term.createTime?.toString() as string)}
              commentItem={term}
              addSonComment={addSonComment}
              deleteComment={handleDleteComment}
              mainComment={mainComment}
            />
          </div>
        ))}
      </div>
      {showNum < allSons.length && (
        <div
          className="more"
          onClick={() => {
            setShowNum(allSons.length);
          }}
        >
          查看全部 {allSons.length.toString()} 条回复 {<DownOutlined />}
        </div>
      )}
    </CommentListWrapper>
  );
};

export default memo(CommentList);
