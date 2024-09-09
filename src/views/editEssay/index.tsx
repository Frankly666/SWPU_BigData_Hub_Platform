import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import Vditor from "vditor";
import { Button, Avatar, Input, message } from "antd";

import "vditor/dist/index.css";

import EditEssayWrapper from "./style";
import { useAppSelector } from "@/store";
import { publishArticle } from "@/service/modules/article";
import { useNavigate } from "react-router";

interface IProps {
  children?: ReactNode;
}

const EditEssay: FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [vd, setVd] = useState<Vditor>();
  const { avatar } = useAppSelector((state) => {
    return {
      avatar: state.user.avatar
    };
  });
  const mdValue = useRef<string>("");
  const mdTitle = useRef<string>("");

  // 发布点击操作
  async function handlePublishArticle() {
    if (!mdTitle.current || !mdValue.current) {
      messageApi.open({
        type: "warning",
        content: "标题和内容不能为空!"
      });
    } else {
      await publishArticle(mdTitle.current, mdValue.current);
      navigate("/published");
    }
  }

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: "100vh",
      placeholder: "欢迎来到编辑页面",
      input: (value) => {
        mdValue.current = value;
        console.log("mdValue.current: ", mdValue.current);
      },
      after: () => {
        vditor.setValue("");
        setVd(vditor);
      }
    });
    // Clear the effect
    return () => {
      vd?.destroy();
      setVd(undefined);
    };
  }, []);

  useEffect(() => {
    document.title = "文章编辑 -- SWPU";
  }, []);

  return (
    <EditEssayWrapper>
      {contextHolder}
      <div className="header">
        <div className="left">
          <Input
            showCount
            maxLength={20}
            placeholder="请输入文章标题..."
            variant="borderless"
            height={64}
            style={{ fontSize: "18px", fontWeight: "bold" }}
            onChange={(e) => {
              mdTitle.current = e.target.value;
            }}
          />
        </div>
        <div className="right">
          <Button type="default">保存</Button>
          <Button
            type="primary"
            style={{ marginLeft: "20px" }}
            onClick={handlePublishArticle}
          >
            发布
          </Button>
          <Avatar src={avatar} size={40} style={{ marginLeft: "50px" }} />
        </div>
      </div>
      <div id="vditor" className="vditor" />
    </EditEssayWrapper>
  );
};

export default memo(EditEssay);
