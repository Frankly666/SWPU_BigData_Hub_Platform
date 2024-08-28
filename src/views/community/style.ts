import styled from "styled-components";

const CommunityWrapper = styled.div`
  height: 100%;
  padding: 1.25rem 0.625rem 0 1.25rem;
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
