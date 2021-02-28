import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  margin-right: 20px;

  > label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 180px;
      width: 180px;
      border-radius: 8px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }

  > div {
    position: absolute;
    top: -6px;
    right: -6px;
  }

  button {
    border: 0;
    border-radius: 50%;
    background: #e41320;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
  }
`;
