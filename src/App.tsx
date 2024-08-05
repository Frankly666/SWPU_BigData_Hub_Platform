import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { useRoutes } from "react-router";
import { routes } from "./router";

import MyHeader from "./components/header";
import { Layout } from "antd";
import AppWrapper, {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle
} from "./style";
import Loading from "./components/loading";
const { Header, Footer, Content } = Layout;

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  return (
    <AppWrapper className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>{<MyHeader></MyHeader>}</Header>
        <Content style={contentStyle}>{useRoutes(routes)}</Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </AppWrapper>
  );
};

export default memo(App);
