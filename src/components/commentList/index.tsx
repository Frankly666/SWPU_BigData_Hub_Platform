import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { DownOutlined } from "@ant-design/icons";

import CommentListWrapper from "./style";
import { Comment } from "@/type/moment";
import ShowComments from "@/base_ui/showComments";
import { formatTime } from "@/utils/formatData";

interface IProps {
  children?: ReactNode;
  sons: Array<Comment>;
  mainComment: Comment;
  momentAuthor: string;
}

const CommentList: FC<IProps> = ({ sons, momentAuthor, mainComment }) => {
  const [showNum, setShowNum] = useState(3);
  const [allSons, addSon] = useState(sons);

  function addSonComment(comment: Comment) {
    addSon((last) => {
      console.log("last: ", last);
      const tem = [...last];
      tem.push(comment);
      console.log("tem: ", tem);
      return tem;
    });
  }

  return (
    <CommentListWrapper>
      <div className="top">
        <ShowComments
          author={momentAuthor}
          avatarSize={25}
          createTime={formatTime(mainComment.createTime?.toString() as string)}
          commentItem={mainComment}
          addSonComment={addSonComment}
        />
      </div>
      <div className="sons">
        {allSons.slice(0, showNum).map((term, index) => (
          <div className="wrap1" key={index}>
            <ShowComments
              isSon={true}
              author={momentAuthor}
              avatarSize={25}
              createTime={formatTime(term.createTime?.toString() as string)}
              commentItem={term}
              addSonComment={addSonComment}
            />
          </div>
        ))}
      </div>
      {showNum < sons.length && (
        <div
          className="more"
          onClick={() => {
            setShowNum(sons.length);
          }}
        >
          查看全部 {sons.length.toString()} 条回复 {<DownOutlined />}
        </div>
      )}
    </CommentListWrapper>
  );
};

export default memo(CommentList);
