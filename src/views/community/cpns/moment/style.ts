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
    padding: 0 48px;
  }

  :where(.css-dev-only-do-not-override-11lehqq).ant-list-split .ant-list-item {
    border-block-end: 0.475rem solid rgba(5, 5, 5, 0.06);
  }

  /* 头像调整 */
  :where(
      .ant-avatar.ant-avatar-circle.ant-avatar-image.css-dev-only-do-not-override-xlmt2j
    ) {
    width: 50px;
    height: 50px;
  }
`;

export default MomentWrapper;
