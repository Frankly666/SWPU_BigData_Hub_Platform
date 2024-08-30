import styled from "styled-components";

const MomentWrapper = styled.div`
  :where(.ant-list-item-meta-content) {
    text-align: left;
  }

  /* 描述上移 */
  :where(.ant-list-item-meta-description) {
    margin-top: -10px;
  }

  :where(.moment_content) {
    text-align: left;
    padding: 0 62px;
  }

  :where(.css-dev-only-do-not-override-11lehqq).ant-list-split .ant-list-item {
    border-block-end: 0.475rem solid rgba(5, 5, 5, 0.06);
  }

  /* 头像调整 */
  :where(.css-dev-only-do-not-override-11lehqq).ant-avatar {
    width: 48px;
    height: 48px;
  }

  :where(.css-dev-only-do-not-override-11lehqq).ant-list-vertical
    .ant-list-item
    .ant-list-item-action
    > li:first-child {
    width: 100%;
  }
`;

export default MomentWrapper;
