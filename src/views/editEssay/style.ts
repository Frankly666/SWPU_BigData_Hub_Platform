import styled from "styled-components";

const EditEssayWrapper = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 64px;
    margin-top: -64px;
    padding: 0 40px;
    background-color: #fff;

    .left {
      display: flex;
      align-items: center;
    }

    .right {
      display: flex;
      justify-content: right;
      align-items: center;
      width: 20%;
    }
  }
`;

export default EditEssayWrapper;
