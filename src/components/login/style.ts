import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .top {
    display: flex;
    margin: 30px 30px 40px 0;

    h2 {
      margin-left: 10px;
    }
  }

  .form {
    width: 400px;
    margin-left: 20px;
  }
`;

export default LoginWrapper;
