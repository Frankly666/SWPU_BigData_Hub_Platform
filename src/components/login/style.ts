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
    margin: 1.875rem 1.875rem 2.5rem 0;

    h2 {
      margin-left: 0.625rem;
    }
  }

  .form {
    width: 25rem;
    margin-left: 1.25rem;
  }
`;

export default LoginWrapper;
