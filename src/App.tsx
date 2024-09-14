import React, { memo, Suspense } from "react";
import type { FC, ReactNode } from "react";
import { useLocation, useRoutes } from "react-router";
import { headerRoutes, routes } from "./router";
import { Layout, Spin } from "antd";
const { Header, Content } = Layout;

import MyHeader from "./components/header";
import AppWrapper, {
  fullContentLayoutStyle,
  fullContentStyle,
  headerStyle,
  layoutStyle
} from "./style";
import useFlushedData from "./hooks/useFlushedData";
import Loading from "@/components/loading";
import { useAppSelector } from "@/store";
import { useListenScroll } from "./hooks/useListenScroll";

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  const { isShowLoading, isShowHeader } = useAppSelector((state) => {
    return {
      isShowLoading: state.main.isShowLoading,
      isShowHeader: state.main.isShowHeader
    };
  });

  // 自定义hook的使用
  useFlushedData(); // 刷新时重新获取数据
  useListenScroll(); // 监听页面滑动, 给header做动画

  const location = useLocation();

  return (
    <AppWrapper className="App">
      <Layout style={layoutStyle}>
        {!headerRoutes.includes(location.pathname) && (
          <Header
            style={{
              ...headerStyle,
              transform: isShowHeader ? "translateY(0)" : `translateY(-${64}px)` // 向上移动4rem
            }}
          >
            {<MyHeader></MyHeader>}
          </Header>
        )}

        <Layout style={fullContentLayoutStyle}>
          <Suspense fallback={<Spin size="large" />}>
            <Content style={fullContentStyle}>{useRoutes(routes)}</Content>
          </Suspense>
        </Layout>

        {/* 这个加载中的蒙版只有在登录时才会展示 */}
        {isShowLoading ? <Loading /> : ""}
      </Layout>
    </AppWrapper>
  );
};

export default memo(App);
