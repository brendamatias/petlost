import styled from 'styled-components';

export const Content = styled.div`
  &:hover {
    .options {
      display: block;
    }
  }

  margin-right: 27px;
  position: relative;

  > span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    font-weight: 700;
    color: #121212;
    cursor: pointer;
  }

  .options {
    display: none;
    position: absolute;
    left: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 15px 11px 0 rgb(0 0 0 / 10%);
    z-index: 50;
    max-height: 500px;
    overflow-y: auto;

    label {
      display: flex;
      align-items: center;
      padding: 6px 30px 6px 10px;
      font-size: 0.875rem;
      color: #4d4d4d;
      cursor: pointer;
    }

    input {
      margin-right: 15px;
      height: 13px;
      width: 13px;
      flex-shrink: 0;
      border: 1px solid #e1e1e1;
      border-radius: 4px;
      outline: none;
      transition-duration: 0.3s;
      cursor: pointer;
    }
  }
`;
