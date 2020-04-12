import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  /* margin: 50px auto; */

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    > div {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      text-align: left;

      img {
        margin-right: 25px;
      }

      strong {
        display: block;
        font-size: 24px;
        font-weight: 600;
      }

      p {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 600;
      }
    }

    label {
      color: #101010;
      font-weight: 600;
      font-size: 16px;
      margin: 14px 0 6px 0;
    }

    input {
      background: #ebecf2;
      border: 0;
      border-radius: 8px;
      font-size: 16px;
      margin-left: 6px;
      color: #464e59;
      width: 100%;
      margin: 0 0 10px;
      padding: 0 20px;
      height: 48px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      background: #bb2929;
      &:hover {
        background: ${darken(0.03, '#bb2929')};
      }
    }
  }

  button {
    height: 44px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
  }

  > button {
    display: block;
    width: 100%;
    margin: 10px 0 0;
    background: #bb2929;
    &:hover {
      background: ${darken(0.08, '#bb2929')};
    }
  }
`;
