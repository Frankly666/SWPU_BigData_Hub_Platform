import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import LoginWrapper from "./style";
import BigdataSvg from "@/assets/svg/bigdataSvg";
import LoginForm from "./cpns/loginForm";
import EnrollForm from "./cpns/enrollForm";

interface IProps {
  children?: ReactNode;
  isLogin: boolean;
}

const Login: FC<IProps> = (props) => {
  const { isLogin } = props;

  return (
    <LoginWrapper>
      <div className="top">
        <BigdataSvg size="30"></BigdataSvg>
        <h2>SWPU BigDataHub</h2>
      </div>
      <div className="form login-form">
        {isLogin ? <LoginForm /> : <EnrollForm />}
      </div>
    </LoginWrapper>
  );
};

export default memo(Login);
