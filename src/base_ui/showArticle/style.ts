import styled from "styled-components";

const ShowArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid rgba(228, 230, 235, 0.5);
  padding: 10px;

  &:hover {
    cursor: pointer;
    background-color: #f7f8fa;
  }

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
      margin: 6px 0;
      white-space: nowrap; /* 禁止文本换行 */
      overflow: hidden; /* 隐藏超出范围的内容 */
      text-overflow: ellipsis; /* 使用省略号 */
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      color: #8a919f;
      font-size: 13px;
      .desc {
        display: flex;

        .name:hover {
          cursor: pointer;
          color: #1171ee;
        }
      }

      .labels {
        display: flex;

        span {
          background-color: #f2f3f5;
          padding: 0 4px;
          margin-right: 10px;

          &:hover {
            color: #1171ee;
          }
        }
      }
    }
  }

  .right {
    position: relative;
    width: 120px;
    margin-left: 20px;
    img {
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 4px;
      width: 120px;
      height: 76px;
      object-fit: cover; /* 保持图片的宽高比，裁剪并填充容器 */
      object-position: top; /* 图片在容器中居中显示 */
    }
  }
`;

export default ShowArticleWrapper;
