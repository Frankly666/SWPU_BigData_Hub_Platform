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
  lineHeight: "4rem",
  backgroundColor: `#fff`,
  borderBottom: ".0625rem solid rgba(3,3,3,.2)",
  transition:
    "transform 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out" // 添加过渡效果
};

export const siderLeftStyle: React.CSSProperties = {
  position: "fixed",
  top: "4rem",
  textAlign: "center",
  lineHeight: "7.5rem",
  color: "black",
  backgroundColor: "#d5f5f5",
  marginTop: "1.25rem",
  transition: "transform 0.3s ease-in-out"
};
export const siderRightStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "7.5rem",
  color: "black",
  backgroundColor: "#d5f5f5",
  marginTop: "1.25rem"
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff",
  marginTop: "1.25rem"
};
export const fullContentStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff"
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff"
};

export const layoutStyle: React.CSSProperties = {
  overflow: "auto",
  width: `100%`,
  minHeight: "62.75rem"
};

export const contentLayoutStyle: React.CSSProperties = {
  width: "75rem",
  margin: "0 auto",
  paddingTop: "4rem"
};
export const fullContentLayoutStyle: React.CSSProperties = {
  width: "100%",
  margin: "0 auto",
  paddingTop: "64px"
};

export default AppWrapper;
