import styled from "styled-components";

interface IStyld {
  $isActive: boolean;
}

const IconTextWrapper = styled.div<IStyld>`
  width: 100%;
  :where(.ant-space-item) svg {
    &:hover {
      cursor: pointer;
      color: #1677ff;
    }
  }

  ${(props) => {
    return props.$isActive
      ? `:where(
      .ant-space-item
    ) svg {
    color: #1677ff;
  }`
      : ``;
  }};

  :where(.ant-list-item-action) {
    position: relative;
    bottom: 0.25rem;
  }
`;

export default IconTextWrapper;
