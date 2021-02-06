import styled from 'styled-components';
import { darken } from 'polished';

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

      img {
        margin-right: 25px;
      }
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      background: ${props => props.theme.colors.primary};
      height: 44px;
      font-weight: bold;
      color: ${props => props.theme.colors.tertiary};
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#bb2929')};
      }
    }
  }
`;
