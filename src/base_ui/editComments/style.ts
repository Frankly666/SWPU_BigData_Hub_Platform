import styled from "styled-components";
interface IStyled {
  $minHeight?: number;
  $minWidth?: number;
  $avatarSize?: number;
}

const EditCommentsWrapper = styled.div<IStyled>`
  display: flex;
  justify-content: space-between;
  height: 100%;

  .left {
    img {
      border-radius: 50%;
      width: ${(props) =>
        props.$avatarSize ? props.$avatarSize + "px" : "40px"};
      height: ${(props) =>
        props.$avatarSize ? props.$avatarSize + "px" : "40px"};
    }
  }
  .right {
    min-height: ${(props) =>
      props.$minHeight ? props.$minHeight + "px" : "90px"};
    min-width: ${(props) =>
      props.$minWidth ? props.$minWidth + "px" : "600px"};
    transition:
      background-color 0.3s ease,
      height 0.4s ease; /* 过渡效果 */
    border: 1px solid red;

    input {
      border: none; /* 无边框 */
      background-color: transparent; /* 初始背景颜色 */
      padding: 8px 15px; /* 内边距 */
      font-size: 14px; /* 字体大小 */
      width: 100%; /* 宽度 */
      height: 40px;
      transition:
        background-color 0.3s ease,
        height 0.3s ease; /* 过渡效果 */
      border-radius: 4px; /* 边框圆角 */
      color: #333; /* 字体颜色 */
      outline: none; /* 点击时不显示轮廓 */
    }
  }
`;

export default EditCommentsWrapper;
