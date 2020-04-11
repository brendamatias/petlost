import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  h1 {
    color: #464e59;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
`;

export const List = styled.div`
  img {
    margin-right: 18px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9dce4;
  padding-bottom: 10px;
  margin-bottom: 20px;

  input {
    border: 0;
    background: none;
    padding: 15px;
    font-size: 16px;
    margin-left: 6px;
    color: #464e59;

    &::placeholder {
      color: #abaeb9;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: calc(100vh - 350px);
  padding: 5px 25px 5px 0;
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;

  strong {
    display: block;
    color: #454d58;
  }

  span {
    color: #8e919b;
  }
`;
