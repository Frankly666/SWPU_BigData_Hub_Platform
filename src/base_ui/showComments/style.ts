import styled from "styled-components";

interface IStyled {
  $avatarSize?: number;
}

const ShowCommentsWrapper = styled.div<IStyled>`
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
`;

export default ShowCommentsWrapper;
