import React, { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

import EditCommentsWrapper from "./style";
import classNames from "classnames";

interface IProps {
  children?: ReactNode;
  avatarSrc?: string;
  minHeight?: number;
  minWidth?: number;
  avatarSize?: number;
  isShowAvatar?: boolean;
  isAnimation?: boolean;
  handleConfirm?: any;
  setIsShowComments?: any;
  closeMessage?: any;
}

const EditComments: FC<IProps> = ({
  avatarSrc,
  minHeight,
  minWidth,
  avatarSize,
  isShowAvatar = true,
  isAnimation = true,
  handleConfirm,
  setIsShowComments,
  closeMessage
}) => {
  const [rightHeight, setRightHeight] = useState("0");
  const [border, setBorder] = useState(isAnimation ? "white" : "#1e80ff");
  const [bgc, setBgc] = useState(isAnimation ? "#f2f3f5" : "white");
  const [isListen, setIsListen] = useState(true);
  const [isSend, setIsSend] = useState(true);
  const [isListenBlur, setIsListenBlur] = useState(true);
  const [openSmile, setOpenSmile] = useState(false);
  const [selectedImages, setSelectedImages] = useState<Array<File>>([]);

  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (!isAnimation) inputRef.current?.focus();
  }, []);

  return (
    <EditCommentsWrapper
      $minHeight={minHeight}
      $minWidth={minWidth}
      $avatarSize={avatarSize}
    >
      {isShowAvatar && (
        <div className="left">
          <img src={avatarSrc} />
        </div>
      )}
      <div
        className="right"
        style={{
          height: rightHeight,
          borderColor: border,
          backgroundColor: bgc
        }}
        onClick={(e) => {
          inputRef.current?.focus();
        }}
        onMouseEnter={() => {
          if (isListen && isAnimation) setBgc("#e4e6eb");
          setIsListenBlur(false);
        }}
        onMouseLeave={() => {
          if (isListen && isAnimation) setBgc("#f2f3f5");
          setIsListenBlur(true);
        }}
      >
        <input
          ref={inputRef}
          onFocus={() => {
            if (!isAnimation) return;
            setRightHeight("200px");
            setBgc("white");
            setBorder("#1e80ff");
            setIsListen(false);
          }}
          onBlur={(e) => {
            if (!isAnimation) return;
            if (!isListenBlur) return;
            setRightHeight("0");
            setBgc("#f2f3f5");
            setBorder("white");
            setIsListen(true);
            setOpenSmile(false);
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
            open={openSmile}
            content={
              <div
                onMouseEnter={() => {
                  setIsListenBlur(false);
                }}
                onMouseLeave={() => {
                  setIsListenBlur(true);
                }}
              >
                <Picker
                  data={data}
                  onEmojiSelect={console.log}
                  emojiSize={20}
                  skinTonePosition="none"
                  searchPosition="none"
                />
              </div>
            }
          >
            <SmileOutlined
              onClick={() => {
                setOpenSmile((last) => !last);
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
          onClick={() => {
            handleConfirm(inputRef.current?.value);
            inputRef.current!.value = "";
            setIsShowComments(false);
            closeMessage(false);
            console.log("closeMessage: ", closeMessage);
          }}
        >
          发送
        </button>
      </div>
    </EditCommentsWrapper>
  );
};

export default memo(EditComments);
