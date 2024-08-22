import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { Button, Checkbox, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import EnrollFormWrapper from "./style";
import { BASE_URL } from "@/service/config";
import { deleteTemAvatar, initAvatar } from "@/service/modules/avatar";
import { enroll } from "@/service/modules/enroll";
import { IUserInfo } from "@/type/users";

interface IProps {
  children?: ReactNode;
  setEnrollOpen: any;
  setLoginOpen: any;
}

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const EnrollForm: FC<IProps> = ({ setEnrollOpen, setLoginOpen }) => {
  const [form] = Form.useForm();
  const [upload, setUpload] = useState(true);
  const [realName, setRealName] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    // 删除暂存的照片, 因为无用
    await deleteTemAvatar(realName as string);

    const file = values.avatar?.file?.originFileObj;
    const formdata = new FormData();
    formdata.append("avatar", file);

    const userInfo: IUserInfo = {
      name: values.username,
      password: values.password,
      realName: values.realname,
      gender: values.gender,
      phone: values.phone || null,
      email: values.email || null,
      hobby: values.intro || null,
      avatarId: null
    };

    if (!file) {
      const defaultAvatar = userInfo.gender === "male" ? 1 : 0;
      userInfo.avatarId = defaultAvatar;
    }

    const res1 = await enroll(userInfo);
    if (res1.code < 0) {
      messageApi.open({
        type: "warning",
        content: res1.message
      });
    } else {
      console.log("res1: ", res1);
      const userId = res1?.data?.insertId;

      // 用户创建成功后记得添加头像
      if (file) await initAvatar(formdata, userId);

      setEnrollOpen(false);
      messageApi.open({
        type: "success",
        content: "注册成功, 请登录!"
      });
      setTimeout(() => {
        setLoginOpen(true);
      }, 500);
    }
  };

  // 头像上传之前的check工作
  const onFieldsChange = (changedFields: any, allFields: any) => {
    let temp = false;
    for (let i = 0; i <= 5; i++) {
      if (!(allFields[i].touched && !allFields[i].errors.length)) {
        temp = true;
        break;
      }
    }

    setUpload(temp);
  };

  return (
    <EnrollFormWrapper>
      {contextHolder}
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        scrollToFirstError
        onFieldsChange={onFieldsChange}
      >
        <Form.Item
          name="username"
          label="用户名"
          tooltip="将作为你登录时的帐号名"
          rules={[
            {
              required: true,
              message: "用户名不能为空!",
              whitespace: true
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密码"
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
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="再次输入密码"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "请再次输入你的密码!"
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (getFieldValue("password") !== value) {
                  return Promise.reject(new Error("两次密码输入不相同!"));
                } else if (value.length < 6) {
                  return Promise.reject(new Error("密码最小长度为6位"));
                }

                return Promise.resolve();
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="realname"
          label="真实姓名"
          rules={[
            {
              required: true,
              message: "请输入你的真实姓名!"
            }
          ]}
        >
          <Input
            onChange={(e) => {
              setRealName(e.currentTarget.defaultValue);
            }}
          />
        </Form.Item>

        <Form.Item
          name="professionalgrade"
          label="专业年级"
          rules={[
            {
              required: true,
              message: "请输入你的专业年级!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="性别"
          rules={[{ required: true, message: "请选择你的性别!" }]}
        >
          <Select placeholder="选择你的性别">
            <Option value="male">男生</Option>
            <Option value="female">女生</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!"
            },
            {
              required: false,
              message: "Please input your E-mail!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="电话"
          rules={[
            { required: false, message: "Please input your phone number!" }
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="intro"
          label="爱好"
          tooltip="简单介绍一下自己~"
          rules={[{ required: false, message: "Please input Intro" }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="头像上传"
          tooltip="请完整填写完必填信息后上传, 且上传后请勿修改以上信息, 若未上传则使用默认头像"
          rules={[{ required: false, message: "Please input Intro" }]}
        >
          <Upload
            listType="picture"
            disabled={upload}
            action={BASE_URL + `/file/avatar/init/` + realName}
          >
            <Button type="dashed" icon={<UploadOutlined />} disabled={upload}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement"))
            }
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </EnrollFormWrapper>
  );
};

export default memo(EnrollForm);
