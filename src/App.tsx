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
import useFlushedData from "./hooks/useFlushedData";
const { Header, Footer, Content } = Layout;
import Loading from "@/components/loading";
import { useAppSelector } from "@/store";

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  const { isShowLoading } = useAppSelector((state) => {
    return {
      isShowLoading: state.main.isShowLoading
    };
  });
  useFlushedData();
  return (
    <AppWrapper className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>{<MyHeader></MyHeader>}</Header>
        <Content style={contentStyle}>{useRoutes(routes)}</Content>
        <Footer style={footerStyle}>Footer</Footer>
        {isShowLoading ? <Loading /> : ""}
      </Layout>
    </AppWrapper>
  );
};

export default memo(App);
