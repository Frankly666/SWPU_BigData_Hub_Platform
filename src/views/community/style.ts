import styled from "styled-components";

const CommunityWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  padding: 1.25rem 0.625rem 0 1.25rem;

  .comLeft {
    flex: 1.2;
  }

  .comContent {
    flex: 2;
    margin: 0 20px 0 10px;
    min-height: 95vh;
    background-color: #fff;
    padding: 0 10px;
  }

  .comRight {
    position: relative;
    flex: 1.4;

    .card {
      position: absolute;
      left: 0;
      width: 300px;
      height: 186px;
      background-color: #fff;
    }
  }

  :where(.ant-tabs-extra-content) {
    position: relative;
    top: 0.1875rem;
    margin-right: 0.3125rem;
    &:hover {
      cursor: pointer;
      color: #1677ff;
    }
  }
`;

export default CommunityWrapper;
