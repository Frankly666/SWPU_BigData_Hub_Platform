import styled from "styled-components";

const BottomWrapper = styled.div`
  width: 100%;
  .wrapper1 {
    position: relative;
    display: flex;
    margin-top: 4px;
    width: 100%;
  }
  .time {
    font-size: 12px;
    margin-right: 29px;
  }
  .main {
    display: flex;
    flex-direction: column;
    .icon {
      display: flex;
    }

    .delete {
      position: absolute;
      right: 0;
    }
  }
`;

export default BottomWrapper;
