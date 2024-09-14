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

    .top {
      margin-bottom: 50px;
    }
  }

  .right {
    position: relative;
    flex: 1.4;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .userCard {
      width: 300px;
      height: 186px;
      background-color: #fff;
    }

    .outlineWrap {
      display: flex;
      flex-direction: column;
      margin: 15px 0;
      width: 300px;
      height: 400px;
      background-color: #fff;
      font-size: 15px;
      text-align: left;
      transition:
        position 0.5s ease,
        top 0.5s ease;

      .outlineHeader {
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 15px;
        border-bottom: 1px solid #e4e6eb;
      }

      :where(.ant-affix) {
        position: relative;
      }

      :where(.ant-anchor) {
        padding-right: 10px;
        a {
          font-size: 15px;
          &:hover {
            text-decoration: none;
            color: #1677ff;
          }
        }
      }
    }
  }
`;

export default ArticleDetailWrapper;
