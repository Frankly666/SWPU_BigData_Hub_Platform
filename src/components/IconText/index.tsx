import React, {
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useState
} from "react";
import type { ReactNode } from "react";
import { Space } from "antd";

import IconTextWrapper from "./style";

interface IProps {
  children?: ReactNode;
  icon: React.FC;
  activeIcon?: React.FC;
  text: string;
  clickFn?: (isActive: boolean) => Promise<boolean>;
  checkInitIsActive?: () => boolean;
  setIsShowComments?: any;
  isMessage?: boolean;
}

export interface IRefProps {
  setIsActive: (flag: boolean) => void;
  changeText: (text: string) => void;
}

const IconText = forwardRef<IRefProps, IProps>((props, ref) => {
  const {
    icon,
    text,
    clickFn,
    checkInitIsActive,
    activeIcon,
    setIsShowComments
  } = props;
  const [isActive, setIsActive] = useState(false);
  const [textVar, setTextVar] = useState(text);

  useLayoutEffect(() => {
    if (checkInitIsActive) {
      setIsActive(checkInitIsActive());
    }
  }, []);

  useImperativeHandle(ref, () => ({
    setIsActive: (flag: boolean) => {
      setIsActive(flag);
    },
    changeText: (text: string) => {
      setTextVar(text);
    }
  }));

  return (
    <IconTextWrapper $isActive={isActive}>
      <Space
        onClick={() => {
          if (clickFn) {
            clickFn(isActive).then((res) => {
              if (isActive) {
                setTextVar((last) => (parseInt(last) - 1).toString());
              } else {
                setTextVar((last) => (parseInt(last) + 1).toString());
              }
              setIsActive(res);
            });
          } else {
            setIsShowComments(!isActive);
            setIsActive((last) => !last);
          }
        }}
        style={{ color: isActive ? "#1677ff" : "" }}
      >
        {activeIcon && isActive
          ? React.createElement(activeIcon)
          : React.createElement(icon)}
        {textVar}
      </Space>
    </IconTextWrapper>
  );
});

export default memo(IconText);
