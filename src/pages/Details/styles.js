import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0 0 0 10px;
    }

    > div {
      display: flex;
      align-items: center;
    }

    svg {
      color: ${props => props.theme.colors.textPrimary};
      cursor: pointer;
    }

    .back-page {
      background: none;
      border: none;
    }
  }

  .content {
    max-width: 600px;
    margin-top: 60px;

    .awssld {
      > div {
        border-radius: 8px;
      }

      --slider-height-percentage: 45%;
      --slider-transition-duration: 623ms;
      --organic-arrow-thickness: 5px;
      --organic-arrow-border-radius: 14px;
      --organic-arrow-height: 15px;
      --organic-arrow-color: #bb2929;
      --control-button-width: 5%;
      --control-button-height: 25%;
      --control-button-background: transparent;
      --control-bullet-color: #723c3c;
      --control-bullet-active-color: #bb2929;
      --loader-bar-color: #6d2c2c;
      --loader-bar-height: 1px;

      nav button {
        border-radius: 6px;
        width: 14px;
        height: 4px;
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
  }
`;

export const Images = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
