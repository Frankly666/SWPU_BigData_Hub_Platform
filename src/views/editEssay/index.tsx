import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import Vditor from "vditor";
import { Button, Avatar, Input } from "antd";

import "vditor/dist/index.css";

import EditEssayWrapper from "./style";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const EditEssay: FC<IProps> = () => {
  const [vd, setVd] = useState<Vditor>();
  const { avatar } = useAppSelector((state) => {
    return {
      avatar: state.user.avatar
    };
  });

  useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: "100vh",
      after: () => {
        vditor.setValue("# 欢迎来到编辑页面");
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
      <div className="header">
        <div className="left">
          <Input
            showCount
            maxLength={20}
            placeholder="请输入文章标题..."
            variant="borderless"
            height={64}
            style={{ fontSize: "18px", fontWeight: "bold" }}
          />
        </div>
        <div className="right">
          <Button type="default">保存</Button>
          <Button type="primary" style={{ marginLeft: "20px" }}>
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
