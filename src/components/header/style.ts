import type { ITags } from "@/type/users";
import styled from "styled-components";

interface IStyled {
  $tagName: ITags;
}

const HeaderWrapper = styled.div<IStyled>`
  display: flex;
  justify-content: space-between;
  height: 0;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 34.375rem;

    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      h1 {
        font-size: 1.25rem;
        margin: 0 0 0 0.625rem;
        user-select: none;
      }
    }

    .ant-btn {
      box-sizing: border-box;

      &:hover {
        color: #1677ff;
        background: rgba(0, 0, 0, 0.06);
      }

      &.${(props) => props.$tagName} span {
        font-weight: bold;
        color: #1677ff;
      }

      &.${(props) => props.$tagName} {
        font-weight: bold;
        background: rgba(0, 0, 0, 0.06);
      }

      &:hover span {
        font-weight: bold;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

export default HeaderWrapper;
