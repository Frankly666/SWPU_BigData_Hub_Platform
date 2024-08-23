import styled from "styled-components";

const CommentAddIconTextWrapper = styled.div`
  width: 100%;
  .wrap {
    display: flex;
    flex-direction: column;
    width: 100%;

    .icons {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgba(5, 5, 5, 0.06);
      padding: 8px 0;
      width: 700px;
    }

    .comments {
      display: flex;
      flex-direction: column;
      border-top: 1px solid rgba(5, 5, 5, 0.06);
      padding: 10px 30px;

      .header {
        text-align: left;
        font-size: 16px;
        font-weight: 500;
        color: #252933;
      }
    }
  }
`;

export default CommentAddIconTextWrapper;
