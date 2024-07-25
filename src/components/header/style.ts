import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 20px;
  padding: 0;

  .right {
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
      font-size: 20px;
      margin: 0 0 0 10px;
      user-select: none;
    }
  }
`;

export default HeaderWrapper;
