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
  position: fixed;
  top: 50%;
  left: 50%;

  .progress-bar {
    border-radius: 60px;
    overflow: hidden;
    max-width: 100%;
    width: 300px;

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
    color: #fff;
    padding: 5px;
    width: 0;
  }
`;
