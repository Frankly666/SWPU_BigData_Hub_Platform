import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: var(-main-bg-color);
`;

export const headerStyle: React.CSSProperties = {
  position: "fixed",
  top: "0",
  zIndex: 999,
  display: "flex",
  alignItems: "center",
  padding: "0",
  color: "black",
  height: 64,
  width: "100%",
  lineHeight: "64px",
  backgroundColor: `#fff`,
  borderBottom: "1px solid rgba(3,3,3,.2)",
  transition:
    "transform 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out" // 添加过渡效果
};

export const siderLeftStyle: React.CSSProperties = {
  position: "fixed",
  top: "64px",
  textAlign: "center",
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#d5f5f5",
  marginTop: "20px",
  transition: "transform 0.3s ease-in-out"
};
export const siderRightStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#d5f5f5",
  marginTop: "20px"
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff",
  marginTop: "20px"
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff"
};

export const layoutStyle: React.CSSProperties = {
  overflow: "auto",
  width: `100%`,
  minHeight: "1004px"
};

export const contentLayoutStyle: React.CSSProperties = {
  width: "1200px",
  margin: "0 auto",
  paddingTop: "64px"
};

export default AppWrapper;
