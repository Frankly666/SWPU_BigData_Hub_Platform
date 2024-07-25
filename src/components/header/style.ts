import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 550px;
    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      h1 {
        font-size: 20px;
        margin: 0 0 0 10px;
        user-select: none;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

export default HeaderWrapper;
