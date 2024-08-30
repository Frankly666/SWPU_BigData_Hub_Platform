import styled from "styled-components";

interface IStyled {
  $avatarSize?: number;
}

const ShowCommentsWrapper = styled.div<IStyled>`
  display: flex;
  height: 100%;

  .left {
    margin-right: 15px;

    img {
      border-radius: 50%;
      width: ${(props) =>
        props.$avatarSize ? props.$avatarSize + "px" : "40px"};
      height: ${(props) =>
        props.$avatarSize ? props.$avatarSize + "px" : "40px"};
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    .header {
      font-weight: 400;
      .userName {
        color: #515767;
      }
    }

    .content {
      margin-top: 4px;
      text-align: left;
      color: #252933;
    }
  }
`;

export default ShowCommentsWrapper;
