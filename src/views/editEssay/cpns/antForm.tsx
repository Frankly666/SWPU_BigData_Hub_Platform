import React from "react";
import type { FC, ReactNode } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Select, Space, Upload } from "antd";
import { BASE_URL } from "@/service/config";

const { Option } = Select;

interface IProps {
  children?: ReactNode;
  confirmFun: (value: any) => Promise<void>;
}

export const labelDic: { [key: string]: string } = {
  backend: "后端",
  fontend: "前端",
  machineLearning: "机器学习",
  ai: "人工智能",
  tools: "开发工具",
  read: "阅读",
  codeLife: "代码人生",
  js: "JavaScript",
  ts: "TypeScript",
  vue: "Vue.js",
  react: "React.js",
  interview: "面试",
  java: "Java",
  c: "C",
  gameDevelopment: "游戏开发",
  algorithm: "算法",
  database: "数据库",
  node: "Node.js"
};

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AntForm: FC<IProps> = ({ confirmFun }) => {
  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={confirmFun}
      initialValues={{
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
        "color-picker": null
      }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="category"
        label="分类"
        hasFeedback
        rules={[{ required: true, message: "请选择一项分类!" }]}
      >
        <Select placeholder="请选择文章内容分类" showSearch>
          <Option value="backend">后端</Option>
          <Option value="fontend">前端</Option>
          <Option value="machineLearning">机器学习</Option>
          <Option value="ai">人工智能</Option>
          <Option value="tools">开发工具</Option>
          <Option value="read">阅读</Option>
          <Option value="codeForLife">代码人生</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="lable"
        label="标签"
        hasFeedback
        rules={[{ required: true, message: "请至少选择一个标签!" }]}
      >
        <Select
          placeholder="请选择文章标签"
          showSearch
          maxCount={3}
          mode="multiple"
        >
          <Option value="backend">后端</Option>
          <Option value="fontend">前端</Option>
          <Option value="machineLearning">机器学习</Option>
          <Option value="ai">人工智能</Option>
          <Option value="tools">开发工具</Option>
          <Option value="read">阅读</Option>
          <Option value="codeLife">代码人生</Option>
          <Option value="js">JavaScript</Option>
          <Option value="ts">TypeScript</Option>
          <Option value="vue">Vue.js</Option>
          <Option value="react">React.js</Option>
          <Option value="interview">面试</Option>
          <Option value="java">Java</Option>
          <Option value="c">C</Option>
          <Option value="gameDevelopment">游戏开发</Option>
          <Option value="algorithm">算法</Option>
          <Option value="database">数据库</Option>
          <Option value="node">Node.js</Option>
        </Select>
      </Form.Item>

      <Form.Item label="文章封面">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger
            name="files"
            action={BASE_URL + "/article/temCover"}
            maxCount={1}
          >
            <p className="ant-upload-drag-icon">
              <PlusOutlined />
            </p>
            <p className="ant-upload-text">上传封面</p>
            <p className="ant-upload-hint">
              建议尺寸:192*128px 封面仅在首页信息流中展示
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            确认发布
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AntForm;
