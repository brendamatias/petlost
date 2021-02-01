import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  > div {
    display: flex;
    align-items: center;

    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    font-weight: 500;
    color: #121212;

    button {
      margin: 0 10px;
      cursor: pointer;
      border: none;
      background: none;
    }

    svg {
      opacity: 0.3;
      cursor: pointer;
    }
  }

  .select {
    color: #bb2929;
  }

  .limit {
    color: #909090;

    select {
      background-color: #fff;
      border: 1px solid #909090;
      padding: 2px 4px;
      border-radius: 3px;
      color: #121212;
      margin-left: 20px;
      font-size: 0.875rem;
    }
  }
`;
