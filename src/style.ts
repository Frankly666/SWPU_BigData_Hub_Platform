import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 1475px;
  height: 100vh;
  margin: 0 auto;

  .Header {
    background-color: #fff;
  }
`;

export const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "0",
  color: "black",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "#fff"
};

export const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "black",
  backgroundColor: "#fff"
};

export const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  backgroundColor: "#fff"
};

export const layoutStyle = {
  overflow: "hidden",
  width: `100%`,
  height: `100vh`
};

export default AppWrapper;
