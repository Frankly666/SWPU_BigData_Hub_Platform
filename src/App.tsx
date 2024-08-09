import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { useLocation, useRoutes } from "react-router";
import { routes } from "./router";
import { Layout, Skeleton } from "antd";
const { Header, Content, Sider } = Layout;

import MyHeader from "./components/header";
import AppWrapper, {
  contentLayoutStyle,
  contentStyle,
  headerStyle,
  layoutStyle,
  siderLeftStyle,
  siderRightStyle
} from "./style";
import useFlushedData from "./hooks/useFlushedData";
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
  const location = useLocation();
  return (
    <AppWrapper className="App">
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>{<MyHeader></MyHeader>}</Header>
        {location.pathname === "/home" ? (
          <Layout style={contentLayoutStyle}>
            <Suspense fallback={<Skeleton />}>
              <Content style={contentStyle}>{useRoutes(routes)}</Content>
            </Suspense>
          </Layout>
        ) : (
          <Layout style={contentLayoutStyle}>
            <Sider width="10%" style={siderLeftStyle}>
              SiderLeft
            </Sider>
            <Suspense fallback={<Skeleton />}>
              <Content style={contentStyle}>{useRoutes(routes)}</Content>
            </Suspense>
            <Sider width="20%" style={siderRightStyle}>
              SiderRight
            </Sider>
          </Layout>
        )}
        {/* 这个加载中的蒙版只有在登录时才会展示 */}
        {isShowLoading ? <Loading /> : ""}
      </Layout>
    </AppWrapper>
  );
};

export default memo(App);
