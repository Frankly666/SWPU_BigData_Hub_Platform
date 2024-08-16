import styled from "styled-components";

interface IStyld {
  $isActive: boolean;
}

const IconTextWrapper = styled.div<IStyld>`
  :where(
      .ant-space.css-dev-only-do-not-override-xlmt2j.ant-space-horizontal.ant-space-align-center.ant-space-gap-row-small.ant-space-gap-col-small
    ) {
    cursor: pointer;
    &:hover {
      color: #1677ff;
    }
  }

  ${(props) => {
    return props.$isActive
      ? `:where(
      .ant-space.css-dev-only-do-not-override-xlmt2j.ant-space-horizontal.ant-space-align-center.ant-space-gap-row-small.ant-space-gap-col-small
    ) {
    color: #1677ff;
  }`
      : ``;
  }}
`;

export default IconTextWrapper;
