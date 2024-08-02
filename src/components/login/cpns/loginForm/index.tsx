import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, message, Space } from "antd";

import LoginFormWrapper from "./style";
import { IFormMessage, IUserAccount } from "@/type/users";
import { getUserInfo } from "@/service/modules/login";
import { localCache } from "@/utils/cache";
import { LOGIN_TOKEN, REMEMBER, USER_ACCOUNT } from "@/global/constant";

interface IProps {
  children?: ReactNode;
  setLoginOpen: any;
}

const LoginForm: FC<IProps> = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [name, setName] = useState(localCache.getCache(USER_ACCOUNT)?.name);

  // 这里的value是ant表单组件点击提交后传入的信息
  const onFinish = async (values: IFormMessage) => {
    const userAccount: IUserAccount = {
      name: values.username,
      password: values.password
    };

    // 进行请求登录
    const res = await getUserInfo(userAccount);
    const token = res.data?.token;

    if (token === undefined) {
      messageApi.open({
        type: "error",
        content: "用户名或密码错误,请重新输入!"
      });
    }

    console.log("token: ", token);

    // 将token储存到localstorage中
    localCache.setCache(LOGIN_TOKEN, token);
    if (values.remember) {
      localCache.setCache(USER_ACCOUNT, userAccount);
      localCache.setCache(REMEMBER, values.remember);
    } else {
      localCache.removeCache(USER_ACCOUNT);
      localCache.removeCache(REMEMBER);
    }

    // 关闭登录界面
  };

  return (
    <LoginFormWrapper>
      {contextHolder}
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "用户名不能为空!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" value={name} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "密码不能为空!"
            },
            () => ({
              validator(_, value) {
                if (value.length < 6) {
                  return Promise.reject(new Error("密码最小长度为6位"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a href="">忘记密码</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <a href="">Register now!</a>
        </Form.Item>
      </Form>
    </LoginFormWrapper>
  );
};

export default memo(LoginForm);
