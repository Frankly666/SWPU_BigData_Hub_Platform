import styled from "styled-components";

const ShowArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
  padding: 10px;

  .left {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;

    .title {
    }

    .content {
      color: #8a919f;
      font-size: 13px;
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      color: #8a919f;
      font-size: 13px;
    }
  }

  .right {
    width: 110px;
    margin-left: 40px;
  }
`;

export default ShowArticleWrapper;
