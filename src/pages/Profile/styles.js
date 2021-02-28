import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    > div {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      text-align: left;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin: 10px 0 20px;
    }
  }
`;
