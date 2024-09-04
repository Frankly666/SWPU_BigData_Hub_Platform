import styled from "styled-components";

const BottomWrapper = styled.div`
  width: 100%;
  .wrapper1 {
    position: relative;
    display: flex;
    margin-top: 4px;
    width: 100%;

    .time {
      font-size: 12px;
      margin-right: 29px;
    }

    .icon {
      display: flex;
      position: absolute;
      left: 10%;
      width: 160px;
    }

    .delete {
      position: absolute;
      right: 0;
    }
  }
`;

export default BottomWrapper;
