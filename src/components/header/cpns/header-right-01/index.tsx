import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { Button, Modal } from "antd";

import HeaderRightWrapper01 from "./style";
import Login from "@/components/login";

interface IProps {
  children?: ReactNode;
}

// 未登录状态展示的header右边部分
const HeaderRight: FC<IProps> = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [enrollOpen, setEnrollOpen] = useState(false);

  return (
    <HeaderRightWrapper01>
      <div className="btn">
        <Button
          style={{ marginRight: "10px" }}
          onClick={() => setLoginOpen(true)}
        >
          登录
        </Button>
        <Button type="primary" onClick={() => setEnrollOpen(true)}>
          注册
        </Button>
        <Modal
          maskClosable={false}
          footer={null}
          open={loginOpen}
          onOk={() => setLoginOpen(false)}
          onCancel={() => setLoginOpen(false)}
          width={600}
        >
          <Login
            isLogin={true}
            setLoginOpen={setLoginOpen}
            setEnrollOpen={setEnrollOpen}
          ></Login>
        </Modal>
        <Modal
          maskClosable={false}
          footer={null}
          open={enrollOpen}
          onOk={() => setEnrollOpen(false)}
          onCancel={() => setEnrollOpen(false)}
          width={600}
        >
          <Login
            isLogin={false}
            setEnrollOpen={setEnrollOpen}
            setLoginOpen={setLoginOpen}
          ></Login>
        </Modal>
      </div>
    </HeaderRightWrapper01>
  );
};

export default memo(HeaderRight);
