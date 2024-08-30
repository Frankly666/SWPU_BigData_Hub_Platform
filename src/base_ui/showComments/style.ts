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
      display: flex;
      font-weight: 400;
      .userName {
        color: #515767;
      }
    }

    .author {
      background-color: #eaf2ff;
      color: #1e80ff;
      margin-left: 5px;
      font-size: 10px;
    }

    .content {
      margin-top: 4px;
      text-align: left;
      color: #252933;
    }
  }
`;

export default ShowCommentsWrapper;
