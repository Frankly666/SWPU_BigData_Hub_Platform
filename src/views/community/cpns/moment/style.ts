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

  /* 描述上移 */
  :where(.ant-list-item-meta-description) {
    margin-top: -10px;
  }

  :where(.moment_content) {
    text-align: left;
    padding: 0 0 0 48px;
  }
`;

export default MomentWrapper;
