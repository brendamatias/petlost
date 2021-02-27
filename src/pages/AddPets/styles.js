import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;

  > div {
    display: flex;
    align-items: center;

    h1 {
      margin: 0 0 0 10px;
    }

    svg {
      color: ${props => props.theme.colors.textPrimary};
      cursor: pointer;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    img {
      margin-right: 25px;
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

export const Images = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
