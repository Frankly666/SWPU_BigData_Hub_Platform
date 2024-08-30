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
      border-top: 0.0625rem solid rgba(5, 5, 5, 0.06);
      padding: 0.5rem 0;
      width: 100%;
    }

    .comments {
      display: flex;
      flex-direction: column;
      border-top: 0.0625rem solid rgba(5, 5, 5, 0.06);
      padding: 0.625rem 0.9375rem;

      .header {
        text-align: left;
        font-size: 14px;
        font-weight: 500;
        color: #252933;
      }

      .write_comment_area {
        margin-top: 0.625rem;
      }

      .commentsList {
        margin-top: 20px;

        .mainComment {
          margin-top: 30px;

          .commentSons {
            padding-left: 39px;
            margin-top: 10px;
            .wrap1 {
              margin-top: 8px;
            }
          }
        }
      }
    }
  }
`;

export default CommentAddIconTextWrapper;
