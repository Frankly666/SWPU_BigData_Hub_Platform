import React, { memo, Suspense, useState } from "react";
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
import { useListenScroll } from "./hooks/useListenScroll";
import useScreenWidthListener from "./hooks/useScreenWidthListener";

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useScreenWidthListener((width) => {
    console.log("width: ", width);
    setScreenWidth(width);
  });

  // 自定义hook的使用
  useFlushedData(); // 刷新时重新获取数据
  useListenScroll(); // 监听页面滑动, 给header做动画

  const location = useLocation();

  return (
    <AppWrapper className="App">
      <Layout style={layoutStyle}>
        <Header
          style={{
            ...headerStyle,
            transform: isShowHeader ? "translateY(0)" : `translateY(-${64}px)` // 向上移动4rem
          }}
        >
          {<MyHeader></MyHeader>}
        </Header>
        {location.pathname === "/home" ? (
          <Layout style={contentLayoutStyle}>
            <Suspense fallback={<Skeleton />}>
              <Content style={contentStyle}>{useRoutes(routes)}</Content>
            </Suspense>
          </Layout>
        ) : (
          <Layout style={contentLayoutStyle}>
            {screenWidth > 1190 && (
              <Sider
                width="10%"
                style={{
                  ...siderLeftStyle,
                  transform: isShowHeader
                    ? "translateY(0)"
                    : `translateY(-${64}px)`
                }}
              >
                SiderLeft
              </Sider>
            )}
            <Suspense fallback={<Skeleton />}>
              <Content
                style={{
                  ...contentStyle,
                  marginLeft: screenWidth > 1190 ? "13.125rem" : "0"
                }}
              >
                {useRoutes(routes)}
              </Content>
            </Suspense>
            {screenWidth > 1190 && (
              <Sider width="20%" style={siderRightStyle}>
                SiderRight
              </Sider>
            )}
          </Layout>
        )}
        {/* 这个加载中的蒙版只有在登录时才会展示 */}
        {isShowLoading ? <Loading /> : ""}
      </Layout>
    </AppWrapper>
  );
};

export default memo(App);
