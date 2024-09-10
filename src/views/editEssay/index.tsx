import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import Vditor from "vditor";
import { Button, Avatar, Input, message, Modal } from "antd";
import type { MenuProps } from "antd";

import "vditor/dist/index.css";

import EditEssayWrapper from "./style";
import { useAppSelector } from "@/store";
import { publishArticle, uploadArticleCover } from "@/service/modules/article";
import { useNavigate } from "react-router";
import AntForm, { labelDic } from "./cpns/antForm";
import { IFormInfo } from "@/type/article";

interface IProps {
  children?: ReactNode;
}

const EditEssay: FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [vd, setVd] = useState<Vditor>();
  const [open, setOpen] = useState(false);
  const { avatar } = useAppSelector((state) => {
    return {
      avatar: state.user.avatar
    };
  });
  const mdValue = useRef<string>("");
  const mdTitle = useRef<string>("");

  const showModal = () => {
    setOpen(true);
  };

  // 确认发布
  async function confirmPublish(value: IFormInfo) {
    console.log("value: ", value);
    // 得到标签和分类后上传文章
    const category = labelDic[value.category];
    const labels = value.lable.map((item) => {
      return labelDic[item];
    });
    const file = value?.dragger?.[0].originFileObj;
    const formdata = new FormData();
    formdata.append("articleCover", file);

    if (!mdTitle.current || !mdValue.current) {
      messageApi.open({
        type: "warning",
        content: "标题和内容不能为空!"
      });
    } else {
      const res = await publishArticle(
        mdTitle.current,
        mdValue.current,
        category
      );
      const articleId = res.data[0].insertId;

      // 下面是上传用户的封面
      if (file) {
        await uploadArticleCover(formdata, articleId);
      }

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
            onClick={showModal}
          >
            发布
          </Button>
          <Modal
            open={open}
            title="发布文章"
            footer={null}
            onCancel={() => {
              setOpen(false);
            }}
          >
            <AntForm confirmFun={confirmPublish} />
          </Modal>
          <Avatar src={avatar} size={40} style={{ marginLeft: "50px" }} />
        </div>
      </div>
      <div id="vditor" className="vditor" />
    </EditEssayWrapper>
  );
};

export default memo(EditEssay);
