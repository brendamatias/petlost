import styled from 'styled-components';

export const Container = styled.div`
  > div {
    display: flex;

    label {
      margin-right: 26px;
    }
  }

  > span {
    display: block;
    color: #101010;
    font-weight: 600;
    font-size: 16px;
    margin: 14px 0 6px 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 0 6px 0;

  input {
    margin-right: 10px;
  }
`;
