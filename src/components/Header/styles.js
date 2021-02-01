import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  width: 600px;

  input {
    border: none;
    background: none;
    font-size: 1rem;
    margin: 0 10px;
    color: #4d4d4d;
    width: 100%;
  }
`;
