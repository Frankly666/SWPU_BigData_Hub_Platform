import styled from "styled-components";

const ArticleDetailWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f2f3f5;
  .left {
    flex: 1;
  }

  .content {
    flex: 2;
    margin: 20px 20px 0 10px;
    background-color: #fff;
    text-align: left;
    padding: 30px;
  }

  .right {
    position: relative;
    flex: 1.4;
    margin-top: 20px;

    .userCard {
      position: absolute;
      left: 0;
      width: 300px;
      height: 186px;
      background-color: #fff;
    }
  }
`;

export default ArticleDetailWrapper;
