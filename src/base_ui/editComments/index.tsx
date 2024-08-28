import React, { memo, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import EditCommentsWrapper from "./style";
import classNames from "classnames";

interface IProps {
  children?: ReactNode;
  avatarSrc: string;
  minHeight: number;
  minWidth: number;
  avatarSize: number;
}

const EditComments: FC<IProps> = ({
  avatarSrc,
  minHeight,
  minWidth,
  avatarSize
}) => {
  const [rightHeight, setRightHeight] = useState("0");
  const [border, setBorder] = useState("white");
  const [bgc, setBgc] = useState("#f2f3f5");
  const [isListen, setIsListen] = useState(true);
  const [isSend, setIsSend] = useState(true);
  const [isListenBlur, setIsListenBlur] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const smileRef = useRef<HTMLInputElement>(null);
  const [selectedImages, setSelectedImages] = useState<Array<File>>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.files 会返回一个包含所有选中文件的FileList对象
    const files: FileList = event.target.files as FileList;

    // 检查files是否为null
    if (files) {
      // 将FileList转换为File数组
      const images: File[] = Array.from(files).filter((file) => {
        // 过滤出图片文件
        return file.type.match(/image.*/);
      });

      // 更新状态以存储选中的图片文件
      setSelectedImages(images);
    }
  };
  return (
    <EditCommentsWrapper
      $minHeight={minHeight}
      $minWidth={minWidth}
      $avatarSize={avatarSize}
    >
      <div className="left">
        <img src={avatarSrc} />
      </div>
      <div
        className="right"
        style={{
          height: rightHeight,
          borderColor: border,
          backgroundColor: bgc
        }}
        onClick={(e) => {
          console.log(
            "e.target === smileRef.current;: ",
            e.target === smileRef.current
          );
          inputRef.current?.focus();
        }}
        onMouseEnter={() => {
          if (isListen) setBgc("#e4e6eb");
          setIsListenBlur(false);
        }}
        onMouseLeave={() => {
          if (isListen) setBgc("#f2f3f5");
          setIsListenBlur(true);
        }}
      >
        <input
          ref={inputRef}
          onFocus={() => {
            setRightHeight("200px");
            setBgc("white");
            setBorder("#1e80ff");
            setIsListen(false);
          }}
          onBlur={(e) => {
            if (!isListenBlur) return;
            setRightHeight("0");
            setBgc("#f2f3f5");
            setBorder("white");
            setIsListen(true);
          }}
          onChange={(e) => {
            if (e.target.value) {
              setIsSend(false);
            } else {
              setIsSend(true);
            }
          }}
          placeholder="友善交流"
        ></input>
        <div className="smile">
          <Popover
            placement="top"
            trigger="click"
            content={
              <Picker
                data={data}
                onEmojiSelect={console.log}
                emojiSize={20}
                skinTonePosition="none"
              />
            }
          >
            <SmileOutlined
              ref={smileRef}
              onClick={(e) => {
                console.log(e);
              }}
            />
          </Popover>
        </div>
        {/* <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            ></input> */}
        {/* </div> */}
        <button
          disabled={isSend}
          className={classNames({ buttonDisabled: isSend })}
        >
          发送
        </button>
      </div>
    </EditCommentsWrapper>
  );
};

export default memo(EditComments);
