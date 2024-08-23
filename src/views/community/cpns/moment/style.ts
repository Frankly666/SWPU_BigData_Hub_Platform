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
    padding: 0 48px;
  }

  :where(.css-dev-only-do-not-override-xlmt2j).ant-list-split .ant-list-item {
    border-block-end: 5px solid rgba(5, 5, 5, 0.06);
  }
`;

export default MomentWrapper;
