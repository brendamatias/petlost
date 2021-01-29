import styled, { keyframes } from 'styled-components';

const loader = keyframes`
  0% {
    width: 0;
  }

  20% {
    width: 10%;
  }

  25% {
    width: 24%;
  }

  43% {
    width: 41%;
  }

  56% {
    width: 50%;
  }

  66% {
    width: 52%;
  }

  71% {
    width: 60%;
  }

  75% {
    width: 76%;
  }

  94% {
    width: 86%;
  }

  100% {
    width: 100%;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  left: 0%;

  .progress-bar {
    overflow: hidden;
    max-width: 100%;

    span {
      display: block;
    }
  }

  .bar {
    background: rgba(0, 0, 0, 0.075);
  }

  .progress {
    animation: ${loader} 2s ease infinite;
    background: #e41320;
    color: ${props => props.theme.colors.tertiary};
    padding: 5px;
    width: 0;
  }
`;
