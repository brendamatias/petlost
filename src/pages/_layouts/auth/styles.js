import styled from 'styled-components';
import { darken } from 'polished';

import home from '~/assets/home.jpg';

export const Wrapper = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 0.6fr 1fr;
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 40px;
  }

  h3 {
    font-size: 28px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    text-align: left;

    width: 300px;

    label {
      color: #101010;
      font-weight: 600;
      font-size: 16px;
      margin: 14px 0 6px 0;
    }

    input {
      border: 0;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 2px solid #ff718b;
      padding: 6px 0;
      color: #e41320;
    }

    .password {
      letter-spacing: 4px;
    }

    span {
      font-size: 13px;
      margin: 8px 0 0 auto;
      color: #e9a0ad;
      cursor: pointer;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }

    button {
      background: #e41320;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      height: 46px;
      margin-top: 40px;

      &:hover {
        background: ${darken(0.03, '#E41320')};
      }
    }
  }

  a {
    color: #444;
    margin-top: 30px;
    font-size: 14px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  > span {
    position: absolute;
    bottom: 0;
    margin-bottom: 20px;
    font-size: 12px;
    color: #999;
  }
`;

export const Right = styled.div`
  background-image: url(${home});
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
