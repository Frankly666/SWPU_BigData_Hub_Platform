import styled from "styled-components";

const CommunityWrapper = styled.div`
  height: 100%;
  padding: 20px 10px 0 20px;
  :where(.ant-tabs-extra-content) {
    position: relative;
    top: 3px;
    margin-right: 5px;
    &:hover {
      cursor: pointer;
      color: #1677ff;
    }
  }
`;

export default CommunityWrapper;
