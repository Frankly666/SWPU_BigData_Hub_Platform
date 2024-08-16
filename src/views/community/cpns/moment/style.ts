import styled from "styled-components";

const MomentWrapper = styled.div`
  :where(.ant-list-item) {
    &:hover {
      cursor: pointer;
      background: #f7f8fa;
    }
  }

  :where(.ant-list-item-meta-content) {
    text-align: left;
  }
`;

export default MomentWrapper;
