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
    width: 550px;
    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      h1 {
        font-size: 20px;
        margin: 0 0 0 10px;
        user-select: none;
      }
    }

    .ant-btn {
      &:hover {
        color: #1677ff;
        background: rgba(0, 0, 0, 0.06);
      }

      box-sizing: border-box;
      border-bottom: 1px solid transparent; /* 初始状态无下划线 */
      transition: border-bottom 0.6s ease; /* 平滑过渡效果 */

      &.${(props) => props.$tagName} span {
        color: #1677ff;
        border-bottom: #1677ff 1px solid;
      }

      &.${(props) => props.$tagName} {
        background: rgba(0, 0, 0, 0.06);
      }

      &:hover span {
        border-bottom: #1677ff 1px solid;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

export default HeaderWrapper;
