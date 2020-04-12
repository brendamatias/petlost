import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  25% {
    transform: translateX(50%) rotateX(0deg) scale(1);
  }

  50% {
    top: 100%;
    transform: translateX(50%) rotateX(60deg) scale(1.1);
  }

  85% {
    transform: translateX(50%) rotateX(0deg) scale(1);
  }
`;

const shadow = keyframes`
  50% {
    transform: rotateX(90deg) rotateY(0.5deg) scale(0.52) translateX(50%);
    background-color: rgba(100, 100, 100, 0.5);
  }

  100% {
    transform: rotateX(90deg) rotateY(0.5deg) translateX(50%) scale(1.1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: ${props => `${props.top}%`};
  right: ${props => `${props.right}%`};

  .ball-wrapper {
    position: relative;
    height: 200px;
    width: 100%;
    perspective: 1000px;
  }

  .ball {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #e41320;
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%) rotateX(0deg) scale(1);
    z-index: 2;
    animation: ${bounce} 1s ease-in-out infinite;
  }

  .shadow {
    width: 35px;
    height: 35px;
    background-color: rgba(100, 100, 100, 0.25);
    position: absolute;
    right: 50%;
    bottom: -45px;
    border-radius: 50%;
    transform: rotateX(90deg) rotateY(0.5deg) translateX(50%) scale(1.1);
    transform-origin: right 50%;
    z-index: 1;
    animation: ${shadow} 1s ease-in-out infinite;
  }
`;
