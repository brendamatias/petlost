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

export const Chat = styled.div``;

export const Info = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d9dce4;

  strong {
    font-size: 18px;
    display: block;
    color: #464e59;
  }

  span {
    font-size: 13px;
    color: #9d9ca1;
    font-weight: bold;
  }
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserMessage = styled.div`
  display: flex;
  margin-bottom: 40px;

  div:first-child {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      font-size: 12px;
      margin-top: 4px;
    }
  }

  p {
    margin-left: 18px;
    background: #e9e8ed;
    padding: 15px 20px;
    border-radius: 25px;
    color: #464e59;
    font-weight: 600;
  }
`;

export const NewMessage = styled.div`
  background: #fff;
  padding: 15px 20px;
  border-radius: 4px;

  input {
    border: 0;
    background: none;
    padding: 10px;
  }
`;
