import styled from "styled-components";

const MomentWrapper = styled.div`
  padding: 0 20px;
  :where(.ant-list-item-meta-content) {
    text-align: left;
  }

  /* 描述上移 */
  :where(.ant-list-item-meta-description) {
    margin-top: -0.625rem;
  }

  :where(.moment_content) {
    text-align: left;
    padding: 0 3.875rem;
  }

  :where(.ant-list-split) .ant-list-item {
    border-block-end: 7.6px solid rgba(5, 5, 5, 0.06);
  }

  /* 头像调整 */
  :where(.ant-avatar) {
    width: 3rem;
    height: 3rem;
  }

  :where(.ant-list-vertical)
    .ant-list-item
    .ant-list-item-action
    > li:first-child {
    width: 100%;
  }

  .delete {
    position: relative;
    top: 0.3125rem;
    text-align: right;
    padding: 0 3.875rem;
    margin-top: -0.1875rem;

    svg {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default MomentWrapper;
